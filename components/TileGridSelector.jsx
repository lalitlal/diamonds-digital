import React from "react";
import { hiraSlate } from "./constants";

const TileGrid = ({ data, listState, setListState }) => {
  return (
    <div className="flex py-2 flex-wrap justify-between w-full ">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`hover:cursor-pointer ${
              listState.includes(item)
                ? `text-white bg-slate-700`
                : "text-black bg-white"
            } border border-black flex justify-center my-2 w-1/6 mx-1 items-center`}
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
