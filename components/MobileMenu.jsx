import React, { useContext, useState } from "react";
import Link from "next/link";
import { CartContext } from "./context/CartContext";

const MobileMenu = () => {
  const cartContext = useContext(CartContext);
  const standardStyling = `block mt-4 text-3xl lg:inline-block lg:mt-0  text-center hover:text-gray-500 hover:underline hover:cursor-pointer`;
  return (
    cartContext.showMobileMenu && (
      <div
        className="absolute bg-white z-[80] left-0 top-10 w-full h-screen overflow-y-hidden"
        onClick={() => {
          cartContext.setShowMobileMenu(false);
        }}
      >
        <div className="mx-4 h-screen mt-24  justify-start flex flex-col">
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
      </div>
    )
  );
};

export default MobileMenu;
