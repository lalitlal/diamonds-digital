import React, { useContext, useEffect, useState } from "react";
import { DiamondContext } from "./context/DiamondContext";
import { hiraGray, hiralightGray } from "./constants";

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

      <div className="flex justify-evenly w-full">
        {Object.entries(shapes).map(([key, value], i) => {
          return (
            <div
              key={i}
              className={`px-1 ${
                currentSettingDiamondShape === key
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

export default SingleShapeSelector;
