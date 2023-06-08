import Link from "next/link";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import ImageSlider from "./ImageSlider";

function CartModal({ onRemoveItem }) {
  const cartContext = useContext(CartContext);
  const [cartEmpty, setCartEmpty] = useState(false);
  const { bandColor, currentSettingDiamondShape, selectedDiamondShape } =
    useContext(DiamondContext);
  const [imagesIndex, setImagesIndex] = useState(0);
  const imageWidth = 500;
  const imageHeight = 500;

  const baseImage = `/rings/class_solitaire/${selectedDiamondShape}/`;
  const fixedImages = [
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

  const imageSlider = (
    <ImageSlider
      checkout={true}
      images={fixedImages[imagesIndex].images}
      imageClass={"object-contain object-center"}
    ></ImageSlider>
  );

  const cartInfo = useMemo(() => {
    const dummyImage = (
      <img
        alt="ecommerce"
        class="object-cover object-center h-16 w-16 rounded"
        src="https://dummyimage.com/420x260"
      />
    );
    return [
      {
        description: cartContext.diamond,
        name: "Loose Diamond",
        price: `CA$ `.concat(cartContext.diamondPrice),
        image: dummyImage,
      },
      {
        description:
          cartContext.setting === undefined
            ? undefined
            : `${cartContext.setting} `.concat(`${bandColor}`),
        name: "Setting",
        price: `CA$ `.concat(cartContext.settingPrice),
        image: dummyImage,
      },
    ];
  }, [
    cartContext.diamond,
    cartContext.diamondPrice,
    cartContext.setting,
    cartContext.settingPrice,
  ]);

  useEffect(() => {
    if (
      cartInfo[0].description === undefined &&
      cartInfo[1].description === undefined
    ) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
  }, [cartInfo]);

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

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex justify-center mt-10 h-5/6">
        <div
          class="w-screen h-auto overflow-y-auto max-w-sm border border-gray-600 bg-gray-100 p-4 pt-4 sm:p-6 lg:p-8 rounded-3xl"
          aria-modal="true"
          role="dialog"
          tabindex="-1"
        >
          <div className="flex justify-between">
            <h2 className="flex w-full justify-center text-center">
              Your Shopping Cart
            </h2>
            <button
              class="relative ml-auto -mr-4 block text-gray-600 transition hover:scale-110"
              onClick={() => {
                cartContext.setShowCartModal(false);
              }}
            >
              <span class="sr-only">Close cart</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="mt-6 space-y-6">
            {cartEmpty && (
              <div className="text-center font-Raleway">
                Your shopping cart is empty. Explore around!
              </div>
            )}
            {!cartEmpty && imageSlider}
            {!cartEmpty && (
              <div className="text-xs justify-center text-center">
                *Picture for reference only
              </div>
            )}

            <ul class="space-y-4">
              {cartInfo.map((lineItem, i) => {
                return (
                  lineItem.description !== undefined && (
                    <li key={i} class="flex items-center gap-6">
                      <div className="flex flex-col flex-grow">
                        <h3 class="text-sm text-gray-900">{lineItem.name}</h3>

                        <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt class="inline">Qty:</dt>
                            <dd class="inline">1</dd>
                          </div>

                          <div>
                            <dt class="inline">Price:</dt>
                            <dd class="inline">{lineItem.price}</dd>
                          </div>
                          <div>
                            <dt class="inline">Description:</dt>
                            <dd class="inline">{lineItem.description}</dd>
                          </div>
                        </dl>
                      </div>
                      <div
                        className="w-[70px] flex justify-end"
                        onClick={() => {
                          onRemoveItem(lineItem);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class={`w-6 h-6 hover:text-indigo-400 cursor-pointer`}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </div>
                    </li>
                  )
                );
              })}
            </ul>

            <div class="space-y-4 text-center">
              <Link
                href="/checkout"
                class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                onClick={() => {
                  cartContext.setShowCartModal(false);
                }}
              >
                Checkout
              </Link>

              <div
                onClick={() => {
                  cartContext.setShowCartModal(false);
                }}
                class="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600 cursor-pointer"
              >
                Continue shopping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
