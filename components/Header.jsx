import Link from "next/link";
import React from "react";
import Cart from "./Cart";

const Header = () => {
  return (
    <div className="flex-col items-center object-center">
      <div className="flex justify-around mt-6">
        <div className="flex items-center w-1/3 ml-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline-block md:hidden hover:text-gray-500 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          <a className="hidden lg:inline-flex hover:text-gray-500 cursor-pointer">
            Book an appointment
          </a>
        </div>
        <div>
          <Link
            href="/"
            className="text-center font-Raleway text-4xl font-bold w-1/3 cursor-pointer"
          >
            HIRA
          </Link>
        </div>
        <div className="flex items-center justify-end w-1/3 mr-6">
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
          <Cart></Cart>
        </div>
      </div>
      <div className="hidden md:flex justify-center w-full items-center mt-6 objects-center text-sm lg:flex-grow">
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
          Featured
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
    </div>
  );
};

export default Header;
