import React from "react";

const PriceSelector = () => {
  return (
    <div>
      <div className="font-bold text-gray-600">Price</div>
      <div className="flex flex-col space-y-2 p-2">
        <input type="range" className="w-full" min="1" max="11.0" step="0.1" />
      </div>
    </div>
  );
};

export default PriceSelector;
