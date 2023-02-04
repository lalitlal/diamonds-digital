import Image from "next/image";
import React from "react";
import heroBracelet from "../public/assets/hero-bracelet.jpg";

const Testimony = ({ name, purchase, review, source }) => {
  return (
    <div class="flex items-center justify-center px-5 py-5">
      <div class="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800 rounded-lg shadow-lg bg-gray-800">
        <div class="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
          <a href="#" class="relative block">
            <Image
              alt="profil"
              src={heroBracelet}
              class="mx-auto object-cover rounded-full h-40 w-40"
            />
          </a>
        </div>
        <div class="w-full mb-10">
          <div class="h-3 text-3xl leading-tight text-left text-gray-500">
            “
          </div>
          <p class="px-5 text-sm text-center text-gray-600 dark:text-gray-100">
            {review}
          </p>
          <div class="h-3 -mt-3 text-3xl leading-tight text-right text-gray-500">
            ”
          </div>
        </div>
        <div class="w-full">
          <p class="font-bold text-center text-yellow-600 text-md">{name}</p>
          <p class="text-xs text-center text-gray-500 dark:text-gray-300">
            {purchase}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
