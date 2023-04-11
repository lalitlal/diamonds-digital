import React, { useContext, useState } from "react";
import { DiamondContext } from "./context/DiamondContext";

const ClaritySelector = () => {
  const { currentClarityOptions, setCurrentClarityOptions } =
    useContext(DiamondContext);
  const options = [{ opt: "SI" }, { opt: "VS" }, { opt: "VVS" }];

  return (
    <div className="mb-3">
      <div className="font-bold text-center text-gray-600">Clarity</div>
      <div className="flex justify-center">
        {options.map((op, i) => {
          return (
            <div
              key={i}
              className={`${
                currentClarityOptions.includes(i)
                  ? "text-indigo-700 border-indigo-700 border-b-2"
                  : "text-gray-600"
              } mr-4 hover:text-slate-300 hover:underline cursor-pointer tracking-tight"`}
              onClick={() => {
                if (currentClarityOptions.includes(i)) {
                  setCurrentClarityOptions(
                    currentClarityOptions.filter((op) => {
                      return op !== i;
                    })
                  );
                } else {
                  setCurrentClarityOptions((currentOptions) => [
                    ...currentOptions,
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

export default ClaritySelector;
