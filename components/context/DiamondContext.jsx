import React, { createContext, useState } from "react";

export const DiamondContext = createContext();

export const DiamondContextProvider = ({ children }) => {
  // Diamond CONTEXTS!
  const [currentCutOptions, setCurrentCutOptions] = useState([]);
  const [currentClarityOptions, setCurrentClarityOptions] = useState([]);
  const [currentColorOptions, setCurrentColorOptions] = useState([]);
  const [currentShapeOptions, setCurrentShapeOptions] = useState([]);
  const [currentSettingDiamondShape, setCurrentSettingDiamondShape] =
    useState(3);

  const [caratValue, setCaratValue] = useState([0, 12]);
  const [priceValue, setPriceValue] = useState([100, 75000]);
  const [colorValue, setColorValue] = useState([0, 9]);
  const [clarityValue, setClarityValue] = useState([0, 9]);
  const [cutValue, setCutValue] = useState([0, 4]);
  const [bandColor, setBandColor] = useState("Yellow Gold");

  const stoneMapping = {
    0: "round",
    3: "oval",
    4: "emerald",
    7: "marquise",
    2: "cushion",
    6: "pear",
    5: "trillion",
    8: "asscher",
    1: "princess",
    9: "radiant",
  };

  return (
    <DiamondContext.Provider
      value={{
        currentShapeOptions,
        currentCutOptions,
        currentClarityOptions,
        currentColorOptions,
        caratValue,
        priceValue,
        colorValue,
        clarityValue,
        cutValue,
        bandColor,
        currentSettingDiamondShape,
        stoneMapping,
        setCurrentSettingDiamondShape,
        setCurrentShapeOptions,
        setCurrentCutOptions,
        setCurrentClarityOptions,
        setCurrentColorOptions,
        setCaratValue,
        setPriceValue,
        setColorValue,
        setClarityValue,
        setCutValue,
        setBandColor,
      }}
    >
      {children}
    </DiamondContext.Provider>
  );
};
