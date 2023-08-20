import React from "react";
import { hiraDarkGrayBG } from "./constants";

const WhatsIncluded = () => {
  const featureSvg = (
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      class="w-6 h-6"
      viewBox="0 0 24 24"
    >
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
      <path d="M22 4L12 14.01l-3-3"></path>
    </svg>
  );
  const includedFeatures = [
    { name: "30 day refund on diamond" },
    { name: "Official diamond certificate" },
    { name: "Complimentary annual polish" },
    { name: "Charming HIRA ring enclosure" },
  ];
  return (
    <section class="text-gray-600 body-font justify-center">
      <div class="">
        <div class="text-center">
          <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Shop HIRA with confidence
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            We get it, this is big decision. Your proposal is a lifetime
            commitment. Every HIRA partner enjoys the following benefits:
          </p>
        </div>
        <div class="flex lg:w-4/5 sm:mb-2 justify-between text-center items-center">
          {includedFeatures.map((feat, i) => {
            return (
              <div key={i} className="">
                <div class="flex">
                  <div class="">
                    <div className={`flex justify-center`}>{featureSvg}</div>
                  </div>
                </div>
                {/* <div class="flex">
                  <div class="">
                    <div class="flex justify-center">{feat.name}</div>
                  </div>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
