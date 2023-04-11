import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

const RingSettings = () => {
  const dummyImage = (
    <img
      alt="ecommerce"
      class="object-cover object-center w-full h-full block"
      src="https://dummyimage.com/420x260"
    />
  );
  const settingInfo = [
    {
      category: "Signature Collection",
      name: "Solitaire",
      price: 550,
      image: dummyImage,
    },
    {
      category: "Classic Collection",
      name: "Solitaire",
      price: 550,
      image: dummyImage,
    },
    { category: "CATEGORY", name: "Solitaire", price: 550, image: dummyImage },
    { category: "CATEGORY", name: "Solitaire", price: 550, image: dummyImage },
    { category: "CATEGORY", name: "Solitaire", price: 550, image: dummyImage },
    { category: "CATEGORY", name: "Solitaire", price: 550, image: dummyImage },
    { category: "CATEGORY", name: "Solitaire", price: 550, image: dummyImage },
    { category: "CATEGORY", name: "Solitaire", price: 550, image: dummyImage },
  ];
  const cartContext = useContext(CartContext);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {settingInfo.map((setting, i) => {
            return (
              <div key={i} class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                  {setting.image}
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {setting.category}
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    {setting.name}
                  </h2>
                  <p class="mt-1">{setting.price}</p>
                  <Link href="/checkout">
                    <button
                      onClick={() => {
                        const settingStatus = `${setting.category} ${setting.name}`;
                        cartContext.setSetting(settingStatus);
                        cartContext.setSettingPrice(setting.price);
                      }}
                      class="flex ml-auto text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded"
                    >
                      Select
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
          {/* <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              {dummyImage}
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p class="mt-1">$16.00</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default RingSettings;
