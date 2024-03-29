import Link from "next/link";
import React, { useEffect, useState } from "react";
import { hiraBlackBG, hiraDarkBrownText, hiraWhiteBG } from "./constants";
import { event } from "../lib/gtag";
import { getDisplayImages } from "../sanity/sanity-utils";
import { client } from "../sanity/lib/client";

import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import SanityImages from "./SanityImages";

const Hero = () => {
  const imgUrlBuilder = urlBuilder(client);
  const [heroImages, setHeroImages] = useState([]);

  useEffect(() => {
    const fetchHeroSanity = async () => {
      const res = await getDisplayImages("Hero");
      const randomIndex = Math.floor(Math.random() * res.length); // Generate a random index
      const randomHeroImage = res[randomIndex]; // Get the random element from res
      const imageSource = imgUrlBuilder.image(randomHeroImage.image).url();
      setHeroImages([imageSource]); // Note that we wrap the imageSource in an array to match your setHeroImages usage
    };
    fetchHeroSanity();
    return () => {};
  }, []);

  return (
    <>
      <div className="flex mx-auto relative">
        <SanityImages
          priority={true}
          type={"Hero"}
          className=" w-screen md:w-full h-auto md:h-[60vh] lg:h-[80vh] justify-center items-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl -z-[10] object-cover"
        ></SanityImages>
        <p className="hidden font-Raleway md:flex absolute  text-white w-full text-center justify-center h-auto text-2xl lg:text-4xl mt-5  md:top-[5vh] lg:top-[10vh]">
          Engagement rings, made for one.
        </p>
        <div className="absolute top-1/2 flex flex-1 flex-wrap w-1/4">
          <div
            onClick={() => {
              event({
                action: "Hero Shop Diamond Button Click",
                category: "Hero Page",
                label: "Shop Diamond",
                value: 0,
              });
            }}
          >
            <Link
              href="/diamond"
              className={`${hiraWhiteBG} flex absolute justify-center w-48 md:w-full top-1/2 ml-10 leading-tight tracking-tight text-center border-2 border-black ${hiraDarkBrownText} px-3 py-4 hover:bg-black hover:text-white transition duration-300 ease-in-out`}
            >
              Shop Diamonds
            </Link>
          </div>
          <div
            onClick={() => {
              event({
                action: "Hero Shop Ring Button Click",
                category: "Hero Page",
                label: "Shop Ring",
                value: 0,
              });
            }}
          >
            <Link
              href="/ringsettings"
              className={`${hiraWhiteBG} flex absolute justify-center w-48 md:w-full top-1/2 mt-[65px] ml-10 leading-tight tracking-tight text-center border-2 border-black ${hiraDarkBrownText} px-3 py-4 hover:bg-black hover:text-white transition duration-300 ease-in-out`}
            >
              Shop Rings
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE CREATE YOUR RING SECTION */}
      {/* <div className="flex flex-col md:hidden">
        <div className="font-Raleway mt-4 text-center text-2xl sm:text-4xl font-bold">
          Create your engagement ring
        </div>
        <div className="font-Raleway w-screen md:w-3/4 max-w-2xl flex flex-col items-center">
          <Link href="/diamond">
            <button
              className={`w-screen my-2 leading-tight tracking-tight text-center text-2xl font-bold border -r-0 border-black p-3 ${hiraBlackBG} text-white hover:bg-black active:bg-slate-900 hover:text-white transition duration-300 ease-in-out`}
            >
              Start with a diamond
            </button>
          </Link>
          <Link href="/ringsettings">
            <button
              className={`w-screen md:w-3/4 leading-tight tracking-tight text-center text-2xl font-bold border border-black p-3 ${hiraBlackBG} text-white  hover:bg-black active:bg-slate-900 hover:text-white transition duration-300 ease-in-out`}
            >
              Start with a setting
            </button>
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
