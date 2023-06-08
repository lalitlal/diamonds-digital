import React, { useContext, useState } from "react";
import { DiamondContext } from "./context/DiamondContext";

const ShapeSelector = ({ singular = false }) => {
  const {
    currentShapeOptions,
    setCurrentShapeOptions,
    setCurrentSettingDiamondShape,
    shapes,
  } = useContext(DiamondContext);

  const handleClick = (key) => {
    if (!singular) {
      if (currentShapeOptions.includes(shapes[key].name)) {
        setCurrentShapeOptions(
          currentShapeOptions.filter((op) => {
            return op !== shapes[key].name;
          })
        );
      } else {
        setCurrentShapeOptions((currentShapeOptions) => [
          ...currentShapeOptions,
          shapes[key].name,
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
                currentShapeOptions.includes(shapes[key].name)
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
