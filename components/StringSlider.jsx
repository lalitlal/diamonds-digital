import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const NumericSlider = ({ values, setValues, minValue, maxValue, marks }) => {
  //   const [values, setValues] = useState([0, 100]);

  const handleSliderChange = (newValues) => {
    setValues(newValues);
  };

  const handleInputChange = (index, event) => {
    const newValue = event.target.value;
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        {/* <input
          type="number"
          value={values[0]}
          onChange={(event) => handleInputChange(0, event)}
          className="w-24 text-center mr-2"
        />
        <input
          type="number"
          value={values[1]}
          onChange={(event) => handleInputChange(1, event)}
          className="w-24 text-center ml-2"
        /> */}
      </div>
      <Slider
        className="mt-4"
        range
        min={minValue}
        max={maxValue}
        defaultValue={[minValue, maxValue]}
        value={values}
        marks={marks}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default NumericSlider;
