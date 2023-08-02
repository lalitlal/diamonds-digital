import React, { useContext } from "react";
import { DiamondContext } from "./context/DiamondContext";

const DiamondSelectedNotification = () => {
  const diamondContext = useContext(DiamondContext);
  return (
    diamondContext.diamondJustSelected && (
      <div className="mx-4">
        <div className="flex text-lg justify-start px-2 py-2 w-full md:justify-center bg-gray-100 mx-auto border border-black">
          Your diamond has been added to cart. Lets pick a setting!
        </div>
      </div>
    )
  );
};

export default DiamondSelectedNotification;
