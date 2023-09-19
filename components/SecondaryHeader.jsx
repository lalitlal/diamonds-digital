import Link from "next/link";
import React, { useContext, useState } from "react";
import CalendlyBooking from "./CalendlyBooking";
import Cart from "./Cart";
import Modal from "../components/Modal";
import { CartContext } from "./context/CartContext";
import NewModal from "./NewModal";
import CartModal from "./CartModal";
import {
  borderHiraBlack,
  hiraBlackBG,
  hiraWhiteBG,
  hiraWhiteText,
  xIcon,
} from "./constants";

const SecondaryHeader = () => {
  const cartContext = useContext(CartContext);

  const handleOpenBookingModal = () => {
    cartContext.setShowMobileMenu(false);
    cartContext.setShowBookingModal(true);
  };

  const handleCloseBookingModal = () => {
    cartContext.setShowMobileMenu(false);
    cartContext.setShowBookingModal(false);
  };

  const handleOpenCartModal = () => {
    cartContext.setShowMobileMenu(false);
    cartContext.setShowCartModal(true);
  };

  const handleCloseCartModal = () => {
    cartContext.setShowMobileMenu(false);
    cartContext.setShowCartModal(false);
  };

  const handleRemoveCartItem = (item) => {
    if (item.editLink === "/diamond") {
      cartContext.setDiamond(undefined);
      cartContext.setDiamondPrice(0);
    } else {
      cartContext.setSetting(undefined);
      cartContext.setSettingPrice(0);
    }
  };

  return (
    <>
      <div
        className={`flex justify-between ${hiraBlackBG} ${hiraWhiteText} py-4 mb-4`}
      >
        <div className="flex md:hidden items-center w-fit ml-4 cursor-pointer">
          {!cartContext.showMobileMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 align-middle md:hidden"
              onClick={() => {
                cartContext.setShowMobileMenu(true);
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
          ) : (
            <div onClick={() => cartContext.setShowMobileMenu(false)}>
              {xIcon}
            </div>
          )}
          <div
            onClick={handleOpenBookingModal}
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
        <div>
          <Link
            href="/"
            className="text-center items-center md:text-start mx-10 font-Raleway text-4xl font-bold w-1/3 cursor-pointer"
          >
            HIRA
          </Link>
        </div>
        <div className="hidden md:flex justify-center items-center text-base w-1/3 align-middle">
          <Link
            href="/"
            className="block mt-4 text-xl lg:inline-block lg:mt-0  hover:text-gray-500 hover:underline mr-4 cursor-pointer"
          >
            Engagement
          </Link>
          <Link
            href="/diamond"
            className="block mt-4 text-xl lg:inline-block lg:mt-0  hover:text-gray-500 hover:underline mr-4 cursor-pointer"
          >
            Diamonds
          </Link>
          <Link
            href="/ringsettings"
            className="block mt-4 text-xl lg:inline-block lg:mt-0  hover:text-gray-500 hover:underline mr-4 cursor-pointer"
          >
            Settings
          </Link>
          <Link
            href="/about"
            className="block mt-4 text-xl lg:inline-block lg:mt-0 hover:text-gray-500 hover:underline mr-4 cursor-pointer"
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="block mt-4 text-xl lg:inline-block lg:mt-0 hover:text-gray-500 hover:underline cursor-pointer mr-2"
          >
            Gallery
          </Link>
        </div>
        <div className="flex justify-center items-center align-middle w-fit mr-4">
          <Cart></Cart>
          <div
            onClick={handleOpenBookingModal}
            className="flex hover:text-gray-500 ml-4"
          >
            <div class="justify-center w-full hover:cursor-pointer">
              <button
                class={`w-full hidden md:flex justify-center py-2  px-4 text-black ${hiraWhiteBG} border ${borderHiraBlack} focus:outline-none text-lg`}
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
      <NewModal
        isOpen={cartContext.showBookingModal}
        onClose={handleCloseBookingModal}
      >
        <p class="mt-5 font-Raleway font-bold text-base text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Buy with 100% confidence. Book an appointment to try various styles
          and learn all about the origin of your brand new ring!
        </p>
        <CalendlyBooking></CalendlyBooking>
      </NewModal>
      <NewModal
        isOpen={cartContext.showCartModal}
        onClose={handleCloseCartModal}
      >
        <div className="fixed inset-0 bg-gray-700 opacity-50 z-[69]"></div>;
        <CartModal
          onRemoveItem={(item) => {
            handleRemoveCartItem(item);
          }}
        ></CartModal>
      </NewModal>
    </>
  );
};

export default SecondaryHeader;
