import React from "react";
import {
  calendarIcon,
  certificateIcon,
  enclosureIcon,
  hiraDarkGrayBG,
  hiralightGrayBG,
  yearlyPolishIcon,
} from "./constants";

const WhatsIncluded = () => {
  const featureSvg = (
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      class="h-6 w-full rounded-full text-black"
      viewBox="0 0 24 24"
    >
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
      <path d="M22 4L12 14.01l-3-3"></path>
    </svg>
  );
  const includedFeatures = [
    { name: "30 Day Diamond Refund", svg: calendarIcon },
    { name: "Official Diamond Certificate", svg: certificateIcon },
    { name: "Free Annual Polish", svg: yearlyPolishIcon },
    { name: "Charming HIRA Enclosure", svg: enclosureIcon },
  ];
  return (
    <div class="text-gray-600 body-font justify-center mb-8">
      <div class="">
        {/* <div class="text-center">
          <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Shop HIRA with confidence
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            We get it, this is big decision. Your proposal is a lifetime
            commitment. Every HIRA partner enjoys the following benefits:
          </p>
        </div> */}
        <div class="flex flex-wrap lg:w-4/5 sm:mb-2 justify-center text-center mx-auto">
          {includedFeatures.map((feat, i) => {
            return (
              <div key={i} className="w-1/4">
                <div class="flex justify-center p-2">
                  <div
                    class={`flex-col flex justify-center text-black w-full text-center p-4 h-full items-center ${hiralightGrayBG}`}
                  >
                    {feat.svg}
                  </div>
                </div>
                <div class="flex justify-between md:justify-center items-center text-center mx-2 ">
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
