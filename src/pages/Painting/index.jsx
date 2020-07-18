import React, { useState, useEffect, useRef, useCallback } from "react";
import randomColor from "randomcolor";
import CanvasBoard from "../../components/Paint/CanvasBoard";
import ColorOption from "../../components/Paint/ColorOption";
import WidthDisplay from "../../components/Paint/WidthDisplay";
import Rubber from "../../components/Paint/Rubber";
import "./painting.css";
import useWindowSize from "../../components/Paint/WindowSize";
import Refresh from "../../components/Paint/Refresh";

//API fetch for colours from colorapi.com
function FunTime() {
  const [colors, setColors] = useState([]);
  const [activeColor, setActiveColor] = useState(null);
  const getColors = useCallback(() => {
    const canvasColors = randomColor().slice(1);
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${canvasColors}&mode=monochrome`
    )
      .then(res => res.json())
      .then(res => {
        setColors(res.colors.map(color => color.hex.value));
        setActiveColor(res.colors[0].hex.value);
      });
  }, []);

  const width = [15, 22, 30];
  const [activeWidth, setActiveWidth] = useState(4);

  useEffect(getColors, []);

  const [visible, setVisible] = useState(false);

  let timeoutId = useRef();
  const [windowWidth, windowHeight] = useWindowSize(() => {
    setVisible(true);
    clearTimeout(timeoutId.current);
    // after resize - for 0.5sec set the window size to visible
    timeoutId.current = setTimeout(() => setVisible(false), 500);
  });

  // defining a callback that is passed to the Refresh
  const cb = useCallback(getColors, []);

  return (
    <div>
      <div className="set-color">
        <ColorOption
          colors={colors}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
        <Refresh cb={cb} />
      </div>

      <div className="set-width">
        <WidthDisplay
          width={width}
          activeColor={activeColor}
          activeWidth={activeWidth}
          setActiveWidth={setActiveWidth}
        />
        <Rubber activeColor={activeColor} setActiveColor={setActiveColor} />
      </div>

      {activeColor && (
        <CanvasBoard color={activeColor} penWidth={activeWidth} />
      )}

      <div className={`window-size ${visible ? "" : "hidden"}`}>
        {windowWidth} x {windowHeight}
      </div>
    </div>
  );
}

export default FunTime;
