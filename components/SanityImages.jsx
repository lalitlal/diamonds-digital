import urlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from "react";
import { getDisplayImages } from "../sanity/sanity-utils";
import Image from "next/image";
import { client } from "../sanity/lib/client";

const SanityImages = ({ type, className = "" }) => {
  const imgUrlBuilder = urlBuilder(client);
  const [lifestyleImages, setLifestyleImages] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const fetchHeroSanity = async () => {
      const res = await getDisplayImages(type);
      const resURLs = res.map((data, index) => {
        return imgUrlBuilder.image(data.image).url();
      });
      setLifestyleImages(resURLs); // Note that we wrap the imageSource in an array to match your setHeroImages usage
      setRandomIndex(Math.floor(Math.random() * resURLs.length)); // Set a random index
    };
    fetchHeroSanity();
    return () => {};
  }, []);
  return (
    <Image
      width={400}
      height={400}
      src={lifestyleImages[randomIndex]}
      alt={`${type} Image`}
      // w-200 h-200 md:w-400 md:h-400 object-cover object-center
      // className="w-full h-auto object-contain border"
      className={className}
      priority
    />
  );
};

export default SanityImages;
