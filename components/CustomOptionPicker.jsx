import React, { useContext, useState } from "react";
import {
  borderHiraBlack,
  caretIcon,
  hiraDarkGrayText,
  hiraWhiteBG,
} from "./constants";
import { CartContext } from "./context/CartContext";
import { moreInfoIcon } from "./constants";
import RingSizeTable from "./RingSizeTable";

const CustomOptionPicker = ({
  options,
  value,
  setValue,
  placeholderText,
  title,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const cartContext = useContext(CartContext);

  return (
    <div className="">
      <div className="flex">
        <div className={`${hiraDarkGrayText}`}>{title}</div>
      </div>
      <div
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        className={`flex mt-2 mb-8 w-full justify-between text-center items-center py-2 text-black ${hiraWhiteBG} border ${borderHiraBlack} hover:cursor-pointer focus:outline-none active:bg-black focus:bg-black text-lg mb-2`}
      >
        <div className="ml-2">{value || placeholderText}</div>
        <div className="mr-2">{caretIcon}</div>
      </div>
      <div>
        <div className="relative">
          <div className="-mt-4">
            {showOptions && (
              <div className="absolute border pb-2 text-right border-black top-0 left-0 z-[60] bg-white shadow-2xl shadow-black w-full px-2 overflow-y-auto max-h-48">
                {options.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`text-left pt-2 hover:cursor-pointer ${
                        item === value ? "text-black" : "text-gray-400"
                      }`}
                      onClick={() => {
                        setValue(item);
                        setShowOptions(false);
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

export default CustomOptionPicker;
