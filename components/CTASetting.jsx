import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import Link from "next/link";
import {
  borderHiraBlack,
  hiraBlackBG,
  hiraWhiteBG,
  upperCaseFirstLetter,
} from "./constants";
import { DiamondContext } from "./context/DiamondContext";

const CTASetting = () => {
  const cartContext = useContext(CartContext);
  const diamondContext = useContext(DiamondContext);
  return (
    <div class="justify-center w-full items-center mb-4">
      <button
        class={`flex w-full justify-center py-2 text-black ${hiraWhiteBG} border ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg mb-2`}
        onClick={() => {
          cartContext.setShowBookingModal(!cartContext.showBookingModal);
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
          Complete Ring (CA$ {diamondContext.settingDetails.variantData.price})
        </button>
      </Link>
    </div>
  );
};

export default CTASetting;
