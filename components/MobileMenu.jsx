import React, { useContext, useState } from "react";
import Link from "next/link";
import { CartContext } from "./context/CartContext";
import {
  borderHiraBlack,
  facebookIcon,
  hiraBlackBG,
  hiraBlackText,
  hiraDarkGrayText,
  hiraWhiteText,
  instaIcon,
} from "./constants";

const MobileMenu = () => {
  const cartContext = useContext(CartContext);
  const standardStyling = `block mt-4 text-3xl lg:inline-block lg:mt-0  text-center hover:text-gray-500 hover:underline hover:cursor-pointer`;
  return (
    cartContext.showMobileMenu && (
      <div
        className="absolute bg-white z-[80] left-0 top-18 w-full h-screen"
        onClick={() => {
          cartContext.setShowMobileMenu(false);
        }}
      >
        <div className="mx-4 h-screen mt-16 justify-start flex flex-col">
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
          <div className={` mt-2 ${hiraBlackText} justify-start flex flex-col`}>
            <div className="border-t lg:border-0 mt-4 lg:mt-0 text-center justify-center text-sm">
              <div className={`py-2 lg:pb-0 ${hiraDarkGrayText} mt-4 lg:mt-0`}>
                Schedule Meet
              </div>
              <div className={`lg:flex`}>
                <div className="py-2 lg:mr-2">team@hiradiamonds.com</div>
                <div className="py-2">(647) 984-4711</div>
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
          <div className={` mt-6 ${hiraBlackText} justify-start flex flex-col`}>
            <div class="justify-center w-full hover:cursor-pointer">
              <button
                class={`flex w-full mt-4 lg:mt-0 justify-center py-2 ${hiraWhiteText} ${hiraBlackBG} border ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg mb-2`}
                onClick={() => {
                  cartContext.setShowMobileMenu(false);
                  cartContext.setShowBookingModal(
                    !cartContext.showBookingModal
                  );
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth", // You can use 'auto' or 'smooth' for scrolling behavior
                  });
                }}
              >
                Book Meet
              </button>
            </div>
            <div
              class={`my-8 lg:my-0 text-center text-sm ${hiraBlackText} sm:text-center`}
            >
              <Link href="" class="hover:underline">
                HIRA
              </Link>
              . All Rights Reserved.
            </div>
            <div
              class={`my-8 text-center text-sm ${hiraBlackText} sm:text-center lg:hidden`}
            >
              <div className={`${hiraDarkGrayText}`}>Follow Us</div>
              <div className="flex justify-center my-2">
                <Link
                  href={"https://www.instagram.com/hiradiamonds.co/"}
                  className={`mx-2 hover:underline hover:cursor:pointer scale-125 ${hiraBlackText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {instaIcon}
                </Link>
                <Link
                  href={"https://www.instagram.com/hiradiamonds.co/"}
                  className={`mx-2 hover:underline hover:cursor:pointer scale-125 ${hiraBlackText}`}
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
    )
  );
};

export default MobileMenu;
