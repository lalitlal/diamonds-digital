// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  if (req.method === "POST") {
    // Don't do anything with the req body yet
    try {
      const url = `https://worker.brilliance.com/api/v1/diamond-search`;
      const data = await fetch(url, {
        method: "POST",
        body: req.body,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.status != 200) {
        res.status(data.status).json({ message: `${data.statusText}` });
      } else {
        res
          .status(200)
          .json({ diamonds: data.data.diamond, message: "SUCCESS" });
      }
    } catch (err) {
      console.log("failure: ", err.message);
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(400).json({ message: "Not supported!" });
  }
};

export default handler;
