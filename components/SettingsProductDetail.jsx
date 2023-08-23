import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import Carousel from "./Carousel";
import {
  borderHiraBlack,
  hiraBlackBG,
  hiraDarkGrayText,
  hiraWhiteBG,
  hiralightGrayBG,
} from "./constants";
import { getProducts } from "../sanity/sanity-utils";
import ImageSlider from "./ImageSlider";
import ImageGrid from "./ImageGrid";

const SettingsProductDetail = ({}) => {
  const cartContext = useContext(CartContext);
  const diamondContext = useContext(DiamondContext);
  const dummyImageURL = "https://dummyimage.com/420x260";
  const [detailProducts, setDetailProducts] = useState(null);

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
    const fetchProducts = async () => {
      try {
        const uppercase_stone_str =
          diamondContext.currentSettingDiamondShape.charAt(0).toUpperCase() +
          diamondContext.currentSettingDiamondShape.slice(1);
        const productsData = await getProducts(
          uppercase_stone_str,
          diamondContext.bandColor
        );
        setDetailProducts(productsData);
        // setProducts(productsData);
        // Handle setting detail changes:
        const newProduct = productsData.filter((product) => {
          return product.title === diamondContext.settingDetails.name;
        });

        if (
          newProduct !== undefined &&
          newProduct !== null &&
          newProduct[0] &&
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
    <div className="flex w-full">
      {Object.values(diamondContext.settingDetails).length === 0 && (
        <div
          className={`flex w-full lg:h-full lg:py-24 justify-center items-center text-center py-2 ${hiraDarkGrayText} ${hiralightGrayBG} border ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg mb-2 h-48`}
        >
          <div class="">
            <div class="flex">
              <div class="lg:w-full w-full mb-6 lg:mb-0">
                <h2 class="text-sm">Please select a setting</h2>
              </div>
            </div>
          </div>
        </div>
      )}
      {setDetailProducts && diamondContext.settingDetails.variantData && (
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="">
            <div class="mx-auto flex flex-wrap">
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
                <div className={`lg:hidden`}>
                  <Carousel
                    images={diamondContext.settingDetails.variantData.images}
                  />
                </div>
                <div className={`hidden lg:block`}>
                  <ImageGrid
                    images={diamondContext.settingDetails.variantData.images}
                  ></ImageGrid>
                </div>
                <div class="justify-center w-full items-center lg:hidden">
                  <button
                    class={`flex w-full justify-center py-2 text-black ${hiraWhiteBG} border ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg mb-2`}
                    onClick={() => {
                      cartContext.setShowBookingModal(
                        !cartContext.showBookingModal
                      );
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth", // You can use 'auto' or 'smooth' for scrolling behavior
                      });
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
      )}
    </div>
  );
};

export default SettingsProductDetail;
