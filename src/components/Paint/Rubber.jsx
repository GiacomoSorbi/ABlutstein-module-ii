import React from "react";

function Rubber({ activeColor, setActiveColor }) {
  const color = "#000000";
  return (
    <label className="button-erasor">
      <input
        name="eraser"
        type="radio"
        value={color}
        checked={activeColor === color}
        onChange={() => setActiveColor(color)}
      />
    </label>
  );
}
export default Rubber;
