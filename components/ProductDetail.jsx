import Link from "next/link";
import React, { useContext, useState } from "react";
import CartContext from "./context/CartContext";

const ProductDetail = ({ shape, carat, color, clarity, cut, price, data }) => {
  const cartContext = useContext(CartContext);
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const productOptions = [
    { Header: "Description", Content: "Some Description" },
    { Header: "Reviews", Content: "Some Reviews" },
    { Header: "Details", Content: "Some Details" },
  ];

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              HIRA
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
              {shape} {carat} {color} {clarity} {cut}
            </h1>
            <div class="flex mb-4">
              {productOptions.map((prod, i) => {
                return (
                  <div
                    key={i}
                    className={`flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 hover:cursor-pointer ${
                      i === currentDisplay
                        ? "border-indigo-500 text-indigo-500"
                        : "border-gray-300 text-gray-300"
                    }`}
                    onClick={() => {
                      setCurrentDisplay(i);
                    }}
                  >
                    {prod.Header}
                  </div>
                );
              })}
            </div>
            <p class="leading-relaxed mb-4">
              {productOptions[currentDisplay].Content}.
            </p>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Carat</span>
              <span class="ml-auto text-gray-900">{carat}</span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Color</span>
              <span class="ml-auto text-gray-900">{color}</span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Clarity</span>
              <span class="ml-auto text-gray-900">{clarity}</span>
            </div>
            <div class="flex border-t border-b mb-6 border-gray-200 py-2">
              <span class="text-gray-500">Cut</span>
              <span class="ml-auto text-gray-900">{cut}</span>
            </div>

            <div class="flex justify-between">
              <span class="title-font font-medium text-2xl text-gray-900">
                CA${price}
              </span>
              <Link href="/ringsettings">
                <button
                  class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  onClick={() => {
                    const diamondStatus = `${data.shape} ${data.carat} ${data.color} ${data.clarity} ${data.cut}`;
                    cartContext.setDiamond(diamondStatus);
                    cartContext.setDiamondPrice(data.price);
                  }}
                >
                  Select
                </button>
              </Link>
            </div>
          </div>
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
