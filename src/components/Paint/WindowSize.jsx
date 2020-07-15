import { useState, useEffect } from "react";

export default function useWindowSize(cb) {
  const [[windowWidth, windowHeight], setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight
  ]);

  useEffect(() => {
    const handleResize = () => {
      // when the user resizes the window, save in state new
      // window width and height
      if (cb) {
        cb();
      }
      setWindowSize([window.innerWidth, window.innerHeight]);

      // also I am calling the callback function cb passed from
      // the parent component. Everytime the useEffect runs - when
      // the user resizes the window, I call the cb function
      // in this case it is the visibility handler
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cb]);

  return [windowWidth, windowHeight];
}
