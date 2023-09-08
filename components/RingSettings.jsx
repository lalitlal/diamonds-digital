import Link from "next/link";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import SanityImages from "./SanityImages";
import ImageSlider from "./ImageSlider";
import { getDisplayImages, getProducts } from "../sanity/sanity-utils";
import { client } from "../sanity/lib/client";
import {
  borderHiraBlack,
  hiraDarkGrayText,
  hiralightGrayBG,
} from "./constants";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";

const RingSettings = () => {
  const diamondContext = useContext(DiamondContext);
  const cartContext = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const dummyImageURL = "https://dummyimage.com/420x260";
  const imgUrlBuilder = urlBuilder(client);
  const [lifestyleImages, setLifestyleImages] = useState([]);

  useEffect(() => {
    const fetchHeroSanity = async () => {
      const res = await getDisplayImages("Lifestyle");
      const resURLs = res.map((data, index) => {
        return imgUrlBuilder.image(data.image).url();
      });
      setLifestyleImages(resURLs); // Note that we wrap the imageSource in an array to match your setHeroImages usage
    };
    fetchHeroSanity();
    return () => {};
  }, []);

  const upperCaseFirstLetter = useCallback(() => {
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
  }, [cartContext.diamondShape]);

  useEffect(() => {
    const checkDiamondSelected = () => {
      if (diamondContext.diamondJustSelected === true) {
        setTimeout(() => {
          diamondContext.setDiamondJustSelected(false);
        }, 3000);
      }
    };
    checkDiamondSelected();
  }, [diamondContext.diamondJustSelected]);

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
          imageClass={"w-200 h-200 md:w-full md:h-auto object-center"}
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
        // const customProduct = await getCustomProduct();
        // const clobbered = productsData.concat(customProduct);

        setProducts(productsData);
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

  const handleRingClick = (prod, imageAlts) => {
    const imageSliderForDetail = generateImageSlider(prod, imageAlts);

    diamondContext.setSettingDetails({
      name: prod.title,
      price: prod.variants[0].price,
      description: prod.description,
      images: imageSliderForDetail,
      variantData: prod.variants[0],
    });
  };
  return (
    <div className="mb-4">
      <div className="">
        <div className={`${hiraDarkGrayText}`}> {products.length} Items</div>
      </div>
      <div className="text-gray-600 body-font">
        <div className="">
          <div
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-2"
            style={{ gridAutoFlow: "row" }}
          >
            {products.slice(0, 2).map((prod, i) => {
              const { _id, title, description, type } = prod;
              const variant = prod.variants;
              const imageAlts = generateImageAlts(prod);
              return (
                <div
                  key={prod._id}
                  className={`w-full md:flex-wrap ${hiralightGrayBG} md:flex-shrink-0`}
                >
                  <div
                    className={`flex flex-col h-full`}
                    onClick={() => {
                      handleRingClick(prod, imageAlts);
                    }}
                  >
                    {prod.variants !== null &&
                    prod.variants !== undefined &&
                    variant.length > 0 ? (
                      <ImageSlider
                        images={variant[0].images}
                        imageAlts={imageAlts}
                        // w-200 h-200 md:w-400 md:h-400
                        imageClass={`object-cover object-center`}
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

                    {
                      <div className="flex flex-col justify-between z-[5] h-fit overflow-hidden mt-2">
                        <h2
                          className={`${hiraDarkGrayText} mx-1 title-font text-lg font-medium`}
                        >
                          {title}
                        </h2>
                        <p className="mx-1">USD$ {prod.variants[0].price}</p>
                        <Link
                          onClick={() => {
                            handleRingClick(prod, imageAlts);
                          }}
                          href="/settingdetail"
                          className={`flex mt-2 mx-1 text-black text-center justify-center ${hiralightGrayBG} border ${borderHiraBlack} py-2 px-6 focus:outline-none hover:bg-black`}
                        >
                          Select
                        </Link>
                      </div>
                    }
                  </div>
                </div>
              );
            })}
            <div className="col-span-2 mt-4 w-screen -mx-4 lg:mx-0 lg:w-full lg:mt-0 md:col-span-2">
              {/* <Image
                width={400}
                height={400}
                src={lifestyleImages[0]}
                alt={`Lifestyle Image`}
                // w-200 h-200 md:w-400 md:h-400 object-cover object-center
                // className="w-full h-auto object-contain border"
                className={""}
                priority
              /> */}
              <SanityImages type="Lifestyle"></SanityImages>
            </div>
            {products.slice(2).map((prod, i) => {
              const { _id, title, description, type } = prod;
              const variant = prod.variants;
              const imageAlts = generateImageAlts(prod);
              return (
                <div
                  key={prod._id}
                  className={`w-full md:flex-wrap ${hiralightGrayBG}`}
                >
                  <div
                    className={`flex flex-col h-full`}
                    onClick={() => {
                      handleRingClick(prod, imageAlts);
                    }}
                  >
                    {prod.variants !== null &&
                    prod.variants !== undefined &&
                    variant.length > 0 ? (
                      <ImageSlider
                        images={variant[0].images}
                        imageAlts={imageAlts}
                        // w-200 h-200 md:w-400 md:h-400
                        imageClass={`object-cover object-center`}
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

                    {
                      <div className="flex flex-col justify-between z-[5] h-fit overflow-hidden mt-2">
                        <h2
                          className={`${hiraDarkGrayText} mx-1 title-font text-lg font-medium`}
                        >
                          {title}
                        </h2>
                        <p className="mx-1">USD$ {prod.variants[0].price}</p>
                        <Link
                          onClick={() => {
                            handleRingClick(prod, imageAlts);
                          }}
                          href="/settingdetail"
                          className={`flex mt-2 mx-1 text-black text-center justify-center ${hiralightGrayBG} border ${borderHiraBlack} py-2 px-6 focus:outline-none hover:bg-black`}
                        >
                          Select
                        </Link>
                      </div>
                    }
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RingSettings;
