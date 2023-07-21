import React, { useContext, useEffect, useState } from "react";
import { DiamondContext } from "./context/DiamondContext";

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
      <div className="mb-2 text-center font-bold text-gray-600">Shape</div>

      <div className="flex flex-wrap justify-start w-full items-stretch">
        {Object.entries(shapes).map(([key, value], i) => {
          return (
            <div
              key={i}
              className={`${
                currentSettingDiamondShape === key
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

export default SingleShapeSelector;
