import urlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from "react";
import { getDisplayImages } from "../sanity/sanity-utils";
import Image from "next/image";
import { client } from "../sanity/lib/client";

const SanityImages = ({ type, className = "" }) => {
  const imgUrlBuilder = urlBuilder(client);
  const [lifestyleImages, setLifestyleImages] = useState([]);

  useEffect(() => {
    const fetchHeroSanity = async () => {
      const res = await getDisplayImages(type);
      const resURLs = res.map((data, index) => {
        return imgUrlBuilder.image(data.image).url();
      });
      setLifestyleImages(resURLs); // Note that we wrap the imageSource in an array to match your setHeroImages usage
    };
    fetchHeroSanity();
    return () => {};
  }, []);
  return (
    <Image
      width={400}
      height={400}
      src={lifestyleImages[0]}
      alt={`${type} Image`}
      // w-200 h-200 md:w-400 md:h-400 object-cover object-center
      // className="w-full h-auto object-contain border"
      className={className}
      priority
    />
  );
};

export default SanityImages;
