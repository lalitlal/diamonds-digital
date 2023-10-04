import React from "react";
import {
  diamondIcon,
  diamondIconLarger,
  fireIcon,
  hiraDarkBrownBG,
  hiraLightBrownBG,
  lightbulbIcon,
  sparkleIcon,
} from "./constants";

const CustomInquirySteps = () => {
  return (
    <div class={`text-gray-600 body-font py-12`}>
      <div className="text-4xl text-center text-emerald-900">{`What's Next`}</div>
      <div class="container px-5 py-8 mx-auto flex flex-wrap">
        <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div
            class={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center ${hiraDarkBrownBG} text-white relative title-font font-medium text-sm`}
          >
            1
          </div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div
              class={`flex-shrink-0 w-24 h-24 bg-emerald-900 text-white rounded-full inline-flex items-center justify-center`}
            >
              {lightbulbIcon}
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <div className="flex">
                <h1 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  {`Inspire `}
                </h1>
              </div>
              <p class="leading-relaxed">
                {`Tell us exactly what you're looking for, and we will send you a firm quote within an hour.`}
              </p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div
            class={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center ${hiraDarkBrownBG} text-white relative title-font font-medium text-sm`}
          >
            2
          </div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div
              class={`flex-shrink-0 w-24 h-24 bg-emerald-900 text-white rounded-full inline-flex items-center justify-center`}
            >
              {diamondIconLarger}
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                Customize
              </h2>
              <p class="leading-relaxed">
                {`Our expert gemologists will hand-select options for your perfect gemstones, giving you complete control.`}
              </p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div
            class={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center ${hiraDarkBrownBG} text-white relative title-font font-medium text-sm`}
          >
            3
          </div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div
              class={`flex-shrink-0 w-24 h-24 bg-emerald-900 text-white rounded-full inline-flex items-center justify-center`}
            >
              {sparkleIcon}
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                Design
              </h2>
              <p class="leading-relaxed">
                {`Our team will design and render your masterpiece for you where you can refine and perfect until you're 100% satisfied. `}
              </p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div
            class={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center ${hiraDarkBrownBG} text-white relative title-font font-medium text-sm`}
          >
            4
          </div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div
              class={`flex-shrink-0 w-24 h-24 bg-emerald-900 text-white rounded-full inline-flex items-center justify-center`}
            >
              {fireIcon}
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                Forge
              </h2>
              <p class="leading-relaxed">
                {`We forge your custom ring and securely deliver it to your hands.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomInquirySteps;
