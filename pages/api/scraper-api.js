// To install axios run "npm i axios"
const axios = require("axios");
const puppeteer = require("puppeteer");
import { parse } from "node-html-parser";

// THIS IS A PUPPETEER VERSION, ITS SPICY AND QUICK
// const handler = async (req, res) => {
//   const marginMultiplier = 1.25;

//   const response = await fetch(
//     "https://scrape-lg-diamond-mc625gpgqa-uc.a.run.app",
//     {
//       method: "POST",
//       body: req.body, //this is already stringified
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const data = await response.json();
//   data.diamonds = data.diamonds.map((dmd, i) => {
//     if (typeof dmd.price === "string") {
//       dmd.price = dmd.price.trim().replaceAll(",", "");
//     }
//     dmd.price = Math.round(parseInt(dmd.price) * marginMultiplier);
//     return dmd;
//   });
//   res.json(data);
// };

// https://github.com/Nivoda/nivoda-api/blob/main/examples/search/nodejs-search.js
const handler = async (req, res) => {
  // console.log("IN GRAPH API");
  // console.log(req.body);
  const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_API_NIV;
  // the API_URL for production is https://integrations.nivoda.net/api/diamonds';

  // Great documentation can be found here:
  // https://graphql.org/graphql-js/graphql-clients/

  // authentication query
  // for production, the username and password are the same as what you would use to login to the Nivoda platform
  // for staging, the username and password can be requested from tech @ nivoda dot net
  const authenticate_query = `{
    authenticate {
      username_and_password(username: "${process.env.NEXT_PUBLIC_NIV_USER}", password: "${process.env.NEXT_PUBLIC_NIV_PASS}") {
        token
      }
    }
  }
  `;

  const authenticate_result = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: authenticate_query }),
  });
  const auth_res = await authenticate_result.json();

  // the authentication token to get in future requests
  // console.log(auth_res);
  const { token } = auth_res.data.authenticate.username_and_password;
  const params = JSON.parse(req.body);
  // console.log(params);
  const wrapWithQuotes = (arr) => arr.map((item) => `"${item}"`).join(", ");

  const shapesString = wrapWithQuotes(params.shapeListSanity);
  const colorListString = params.colorList;
  const clarityListString = params.clarityList;
  const cutListString = params.cutList;

  // example diamond query
  // note that this does not include all available fields, to see more fields please refer to the documentation
  const diamond_query = `
  query {
    diamonds_by_query(
      query: {
        labgrown: true,
        has_certpdf: true,
        hide_memo: true,
        returns: true,
        shapes: [${shapesString}],
        sizes: [{ from: ${params.caratMin}, to: ${params.caratMax}}],
        has_v360: true,
        has_image: true,
        color: [${colorListString}],
        dollar_value: {from: ${params.priceMin}, to: ${params.priceMax}}
        cut: [${cutListString}]
        clarity: [${clarityListString}]
      },
      offset: 0,
      limit: 50,
      order: ${
        params.order
          ? `{type: ${params.order.type}, direction: ${params.order.direction}}`
          : "{ type: price, direction: ASC }"
      }
    ) {
      items {
        id
        diamond {
          id
          video
          image
          availability
          supplierStockId
          brown
          green
          milky
          eyeClean
          mine_of_origin
          certificate {
            id
            lab
            shape
            certNumber
            cut
            carats
            clarity
            polish
            symmetry
            color
            width
            length
            depth
            girdle
            floInt
            floCol
            depthPercentage
            table
          }
        }
        price
        discount
      }
      total_count
    }
  }
`;
  // console.log("QUERY");
  // console.log(diamond_query);
  const result = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query: diamond_query }),
  });

  const diamond_res = await result.json();
  const { items, total_count } = diamond_res.data.diamonds_by_query;

  res.json({ data: items, total_count: total_count });
  // example to access a diamond is mapping over the items
  // i.e. items[0].diamond.certificate.certNumber will give you the certificate number of the first item
};

export default handler;

// IMPORTANT DO NOT DELETE!!!
// query {
//   diamonds_by_query(
//     query: {
//       labgrown: true,
//       shapes: ${params.shapeListSanity},
//       sizes: [{ from: ${params.caratMin}, to: ${params.caratMax}}],
//       has_v360: true,
//       has_image: true,
//       color: ${params.colorList}
//     },
//     offset: 0,
//     limit: 50,
//     order: { type: price, direction: ASC }
//   ) {
//     items {
//       id
//       diamond {
//         id
//         video
//         image
//         availability
//         supplierStockId
//         brown
//         green
//         milky
//         eyeClean
//         mine_of_origin
//         certificate {
//           id
//           lab
//           shape
//           certNumber
//           cut
//           carats
//           clarity
//           polish
//           symmetry
//           color
//           width
//           length
//           depth
//           girdle
//           floInt
//           floCol
//           depthPercentage
//           table
//         }
//       }
//       price
//       discount
//     }
//     total_count
//   }
// }

//
// {
//   id: 'DIAMOND/d587ab13-cd21-47bb-964c-db3d4132259e',
//   diamond: {
//     id: 'd587ab13-cd21-47bb-964c-db3d4132259e',
//     video: null,
//     image: null,
//     availability: 'AVAILABLE',
//     supplierStockId: '40145485',
//     brown: 'No',
//     green: 'No',
//     milky: 'No',
//     eyeClean: null,
//     mine_of_origin: null,
//     certificate: {
//       id: 'bb58d3c4-0e80-55fd-9faa-0c028cda5ff6',
//       lab: 'GCAL',
//       shape: 'OVAL',
//       certNumber: '322650682',
//       cut: 'EX',
//       carats: 1.01,
//       clarity: 'VS2',
//       polish: 'EX',
//       symmetry: 'EX',
//       color: 'L',
//       width: '5.73',
//       length: '7.96',
//       depth: '3.57',
//       girdle: 'STK to THK',
//       floInt: 'NON',
//       floCol: null,
//       depthPercentage: '62.3',
//       table: '58'
//     }
//   },
//   price: 15644,
//   discount: -9260
// }
