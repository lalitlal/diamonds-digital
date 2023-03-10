import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import heroBandsWater from "../public/assets/hero-bands-water.jpg";
import heroBands from "../public/assets/hero-bands.jpg";
import heroBracelet from "../public/assets/hero-bracelet.jpg";
import heroDiamonds from "../public/assets/hero-diamonds.jpg";

const Hero = () => {
  const generateRandomInteger = (max) => {
    return Math.floor(Math.random() * max);
  };
  const image_urls = {
    0: heroBandsWater,
    1: heroBands,
    2: heroBracelet,
    3: heroDiamonds,
  };

  const imageSelector = generateRandomInteger(Object.keys(image_urls).length);
  return (
    <>
      <div className="flex mx-auto relative">
        <Image
          src={image_urls[1]}
          className=" w-screen pt-3 md:w-full h-auto md:h-[60vh] lg:h-[100vh] justify-center items-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl -z-[10] md:px-5 object-cover"
          alt=""
        />
        <p className="hidden font-Raleway md:flex absolute  text-gray-500 w-full text-center justify-center h-auto text-2xl lg:text-4xl mt-5  md:top-[5vh] lg:top-[10vh]">
          Engagement rings, made for one.
        </p>
        <div className="absolute top-1/2 flex flex-1 flex-wrap w-1/4">
          <Link
            href="/diamond"
            className="hidden md:flex absolute justify-center w-full top-1/2 ml-10 leading-tight tracking-tight text-center border-2 border-gray-500 text-gray-500 p-3 hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out"
          >
            Start with a diamond
          </Link>
          <Link
            href="/"
            className="hidden md:flex absolute justify-center w-full top-1/2 mt-20 ml-10 leading-tight tracking-tight text-center border-2 border-gray-500 text-gray-500 p-3 hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out"
          >
            Start with a setting
          </Link>
        </div>
      </div>

      {/* MOBILE CREATE YOUR RING SECTION */}
      <div className="flex flex-col md:hidden">
        <div className="font-Raleway mt-4 text-center text-2xl sm:text-4xl font-bold">
          Create your engagement ring
        </div>
        <div className="w-full max-w-2xl flex flex-col items-center">
          <button className="w-3/4 my-4 leading-tight tracking-tight text-center text-2xl font-medium border-2 border-slate-800 text-slate-800 p-3 hover:bg-slate-800 active:bg-slate-900 hover:text-white transition duration-300 ease-in-out">
            Start with a diamond
          </button>
          <button className="w-3/4 my-4 leading-tight tracking-tight text-center text-2xl font-medium border-2 border-slate-800 text-slate-800 p-3 hover:bg-slate-800 active:bg-slate-900 hover:text-white transition duration-300 ease-in-out">
            Start with a setting
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
