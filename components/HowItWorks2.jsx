import Link from "next/link";
import React from "react";
import {
  diamondIconLarger,
  fireIcon,
  lightbulbIcon,
  sparkleIcon,
} from "./constants";

const HowItWorks2 = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Our Process
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Your Pace, Your Budget, Your Ring.
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-emerald-900 inline-flex"></div>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-emerald-900 text-white flex-shrink-0">
            {lightbulbIcon}
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              Choose Your Style
            </h2>
            <p class="leading-relaxed text-base">
              {`At this stage, you've already won by exploring HIRA as an option. 
            Here all you need to do is decide if you want to try one of our beautiful, inspired designs, or submit a custom design. 
            Our custom design has a slightly different flow to make sure we can make your dream a reality. `}
            </p>
            <Link href="/custom" class="mt-10 inline-flex items-center mr-4">
              Custom Ring Form
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link href="/ringsettings" class="mt-3 inline-flex items-center">
              Shop Rings
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              Choose Your Diamond
            </h2>
            <p class="leading-relaxed text-base">
              {`At HIRA, our clients get as much control as they want. Here, you can filter and choose the exact diamond that will go on your ring. 
            If you need help, all you need to do is call our expert help line or tap the live chat icon on the bottom right and one of our gemologists can help you pick the perfect diamond! `}
            </p>
            <Link href="/diamond" class="mt-10 inline-flex items-center">
              Shop Diamonds
              {
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              }
            </Link>
          </div>
          <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-emerald-900 text-white flex-shrink-0">
            {diamondIconLarger}
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-emerald-900 text-white flex-shrink-0">
            {sparkleIcon}
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              Full 3D Render
            </h2>
            <p class="leading-relaxed text-base">
              {`Our design team creates realistic 3D renderings that show exactly how the ring will look. 
              We tweak and tune until we hear you say, “It looks perfect!”`}
            </p>
            <Link href="/contact" class="mt-10 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              Signed, Sealed, Delivered
            </h2>
            <p class="leading-relaxed text-base">
              {`You receive your HIRA ring via secure, insured shipping within 2-3 weeks.
              Your ring also comes with a certified diamond certificate, a ring appraisal, and a charming HIRA enclosure to pop the question. 
              Every HIRA customer enjoys our Lifetime Warranty from the date of invoice for any manufactured defects (don't worry, your ring is hand made and hand inspected by us!) `}
            </p>
            <Link href="/contact" class="mt-10 inline-flex items-center">
              Get Started
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-emerald-900 text-white flex-shrink-0">
            {fireIcon}
          </div>
        </div>
        <div className="w-fit mx-auto">
          <Link href="/custom">
            <button class="flex mx-auto mt-20 text-white bg-emerald-900 border-0 py-2 px-8 focus:outline-none hover:bg-emerald-600 rounded text-lg">
              Build Your Own
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks2;
