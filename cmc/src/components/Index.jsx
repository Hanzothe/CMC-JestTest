import React, { useState } from "react";
import "../global.css";
import SelectBox from "./SelectBox";

export default function Index() {
  const [nInit, setnInit] = useState(null);
  const [print, setPrint] = useState(false);
  const [measure, setMeasure] = useState();

  function getnInit(val) {
    setnInit(val.target.value);

    setPrint(false);
    console.warn(val.target.value);
  }
  return (
    <div className="flex flex-col gap-4 items-center text-white text-2xl ">
      <h1>{measure} para ml!</h1>
      <input
        type="Number"
        className="border-solid border-brandB border-2 h-10 w-60 rounded-lg text-black text-center "
        onChange={getnInit}
      />
      <button
        className="border-solid border-2 hover:bg-brandD bg-brandC border-brandB text-white h-20 w-60 rounded-lg  "
        onClick={() => setPrint(true)}
      >
        Convert
      </button>
      {print ? (
        <span className="border-solid bg-white text-center border-brandB border-2 h-10 w-60 rounded-lg text-black ">
          {nInit}
        </span>
      ) : (
        <span className="border-solid bg-white text-center border-brandB border-2 h-10 w-60 rounded-lg text-black "></span>
      )}

      <SelectBox onChangeCallback={setMeasure} />
    </div>
  );
}
