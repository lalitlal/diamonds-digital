import React, { useContext, useState } from "react";
import { DiamondContext } from "./context/DiamondContext";

const MetalSelector = () => {
  const [currentOption, setCurrentOption] = useState(0);
  const { bandColor, setBandColor } = useContext(DiamondContext);
  const options = [
    { opt: "Platinum", color: "bg-slate-200" },
    {
      opt: "Yellow Gold",
      color: "bg-gradient-to-r from-amber-300 to-amber-600",
    },
    { opt: "White Gold", color: "bg-gradient-to-r from-gray-200 to-gray-300" },
    {
      opt: "Rose Gold",
      color: "bg-gradient-to-r from-orange-700 to-orange-800",
    },
  ];
  return (
    <div className="mb-3">
      <div className="font-bold text-center text-gray-600 mb-2">
        Choose Metal
      </div>
      <div className="flex justify-center">
        {options.map((op, i) => {
          return (
            <div
              key={i}
              className={`${
                op.opt === bandColor
                  ? "text-indigo-700 border-indigo-700 border-b-2"
                  : "text-gray-600"
              } mr-4 hover:text-slate-300 hover:underline cursor-pointer tracking-tight`}
              onClick={() => {
                // setCurrentOption(i);
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
