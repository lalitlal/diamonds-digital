import React from "react";

const ClaritySelector = () => {
  return (
    <div className="mb-3">
      <div className="font-bold text-gray-600">Clarity</div>
      <div className="flex justify-start ml-20">
        <div className="mr-4 hover:text-slate-300 hover:underline cursor-pointer tracking-tight">
          VVS
        </div>
        <div className="mr-4 hover:text-slate-300 hover:underline cursor-pointer tracking-tight">
          VS
        </div>
        <div className="mr-4 hover:text-slate-300 hover:underline cursor-pointer tracking-tight">
          SI
        </div>
      </div>
    </div>
  );
};

export default ClaritySelector;
