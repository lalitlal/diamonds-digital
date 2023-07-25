import React, { useContext, useState, useEffect } from "react";
import { DiamondContext } from "./context/DiamondContext";
const ShapeSelector = ({ singular = false }) => {
  const {
    currentSettingDiamondShape,
    currentShapeOptions,
    setCurrentShapeOptions,
    setCurrentSettingDiamondShape,
    shapes,
  } = useContext(DiamondContext);

  const handleClick = (key) => {
    if (!singular) {
      if (currentShapeOptions.includes(key)) {
        setCurrentShapeOptions(
          currentShapeOptions.filter((op) => {
            return op !== key;
          })
        );
      } else {
        setCurrentShapeOptions((currentShapeOptions) => [
          ...currentShapeOptions,
          key,
        ]);
      }
    } else {
      setCurrentSettingDiamondShape(shapes[key].name);
    }
  };

  return (
    <div>
      <div className="mb-2 text-center font-bold text-gray-600">Shape</div>

      <div className="flex flex-wrap justify-start w-full items-stretch">
        {Object.entries(shapes).map(([key, value], i) => {
          return (
            <div
              key={i}
              className={`${
                currentShapeOptions.includes(key)
                  ? "text-indigo-700 border-indigo-700 border-b-2"
                  : "text-gray-600"
              }`}
              onClick={() => handleClick(key)}
            >
              {shapes[key].svg}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShapeSelector;
