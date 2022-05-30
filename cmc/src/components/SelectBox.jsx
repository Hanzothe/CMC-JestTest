import React from "react";

function SelectBox({ onChangeCallback, measure /*inputList*/ }) {
  return (
    <div className="text-black h-12 rounded-lg">
      <select onChange={(e) => onChangeCallback(e.target.value)}>
        <option value="">Selecione uma medida</option>
        <option value="Xícara">Xícara</option>
        <option value="ml">ml</option>
      </select>
    </div>
  );
}

export default SelectBox;
