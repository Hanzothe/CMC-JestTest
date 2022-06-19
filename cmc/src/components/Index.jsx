import React, { useState } from "react";
import "../global.css";
import Calcml from "./Calcml";
import barbellimg from "../images/barbell-thin.svg";
import dropimg from "../images/drop-thin.svg";
import coffeeimg from "../images/coffee-thin.svg";

export default function Index() {
  const [measureType, setMeasureType] = useState(null);
  const [outputType, setOutputType] = useState(null);

  const measureTypes = {
    ML: {
      title: "Líquidos(ml)",
      output: 2,
      image: {
        source: dropimg,
        alt: "Imagem de uma gota",
      },
    },
    // G: {
    //   title: "Peso(g)",
    //   output: "j",
    //   image: {
    //     source: barbellimg,
    //     alt: "Imagem de um peso de academia",
    //   },
    // },
    // X: {
    //   title: "Xícaras",
    //   output: 4,
    //   image: {
    //     source: coffeeimg,
    //     alt: "Imagem de uma Xícara",
    //   },
    // },
  };

  return (
    <>
      <div className="flex flex-col gap-12 items-center text-white text-7xl">
        <h1>Conversor de Medidas Culinárias</h1>

        <div className="flex flex-row items-center gap-6">
          {Object.entries(measureTypes).map(([key, value]) => {
            return (
              <>
                <button
                  key={key}
                  onClick={() => {
                    setMeasureType(value.title);
                    setOutputType(value.output);
                  }}
                  type="button"
                  className="border-4 border-transparent focus:border-brandB focus:outline-none hover:border-brandB hover:bg-brandD bg-brandC  w-72 h-72 rounded-2xl py-5 flex flex-col items-center text-4xl transition duration-300 ease-in-out"
                >
                  <img src={value.image.source} alt={value.image.alt} />
                  <span>{value.title}</span>
                </button>
              </>
            );
          })}
        </div>
        <span className="text-2xl">
          Selecione a medida final clicando no card e a inicial abaixo
        </span>
        <Calcml measureType={measureType} outputType={outputType} />
      </div>
    </>
  );
}
