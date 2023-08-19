import React, { useContext } from "react";
import { DiamondContext } from "./context/DiamondContext";
import { hiraBlackBG, hiraWhiteText, hiralightGrayText } from "./constants";

const MetalSelector = () => {
  const { bandColor, setBandColor } = useContext(DiamondContext);
  const options = [
    { opt: "Platinum", color: "bg-[#c7c7c7]" },
    {
      opt: "Yellow Gold",
      color: "bg-gradient-to-r from-[#c3a96a] to-[#c3a96a]",
    },
    {
      opt: "White Gold",
      color: "bg-gradient-to-r from-[#e8e8e8] to-[#e8e8e8]",
    },
    {
      opt: "Rose Gold",
      color: "bg-gradient-to-r from-[#c1937c] to-[#c1937c]",
    },
  ];
  return (
    <div className="justify-center mx-4">
      <div className={`text-left text-gray-600 ${hiralightGrayText} mb-2`}>
        Choose Metal
      </div>
      <div className="flex flex-wrap w-full justify-between ">
        {options.map((op, i) => {
          return (
            <div
              key={i}
              className={`mb-4 p-2 border border-black hover:text-slate-300 cursor-pointer tracking-tight ${
                op.opt === bandColor
                  ? `${hiraBlackBG} ${hiraWhiteText}`
                  : "text-gray-600"
              }`}
              style={{ width: "calc(50% - 0.4rem)" }} // Set a fixed width for each option container
              onClick={() => {
                setBandColor(op.opt);
              }}
            >
              <div class="flex">
                <button
                  className={`${op.color} mr-2 rounded-full w-6 h-6 focus:outline-none`}
                ></button>
                {op.opt}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MetalSelector;
