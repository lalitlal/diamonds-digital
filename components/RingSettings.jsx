import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import ImageSlider from "./ImageSlider";

const RingSettings = () => {
  const { bandColor, setBandColor, currentSettingDiamondShape, stoneMapping } =
    useContext(DiamondContext);
  const [imagesIndex, setImagesIndex] = useState(0);
  const diamond_name = stoneMapping[currentSettingDiamondShape];
  const baseImage = `/rings/class_solitaire/${diamond_name}/`;
  const imageWidth = 500;
  const imageHeight = 500;

  const images = [
    {
      color: "Rose Gold",
      images: [
        {
          src: baseImage.concat("1_R.jpg"),
          alt: "rose_oval_a",
          width: { imageWidth },
          height: { imageHeight },
        },
        {
          src: baseImage.concat("2_R.jpg"),
          alt: "rose_oval_b",
          width: { imageWidth },
          height: { imageHeight },
        },
        {
          src: baseImage.concat("3_R.jpg"),
          alt: "rose_oval_c",
          width: { imageWidth },
          height: { imageHeight },
        },
        {
          src: baseImage.concat("4_R.jpg"),
          alt: "rose_oval_d",
          width: { imageWidth },
          height: { imageHeight },
        },
      ],
    },
    {
      color: "White Gold",
      images: [
        {
          src: baseImage.concat("1_W.jpg"),
          alt: "white_oval_a",
          width: { imageWidth },
          height: { imageHeight },
        },
        {
          src: baseImage.concat("2_W.jpg"),
          alt: "white_oval_b",
          width: { imageWidth },
          height: { imageHeight },
        },
        {
          src: baseImage.concat("3_W.jpg"),
          alt: "white_oval_c",
          width: { imageWidth },
          height: { imageHeight },
        },
        {
          src: baseImage.concat("4_W.jpg"),
          alt: "white_oval_d",
          width: { imageWidth },
          height: { imageHeight },
        },
      ],
    },
    {
      color: "Yellow Gold",
      images: [
        {
          src: baseImage.concat("1_Y.jpg"),
          alt: "yellow_oval_a",
          width: { imageWidth },
          height: { imageHeight },
        },
        {
          src: baseImage.concat("2_Y.jpg"),
          alt: "yellow_oval_b",
          width: { imageWidth },
          height: { imageHeight },
        },
        {
          src: baseImage.concat("3_Y.jpg"),
          alt: "yellow_oval_c",
          width: { imageWidth },
          height: { imageHeight },
        },
        {
          src: baseImage.concat("4_Y.jpg"),
          alt: "yellow_oval_d",
          width: { imageWidth },
          height: { imageHeight },
        },
      ],
    },
    {
      color: "Platinum",
      images: [
        {
          src: baseImage.concat("1_W.jpg"),
          alt: "white_oval_a",
          width: { imageWidth },
          height: { imageHeight },
        },
        {
          src: baseImage.concat("2_W.jpg"),
          alt: "white_oval_b",
          width: { imageWidth },
          height: { imageHeight },
        },
        {
          src: baseImage.concat("3_W.jpg"),
          alt: "white_oval_c",
          width: { imageWidth },
          height: { imageHeight },
        },
        {
          src: baseImage.concat("4_W.jpg"),
          alt: "white_oval_d",
          width: { imageWidth },
          height: { imageHeight },
        },
      ],
    },
  ];

  const dummyImage = (
    <img
      alt="ecommerce"
      class="object-cover object-center w-full h-full block"
      src="https://dummyimage.com/420x260"
    />
  );

  useEffect(() => {
    if (bandColor === "Rose Gold") {
      setImagesIndex(0);
    }
    if (bandColor === "White Gold") {
      setImagesIndex(1);
    }
    if (bandColor === "Yellow Gold") {
      setImagesIndex(2);
    }
    if (bandColor === "Platinum") {
      setImagesIndex(3);
    }
  }, [bandColor, setImagesIndex]);

  const settingInfo = [
    {
      category: "Signature Collection",
      name: "Solitaire",
      price: 550,
    },
    {
      category: "Classic Collection",
      name: "Solitaire",
      price: 550,
    },
    { category: "CATEGORY", name: "Solitaire", price: 550 },
    { category: "CATEGORY", name: "Solitaire", price: 550 },
    { category: "CATEGORY", name: "Solitaire", price: 550 },
    { category: "CATEGORY", name: "Solitaire", price: 550 },
    { category: "CATEGORY", name: "Solitaire", price: 550 },
    { category: "CATEGORY", name: "Solitaire", price: 550 },
  ];
  const cartContext = useContext(CartContext);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {settingInfo.map((setting, i) => {
            return (
              <div key={i} class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <ImageSlider
                  images={images[imagesIndex].images}
                  imageClass={"w-400 h-400 object-cover object-center"}
                ></ImageSlider>

                {/* <a class="block relative h-48 rounded overflow-hidden">
                  {setting.image}
                </a> */}
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
        </div>
      </div>
    </section>
  );
};

export default RingSettings;
