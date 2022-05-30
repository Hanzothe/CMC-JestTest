import React, { useState } from "react";
import "../global.css";
import SelectBox from "./SelectBox";

export default function Index() {
  const [numberToBeMeasure, setNumberToBeMeasure] = useState(0);
  const [print, setPrint] = useState(false);
  const [selectedMeasure, setSelectedMeasure] = useState();
  const Result = selectedMeasure * numberToBeMeasure;

  function getNumberToBeMeasure(val) {
    setNumberToBeMeasure(val.target.value);
    setPrint(false);
    console.warn(val.target.value);
  }
  return (
    <div className="flex flex-col gap-4 items-center text-white text-2xl ">
      <h1 className="text-7xl">Conversor de Medidas Culinárias</h1>
      <h1 className="text-2xl">
        {" "}
        Digite o valor e escolha a medida a ser convertido em ml!
      </h1>
      <input
        type="Number"
        className="border-solid border-brandB  border-2 h-10 w-60 rounded-lg text-black text-center"
        onChange={getNumberToBeMeasure}
      />
      <SelectBox onChangeCallback={setSelectedMeasure} />
      <button
        className="border-solid border-2 hover:bg-brandD bg-brandC border-brandB text-white h-20 w-60 rounded-lg drop-shadow-md hover:drop-shadow-xl transition duration-150 ease-out hover:ease-in"
        onClick={() => setPrint(true)}
      >
        Converter
      </button>
      {print ? (
        <span className="border-solid bg-white text-center border-brandB border-2 h-10 w-60 rounded-lg text-black ">
          {Result}ml
        </span>
      ) : (
        <span className="border-solid bg-white text-center border-brandB border-2 h-10 w-60 rounded-lg text-black "></span>
      )}
    </div>
  );
}
