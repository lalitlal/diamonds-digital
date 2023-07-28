import React from "react";
import { hiraSlate } from "./constants";

const TileGrid = ({ data, listState, setListState }) => {
  const columns = Math.min(5, data.length);
  return (
    <div
      className="flex p-2 flex-wrap w-full justify-evenly md:justify-center"
      //   style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {/* {data.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-black w-14 h-10 flex justify-evenly px-2 lg:justify-center my-2 items-center md:mx-5"
        >
          <div className="p-2">{item}</div>
        </div>
      ))} */}

      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`hover:cursor-pointer ${
              listState.includes(item)
                ? `text-white bg-slate-700`
                : "text-black bg-white"
            }  border border-black w-14 h-10 flex justify-evenly px-2 lg:justify-center my-2 items-center md:mx-5`}
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
