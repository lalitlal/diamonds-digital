import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import Carousel from "./Carousel";
import { borderHiraBlack, hiraBlackBG, hiraWhiteBG } from "./constants";

const SettingsProductDetail = ({}) => {
  const cartContext = useContext(CartContext);
  const diamondContext = useContext(DiamondContext);

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
              {/* <div class="justify-center w-full">
              <Link href="/ringsettings">
                <button
                  class={`flex w-full justify-center py-2 text-black ${hiraWhiteBG} border ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg mb-2`}
                  onClick={() => {
                    console.log("Speak to expert clicked");
                  }}
                >
                  Speak to an expert
                </button>
                <button
                  class={`flex w-full justify-center py-2 text-white ${hiraBlackBG} focus:outline-none active:bg-black focus:bg-black text-lg`}
                  onClick={() => {
                    const diamondStatus = `${shape} ${data.diamond.certificate.carats} ${data.diamond.certificate.color} ${data.diamond.certificate.clarity} ${data.diamond.certificate.cut}`;
                    cartContext.setDiamond(diamondStatus);
                    cartContext.setDiamondPrice(data.price);
                    diamondContext.setCurrentSettingDiamondShape(
                      shape.toLowerCase()
                    );
                    diamondContext.setSelectedDiamondShape(shape.toLowerCase());
                    cartContext.setDiamondShape(shape.toLowerCase());
                    diamondContext.setDiamondJustSelected(true);
                  }}
                >
                  Add to ring (CA$ {data.price})
                </button>
              </Link>
            </div> */}
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
