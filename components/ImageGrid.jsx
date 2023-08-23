import React, { useState } from "react";
import {
  chevronLeft,
  chevronRight,
  hiraBlackBG,
  minSwipeDistance,
} from "./constants";
import Image from "next/image";

const ImageGrid = ({ images }) => {
  return (
    <div className="mb-4 mr-2">
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, index) => (
          <div key={index} className="w-full items-center">
            {/* Apply CSS styles to control image dimensions */}
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="border border-black"
              width={"100%"}
              height={"100%"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
