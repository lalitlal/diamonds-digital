// To install axios run "npm i axios"
const axios = require("axios");
const puppeteer = require("puppeteer");
import { parse } from "node-html-parser";

// THIS IS A PUPPETEER VERSION, ITS SPICY AND QUICK
const handler = async (req, res) => {
  const marginMultiplier = 1.25;

  const response = await fetch(
    "https://scrape-lg-diamond-mc625gpgqa-uc.a.run.app",
    {
      method: "POST",
      body: req.body, //this is already stringified
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  data.diamonds = data.diamonds.map((dmd, i) => {
    if (typeof dmd.price === "string") {
      dmd.price = dmd.price.trim().replaceAll(",", "");
    }
    dmd.price = Math.round(parseInt(dmd.price) * marginMultiplier);
    return dmd;
  });
  res.json(data);
};

// const handler = async (req, res) => {
//   const API_URL = "https://integrations.nivoda.net/api/diamonds";
//   // the API_URL for production is https://integrations.nivoda.net/api/diamonds';

//   // Great documentation can be found here:
//   // https://graphql.org/graphql-js/graphql-clients/

//   // authentication query
//   // for production, the username and password are the same as what you would use to login to the Nivoda platform
//   // for staging, the username and password can be requested from tech @ nivoda dot net
//   const authenticate_query = `{
//     authenticate {
//       username_and_password(username: "team@honestdev.app", password: "Ll123456!") {
//         token
//       }
//     }
//   }
//   `;

//   const authenticate_result = await fetch(API_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ query: authenticate_query }),
//   });
//   const auth_res = await authenticate_result.json();

//   // the authentication token to get in future requests
//   console.log(auth_res);
//   const { token } = auth_res.data.authenticate.username_and_password;

//   // example diamond query
//   // note that this does not include all available fields, to see more fields please refer to the documentation
//   const diamond_query = `
//   query {
//     diamonds_by_query(
//       query: {
//         labgrown: false,
//         shapes: ["ROUND"],
//         sizes: [{ from: 1, to: 1.5}],
//         has_v360: true,
//         has_image: true,
//         color: [D,E]
//       },
//       offset: 0,
//       limit: 50,
//       order: { type: price, direction: ASC }
//     ) {
//       items {
//         id
//         diamond {
//           id
//           video
//           image
//           availability
//           supplierStockId
//           brown
//           green
//           milky
//           eyeClean
//           mine_of_origin
//           certificate {
//             id
//             lab
//             shape
//             certNumber
//             cut
//             carats
//             clarity
//             polish
//             symmetry
//             color
//             width
//             length
//             depth
//             girdle
//             floInt
//             floCol
//             depthPercentage
//             table
//           }
//         }
//         price
//         discount
//       }
//       total_count
//     }
//   }
// `;

//   const result = await fetch(API_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ query: diamond_query }),
//   });

//   const diamond_res = await result.json();
//   console.log(diamond_res);
//   const { items, total_count } = diamond_res.data.diamonds_by_query;

//   console.log({ items, total_count });

//   // example to access a diamond is mapping over the items
//   // i.e. items[0].diamond.certificate.certNumber will give you the certificate number of the first item
// };

export default handler;
