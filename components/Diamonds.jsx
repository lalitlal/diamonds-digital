import Link from "next/link";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import getDiamonds from "../lib/GetDiamonds";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import ProductDetail from "../components/ProductDetail";

const Diamonds = () => {
  const marginMultiplier = 1.25;
  const caret = (
    <svg
      fill="none"
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M6 9l6 6 6-6"></path>
    </svg>
  );
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedRow, setSelectedRow] = useState(undefined);
  const default_diamond_data = [
    {
      shape: "Oval",
      carat: 2.5,
      color: "F",
      clarity: "VVS1",
      cut: "Super Ideal",
      price: "9993",
    },
    {
      shape: "Princess",
      carat: 3.3,
      color: "E",
      clarity: "VS2",
      cut: "Excellent",
      price: "4560",
    },
    {
      shape: "Emerald",
      carat: 1.5,
      color: "F",
      clarity: "SI",
      cut: "Ideal",
      price: "7640",
    },
    {
      shape: "Round",
      carat: 2.86,
      color: "D",
      clarity: "VVS1",
      cut: "Ideal",
      price: "4550",
    },
  ];

  let post_body = useMemo(() => {
    return {
      data: {
        imgOnly: true,
        view: "list",
        priceMin: 150,
        priceMax: 750000,
        caratMin: 0.15,
        caratMax: 12,
        cutMin: 0,
        cutMax: 4,
        colorMin: 0,
        colorMax: 9,
        clarityMin: 0,
        clarityMax: 9,
        depthMin: 0,
        depthMax: 100,
        tableMin: 0,
        tableMax: 93,
        shapeList: [],
        certificateList: [],
        sort: 0,
        polish: [],
        symmetry: [],
        fluor: [],
        sort_order: null,
        pager: 0,
      },
    };
  }, []);

  const [diamondData, setDiamondData] = useState([]);
  const [postBody, setPostBody] = useState(post_body);
  const cartContext = useContext(CartContext);
  const diamondContext = useContext(DiamondContext);
  const divRef = useRef(null);

  useEffect(() => {
    const handleDiamondFilters = () => {
      post_body.data.shapeList = diamondContext.currentShapeOptions;
      post_body.data.caratMin = diamondContext.caratValue[0];
      post_body.data.caratMax = diamondContext.caratValue[1];
      post_body.data.colorMin = diamondContext.colorValue[0];
      post_body.data.colorMax = diamondContext.colorValue[1];
      post_body.data.clarityMin = diamondContext.clarityValue[0];
      post_body.data.clarityMax = diamondContext.clarityValue[1];
      post_body.data.priceMin = diamondContext.priceValue[0];
      post_body.data.priceMax = diamondContext.priceValue[1];
      post_body.data.cutMin = diamondContext.cutValue[0];
      post_body.data.cutMax = diamondContext.cutValue[1];
    };

    const getDiamondFunc = async () => {
      try {
        const res = await getDiamonds(postBody);
        if (res.status === 200) {
          const res_json = await res.json();
          setDiamondData(res_json.diamonds);
        }
      } catch (e) {
        console.log("failed fetching from backend: ", e);
      }
    };

    // Handle filtering the data now!
    handleDiamondFilters();
    setPostBody(post_body);
    getDiamondFunc();
  }, [
    postBody,
    post_body,
    diamondContext.currentShapeOptions,
    diamondContext.caratValue,
    diamondContext.cutValue,
    diamondContext.priceValue,
    diamondContext.clarityValue,
    diamondContext.colorValue,
  ]);

  const scrollToBottom = () => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const clearFilters = () => {
    diamondContext.setCaratValue([0, 12]);
    diamondContext.setPriceValue([100, 75000]);
    diamondContext.setColorValue([0, 9]);
    diamondContext.setClarityValue([0, 9]);
    diamondContext.setCutValue([0, 4]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedRow, showProductDetail]);

  return (
    <div className="py-4 px-2 bg-[#48565c] mx-5">
      <section className="py-1 h-screen overflow-y-scroll">
        <div className="w-full mb-12 xl:mb-0 px-1 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    All Diamonds
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button
                    className="bg-slate-500 text-white active:bg-slate-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      clearFilters();
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
            <div className="flex overflow-x-auto w-full">
              <div className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/6">
                Shape
              </div>
              <div className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/6">
                Carat
              </div>
              <div className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/6">
                Color
              </div>
              <div className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/6">
                Clarity
              </div>
              <div className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/6">
                Cut
              </div>
              <div className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/6">
                Price
              </div>
            </div>
            <div>
              {diamondData.map((data, i) => {
                data.price = data.price * marginMultiplier;
                return (
                  <>
                    <div
                      key={data + i}
                      className="flex hover:bg-indigo-300 transition duration-200 ease-in-out cursor-pointer w-full"
                      onClick={() => {
                        if (selectedRow === i) {
                          setShowProductDetail(false);
                          setSelectedRow(undefined);
                        } else {
                          setShowProductDetail(true);
                          setSelectedRow(i);
                        }
                      }}
                    >
                      {selectedRow === i && <div ref={divRef}></div>}
                      <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 w-1/6 text-center text-indigo-700">
                        {data.shape}
                      </div>
                      <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 w-1/6 text-center ">
                        {data.carat}
                      </div>
                      <div className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 w-1/6 text-center">
                        {data.color}
                      </div>
                      <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 w-1/6 text-center">
                        {data.clarity}
                      </div>
                      <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 w-1/6 text-center">
                        {data.cut}
                      </div>
                      <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 w-1/6 text-center">
                        {`CA$${data.price}`}
                      </div>
                    </div>
                    <div
                      className={`${selectedRow === i ? "" : "hidden"} w-full`}
                    >
                      {showProductDetail && (
                        <>
                          <ProductDetail
                            shape={data.shape}
                            carat={data.carat}
                            color={data.color}
                            clarity={data.clarity}
                            cut={data.cut}
                            price={data.price}
                            data={data}
                          ></ProductDetail>
                        </>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diamonds;
