import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { hiraBlack, hiraGray, hiralightGray } from "./constants";

const NumericSlider = ({ values, setValues, minValue, maxValue }) => {
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
    <div className="mt-4">
      <div className="mx-3">
        <Slider
          className=""
          range
          min={minValue}
          max={maxValue}
          defaultValue={[minValue, maxValue]}
          value={values}
          onChange={handleSliderChange}
          handleStyle={{
            borderColor: `${hiraBlack}`,
            backgroundColor: `white`,
            height: 28,
            width: 28,
            marginTop: -14,
          }}
          trackStyle={{ backgroundColor: `${hiraBlack}`, height: 2 }}
        />
        <div className="flex justify-between mt-2">
          <input
            type="number"
            value={values[0]}
            onChange={(event) => handleInputChange(0, event)}
            className="w-full text-left -ml-2"
          />
          <input
            type="number"
            value={values[1]}
            onChange={(event) => handleInputChange(1, event)}
            className="w-full text-right -mr-2"
          />
        </div>
      </div>
    </div>
  );
};

export default NumericSlider;
