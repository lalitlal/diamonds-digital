import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import Carousel from "./Carousel";
import { borderHiraBlack, hiraBlackBG, hiraWhiteBG } from "./constants";
import { getProducts } from "../sanity/sanity-utils";
import ImageSlider from "./ImageSlider";

const SettingsProductDetail = ({}) => {
  const cartContext = useContext(CartContext);
  const diamondContext = useContext(DiamondContext);
  const dummyImageURL = "https://dummyimage.com/420x260";

  const generateImageAlts = (prod) => {
    const imageAlts = Array.from(
      {
        length: prod.variants[0].images.length,
      },
      (_, index) => `${`${prod.variants[0].variantDescription}_${index}`}`
    );
    return imageAlts;
  };

  const generateImageSlider = (prod, imageAlts) => {
    const imageSliderForDetail =
      prod.variants !== null &&
      prod.variants !== undefined &&
      prod.variants.length > 0 ? (
        <ImageSlider
          images={prod.variants[0].images}
          imageAlts={imageAlts}
          // w-200 h-200 md:w-400 md:h-400
          imageClass={"w-200 h-200 md:w-400 md:h-400 object-center object"}
        ></ImageSlider>
      ) : (
        <ImageSlider
          images={[dummyImageURL]}
          imageAlts={imageAlts}
          imageClass={
            "w-200 h-200 md:w-400 md:h-400 object-cover object-center"
          }
        ></ImageSlider>
      );
    return imageSliderForDetail;
  };

  useEffect(() => {
    console.log("FETCHING AGAIN?!?!");
    const fetchProducts = async () => {
      try {
        const uppercase_stone_str =
          diamondContext.currentSettingDiamondShape.charAt(0).toUpperCase() +
          diamondContext.currentSettingDiamondShape.slice(1);
        const productsData = await getProducts(
          uppercase_stone_str,
          diamondContext.bandColor
        );
        // setProducts(productsData);
        // Handle setting detail changes:
        const newProduct = productsData.filter((product) => {
          return product.title === diamondContext.settingDetails.name;
        });

        if (
          newProduct !== undefined &&
          newProduct !== null &&
          newProduct[0].variants !== null &&
          newProduct[0].variants !== undefined &&
          newProduct[0].variants[0] !==
            diamondContext.settingDetails.variantData
        ) {
          const imageAlts = generateImageAlts(newProduct[0]);
          const imageSliderForDetail = generateImageSlider(
            newProduct[0],
            imageAlts
          );

          diamondContext.setSettingDetails({
            name: newProduct[0].title,
            price: newProduct[0].variants[0].price,
            description: newProduct[0].description,
            images: imageSliderForDetail,
            variantData: newProduct[0].variants[0],
          });
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
    // It would be great if we can also set the setting details here!
  }, [diamondContext.currentSettingDiamondShape, diamondContext.bandColor]);

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

  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-2 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-full w-full mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                HIRA
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-2">
                {diamondContext.settingDetails.name}
              </h1>
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                {diamondContext.settingDetails.description}
              </h3>
              <Carousel
                images={diamondContext.settingDetails.variantData.images}
              />
              <div class="justify-center w-full items-center">
                <button
                  class={`flex w-full justify-center py-2 text-black ${hiraWhiteBG} border ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg mb-2`}
                  onClick={() => {
                    console.log("Speak to expert clicked");
                  }}
                >
                  Speak to an expert
                </button>
                <Link href="/checkout">
                  <button
                    class={`flex w-full justify-center py-2 text-white ${hiraBlackBG} focus:outline-none active:bg-black focus:bg-black text-lg`}
                    onClick={() => {
                      const settingStatus = `${diamondContext.settingDetails.variantData.variantDescription}`;
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
                      cartContext.setSettingPrice(
                        diamondContext.settingDetails.variantData.price
                      );
                    }}
                  >
                    Complete Ring (CA${" "}
                    {diamondContext.settingDetails.variantData.price})
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SettingsProductDetail;
