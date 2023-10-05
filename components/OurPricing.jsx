import React from "react";
import { hiraDarkBrownText, hiraLightBrownBG, infinityIcon } from "./constants";
import Link from "next/link";

const OurPricing = () => {
  return (
    <section class="body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-10">
          <h1
            class={`sm:text-4xl text-3xl font-medium title-font mb-2 ${hiraDarkBrownText}`}
          >
            Pricing
          </h1>
          {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Banh mi cornhole echo park skateboard authentic crucifix neutra
            tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
            twee
          </p> */}
        </div>
        <div class="lg:w-2/3 w-full mx-auto overflow-auto">
          <table class="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th
                  class={`${hiraLightBrownBG} px-4 py-3 title-font tracking-wider font-medium  text-sm  rounded-tl rounded-bl`}
                >
                  Phase
                </th>
                <th
                  class={`${hiraLightBrownBG} px-4 py-3 title-font tracking-wider font-medium  text-sm `}
                >
                  Timeline
                </th>
                <th
                  class={`${hiraLightBrownBG} px-4 py-3 title-font tracking-wider font-medium  text-sm `}
                >
                  Revisions
                </th>
                <th
                  class={`${hiraLightBrownBG} px-4 py-3 title-font tracking-wider font-medium  text-sm `}
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-3">Consult</td>
                <td class="px-4 py-3">1-2 Weeks</td>
                <td class="px-4 py-3">{infinityIcon}</td>
                <td class="px-4 py-3 ">Free</td>
              </tr>
              <tr>
                <td class="border-t-2 border-gray-200 px-4 py-3">Design</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">1-2 Days</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">
                  {infinityIcon}
                </td>
                <td class="border-t-2 border-gray-200 px-4 py-3 ">Free</td>
              </tr>
              <tr>
                <td class="border-t-2 border-gray-200 px-4 py-3">
                  Diamond Selection
                </td>
                <td class="border-t-2 border-gray-200 px-4 py-3">1 Day</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">
                  {infinityIcon}
                </td>
                <td class="border-t-2 border-gray-200 px-4 py-3 ">50%</td>
              </tr>
              <tr>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  Delivery
                </td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  2 Weeks
                </td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  1
                </td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 ">
                  100%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <Link
            href="/custom"
            class="flex mx-auto  text-white bg-emerald-900 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurPricing;
