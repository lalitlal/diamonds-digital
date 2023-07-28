import React, { useContext, useState, useEffect } from "react";
import { DiamondContext } from "./context/DiamondContext";
import { hiraGray, hiralightGray } from "./constants";
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
      {/* <div className="mb-2 text-center font-bold text-gray-600">Shape</div> */}

      <div className="flex justify-evenly w-screen md:w-full">
        {Object.entries(shapes).map(([key, value], i) => {
          return (
            <div
              key={i}
              className={`px-1 ${
                currentShapeOptions.includes(key)
                  ? `text-${hiraGray} border-black border-b-2`
                  : `text-${hiralightGray}`
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
