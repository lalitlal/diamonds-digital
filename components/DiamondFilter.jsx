import React from "react";
import CaratSelector from "./CaratSelector";
import ClaritySelector from "./ClaritySelector";
import ColorSelector from "./ColorSelector";
import CutSelector from "./CutSelector";
import PriceSelector from "./PriceSelector";
import ShapeSelector from "./ShapeSelector";

const DiamondFilter = () => {
  return (
    <div className="mx-10">
      <div className="mb-4">
        <ShapeSelector></ShapeSelector>
      </div>
      <div className="mb-10">
        <CaratSelector></CaratSelector>
      </div>
      <div className="mb-10">
        <PriceSelector></PriceSelector>
      </div>
      <div className="mb-10">
        <ColorSelector></ColorSelector>
      </div>
      <div className="mb-10">
        <ClaritySelector></ClaritySelector>
      </div>
      <div className="mb-4">
        <CutSelector></CutSelector>
      </div>
    </div>
  );
};

export default DiamondFilter;
