import React, { useState } from "react";
import {
  hiraDarkGrayText,
  hiralightGrayBG,
  minusIcon,
  plusIcon,
} from "./constants";

const SettingMaterialDescription = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="mb-4">
      <div
        className={`${hiraDarkGrayText} border-t flex justify-between hover:cursor-pointer`}
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        Material Info {showContent ? minusIcon : plusIcon}
      </div>
      <div className="w-full lg:w-[450px]">
        {showContent && (
          <div className={`overflow-y-hidden text-justify`}>
            <div className="">
              {`All of our settings are crafted in solid 14k gold. These
              pieces are made to last, and will not color or oxidize. Daily
              wear? Special occasions? Doesn't matter, these pieces are here to
              last.`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingMaterialDescription;
