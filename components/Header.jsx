import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { hiraDarkBrown, hiraDarkBrownBG, xIcon } from "./constants";
import Cart from "./Cart";
import NewModal from "./NewModal";
import CalendlyBooking from "./CalendlyBooking";
import CartModal from "./CartModal";
import { CartContext } from "./context/CartContext";

const Header = () => {
  const [showShopDropDown, setShowShopDropDown] = useState(false);
  const [showAboutDropDown, setShowAboutDropDown] = useState(false);
  const cartContext = useContext(CartContext);
  const [showNavBar, setShowNavBar] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setShowNavBar(e.target.documentElement.scrollTop >= 150);
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [showNavBar, scrollTop]);

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
        className={`transition-all duration-400 ease-in ${
          showNavBar ? "fixed top-0 left-0 right-0 z-50" : ""
        }`}
      >
        <nav class={` ${hiraDarkBrownBG} border-gray-200 px-4 lg:px-6 py-2.5 `}>
          <div class="flex text-white flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex lg:hidden items-center w-fit cursor-pointer">
              {!cartContext.showMobileMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 align-middle lg:hidden"
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
            <Link href="/" class="flex items-center">
              <span class="self-center text-4xl whitespace-nowrap">HIRA</span>
            </Link>
            <div class="flex items-center lg:order-2">
              <a
                class="hidden lg:block bg-white text-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-2xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none hover:cursor-pointer"
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
              </a>
              <Cart></Cart>
            </div>
            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <div class="flex flex-col mt-4 text-2xl lg:flex-row lg:space-x-8 lg:mt-0">
                <Link
                  href="/"
                  class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
                <div className="relative">
                  <div
                    class="block hover:cursor-pointer py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    onClick={() => {
                      setShowShopDropDown(!showShopDropDown);
                      setShowAboutDropDown(false);
                    }}
                  >
                    Shop
                  </div>
                  {showShopDropDown && (
                    <div
                      class={`absolute top-10 z-10 font-normal ${hiraDarkBrownBG} divide-y divide-gray-100 border border-white shadow w-72`}
                    >
                      <ul
                        class="py-2 text-2xl text-white"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <Link
                            href="/diamond"
                            class="block px-4 py-2 hover:bg-gray-100"
                          >
                            Shop Diamonds
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/ringsettings"
                            class="block px-4 py-2 hover:bg-gray-100"
                          >
                            Shop Rings
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/custom"
                            class="block px-4 py-2 hover:bg-gray-100"
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
                    class="block hover:cursor-pointer py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    onClick={() => {
                      setShowAboutDropDown(!showAboutDropDown);
                      setShowShopDropDown(false);
                    }}
                  >
                    About
                  </div>
                  {showAboutDropDown && (
                    <div
                      class={`absolute top-10 z-10 font-normal ${hiraDarkBrownBG} divide-y divide-gray-100 border border-white shadow w-72`}
                    >
                      <ul
                        class="py-2 text-2xl text-white"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <Link
                            href="/about"
                            class="block px-4 py-2 hover:bg-gray-100"
                          >
                            Our Story
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/how-it-works"
                            class="block px-4 py-2 hover:bg-gray-100"
                          >
                            How It Works
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            class="block px-4 py-2 hover:bg-gray-100"
                          >
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/gallery"
                            class="block px-4 py-2 hover:bg-gray-100"
                          >
                            Gallery
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <Link
                  href="/contact"
                  class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
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

export default Header;
