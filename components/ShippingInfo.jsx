import React from "react";
import {
  clockIcon,
  hiraDarkGrayText,
  hiralightGrayBG,
  truckIcon,
} from "./constants";

const ShippingInfo = () => {
  return (
    <div className="mb-8">
      <div className={`${hiraDarkGrayText}`}>Shipping Info</div>
      <div className="flex justify-center">
        <div
          className={`${hiralightGrayBG} flex w-1/2 mr-1 p-4 justify-center text-center items-center`}
        >
          <div className="mr-2">{truckIcon}</div>
          <div>Fast & Free Shipping</div>
        </div>
        <div
          className={`${hiralightGrayBG} flex w-1/2 ml-1 p-4 justify-center text-center items-center`}
        >
          <div className="mr-2">{clockIcon}</div>
          <div>3-4 Weeks</div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
