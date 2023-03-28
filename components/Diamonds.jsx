import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import getDiamonds from "../lib/GetDiamonds";
import CartContext from "./context/CartContext";
import ProductDetail from "../components/ProductDetail";

const Diamonds = () => {
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
  const [shapeFilter, setShapeFilter] = useState("Oval");
  const [caratFilter, setCaratFilter] = useState(2.0);
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

  const post_body = {
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

  const [diamondData, setDiamondData] = useState(default_diamond_data);
  const [postBody, setPostBody] = useState(post_body);

  useEffect(() => {
    const getDiamondFunc = async () => {
      try {
        const res = await getDiamonds(
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          postBody
        );
        if (res.status === 200) {
          const res_json = await res.json();
          setDiamondData(res_json.diamonds);
        }
      } catch (e) {
        console.log("failed fetching from backend: ", e);
      }
    };

    getDiamondFunc();
  }, [postBody]);

  const cartContext = useContext(CartContext);
  const divRef = useRef(null);

  const scrollToBottom = () => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
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
                      {/* <div class="py-5">
                        <details class="group">
                          <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span
                              class="transition group-open:rotate-180"
                              onClick={() => {
                                setShowProductDetail(!showProductDetail);
                              }}
                            >
                              {caret}
                            </span>
                          </summary>
                          <div class="flex text-neutral-600 mt-3 mr-3 group-open:animate-fadeIn">
                            <Link href="/ringsettings">
                              <button
                                className="flex ml-auto text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded"
                                onClick={() => {
                                  const diamondStatus = `${data.shape} ${data.carat} ${data.color} ${data.clarity} ${data.cut}`;
                                  cartContext.setDiamond(diamondStatus);
                                  cartContext.setDiamondPrice(data.price);
                                }}
                              >
                                Select
                              </button>
                            </Link>
                          </div>
                        </details>
                      </div> */}
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
