import React from "react";
import { hiraDarkGrayText } from "./constants";

const LoadingSkeleton = ({ header, footer }) => {
  return (
    <div
      role="status"
      class="animate-pulse md:flex w-full items-center justify-center"
    >
      <div class="flex flex-col items-center justify-center w-full h-48 bg-gray-300 dark:bg-gray-700">
        <div className={`flex flex-col text-xl ${hiraDarkGrayText}`}>
          {header}
        </div>
        <div className={`text-lg ${hiraDarkGrayText}`}>{footer}</div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSkeleton;
