import React, { useState } from "react";

const CaratSelector = () => {
  const [caratValue, setCaratValue] = useState(1);

  return (
    <div>
      <div className="font-bold text-gray-600">Carat</div>
      <div className="flex flex-col space-y-2 p-2">
        <input type="range" className="w-full" min="1" max="11.0" step="0.1" />
      </div>
    </div>
  );
};

export default CaratSelector;
