import React from "react";
import {
  certificateIcon,
  enclosureIcon,
  hiraDarkGrayText,
  hiralightGrayBG,
  yearlyPolishIcon,
} from "./constants";

const RefundPolicy = () => {
  return (
    <div className="mt-4 mb-8">
      <div className={`${hiraDarkGrayText}`}>What's Included</div>
      <div className="flex justify-between">
        <div
          className={`${hiralightGrayBG} w-1/3 p-4 justify-center text-center items-center mr-2`}
        >
          <div className="flex justify-center mb-2">{enclosureIcon}</div>
          <div>Lifetime Warranty</div>
        </div>
        <div
          className={`${hiralightGrayBG} w-1/3 p-4 justify-center text-center items-center mr-2`}
        >
          <div className="flex justify-center mb-2">{certificateIcon}</div>
          <div>Official Diamond Certificate</div>
        </div>
        <div
          className={`${hiralightGrayBG} w-1/3 p-4 justify-center text-center items-center mr-2`}
        >
          <div className="flex justify-center mb-2">{yearlyPolishIcon}</div>
          <div>Free Ring Resizing</div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
