import React, { useContext, useState } from "react";
import { DiamondContext } from "./context/DiamondContext";
import NumericSlider from "./NumericSlider";
import ShapeSelector from "./ShapeSelector";
import StringSlider from "./StringSlider";
import {
  clarityMapping,
  colorMapping,
  cutMapping,
  hiraBlackBG,
  hiraSlate,
  xIcon,
} from "./constants";
import TileGrid from "./TileGridSelector";

const FullDiamondFilterPage = () => {
  const diamondContext = useContext(DiamondContext);
  const [showColorInfo, setShowColorInfo] = useState(false);
  const [showClarityInfo, setshowClarityInfo] = useState(false);
  const [showCutInfo, setShowCutInfo] = useState(false);

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
    diamondContext.showAdvancedFilter && (
      <div className="bg-white z-[50] fixed inset-0 left-0 top-0 overflow-y-scroll">
        <div className="mx-4 mt-4 mb-20">
          <div className="flex justify-between border-black border-b">
            <div>Diamonds Filter</div>
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                diamondContext.setShowAdvancedFilter(false);
              }}
            >
              {xIcon}
            </div>
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
          </div>

          <div className="flex-col w-full">
            <div className="">
              <div className="text-left text-gray-600 flex">
                Color
                <div
                  onClick={() => {
                    setShowColorInfo(!showColorInfo);
                  }}
                >
                  {moreInfoIcon}
                </div>
              </div>
              <div className="relative">
                {showColorInfo && (
                  <div className="flex absolute border border-black top-0 left-0 z-[60] bg-white shadow-2xl shadow-black w-3/4 px-2">
                    Some Color Info box!It enim ad minim, veniam, quis nostrud
                    excercitation some other stuff too because I am the coolest
                    color guy in the world
                  </div>
                )}
                <TileGrid
                  data={Object.values(colorMapping)}
                  listState={diamondContext.currentColorOptions}
                  setListState={diamondContext.setCurrentColorOptions}
                ></TileGrid>
              </div>

              <div className="text-left text-gray-600 flex ">
                Clarity
                <div
                  onClick={() => {
                    setshowClarityInfo(!showClarityInfo);
                  }}
                >
                  {moreInfoIcon}
                </div>
              </div>
              <div>
                <div className="relative">
                  {showClarityInfo && (
                    <div className="flex absolute border border-black top-0 left-0 z-[60] bg-white shadow-2xl shadow-black w-3/4 px-2">
                      Some clarity Info box!It enim ad minim, veniam, quis
                      nostrud excercitation some other stuff too because I am
                      the coolest clarity guy in the world
                    </div>
                  )}
                  <TileGrid
                    data={Object.values(clarityMapping)}
                    listState={diamondContext.currentClarityOptions}
                    setListState={diamondContext.setCurrentClarityOptions}
                  ></TileGrid>
                </div>
              </div>
            </div>
            <div className="w-full mb-12">
              <div className="text-left text-gray-600 mb-2 flex">
                Cut
                <div
                  onClick={() => {
                    setShowCutInfo(!showCutInfo);
                  }}
                >
                  {moreInfoIcon}
                </div>
              </div>
              <div className="relative">
                {showCutInfo && (
                  <div className="flex absolute border border-black top-0 left-0 z-[60] bg-white shadow-2xl shadow-black w-3/4 px-2">
                    Some cut Info box!It enim ad minim, veniam, quis nostrud
                    excercitation some other stuff too because I am the coolest
                    cut guy in the world
                  </div>
                )}
                <StringSlider
                  values={diamondContext.cutValue}
                  setValues={diamondContext.setCutValue}
                  minValue={0}
                  maxValue={3}
                  marks={cutMapping}
                ></StringSlider>
              </div>
              {/* <CutSelector></CutSelector> */}
            </div>
            <div className="py-5 border-t">
              <div className="flex justify-center py-2 mb-12">
                <div
                  className="flex border hover:bg-gray-300 transition ease-in-out duration-300 w-full items-center text-center justify-center hover:cursor-pointer"
                  onClick={() => {
                    clearFilters();
                  }}
                >
                  Clear filters
                </div>
                <div
                  className={`flex transition ease-in-out duration-300 w-full text-center justify-center text-white ${hiraBlackBG} py-2 focus:outline-none hover:bg-gray-600 text-lg hover:cursor-pointer`}
                  onClick={() => {
                    setShowColorInfo(false);
                    setshowClarityInfo(false);
                    setShowCutInfo(false);
                    diamondContext.setShowAdvancedFilter(false);
                  }}
                >
                  Save filters
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default FullDiamondFilterPage;
