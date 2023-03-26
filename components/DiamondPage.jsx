import React from "react";
import DiamondFilter from "./DiamondFilter";
import Diamonds from "./Diamonds";

const DiamondPage = () => {
  return (
    <div className="flex-col h-screen mt-4">
      <div className="">
        <DiamondFilter></DiamondFilter>
      </div>
      <div className="">
        <Diamonds></Diamonds>
      </div>
    </div>
  );
};

export default DiamondPage;
