import React, { useContext, useState } from "react";
import {
  borderHiraBlack,
  caretIcon,
  hiraDarkGrayText,
  hiraWhiteBG,
} from "./constants";
import { CartContext } from "./context/CartContext";

const RingKaratPicker = () => {
  const [showRingKarats, setShowRingKarats] = useState(false);
  const cartContext = useContext(CartContext);
  const ringKarats = ["14k", "18k"];
  return (
    <div className="">
      <div className={`${hiraDarkGrayText}`}>Ring Karat</div>
      <div
        onClick={() => {
          setShowRingKarats(!showRingKarats);
        }}
        className={`flex mt-2 mb-8 w-full justify-between text-center items-center py-2 text-black ${hiraWhiteBG} border ${borderHiraBlack} hover:cursor-pointer focus:outline-none active:bg-black focus:bg-black text-lg mb-2`}
      >
        <div className="ml-2">
          {cartContext.ringKarats || "Choose Ring Karat"}
        </div>
        <div className="mr-2">{caretIcon}</div>
      </div>
      <div>
        <div className="relative">
          <div className="-mt-4">
            {showRingKarats && (
              <div className="absolute border pb-2 text-right border-black top-0 left-0 z-[60] bg-white shadow-2xl shadow-black w-full px-2">
                {ringKarats.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`text-left pt-2 hover:cursor-pointer ${
                        item === cartContext.ringKarats
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                      onClick={() => {
                        cartContext.setRingKarats(item);
                        setShowRingKarats(false);
                      }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RingKaratPicker;
