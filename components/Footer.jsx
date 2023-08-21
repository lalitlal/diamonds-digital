import Link from "next/link";
import React, { useContext } from "react";
import {
  borderHiraBlack,
  facebookIcon,
  hiraBlackBG,
  hiraDarkGrayText,
  hiraWhiteBG,
  hiraWhiteText,
  instaIcon,
} from "./constants";
import { CartContext } from "./context/CartContext";

const Footer = () => {
  const { setShowBookingModal, showBookingModal } = useContext(CartContext);
  const standardStyling = `block mt-2 lg:inline-block lg:mt-0  text-center hover:text-gray-500 hover:underline hover:cursor-pointer`;

  return (
    <footer
      class={`p-4 ${hiraBlackBG} ${hiraWhiteText} shadow md:px-6 md:py-8`}
    >
      <div class="sm:flex sm:items-center sm:justify-between">
        <div
          class={`justyify-center text-center text-4xl font-semibold whitespace-nowrap ${hiraWhiteText} font-Raleway`}
        >
          HIRA
        </div>
        <div className={` mt-6 ${hiraWhiteText} justify-start flex flex-col`}>
          <Link href="/" className={`${standardStyling}`}>
            Engagement
          </Link>
          <Link href="/diamond" className={`${standardStyling}`}>
            Diamonds
          </Link>
          <Link href="/ringsettings" className={`${standardStyling}`}>
            Settings
          </Link>
          <Link href="/" className={`${standardStyling}`}>
            About
          </Link>
          <Link href="/gallery" className={`${standardStyling} mb-4`}>
            Gallery
          </Link>
          <div className="border-t mt-4 text-center justify-center text-sm">
            <div className={`py-2 ${hiraDarkGrayText} mt-4`}>Schedule Meet</div>
            <div className="py-2">team@hiradiamonds.com</div>
            <div className="py-2">(647) 984-4711</div>
          </div>
          <div class="justify-center w-full">
            <button
              class={`flex w-full mt-4 justify-center py-2 text-black ${hiraWhiteBG} border ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg mb-2`}
              onClick={() => {
                setShowBookingModal(!showBookingModal);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // You can use 'auto' or 'smooth' for scrolling behavior
                });
              }}
            >
              Book Meet
            </button>
          </div>
          <div class="my-8 text-center text-sm text-white sm:text-center">
            <Link href="" class="hover:underline">
              HIRA
            </Link>
            . All Rights Reserved.
          </div>
          <div class="my-8 text-center text-sm text-white sm:text-center">
            <div className={`${hiraDarkGrayText}`}>Follow Us</div>
            <div className="flex justify-center my-2">
              <Link
                href={"https://www.instagram.com/hiradiamonds.co/"}
                className="mx-2 hover:underline hover:cursor:pointer scale-125"
                target="_blank"
                rel="noopener noreferrer"
              >
                {instaIcon}
              </Link>
              <Link
                href={"https://www.instagram.com/hiradiamonds.co/"}
                className="mx-2 hover:underline hover:cursor:pointer scale-125"
                target="_blank"
                rel="noopener noreferrer"
              >
                {facebookIcon}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
