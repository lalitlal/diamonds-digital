import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { hiraGray, hiralightGray } from "./constants";

const NumericSlider = ({ values, setValues, minValue, maxValue }) => {
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
    <div className="max-w-screen py-4">
      <Slider
        className=""
        range
        min={minValue}
        max={maxValue}
        defaultValue={[minValue, maxValue]}
        value={values}
        onChange={handleSliderChange}
        handleStyle={{
          borderColor: `${hiraGray}`,
          backgroundColor: `${hiralightGray}`,
          height: 20,
          width: 20,
          marginTop: -9,
        }}
        trackStyle={{ backgroundColor: `${hiraGray}`, height: 2 }}
      />
      <div className="flex justify-between">
        <input
          type="number"
          value={values[0]}
          onChange={(event) => handleInputChange(0, event)}
          className="w-24 text-left -ml-2"
        />
        <input
          type="number"
          value={values[1]}
          onChange={(event) => handleInputChange(1, event)}
          className="w-24 text-right -mr-2"
        />
      </div>
    </div>
  );
};

export default NumericSlider;
