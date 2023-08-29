import React, { useContext, useEffect, useState } from "react";
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
  hiralightGrayBGMD,
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

  const largeBreakpoint = 1024; // Define your large breakpoint in pixels
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > largeBreakpoint);
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`mx-4`}>
      <div className={`w-full`}>
        {isLargeScreen && <ShapeSelector></ShapeSelector>}
        {(diamondContext.showAdvancedFilter || isLargeScreen) && (
          <div
            className={`z-[50] ${
              isLargeScreen ? `` : "bg-white fixed inset-0 left-0 top-0"
            }`}
          >
            <div className="mx-4 mt-4 mb-20">
              {!isLargeScreen && (
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
              )}
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
                      <div className="flex flex-col absolute border border-black top-0 left-0 z-[60] bg-white shadow-2xl shadow-black w-fit lg:w-full">
                        <div className="w-full flex h-full">
                          <div className="flex flex-col bg-white text-center justify-center px-2">
                            <div className="flex text-center justify-center">
                              <div className="px-1">D</div>
                              <div className="px-1">E</div>
                              <div className="px-1">F</div>
                            </div>
                            <div className="text-center justify-center">
                              Colorless
                            </div>
                          </div>
                          <div className="flex flex-col bg-yellow-50 bg-opacity-25 text-center justify-center px-2 border-l border-r">
                            <div className="flex text-center justify-center">
                              <div className="px-1">G</div>
                              <div className="px-1">H</div>
                              <div className="px-1">I</div>
                              <div className="px-1">J</div>
                            </div>
                            <div className="flex text-center justify-center">
                              Near Colorless
                            </div>
                          </div>
                          <div className="flex flex-col bg-yellow-50 bg-opacity-60 text-center justify-center px-2">
                            <div className="flex text-center justify-center">
                              <div className="px-1">K</div>
                              <div className="px-1">L</div>
                              <div className="px-1">M</div>
                            </div>
                            <div>Faint</div>
                          </div>
                        </div>
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
                        <div className="flex flex-col absolute border border-black top-0 left-0 z-[60] bg-white shadow-2xl shadow-black w-full lg:w-fit text-xs">
                          <div className="w-full flex h-full">
                            <div className="flex flex-col bg-white text-center justify-center px-2">
                              <div className="flex text-center justify-center">
                                <div className="px-1">FL</div>
                              </div>
                              <div className="text-center justify-center">
                                Flawless
                              </div>
                            </div>
                            <div className="flex flex-col bg-yellow-50 bg-opacity-25 text-center justify-center px-2 border-l border-r">
                              <div className="flex text-center justify-center">
                                <div className="px-1">IF</div>
                              </div>
                              <div className="flex text-center justify-center">
                                Internally Flawless
                              </div>
                            </div>
                            <div className="flex flex-col bg-yellow-50 bg-opacity-60 text-center justify-center px-2 border-r">
                              <div className="flex text-center justify-center">
                                <div className="px-1">VVS1</div>
                                <div className="px-1">VVS2</div>
                              </div>
                              <div>Very Very Slightly Included</div>
                            </div>
                            <div className="flex flex-col bg-yellow-50 bg-opacity-60 text-center justify-center px-2">
                              <div className="flex text-center justify-center">
                                <div className="px-1">VS1</div>
                                <div className="px-1">VS2</div>
                              </div>
                              <div>Very Slightly Included</div>
                            </div>
                            {/* <div className="flex flex-col bg-yellow-50 bg-opacity-60 text-center justify-center px-2">
                              <div className="flex text-center justify-center">
                                <div className="px-1">S1</div>
                                <div className="px-1">S1</div>
                              </div>
                              <div>Slightly Included</div>
                            </div> */}
                          </div>
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
                      <div className="flex flex-col absolute border border-black top-0 left-0 z-[60] bg-white shadow-2xl shadow-black lg:w-96 text-xs">
                        <div className="w-full flex h-full">
                          <div className="flex flex-col bg-white text-center justify-center px-2">
                            <div className="flex text-center justify-center mb-2">
                              <div className="px-1">Ideal</div>
                            </div>
                            <div className="text-center justify-center">
                              Maximum light reflection and brilliance.
                            </div>
                          </div>
                          <div className="flex flex-col bg-yellow-50 bg-opacity-25 text-center justify-center px-2 border-l border-r">
                            <div className="flex text-center justify-center mb-2">
                              <div className="px-1">Excellent</div>
                            </div>
                            <div className="flex text-center justify-center">
                              Almost maximum light reflection and brilliance.
                            </div>
                          </div>
                          <div className="flex flex-col bg-yellow-50 bg-opacity-60 text-center justify-center px-2">
                            <div className="flex text-center justify-center mb-2">
                              <div className="px-1">Very Good</div>
                            </div>
                            <div>
                              Cost-effective yet outstanding reflection.
                            </div>
                          </div>
                        </div>
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
                        diamondContext.setRunQuery(!diamondContext.runQuery);
                      }}
                    >
                      Save filters
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullDiamondFilterPage;
