import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import ImageSlider from "./ImageSlider";
import { getProducts, getCustomProduct } from "../sanity/sanity-utils";

const RingSettings = () => {
  const diamondContext = useContext(DiamondContext);
  const cartContext = useContext(CartContext);
  const [products, setProducts] = useState([]);

  const dummyImageURL = "https://dummyimage.com/420x260";

  const upperCaseFirstLetter = () => {
    if (
      cartContext.diamondShape !== null &&
      cartContext.diamondShape !== undefined
    ) {
      return (
        cartContext.diamondShape.charAt(0).toUpperCase() +
        cartContext.diamondShape.slice(1)
      );
    }
    return undefined;
  };

  useEffect(() => {
    // console.log(
    //   "Check Token",
    //   process.env.NEXT_PUBLIC_SANITY_DATASET,
    //   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    // );
    const fetchProducts = async () => {
      try {
        const uppercase_stone_str =
          diamondContext.currentSettingDiamondShape.charAt(0).toUpperCase() +
          diamondContext.currentSettingDiamondShape.slice(1);
        const productsData = await getProducts(
          uppercase_stone_str,
          diamondContext.bandColor
        );
        const customProduct = await getCustomProduct();
        const clobbered = productsData.concat(customProduct);
        setProducts(clobbered);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [diamondContext.currentSettingDiamondShape, diamondContext.bandColor]);

  return (
    <section class="text-gray-600 body-font">
      <div class="container p-5 mx-auto">
        <div class="flex flex-wrap -m-4">
          {products.map((prod, i) => {
            const { _id, title, description, type } = prod;
            const variant = prod.variants;
            const imageAlts = Array.from(
              {
                length:
                  variant !== null &&
                  variant !== undefined &&
                  variant.length > 0
                    ? variant[0].images.length
                    : 1,
              },
              (_, index) =>
                `${
                  variant !== null &&
                  variant !== undefined &&
                  variant.length > 0
                    ? `${variant[0].variantDescription}_${index}`
                    : `${upperCaseFirstLetter()}-${
                        diamondContext.bandColor
                      }_${index}_placeholder`
                }`
            );
            return (
              <div key={prod._id} class="lg:w-1/4 md:w-1/2 p-4 w-1/2 h-1/4">
                {prod.variants !== null &&
                prod.variants !== undefined &&
                variant.length > 0 ? (
                  <ImageSlider
                    images={variant[0].images}
                    imageAlts={imageAlts}
                    // w-200 h-200 md:w-400 md:h-400
                    imageClass={
                      "w-200 h-200 md:w-400 md:h-400 object-center object"
                    }
                  ></ImageSlider>
                ) : (
                  <ImageSlider
                    images={[dummyImageURL]}
                    imageAlts={imageAlts}
                    imageClass={
                      "w-200 h-200 md:w-400 md:h-400 object-cover object-center"
                    }
                  ></ImageSlider>
                )}

                {/* <a class="block relative h-48 rounded overflow-hidden">
                  {setting.image}
                </a> */}
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {description}
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    {title}
                  </h2>
                  <p class="mt-1">{prod.variants[0].price}</p>
                  <Link href="/checkout">
                    <button
                      onClick={() => {
                        const settingStatus = `${prod.variants[0].variantDescription}`;
                        const currentDiamond = upperCaseFirstLetter();
                        if (currentDiamond !== undefined) {
                          const newSettingStatus = settingStatus.replace(
                            settingStatus.split(" - ")[1],
                            currentDiamond
                          );
                          cartContext.setSetting(newSettingStatus);
                        } else {
                          cartContext.setSetting(settingStatus);
                        }
                        cartContext.setSettingPrice(prod.variants[0].price);
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
