import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Cart from "./Cart";
import { CartContext } from "./context/CartContext";
import {
  borderHiraBlack,
  hiraBlackBG,
  hiraWhiteBG,
  hiraWhiteText,
} from "./constants";

const Navbar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    const onScroll = (e) => {
      setShowNavBar(e.target.documentElement.scrollTop >= 150);
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [showNavBar, scrollTop]);
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-400 ease-in ${hiraBlackBG} ${hiraWhiteText} h-auto pb-2 -pt-2 ${
        showNavBar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex mt-4 md:hidden items-center w-1/3 ml-4 hover:text-gray-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 align-middle inline-block md:hidden"
            onClick={() => {
              cartContext.setShowMobileMenu(!cartContext.showMobileMenu);
              window.scrollTo({
                top: 0,
                behavior: "smooth", // You can use 'auto' or 'smooth' for scrolling behavior
              });
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          <div
            onClick={() => {
              cartContext.setShowMobileMenu(false);
              cartContext.setShowBookingModal(true);
              window.scrollTo({
                top: 0,
                behavior: "smooth", // You can use 'auto' or 'smooth' for scrolling behavior
              });
            }}
            className="flex hover:text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-2 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
          </div>
        </div>
        <Link
          href="/"
          className="text-center md:text-start mx-10 mt-4 font-Raleway text-2xl font-bold w-1/3 cursor-pointer"
        >
          HIRA
        </Link>
        <div className="hidden md:flex justify-center items-center text-base w-1/3 align-middle mt-4">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 hover:underline mr-4 cursor-pointer"
          >
            Engagement
          </Link>
          <Link
            href="/diamond"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 hover:underline mr-4 cursor-pointer"
          >
            Diamonds
          </Link>
          <Link
            href="/ringsettings"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 hover:underline mr-4 cursor-pointer"
          >
            Settings
          </Link>
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 hover:underline mr-4 cursor-pointer"
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 hover:underline cursor-pointer"
          >
            Gallery
          </Link>
        </div>
        <div className="flex justify-end items-center align-middle w-1/3 mr-4 mt-4">
          {/* <svg
            // search icon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:text-gray-500 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg> */}
          <Cart></Cart>
          <div className="flex hover:text-gray-500 ml-4 hover:cursor-pointer">
            <div class="justify-center w-full">
              <button
                class={`w-full hidden lg:flex justify-center py-2  px-4 text-black ${hiraWhiteBG} border ${borderHiraBlack} focus:outline-none text-lg`}
                onClick={() => {
                  // handleOpenBookingModal();
                  cartContext.setShowBookingModal(true);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth", // You can use 'auto' or 'smooth' for scrolling behavior
                  });
                }}
              >
                Book Meet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
