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
      <div class="container px-5 py-16 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-4xl font-medium title-font text-gray-900 mb-4">
            Our Process
          </h1>
          <p class="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
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
            <h2 class="text-gray-900 text-2xl title-font font-medium mb-2">
              Choose Your Style
            </h2>
            <p class="leading-relaxed text-xl">
              {`Start with a HIRA inspired design, or go with your own. All rings come with lifetime warranty for manufactured defects.`}
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
            <h2 class="text-gray-900 text-2xl title-font font-medium mb-2">
              Choose Your Diamond
            </h2>
            <p class="leading-relaxed text-xl">
              {`You pick the shape, carat, clarity, cut, color.  All diamonds come with certifications (IGI, GIA).`}
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
            <h2 class="text-gray-900 text-2xl title-font font-medium mb-2">
              Full 3D Render
            </h2>
            <p class="leading-relaxed text-xl">
              {`You get to see exactly how your ring will look with your chosen diamond specs.`}
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
            <h2 class="text-gray-900 text-2xl title-font font-medium mb-2">
              Signed, Sealed, Delivered
            </h2>
            <p class="leading-relaxed text-xl">
              {`Secure shipping with 2-3 weeks. Arrival in a charming enclosure with certification and warranty.`}
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
            <button class="flex mx-auto mt-20 text-white bg-emerald-900 border-0 py-2 px-8 focus:outline-none hover:bg-emerald-600 rounded text-2xl">
              Build Your Own
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks2;
