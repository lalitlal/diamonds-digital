import React, { useContext, useState } from "react";
import CaratSelector from "./CaratSelector";
import ClaritySelector from "./ClaritySelector";
import ColorSelector from "./ColorSelector";
import { DiamondContext } from "./context/DiamondContext";
import CutSelector from "./CutSelector";
import NumericSlider from "./NumericSlider";
import PriceSelector from "./PriceSelector";
import ShapeSelector from "./ShapeSelector";
import StringSlider from "./StringSlider";
import {
  clarityMapping,
  colorMapping,
  cutMapping,
  hiraSlate,
} from "./constants";
import TileGrid from "./TileGridSelector";

const DiamondFilter = () => {
  const diamondContext = useContext(DiamondContext);
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);
  return (
    <div className="mx-5">
      <div className="flex justify-center">
        <ShapeSelector></ShapeSelector>
      </div>
      <div className="w-full flex justify-end md:justify-center">
        <div
          className="border border-black px-8 py-2 mt-5 hover:cursor-pointer"
          onClick={() => {
            setShowAdvancedFilter(!showAdvancedFilter);
          }}
        >
          Filters
        </div>
      </div>
      <div className="flex-col w-full">
        <div className="mb-2">
          <div className="text-gray-600 -mb-3">Carat</div>
          <NumericSlider
            values={diamondContext.caratValue}
            setValues={diamondContext.setCaratValue}
            minValue={0}
            maxValue={12}
          ></NumericSlider>
          {/* <CaratSelector></CaratSelector> */}
        </div>
        <div className="mb-5">
          <div className="text-gray-600 -mb-3">Price</div>
          <NumericSlider
            values={diamondContext.priceValue}
            setValues={diamondContext.setPriceValue}
            minValue={100}
            maxValue={75000}
          ></NumericSlider>
          {/* <PriceSelector></PriceSelector> */}
        </div>
      </div>
      {showAdvancedFilter && (
        <div className="flex-col">
          <div className="">
            <div className="text-left text-gray-600">Color</div>
            <TileGrid
              data={Object.values(colorMapping)}
              listState={diamondContext.currentColorOptions}
              setListState={diamondContext.setCurrentColorOptions}
            ></TileGrid>

            <div className="text-left text-gray-600">Clarity</div>
            <TileGrid
              data={Object.values(clarityMapping)}
              listState={diamondContext.currentClarityOptions}
              setListState={diamondContext.setCurrentClarityOptions}
            ></TileGrid>
          </div>
          <div className="mb-10">
            <div className="text-left text-gray-600 mb-2">Cut</div>
            <StringSlider
              values={diamondContext.cutValue}
              setValues={diamondContext.setCutValue}
              minValue={0}
              maxValue={4}
              marks={cutMapping}
            ></StringSlider>
            {/* <CutSelector></CutSelector> */}
          </div>
          <div
            className={`flex w-full text-center justify-center text-white bg-slate-700 py-2 px-8 focus:outline-none hover:bg-gray-600 text-lg my-3`}
            onClick={() => {
              setShowAdvancedFilter(false);
            }}
          >
            Save filters
          </div>
        </div>
      )}
    </div>
  );
};

export default DiamondFilter;
{
  /* <StringSlider
            values={diamondContext.colorValue}
            setValues={diamondContext.setColorValue}
            minValue={0}
            maxValue={9}
            marks={colorMapping}
          ></StringSlider> */
}
{
  /* <ColorSelector></ColorSelector>
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
          {/* <ClaritySelector></ClaritySelector> */
}
