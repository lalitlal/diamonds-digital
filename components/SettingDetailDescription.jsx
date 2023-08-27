import React, { useContext } from "react";
import { hiraDarkGrayText } from "./constants";
import { DiamondContext } from "./context/DiamondContext";

const SettingDetailDescription = () => {
  const diamondContext = useContext(DiamondContext);
  console.log(diamondContext.settingDetails, "setting details!!");
  return (
    <div className={`mb-8`}>
      <div className={`${hiraDarkGrayText}`}>Description</div>
      <div>
        {Object.values(diamondContext.settingDetails).length === 0
          ? "No setting chosen"
          : diamondContext.settingDetails.description}
      </div>
    </div>
  );
};

export default SettingDetailDescription;
