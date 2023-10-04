import React from "react";
import IGFeed from "./IGFeed";
import { hiraDarkBrownText } from "./constants";

const Gallery = () => {
  return (
    <div>
      <div class="text-gray-600 body-font">
        <div class="container my-4 flex flex-wrap">
          <div class="flex w-full mb-4 flex-wrap">
            <h1
              class={` text-emerald-900 sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-4`}
            >
              Custom rings made by HIRA
            </h1>
            <p
              class={`lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base ${hiraDarkBrownText}`}
            >
              Take a look at what our happy customers walked away with
            </p>
          </div>
          <IGFeed></IGFeed>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
