import React, { useContext, useEffect, useState } from "react";
import { DiamondContext } from "./context/DiamondContext";
import {
  hiraBlackBG,
  hiraDarkBrownBG,
  hiraEmeraldBG,
  hiraWhiteText,
  hiralightGrayText,
} from "./constants";

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

  const largeBreakpoint = 1024; // Define your large breakpoint in pixels
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > largeBreakpoint);
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="justify-center mt-3">
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
                  ? `${hiraEmeraldBG} ${hiraWhiteText}`
                  : "text-gray-600"
              }`}
              style={{
                width: !isLargeScreen ? `calc(50% - 0.4rem)` : "calc(100%)",
              }} // Set a fixed width for each option container
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
