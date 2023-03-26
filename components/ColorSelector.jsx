import React, { useState } from "react";

const ColorSelector = () => {
  const [currentOption, setCurrentOption] = useState(0);
  const options = [{ opt: "DEF" }, { opt: "GHI" }, { opt: "JKL" }];
  return (
    <div className="mb-3">
      <div className="font-bold text-center text-gray-600">Color</div>
      <div className="flex justify-center">
        {options.map((op, i) => {
          return (
            <div
              key={i}
              className={`${
                i === currentOption
                  ? "text-indigo-700 border-indigo-700 border-b-2"
                  : "text-gray-600"
              } mr-4 hover:text-slate-300 hover:underline cursor-pointer tracking-tight`}
              onClick={() => {
                setCurrentOption(i);
              }}
            >
              {op.opt}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelector;
