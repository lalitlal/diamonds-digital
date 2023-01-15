import React from "react";
import DiamondFilter from "./DiamondFilter";
import Diamonds from "./Diamonds";

const DiamondPage = () => {
  return (
    <div className="flex h-screen w-full mt-4">
      <div className="w-1/3">
        <DiamondFilter></DiamondFilter>
      </div>
      <div className="w-2/3">
        <Diamonds></Diamonds>
      </div>
    </div>
  );
};

export default DiamondPage;
