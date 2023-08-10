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
  const listViewIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  const advancedFilter = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
      />
    </svg>
  );

  const moreInfoIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 ml-2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );

  const clearFilters = () => {
    diamondContext.setCaratValue([0, 12]);
    diamondContext.setPriceValue([100, 75000]);
    diamondContext.setCurrentColorOptions([]);
    diamondContext.setCurrentClarityOptions([]);
    // diamondContext.setCurrentCutOptions([])
    // diamondContext.setColorValue([0, 9]);
    // diamondContext.setClarityValue([0, 9]);
    diamondContext.setCutValue([0, 4]);
    diamondContext.setCurrentShapeOptions([]);
  };

  return (
    <div className="mx-4">
      <div className="flex justify-center">
        <ShapeSelector></ShapeSelector>
      </div>
      <div className="flex-col w-full mt-8">
        <div className="mb-5">
          <div className="flex text-gray-600">Carat</div>
          <NumericSlider
            values={diamondContext.caratValue}
            setValues={diamondContext.setCaratValue}
            minValue={0}
            maxValue={12}
          ></NumericSlider>
          {/* <CaratSelector></CaratSelector> */}
        </div>
        <div className="mb-5">
          <div className="text-gray-600 flex">Price</div>
          <NumericSlider
            values={diamondContext.priceValue}
            setValues={diamondContext.setPriceValue}
            minValue={100}
            maxValue={75000}
          ></NumericSlider>
          {/* <PriceSelector></PriceSelector> */}
        </div>
        <div className="w-full flex justify-between">
          <div className="flex justify-between text-center items-center">
            <div>{listViewIcon}</div>
            <div>{listViewIcon}</div>
          </div>
          <div
            className="border border-black px-4 py-2 hover:cursor-pointer flex items-center space-x-4"
            onClick={() => {
              setShowAdvancedFilter(!showAdvancedFilter);
            }}
          >
            <div>Filters</div>
            <div>{advancedFilter}</div>
          </div>
        </div>
      </div>
      {showAdvancedFilter && (
        <div className="flex-col w-full">
          <div className="">
            <div className="text-left text-gray-600 flex">
              Color {moreInfoIcon}
            </div>
            <div className="">
              <TileGrid
                data={Object.values(colorMapping)}
                listState={diamondContext.currentColorOptions}
                setListState={diamondContext.setCurrentColorOptions}
              ></TileGrid>
            </div>

            <div className="text-left text-gray-600 flex ">
              Clarity {moreInfoIcon}
            </div>
            <div>
              <TileGrid
                data={Object.values(clarityMapping)}
                listState={diamondContext.currentClarityOptions}
                setListState={diamondContext.setCurrentClarityOptions}
              ></TileGrid>
            </div>
          </div>
          <div className="w-full mb-16">
            <div className="text-left text-gray-600 mb-2 flex">
              Cut {moreInfoIcon}
            </div>
            <StringSlider
              values={diamondContext.cutValue}
              setValues={diamondContext.setCutValue}
              minValue={0}
              maxValue={3}
              marks={cutMapping}
            ></StringSlider>
            {/* <CutSelector></CutSelector> */}
          </div>
          <div className="py-5 border-t">
            <div className="flex justify-center py-2">
              <div
                className="flex border hover:bg-gray-300 transition ease-in-out duration-300 w-full items-center text-center justify-center hover:cursor-pointer"
                onClick={() => {
                  clearFilters();
                }}
              >
                Clear filters
              </div>
              <div
                className={`flex transition ease-in-out duration-300 w-full text-center justify-center text-white bg-slate-700 py-2 focus:outline-none hover:bg-gray-600 text-lg hover:cursor-pointer`}
                onClick={() => {
                  setShowAdvancedFilter(false);
                }}
              >
                Save filters
              </div>
            </div>
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
