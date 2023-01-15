// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // Don't do anything with the req body yet

    try {
      const data = await axios.post(
        `https://worker.brilliance.com/api/v1/diamond-search`,
        req.body
      );
      res.status(200).json({ diamonds: data.data.diamond, message: "SUCCESS" });
    } catch (err) {
      console.log(err.message);
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(400).json({ message: "Not supported!" });
  }
};

export default handler;
