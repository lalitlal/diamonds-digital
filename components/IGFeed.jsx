import React, { useEffect, useState } from "react";
import GridMedia from "./GridMedia";

const IGFeed = () => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    const fetchInsta = async () => {
      const res = await fetch(`/api/get-instagram-media`);
      const res_json = await res.json();
      setFeed(res_json);
      console.log("FEED!!", feed);
    };
    fetchInsta();
    return () => {};
  }, []);

  return <GridMedia feedData={feed}></GridMedia>;
};

export default IGFeed;
