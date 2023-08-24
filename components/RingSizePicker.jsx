import React, { useContext, useState } from "react";
import {
  borderHiraBlack,
  caretIcon,
  hiraDarkGrayText,
  hiraWhiteBG,
} from "./constants";
import { CartContext } from "./context/CartContext";

const RingSizePicker = () => {
  const [showRingSizes, setShowRingSizes] = useState(false);
  const cartContext = useContext(CartContext);
  const ringSizes = [
    "2 (18, 2mm)",
    "2.5 (18, 2mm)",
    "3 (18, 2mm)",
    "3.5 (18, 2mm)",
    "4 (18, 2mm)",
    "4.5 (18, 2mm)",
    "5 (18, 2mm)",
  ];
  return (
    <div className="">
      <div className={`${hiraDarkGrayText}`}>Ring Size</div>
      <div
        onClick={() => {
          setShowRingSizes(!showRingSizes);
        }}
        className={`flex mt-2 mb-8 w-full justify-between text-center items-center py-2 text-black ${hiraWhiteBG} border ${borderHiraBlack} hover:cursor-pointer focus:outline-none active:bg-black focus:bg-black text-lg mb-2`}
      >
        <div className="ml-2">{cartContext.ringSize || "Choose Ring Size"}</div>
        <div className="mr-2">{caretIcon}</div>
      </div>
      <div>
        <div className="relative">
          <div className="-mt-4">
            {showRingSizes && (
              <div className="absolute border pb-2 text-right border-black top-0 left-0 z-[60] bg-white shadow-2xl shadow-black w-full px-2">
                {ringSizes.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`text-left pt-2 hover:cursor-pointer ${
                        item === cartContext.ringSize
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                      onClick={() => {
                        cartContext.setRingSize(item);
                        setShowRingSizes(false);
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

export default RingSizePicker;
