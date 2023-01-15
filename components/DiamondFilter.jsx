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
      <ShapeSelector></ShapeSelector>
      <CaratSelector></CaratSelector>
      <PriceSelector></PriceSelector>
      <ColorSelector></ColorSelector>
      <ClaritySelector></ClaritySelector>
      <CutSelector></CutSelector>
    </div>
  );
};

export default DiamondFilter;
