import React, { useContext } from "react";
import CaratSelector from "./CaratSelector";
import ClaritySelector from "./ClaritySelector";
import ColorSelector from "./ColorSelector";
import { DiamondContext } from "./context/DiamondContext";
import CutSelector from "./CutSelector";
import NumericSlider from "./NumericSlider";
import PriceSelector from "./PriceSelector";
import ShapeSelector from "./ShapeSelector";
import StringSlider from "./StringSlider";
import { clarityMapping, colorMapping, cutMapping } from "./constants";

const DiamondFilter = () => {
  const diamondContext = useContext(DiamondContext);
  return (
    <div className="mx-10">
      <div className="flex justify-center mb-4">
        <ShapeSelector></ShapeSelector>
      </div>
      <div className="flex">
        <div className="w-1/2 mb-10">
          <div className="font-bold text-gray-600 text-center">Carat</div>
          <NumericSlider
            values={diamondContext.caratValue}
            setValues={diamondContext.setCaratValue}
            minValue={0}
            maxValue={12}
          ></NumericSlider>
          {/* <CaratSelector></CaratSelector> */}
        </div>
        <div className="w-1/2 mb-10">
          <div className="font-bold text-gray-600 text-center">Price</div>
          <NumericSlider
            values={diamondContext.priceValue}
            setValues={diamondContext.setPriceValue}
            minValue={100}
            maxValue={75000}
          ></NumericSlider>
          {/* <PriceSelector></PriceSelector> */}
        </div>
      </div>
      <div className="flex">
        <div className=" w-1/3 mb-10">
          <div className="font-bold text-center text-gray-600">Color</div>
          <StringSlider
            values={diamondContext.colorValue}
            setValues={diamondContext.setColorValue}
            minValue={0}
            maxValue={9}
            marks={colorMapping}
          ></StringSlider>
          {/* <ColorSelector></ColorSelector> */}
        </div>
        <div className="w-1/3 mb-10">
          <div className="font-bold text-center text-gray-600">Clarity</div>
          <StringSlider
            values={diamondContext.clarityValue}
            setValues={diamondContext.setClarityValue}
            minValue={0}
            maxValue={9}
            marks={clarityMapping}
          ></StringSlider>
          {/* <ClaritySelector></ClaritySelector> */}
        </div>
        <div className="w-1/3 mb-10">
          <div className="font-bold text-center text-gray-600">Cut</div>
          <StringSlider
            values={diamondContext.cutValue}
            setValues={diamondContext.setCutValue}
            minValue={0}
            maxValue={4}
            marks={cutMapping}
          ></StringSlider>
          {/* <CutSelector></CutSelector> */}
        </div>
      </div>
    </div>
  );
};

export default DiamondFilter;
