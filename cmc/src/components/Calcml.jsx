import React, { useState } from "react";
import SelectBox from "./SelectBox";
import "../global.css";

export default function Calcml({ measureType, outputType }) {
  const [numberToBeMeasure, setNumberToBeMeasure] = useState(0);
  const [selectedInputMeasure, setSelectedInputMeasure] = useState();
  const Result = selectedInputMeasure * numberToBeMeasure;

  function getNumberToBeMeasure(val) {
    setNumberToBeMeasure(val.target.value);
  }
  function getResult(result) {
    if (result > 1000) return `${result / 1000}l`;
    const newResult = `${Result}ml`;
    return newResult;
  }
  return (
    <div>
      <div className="flex flex-col gap-4 items-center text-white text-2xl ">
        <input
          type="Number"
          className="border-solid border-brandB  border-2 h-10 w-60 rounded-lg text-black text-center"
          onChange={getNumberToBeMeasure}
        />
        <SelectBox onChangeCallback={setSelectedInputMeasure} />
        {measureType}
        {/* {outputType} */}
        <span className="border-solid bg-white text-center border-brandB border-2 h-10 w-60 rounded-lg text-black ">
          {Result !== 0 && getResult(Result)}
        </span>
      </div>
    </div>
  );
}
