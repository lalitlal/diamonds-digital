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
            marks={{
              0: "M",
              1: "L",
              2: "K",
              3: "J",
              4: "I",
              5: "H",
              6: "G",
              7: "F",
              8: "E",
              9: "D",
            }}
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
            marks={{
              0: "I1",
              1: "SI3",
              2: "SI2",
              3: "SI1",
              4: "VS2",
              5: "VS1",
              6: "VVS2",
              7: "VVS1",
              8: "IF",
              9: "FL",
            }}
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
            marks={{
              0: "Good",
              1: "Very Good",
              2: "Excellent",
              3: "Ideal",
              4: "Super Ideal",
            }}
          ></StringSlider>
          {/* <CutSelector></CutSelector> */}
        </div>
      </div>
    </div>
  );
};

export default DiamondFilter;
