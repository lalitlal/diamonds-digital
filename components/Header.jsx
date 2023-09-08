import Link from "next/link";
import React, { useContext, useState } from "react";
import CalendlyBooking from "./CalendlyBooking";
import Cart from "./Cart";
import Modal from "../components/Modal";
import { CartContext } from "./context/CartContext";
import NewModal from "./NewModal";
import CartModal from "./CartModal";
import { xIcon } from "./constants";

const Header = () => {
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
    <div className="flex-col items-center object-center mb-4">
      <div className="flex justify-around mt-6">
        <div className="hidden lg:flex items-center w-1/3 ml-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline-block md:hidden hover:text-gray-500 hover:cursor-pointer"
            onClick={() => {
              cartContext.setShowMobileMenu(!cartContext.showMobileMenu);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>

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
              className="w-6 h-6 ml-2  hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <a className="hidden lg:inline-flex hover:cursor-pointer">
              Book an appointment
            </a>
          </div>
        </div>
        <div className="flex md:hidden items-center w-1/3 ml-4 cursor-pointer transition ease-in-out duration-300">
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
            className="text-center font-Raleway text-4xl font-bold w-1/3 hover:cursor-pointer"
          >
            HIRA
          </Link>
        </div>
        <div className="flex items-center justify-end w-1/3 mr-6">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:text-gray-500 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg> */}
          <Cart onClick={handleOpenCartModal}></Cart>
        </div>
      </div>
      <div className="hidden md:flex justify-center w-full items-center mt-6 objects-center text-sm lg:flex-grow">
        <Link
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 hover:underline mr-4 hover:cursor-pointer"
        >
          Engagement
        </Link>
        <Link
          href="/diamond"
          className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 hover:underline mr-4 hover:cursor-pointer"
        >
          Diamonds
        </Link>
        <Link
          href="/ringsettings"
          className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 hover:underline mr-4 hover:cursor-pointer"
        >
          Settings
        </Link>
        <Link
          href="/about"
          className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 hover:underline mr-4 hover:cursor-pointer"
        >
          About
        </Link>
        <Link
          href="/gallery"
          className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 hover:underline hover:cursor-pointer"
        >
          Gallery
        </Link>
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
    </div>
  );
};

export default Header;
