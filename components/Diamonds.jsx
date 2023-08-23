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
  cutAbbreviations,
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
      const abbreviatedCutList = cutList.map((cut, i) => {
        return cutAbbreviations[cut];
      });

      return {
        colorList: colorList,
        clarityList: clarityList,
        cutList: abbreviatedCutList,
        shapeListSanity:
          post_body.data.shapeListSanity.length === 0
            ? Object.keys(shapes).map((shape) => {
                // return shape.charAt(0).toUpperCase() + shape.slice(1);
                return shape.toUpperCase();
              })
            : post_body.data.shapeListSanity.map((shape) => {
                // return shape.charAt(0).toUpperCase() + shape.slice(1);
                return shape.toUpperCase();
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
      post_body.order = {
        type: diamondContext.orderDiamonds.type,
        direction: diamondContext.orderDiamonds.direction,
      };
      setPostBody(post_body);
    };

    const getDiamondFunc = async () => {
      try {
        const sanityFilter = {
          caratMin: parseFloat(post_body.data.caratMin),
          caratMax: parseFloat(post_body.data.caratMax),
          priceMin: post_body.data.priceMin,
          priceMax: post_body.data.priceMax,
          order: post_body.order,
          ...getFilterListsForSanity(post_body),
        };
        // const currentDiamonds = await getCurrentDiamondsSanity(sanityFilter);
        const currentDiamonds = [];
        if (
          currentDiamonds === null ||
          currentDiamonds === undefined ||
          currentDiamonds.length === 0
        ) {
          const res = await getDiamonds(sanityFilter);
          if (res.status === 200) {
            const res_json = await res.json();
            setDiamondData(res_json.data);
            // bulkUploadDiamondsToSanity(res_json.diamonds);
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
    diamondContext.orderDiamonds,
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
    <div className="mt-4">
      <DiamondsTable data={diamondData}></DiamondsTable>
    </div>
  );
};

export default Diamonds;
