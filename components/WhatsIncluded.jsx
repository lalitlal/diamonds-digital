import React from "react";

const WhatsIncluded = () => {
  const featureSvg = (
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3"
      class="text-slate-500 w-6 h-6 flex-shrink-0 mr-4"
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
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-5 mx-auto">
        <div class="text-center">
          <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Shop HIRA with confidence
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            We get it, this is big decision. Your proposal is a lifetime
            commitment. Every HIRA partner enjoys the following benefits:
          </p>
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {includedFeatures.map((feat, i) => {
            return (
              <div key={i} class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  {featureSvg}
                  <span class="title-font font-medium">{feat.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
