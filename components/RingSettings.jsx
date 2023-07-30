import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import ImageSlider from "./ImageSlider";
import { getProducts, getCustomProduct } from "../sanity/sanity-utils";
import SettingsProductDetail from "./SettingsProductDetail";
import Carousel from "./Carousel";
import { chevronLeft } from "./constants";

const RingSettings = () => {
  const diamondContext = useContext(DiamondContext);
  const cartContext = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [openSettingDetail, setOpenSettingDetail] = useState(false);
  const [settingDetails, setSettingDetails] = useState({});

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

  const handleRingClick = (prod, imageAlts) => {
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
    setSettingDetails({
      name: prod.title,
      price: prod.variants[0].price,
      description: prod.description,
      images: imageSliderForDetail,
      variantData: prod.variants[0],
    });
    setOpenSettingDetail(true);
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container p-5 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {!openSettingDetail &&
            products.map((prod, i) => {
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
                <div key={prod._id} className="w-full">
                  <div
                    className="flex flex-col h-full"
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

                    {!openSettingDetail && (
                      <div className="flex flex-col justify-between mt-4 h-40 overflow-hidden">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {description}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {title}
                        </h2>
                        <p className="mt-1">{prod.variants[0].price}</p>
                        <button
                          onClick={() => {
                            handleRingClick(prod, imageAlts);
                          }}
                          className="flex mt-2 text-white text-center justify-center bg-slate-700 border-0 py-2 px-6 focus:outline-none hover:bg-slate-800 rounded"
                        >
                          Select
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
        {openSettingDetail && (
          <>
            <div
              className="flex items-center mt-4 ml-6 pb-4 hover:underline"
              onClick={() => {
                setOpenSettingDetail(false);
              }}
            >
              {chevronLeft} Back to catalog
            </div>
            <SettingsProductDetail
              name={settingDetails.name}
              price={settingDetails.price}
              description={settingDetails.description}
              images={settingDetails.images}
              variantData={settingDetails.variantData}
            ></SettingsProductDetail>
          </>
        )}
      </div>
    </section>
  );
};

export default RingSettings;
