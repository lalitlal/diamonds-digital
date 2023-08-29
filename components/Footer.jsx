import Link from "next/link";
import React, { useContext } from "react";
import {
  borderHiraBlack,
  callNumber,
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
  const standardStyling = `text-center lg:text-left hover:underline hover:cursor-pointer`;

  return (
    <div
      class={`p-4 ${hiraBlackBG} ${hiraWhiteText} md:px-6 md:py-0 lg:left-0 lg:bottom-0 lg:w-full z-50 lg:pb-8`}
    >
      <div class="items-center lg:items-start justify-between lg:justify-around lg:flex">
        <div
          class={`lg:mt-6 justyify-center text-center lg:text-left text-4xl font-semibold whitespace-nowrap ${hiraWhiteText} font-Raleway`}
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
          <Link href="/gallery" className={`${standardStyling}`}>
            Gallery
          </Link>
        </div>
        <div className={` mt-2 ${hiraWhiteText} justify-start flex flex-col`}>
          <div className="border-t lg:border-0 mt-4 lg:mt-0 text-center justify-center text-sm">
            <div className={`py-2 lg:pb-0 ${hiraDarkGrayText} mt-4 lg:mt-0`}>
              Schedule Meet
            </div>
            <div className={`lg:flex`}>
              <div className="py-2 lg:mr-2">team@hiradiamonds.com</div>
              <div className="py-2">{callNumber}</div>
            </div>
            <div class="text-center text-sm text-white sm:text-center hidden lg:block">
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
        <div className={` mt-6 ${hiraWhiteText} justify-start flex flex-col`}>
          <div class="justify-center w-full hover:cursor-pointer">
            <button
              class={`flex w-full mt-4 lg:mt-0 justify-center py-2 text-black ${hiraWhiteBG} border ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg mb-2`}
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
          <div class="my-8 lg:my-0 text-center text-sm text-white sm:text-center">
            <Link href="" class="hover:underline">
              HIRA
            </Link>
            . All Rights Reserved.
          </div>
          <div class="my-8 text-center text-sm text-white sm:text-center lg:hidden">
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
    </div>
  );
};

export default Footer;
