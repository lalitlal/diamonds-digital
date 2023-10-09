import React from "react";
import { callNumber, hiraBlackText, hiralightGrayBG } from "./constants";

const LiveExpertBanner = () => {
  return (
    <div
      className={`w-full text-center justify-center p-2 text-lg md:text-2xl ${hiraBlackText}`}
    >
      Speak to a live expert: {callNumber}
    </div>
  );
};

export default LiveExpertBanner;
