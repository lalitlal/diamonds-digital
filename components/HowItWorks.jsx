import React from "react";
import {
  borderHiraBlack,
  hiraBlackBG,
  hiraDarkBrownBG,
  hiraDarkBrownText,
  hiraLightBrownBG,
} from "./constants";
import Link from "next/link";
import SanityImages from "./SanityImages";

const HowItWorks = () => {
  const vDiv = (
    <div class="flex">
      <div class="flex w-full justify-center items-center text-center">
        <div class="w-0.5 my-4 justify-center items-center text-center h-[100px] md:h-[200px] min-h-[1em] self-stretch bg-black opacity-100"></div>
      </div>
    </div>
  );

  const testIcon = (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class=""
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354l-1.5 1.5ZM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A23.825 23.825 0 0 1 5.8 12.323L8.31 9.81a1.5 1.5 0 0 0-2.122-2.122L3.657 10.22a8.827 8.827 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3Z"
        />
      </svg>
    </div>
  );
  return (
    <div class={`w-full h-full pb-6`}>
      <div className="px-3 sm:px-0 mb-12 lg:mb-0 text-center">
        <h2
          className={`${hiraDarkBrownText} my-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]`}
        >
          How It works
        </h2>
        <p className={`${hiraDarkBrownText} mb-9 text-base leading-relaxed`}>
          {`Want to build you perfect engagement ring? 
                Contact us for a free consult or quote today!`}
        </p>
      </div>
      {/* Stage 1 */}
      <div className="md:relative md:flex flex-col">
        <div className="md:absolute top-0 w-full md:w-1/3">
          <SanityImages
            type={"Lifestyle"}
            className="my-2 mx-auto md:pt-3 rounded-full w-[40vh] h-[40vh] justify-center items-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl -z-[10] md:px-5 object-cover"
            imgIndex={0}
          ></SanityImages>
        </div>
        <div className="flex-grow">
          <div className="justify-center text-center text-2xl">
            <div className="flex justify-center pt-3">
              <div
                className={`flex ${hiraLightBrownBG} w-8 h-8 ${hiraDarkBrownText} text-center rounded-full text-lg justify-center items-center mr-2`}
              >
                1
              </div>
              <div>Choose Your Style</div>
            </div>
          </div>
          <div className="justify-center text-justify md:text-center text-lg px-12 md:mx-auto md:w-[400px]">
            <div className="py-4">
              {`At this stage, you've already won by exploring HIRA as an option. 
            Here all you need to do is decide if you want to try one of our beautiful, inspired designs, or submit a custom design. 
            Our custom design has a slightly different flow to make sure we can make your dream a reality. `}
            </div>
            <div className="flex flex-col items-center text-center md:flex-row md:justify-center md:text-center my-4">
              <Link
                href="/custom"
                className={`w-full md:w-[400px] justify-center py-2 px-8 text-white bg-emerald-900 border ${borderHiraBlack} md:text-lg mb-2 md:mb-0`}
              >
                Custom Ring Form
              </Link>
            </div>
            <div className="flex flex-col items-center text-center md:flex-row md:justify-center md:text-center my-4">
              <Link
                href="/ringsettings"
                className={`w-full md:w-[400px] justify-center py-2 px-8 text-white bg-emerald-900 border ${borderHiraBlack} md:text-lg mb-2 md:mb-0`}
              >
                Choose Ring Style
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-grow">{vDiv}</div>{" "}
        {/* Apply flex-grow to take up the whole width */}
      </div>
      {/* Stage 2 */}
      <div className="md:relative md:flex flex-col">
        <div className="md:hidden top-0 right-0 w-full md:w-1/3">
          <SanityImages
            type={"Lifestyle"}
            className="my-2 mx-auto md:pt-3 rounded-full w-[40vh] h-[40vh] justify-center items-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl -z-[10] md:px-5 object-cover"
            imgIndex={0}
          ></SanityImages>
        </div>
        <div className="flex-grow">
          <div className="justify-center text-center text-2xl">
            <div className="flex justify-center pt-3">
              <div
                className={`flex ${hiraLightBrownBG} w-8 h-8 bg-emerald-900 text-white text-center rounded-full text-lg justify-center items-center mr-2`}
              >
                2
              </div>
              <div>Choose Your Diamond</div>
            </div>
          </div>
          <div className="justify-center text-justify md:text-center text-lg px-12 md:mx-auto md:w-[400px]">
            <div className="py-4">
              {`At HIRA, our clients get as much control as they want. Here, you can filter and choose the exact diamond that will go on your ring. 
            If you need help, all you need to do is call our expert help line or tap the live chat icon on the bottom right and one of our gemologists can help you pick the perfect diamond! `}
            </div>
            <div className="flex flex-col items-center text-center md:flex-row md:justify-center md:text-center my-4">
              <Link
                href="/diamond"
                className={`w-full md:w-[400px] justify-center py-2 px-8 text-white ${hiraDarkBrownBG} border ${borderHiraBlack} md:text-lg mb-2 md:mb-0`}
              >
                Choose Diamond
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:absolute right-0 w-full md:w-1/3">
          <SanityImages
            type={"Lifestyle"}
            className="my-2 mx-auto md:pt-3 rounded-full w-[40vh] h-[40vh] justify-center items-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl -z-[10] md:px-5 object-cover"
            imgIndex={1}
          ></SanityImages>
        </div>
        <div className="flex-grow">{vDiv}</div>{" "}
        {/* Apply flex-grow to take up the whole width */}
      </div>

      {/* Stage 3 */}
      <div className="md:flex flex-col">
        <div className="md:flex md:absolute left-0 w-full md:w-1/3">
          <SanityImages
            type={"Lifestyle"}
            className="my-2 mx-auto md:pt-3 rounded-full w-[40vh] h-[40vh] justify-center items-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl -z-[10] md:px-5 object-cover"
            imgIndex={1}
          ></SanityImages>
        </div>
        <div className="flex-grow">
          <div className="justify-center text-center text-2xl">
            <div className="flex justify-center pt-3">
              <div
                className={`flex ${hiraLightBrownBG} w-8 h-8 ${hiraDarkBrownText} text-center rounded-full text-lg justify-center items-center mr-2`}
              >
                3
              </div>
              <div>Full 3D Render</div>
            </div>
          </div>
          <div className="justify-center text-justify md:text-center text-lg px-12 md:mx-auto md:w-[400px]">
            <div className="py-4">
              {`Our design team creates realistic 3D renderings that show exactly how the ring will look. 
              We tweak and tune until we hear you say, “It looks perfect!”`}
            </div>
            <div className="flex flex-col items-center text-center md:flex-row md:justify-center md:text-center my-4">
              <Link
                href="/contact"
                className={`w-full md:w-[400px] justify-center py-2 px-8 text-white bg-emerald-900 border ${borderHiraBlack} md:text-lg mb-2 md:mb-0`}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-grow">{vDiv}</div>{" "}
        {/* Apply flex-grow to take up the whole width */}
      </div>
      {/* Stage 4 */}
      <div className="md:flex flex-col">
        <div className="md:hidden top-0 right-0 w-full md:w-1/3">
          <SanityImages
            type={"Lifestyle"}
            className="my-2 mx-auto md:pt-3 rounded-full w-[40vh] h-[40vh] justify-center items-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl -z-[10] md:px-5 object-cover"
            imgIndex={0}
          ></SanityImages>
        </div>
        <div className="flex-grow">
          <div className="justify-center text-center text-2xl">
            <div className="flex justify-center pt-3">
              <div
                className={`flex ${hiraLightBrownBG} w-8 h-8 bg-emerald-900 text-white text-center rounded-full text-lg justify-center items-center mr-2`}
              >
                4
              </div>
              <div>Signed, Sealed, Delivered</div>
            </div>
          </div>
          <div className="justify-center text-justify md:text-center text-lg px-12 md:mx-auto md:w-[400px]">
            <div className="py-4">
              {`You receive your HIRA ring via secure, insured shipping within 2-3 weeks.
              Your ring also comes with a certified diamond certificate, a ring appraisal, and a charming HIRA enclosure to pop the question. 
              Every HIRA customer enjoys our Lifetime Warranty from the date of invoice for any manufactured defects (don't worry, your ring is hand made and hand inspected by us!) `}
            </div>
            <div className="flex flex-col items-center text-center md:flex-row md:justify-center md:text-center my-4">
              <Link
                href="/contact"
                className={`w-full md:w-[400px] justify-center py-2 px-8 text-white ${hiraDarkBrownBG} border ${borderHiraBlack} md:text-lg mb-2 md:mb-0`}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:absolute right-0 w-full md:w-1/3">
          <SanityImages
            type={"Lifestyle"}
            className="my-2 mx-auto md:pt-3 rounded-full w-[40vh] h-[40vh] justify-center items-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl -z-[10] md:px-5 object-cover"
            imgIndex={1}
          ></SanityImages>
        </div>
        {/* Apply flex-grow to take up the whole width */}
      </div>
    </div>
  );
};

export default HowItWorks;
