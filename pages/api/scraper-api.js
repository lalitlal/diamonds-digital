// To install axios run "npm i axios"
const axios = require("axios");
const puppeteer = require("puppeteer");
import { parse } from "node-html-parser";

// THIS IS A PUPPETEER VERSION, ITS SPICY AND QUICK
const handler = async (req, res) => {
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
  res.json(data);
};

export default handler;

// if (req.method === "POST") {
//   try {
//     // https://scrapingant.com/blog/puppeteer-post-put-delete-request
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     // Wait for 5 seconds to let everything load
//     new Promise((r) => setTimeout(r, 5000));

//     await page.setRequestInterception(true);
//     console.log(req.body);
//     page.once("request", (request) => {
//       request.continue({
//         method: "POST",
//         postData: req.body,
//         // headers: { "Content-Type": "application/json" },
//       });
//     });
//     await page.goto(
//       "https://worker.brilliance.com/api/v1/lab-grown-diamond-search"
//     );
//     const data = await page.content();
//     await page.close();
//     await browser.close();

//     if (data) {
//       const root = await parse(data);
//       const json_data = JSON.parse(root.querySelector("pre").rawText);
//       res
//         .status(200)
//         .json({ diamonds: json_data.diamond, message: "SUCCESS" });
//     } else {
//       res.status(400).end();
//     }
//   } catch (err) {
//     res.status(500).end();
//   }
// } else {
//   res.status(400).end();
// }
