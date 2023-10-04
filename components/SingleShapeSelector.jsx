import React, { useContext, useEffect, useState } from "react";
import { DiamondContext } from "./context/DiamondContext";
import {
  hiraBlackBG,
  hiraDarkBrownBG,
  hiraEmeraldBG,
  hiraGray,
  hiraGrayBG,
  hiralightGray,
} from "./constants";

const SingleShapeSelector = ({ singular = true }) => {
  const {
    currentShapeOptions,
    setCurrentShapeOptions,
    currentSettingDiamondShape,
    setCurrentSettingDiamondShape,
    shapes,
  } = useContext(DiamondContext);

  const handleClick = (shapeKey) => {
    if (!singular) {
      if (currentShapeOptions.includes(shapeKey.name)) {
        setCurrentShapeOptions(
          currentShapeOptions.filter((op) => {
            return op !== shapeKey.name;
          })
        );
      } else {
        setCurrentShapeOptions((currentShapeOptions) => [
          ...currentShapeOptions,
          shapeKey,
        ]);
      }
    } else {
      // const uppercased = shapeKey.charAt(0).toUpperCase() + shapeKey.slice(1);
      setCurrentSettingDiamondShape(shapeKey);
    }
  };

  return (
    <div>
      {/* <div className="mb-2 text-center font-bold text-gray-600">Shape</div> */}
      <div className="">
        <div className="flex justify-between w-full md:w-full">
          {Object.entries(shapes).map(([key, value], i) => {
            return (
              <div
                key={i}
                className={`p-2 cursor-pointer transform transition-transform ${
                  currentSettingDiamondShape === key
                    ? `border-black text-white ${hiraEmeraldBG}`
                    : `text-black ${hiraGrayBG}`
                }`}
                onClick={() => handleClick(key)}
              >
                {shapes[key].svg}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleShapeSelector;
