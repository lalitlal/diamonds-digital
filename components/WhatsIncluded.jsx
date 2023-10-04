import React from "react";
import {
  hiraDarkBrownBG,
  hiraDarkBrownText,
  hiralightGrayBG,
  includedFeatures,
} from "./constants";

const WhatsIncluded = () => {
  return (
    <div
      class={`text-gray-600 body-font justify-center mb-8 ${hiraDarkBrownText} `}
    >
      <div class="">
        <div class="flex flex-wrap sm:mb-2 justify-center text-center mx-auto">
          {includedFeatures.map((feat, i) => {
            return (
              <div key={i} className={`w-1/3 mb-2`}>
                <div class={`flex justify-center`}>
                  <div
                    class={`flex-col flex justify-center text-black w-full text-center p-4 h-full items-center`}
                  >
                    {feat.svg}
                  </div>
                </div>
                <div class="flex justify-center items-center text-center mx-1 ">
                  {feat.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatsIncluded;
