import React, { useContext, useState, useEffect } from "react";
import { DiamondContext } from "./context/DiamondContext";
import {
  hiraBlackBG,
  hiraDarkBrownBG,
  hiraEmeraldBG,
  hiraGray,
  hiraGrayBG,
  hiralightGray,
} from "./constants";
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
    <div className="flex justify-between">
      {Object.entries(shapes).map(([key, value], i) => {
        return (
          <div
            key={i}
            className={`p-2 cursor-pointer transform transition-transform ${
              currentShapeOptions.includes(key)
                ? `border-black text-white ${hiraEmeraldBG}`
                : `text-black ${hiraGrayBG}`
            }`}
            onClick={() => handleClick(key)}
          >
            <div className="text-black max-w-full h-auto">
              {shapes[key].svg}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShapeSelector;
