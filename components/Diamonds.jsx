import Link from "next/link";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import getDiamonds from "../lib/GetDiamonds";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import ProductDetail from "../components/ProductDetail";
import {
  bulkUploadDiamondsToSanity,
  getCurrentDiamondsSanity,
} from "../sanity/sanity-utils";
import {
  clarityMapping,
  colorMapping,
  cutMapping,
  shapes,
  stoneMapping,
  stoneNameToIndexMapping,
} from "./constants";
import DiamondsTable from "./DiamondsTable";

const Diamonds = () => {
  // const [showProductDetail, setShowProductDetail] = useState(false);
  // const [selectedRow, setSelectedRow] = useState(undefined);

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

  const findMinimumMaxMappedIndexFromListFilter = (listFilter, mapping) => {
    const indixes = listFilter.map((clarity) => {
      const index = Object.keys(mapping).find(
        (key) => mapping[key] === clarity
      );
      return index !== undefined ? parseInt(index, 10) : null;
    });
    if (indixes.length === 0) {
      return [0, Math.max(...Object.keys(mapping))];
    } else {
      return [Math.min(...indixes), Math.max(...indixes) + 1];
    }
  };
  const getFilterListsForSanity = useCallback(
    (post_body) => {
      // const colorList = Object.values(colorMapping).slice(
      //   post_body.data.colorMin,
      //   post_body.data.colorMax + 1
      // );
      // const clarityList = Object.values(clarityMapping).slice(
      //   post_body.data.clarityMin,
      //   post_body.data.clarityMax + 1
      // );
      const colorList =
        diamondContext.currentColorOptions.length > 0
          ? diamondContext.currentColorOptions
          : Object.values(colorMapping);
      const clarityList =
        diamondContext.currentClarityOptions.length > 0
          ? diamondContext.currentClarityOptions
          : Object.values(clarityMapping);
      const cutList = Object.values(cutMapping).slice(
        post_body.data.cutMin,
        post_body.data.cutMax + 1
      );

      return {
        colorList: colorList,
        clarityList: clarityList,
        cutList: cutList,
        shapeListSanity:
          post_body.data.shapeListSanity.length === 0
            ? Object.keys(shapes).map((shape) => {
                return shape.charAt(0).toUpperCase() + shape.slice(1);
              })
            : post_body.data.shapeListSanity.map((shape) => {
                return shape.charAt(0).toUpperCase() + shape.slice(1);
              }),
      };
    },
    [diamondContext.currentColorOptions, diamondContext.currentClarityOptions]
  );

  useEffect(() => {
    const handleDiamondFilters = () => {
      // Unfortunately this shape list needs to be a list of integers because API in brilliance is stupid
      const scraperShapeList =
        diamondContext.currentShapeOptions === 0
          ? []
          : diamondContext.currentShapeOptions.map((shape) => {
              return stoneNameToIndexMapping[shape];
            });

      const minMaxColors = findMinimumMaxMappedIndexFromListFilter(
        diamondContext.currentColorOptions,
        colorMapping
      );

      const minMaxClarity = findMinimumMaxMappedIndexFromListFilter(
        diamondContext.currentClarityOptions,
        clarityMapping
      );
      console.log(scraperShapeList);
      post_body.data.shapeListScraper = scraperShapeList;
      post_body.data.shapeListSanity = diamondContext.currentShapeOptions;
      post_body.data.caratMin = diamondContext.caratValue[0];
      post_body.data.caratMax = diamondContext.caratValue[1];
      post_body.data.colorMin = minMaxColors[0];
      post_body.data.colorMax = minMaxColors[1];
      post_body.data.clarityMin = minMaxClarity[0];
      post_body.data.clarityMax = minMaxClarity[1];
      post_body.data.priceMin = diamondContext.priceValue[0];
      post_body.data.priceMax = diamondContext.priceValue[1];
      post_body.data.cutMin = diamondContext.cutValue[0];
      post_body.data.cutMax = diamondContext.cutValue[1];
      setPostBody(post_body);
    };

    const getDiamondFunc = async () => {
      try {
        const sanityFilter = {
          caratMin: parseFloat(post_body.data.caratMin),
          caratMax: parseFloat(post_body.data.caratMax),
          priceMin: post_body.data.priceMin,
          priceMax: post_body.data.priceMax,
          ...getFilterListsForSanity(post_body),
        };
        const currentDiamonds = await getCurrentDiamondsSanity(sanityFilter);
        if (
          currentDiamonds === null ||
          currentDiamonds === undefined ||
          currentDiamonds.length === 0
        ) {
          console.log("WE DON'T HAVE THIS IN DB, GETTING....");
          console.log(post_body);
          const res = await getDiamonds(postBody);
          if (res.status === 200) {
            const res_json = await res.json();
            setDiamondData(res_json.diamonds);
            bulkUploadDiamondsToSanity(res_json.diamonds);
          }
        } else {
          setDiamondData(currentDiamonds);
        }
      } catch (e) {
        console.log("failed fetching from backend: ", e);
      }
    };

    // Handle filtering the data now!
    handleDiamondFilters();
    getDiamondFunc();
  }, [
    postBody,
    post_body,
    diamondContext.currentShapeOptions,
    diamondContext.currentColorOptions,
    diamondContext.currentClarityOptions,
    getFilterListsForSanity,
    diamondContext.caratValue,
    diamondContext.cutValue,
    diamondContext.priceValue,
    // diamondContext.clarityValue,
    // diamondContext.colorValue,
  ]);

  // const scrollToBottom = () => {
  //   divRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  const clearFilters = () => {
    diamondContext.setCaratValue([0, 12]);
    diamondContext.setPriceValue([100, 75000]);
    diamondContext.setColorValue([0, 9]);
    diamondContext.setClarityValue([0, 9]);
    diamondContext.setCutValue([0, 4]);
  };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [selectedRow, showProductDetail]);

  return (
    <>
      <DiamondsTable data={diamondData}></DiamondsTable>
    </>
  );
};

export default Diamonds;

// <div className="">
//   <section className="py-1 h-screen overflow-y-scroll">
//     <div className="w-full mb-12 xl:mb-0 px-1 mx-auto">
//       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg">
//         <div className="rounded-t mb-0 px-4 py-3 border-0">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//               <h3 className="text-base text-gray-400">
//                 {diamondData.length} items
//               </h3>
//             </div>
//             <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
//               <button
//                 className="bg-slate-500 text-white active:bg-slate-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                 type="button"
//                 onClick={() => {
//                   clearFilters();
//                 }}
//               >
//                 Clear Filters
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-full mx-2">
//           <div className="bg-blueGray-50 text-blueGray-500 border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/6">
//             Shape
//           </div>
//           <div className="bg-blueGray-50 text-blueGray-500 border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/6">
//             Carat
//           </div>
//           <div className="bg-blueGray-50 text-blueGray-500 border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/6">
//             Color
//           </div>
//           <div className="bg-blueGray-50 text-blueGray-500 border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/6">
//             Clarity
//           </div>
//           <div className="bg-blueGray-50 text-blueGray-500 border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/6">
//             Cut
//           </div>
//           <div className="bg-blueGray-50 text-blueGray-500 border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/6">
//             Price
//           </div>
//         </div>
//         <div className="flex flex-col">
//           {diamondData.map((data, i) => {
//             return (
//               <>
//                 <div
//                   key={data + i}
//                   className="flex hover:bg-slate-400 transition duration-200 ease-in-out cursor-pointer mx-1"
//                   onClick={() => {
//                     if (selectedRow === i) {
//                       setShowProductDetail(false);
//                       setSelectedRow(undefined);
//                     } else {
//                       setShowProductDetail(true);
//                       setSelectedRow(i);
//                     }
//                   }}
//                 >
//                   {/* {selectedRow === i && <div ref={divRef}></div>} */}
//                   <div className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4 w-1/6 text-center text-slate-700">
//                     {data.shape}
//                   </div>
//                   <div className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4 w-1/6 text-center ">
//                     {data.carat}
//                   </div>
//                   <div className="border-t-0 align-center border-l-0 border-r-0 text-xs whitespace-nowrap py-4 w-1/12 text-center">
//                     {data.color}
//                   </div>
//                   <div className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4 w-1/12 text-center">
//                     {data.clarity}
//                   </div>
//                   <div className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4 w-1/6 text-center">
//                     {data.cut}
//                   </div>
//                   <div className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4 w-1/6 text-center">
//                     {`CA$ ${data.price}`}
//                   </div>
//                 </div>
//                 <div
//                   className={`${selectedRow === i ? "" : "hidden"} w-full`}
//                 >
//                   {showProductDetail && (
//                     <>
//                       <ProductDetail
//                         shape={data.shape}
//                         carat={data.carat}
//                         color={data.color}
//                         clarity={data.clarity}
//                         cut={data.cut}
//                         price={data.price}
//                         data={data}
//                       ></ProductDetail>
//                     </>
//                   )}
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   </section>
// </div>
