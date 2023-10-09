import React, { useContext, useState } from "react";
import Link from "next/link";
import { CartContext } from "./context/CartContext";
import {
  borderHiraBlack,
  callNumber,
  caretIcon,
  facebookIcon,
  hiraBlackBG,
  hiraBlackText,
  hiraDarkBrownBG,
  hiraDarkGrayText,
  hiraWhiteBG,
  hiraWhiteText,
  instaIcon,
} from "./constants";

const MobileMenu = () => {
  const cartContext = useContext(CartContext);
  const [showShopDropDown, setShowShopDropDown] = useState(false);
  const [showAboutDropDown, setShowAboutDropDown] = useState(false);
  const standardStyling = `block mt-4 text-3xl lg:inline-block lg:mt-0  text-left hover:text-gray-500 hover:underline hover:cursor-pointer`;
  const onLinkClick = () => {
    cartContext.setShowMobileMenu(false);
    setShowShopDropDown(false);
    setShowAboutDropDown(false);
  };
  return (
    cartContext.showMobileMenu && (
      <div
        className="absolute bg-white z-[100] left-0 top-18 w-full h-fit overflow-y-hidden"
        onClick={() => {
          // cartContext.setShowMobileMenu(false);
        }}
      >
        <div className="mx-4 h-screen justify-start flex flex-col">
          <div onClick={() => onLinkClick()}>
            <Link href="/" className={`${standardStyling}`}>
              Home
            </Link>
          </div>
          <div className="relative">
            <div
              class={`${standardStyling}`}
              onClick={() => {
                setShowShopDropDown(!showShopDropDown);
                setShowAboutDropDown(false);
              }}
            >
              <div class="flex justify-between items-center">
                <div class="text-center">Shop</div>
                <div class="mr-2">{caretIcon}</div>
              </div>
            </div>
            {showShopDropDown && (
              <div
                class={`absolute top-15 left-[50px] flex justify-center z-10 text-white ${hiraDarkBrownBG} divide-y divide-white border border-white shadow w-72`}
              >
                <ul class="py-2 text-3xl" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link
                      href="/diamond"
                      class="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => onLinkClick()}
                    >
                      Shop Diamonds
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ringsettings"
                      class="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => onLinkClick()}
                    >
                      Shop Rings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/custom"
                      class="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => onLinkClick()}
                    >
                      Custom Inquiry
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              class={`${standardStyling}`}
              onClick={() => {
                setShowShopDropDown(false);
                setShowAboutDropDown(!showAboutDropDown);
              }}
            >
              <div class="flex justify-between items-center">
                <div class="text-center">About</div>
                <div class="mr-2">{caretIcon}</div>
              </div>
            </div>
            {showAboutDropDown && (
              <div
                class={`absolute top-15 left-[50px] flex justify-center z-10 text-white ${hiraDarkBrownBG} divide-y divide-white border border-white shadow w-72`}
              >
                <ul class="py-2 text-3xl" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link
                      href="/about"
                      class="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => onLinkClick()}
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/how-it-works"
                      class="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => onLinkClick()}
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      class="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => onLinkClick()}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      class="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => onLinkClick()}
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div onClick={() => onLinkClick()}>
            <Link href="/contact" className={`${standardStyling}`}>
              Contact
            </Link>
          </div>
          <div className={` mt-2 ${hiraBlackText} justify-start flex flex-col`}>
            <div className="border-t lg:border-0 mt-4 lg:mt-0 text-center justify-center text-lg">
              <div className={`py-2 lg:pb-0 ${hiraDarkGrayText} mt-4 lg:mt-0`}>
                Schedule Meet
              </div>
              <div className={`lg:flex justify-center`}>
                <div className="py-2 lg:mr-2">team@hiradiamonds.com</div>
                <div className="py-2">{callNumber}</div>
              </div>
              <div class="text-center text-lg text-white sm:text-center hidden lg:block">
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
          <div
            className={` mt-6 ${hiraBlackText} justify-start flex flex-col ${hiraWhiteBG}`}
          >
            <div class="justify-center w-full hover:cursor-pointer">
              <button
                class={`flex w-full mt-4 lg:mt-0 justify-center py-2 ${hiraWhiteText} ${hiraDarkBrownBG} border ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg mb-2`}
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
              class={`my-8 lg:my-0 text-center text-lg ${hiraBlackText} sm:text-center`}
            >
              <Link href="" class="hover:underline">
                HIRA
              </Link>
              . All Rights Reserved.
            </div>
            <div
              class={`my-8 text-center text-lg ${hiraBlackText} sm:text-center lg:hidden`}
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
