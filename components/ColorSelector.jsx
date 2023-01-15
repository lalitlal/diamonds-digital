import React from "react";

const ColorSelector = () => {
  return (
    <div className="mb-3">
      <div className="font-bold text-gray-600">Color</div>
      <div className="flex justify-start ml-20">
        <div className="mr-4 hover:text-slate-300 hover:underline cursor-pointer tracking-tight">
          DEF
        </div>
        <div className="mr-4 hover:text-slate-300 hover:underline cursor-pointer tracking-tight">
          GHI
        </div>
        <div className="mr-4 hover:text-slate-300 hover:underline cursor-pointer tracking-tight">
          JKL
        </div>
      </div>
    </div>
  );
};

export default ColorSelector;
