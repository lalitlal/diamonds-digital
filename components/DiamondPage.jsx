import React from "react";
import DiamondFilter from "./DiamondFilter";
import Diamonds from "./Diamonds";

const DiamondPage = () => {
  return (
    <div className="flex-col h-screen overflow-x-hidden">
      <div className="">
        <DiamondFilter></DiamondFilter>
      </div>
      <div className="mt-4">
        <Diamonds></Diamonds>
      </div>
    </div>
  );
};

export default DiamondPage;
