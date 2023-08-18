import React from "react";
import DiamondFilter from "./DiamondFilter";
import Diamonds from "./Diamonds";
import FullDiamondFilterPage from "./FullDiamondFilterPage";

const DiamondPage = () => {
  return (
    <div className="flex-col h-screen">
      <FullDiamondFilterPage></FullDiamondFilterPage>
      <DiamondFilter></DiamondFilter>
      <div className="mt-4">
        <Diamonds></Diamonds>
      </div>
    </div>
  );
};

export default DiamondPage;
