import React from "react";
import { hiraDarkGrayText } from "./constants";

const SettingDetailDescription = () => {
  return (
    <div className={`mx-4 mb-2`}>
      <div className={`${hiraDarkGrayText}`}>Description</div>
      <div>The most eloquent ring.</div>
    </div>
  );
};

export default SettingDetailDescription;
