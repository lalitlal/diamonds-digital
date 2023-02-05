import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
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
  return (
    <div
      className={`sticky top-0 z-50 transition-opacity duration-400 ease-in bg-white h-auto pb-4 ${
        showNavBar ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex justify-between mt-6">
        <div className="flex mt-4 md:hidden items-center w-1/3 ml-10 hover:text-gray-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 align-middle inline-block md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
        <Link
          href="/"
          className="text-center md:text-start mx-10 mt-4 font-Raleway text-2xl font-bold w-1/3 cursor-pointer"
        >
          HIRA
        </Link>
        <div className="hidden md:flex justify-center items-center text-base w-1/3 align-middle mt-4">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 hover:underline mr-4 cursor-pointer"
          >
            Engagement
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 hover:underline mr-4 cursor-pointer"
          >
            Diamonds
          </a>
          <Link
            href="/ringsettings"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 hover:underline mr-4 cursor-pointer"
          >
            Settings
          </Link>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 hover:underline mr-4 cursor-pointer"
          >
            Featured
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 hover:underline mr-4 cursor-pointer"
          >
            About
          </a>
          <Link
            href="/gallery"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 hover:underline cursor-pointer"
          >
            Gallery
          </Link>
        </div>
        <div className="flex justify-end items-center align-middle w-1/3 mr-10 mt-4">
          <svg
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
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-2 hover:text-gray-500 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
