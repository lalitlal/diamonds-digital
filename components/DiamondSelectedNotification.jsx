import React, { useContext } from "react";
import { DiamondContext } from "./context/DiamondContext";

const DiamondSelectedNotification = () => {
  const diamondContext = useContext(DiamondContext);
  return (
    diamondContext.diamondJustSelected && (
      <div className="w-full">
        <div className="flex text-lg justify-start px-2 py-2 w-full bg-gray-100 border border-black mb-2 lg:justify-center">
          Your diamond has been added to cart. Lets pick a setting!
        </div>
      </div>
    )
  );
};

export default DiamondSelectedNotification;
