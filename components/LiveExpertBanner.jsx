import React from "react";
import { callNumber, hiraBlackText, hiralightGrayBG } from "./constants";

const LiveExpertBanner = () => {
  return (
    <div
      className={`w-full text-center justify-center p-2 text-lg ${hiralightGrayBG} ${hiraBlackText}`}
    >
      Speak to a live expert: {callNumber}
    </div>
  );
};

export default LiveExpertBanner;
