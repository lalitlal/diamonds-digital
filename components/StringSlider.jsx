import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { hiraBlack, hiraGray, hiralightGray } from "./constants";

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
    <div className="mt-4">
      <div className="mx-3">
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
            borderColor: `${hiraBlack}`,
            backgroundColor: `white`,
            height: 28,
            width: 28,
            marginTop: -14,
          }}
          trackStyle={{ backgroundColor: `${hiraBlack}`, height: 2 }}
        />
      </div>
    </div>
  );
};

export default StringSlider;
