import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroDiamonds from "../public/assets/hero-diamonds.jpg";
import { hiraDarkBrownBG } from "./constants";

const CheckoutSuccess = () => {
  return (
    <div class="text-black body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Payment Success!
          </h1>
          <p class="mb-8 leading-relaxed">
            Congratulations, your master piece is being forged...
          </p>
          <div className="flex justify-center">
            <Image
              class="md:w-3/6 lg:w-full w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src={heroDiamonds}
            />
          </div>
          <div class="flex justify-center">
            <Link href="/">
              <button
                class={`inline-flex text-white ${hiraDarkBrownBG} border-0 py-2 px-6 focus:outline-none hover:bg-slate-700 text-lg`}
              >
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
