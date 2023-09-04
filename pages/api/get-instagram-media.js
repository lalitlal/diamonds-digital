const handler = async (req, res) => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption, media_url, media_type&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`;
  try {
    const response = await fetch(url);
    const feed = await response.json();
    res.status(200).send(feed);
  } catch {
    res.status(500).send("Error fetching instagram data");
  }
};

export default handler;
