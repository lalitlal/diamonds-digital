import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { hiraGray, hiralightGray } from "./constants";

const StringSlider = ({ values, setValues, minValue, maxValue, marks }) => {
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
    <div className="">
      <div className="flex justify-between"></div>
      <Slider
        className=""
        range
        min={minValue}
        max={maxValue}
        defaultValue={[minValue, maxValue]}
        value={values}
        marks={marks}
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
    </div>
  );
};

export default StringSlider;
