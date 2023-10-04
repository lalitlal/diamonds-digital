import React, { useEffect, useState } from "react";
import { hiraBlackBG, hiraDarkBrownBG, hiraSlate } from "./constants";

const TileGrid = ({ data, listState, setListState }) => {
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
    <div className="flex py-2 flex-wrap justify-between w-full ">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`hover:cursor-pointer lg:text-xs ${
              listState.includes(item)
                ? `text-white ${hiraDarkBrownBG}`
                : "text-black bg-white"
            } border border-black flex justify-center my-2 w-1/6 mx-1 items-center`}
            style={{
              width: isLargeScreen ? `16%` : "16%",
            }}
            onClick={() => {
              if (listState.includes(item)) {
                setListState(
                  listState.filter((option) => {
                    return option !== item;
                  })
                );
              } else {
                setListState((currentOptions) => [...currentOptions, item]);
              }
            }}
          >
            <div className="p-2">{item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TileGrid;
