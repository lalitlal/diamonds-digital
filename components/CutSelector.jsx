import React, { useContext, useState } from "react";
import { DiamondContext } from "./context/DiamondContext";

const CutSelector = () => {
  const { currentCutOptions, setCurrentCutOptions } =
    useContext(DiamondContext);

  const options = [
    { opt: "Ideal+Hearts" },
    { opt: "Ideal" },
    { opt: "Excellent" },
  ];

  return (
    <div className="mb-3">
      <div className="font-bold text-center text-gray-600">Cut</div>
      <div className="flex justify-center">
        {options.map((op, i) => {
          return (
            <div
              key={i}
              className={`${
                currentCutOptions.includes(i)
                  ? "text-indigo-700 border-indigo-700 border-b-2"
                  : "text-gray-600"
              } mr-4 hover:text-slate-300 hover:underline cursor-pointer tracking-tight`}
              onClick={() => {
                if (currentCutOptions.includes(i)) {
                  setCurrentCutOptions(
                    currentCutOptions.filter((op) => {
                      return op !== i;
                    })
                  );
                } else {
                  setCurrentCutOptions((currentCutOptions) => [
                    ...currentCutOptions,
                    i,
                  ]);
                }
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

export default CutSelector;
