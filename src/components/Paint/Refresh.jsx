import React from "react";

export default React.memo(({ cb, activeColor }) => {
  return (
    <button
      className="button-refresh-colors"
      onClick={cb}
      style={{ border: `1px solid ${activeColor}` }}
      aria-label="refresh canvas"
    ></button>
  );
});
