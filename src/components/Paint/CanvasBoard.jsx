import React, { useState, useEffect, useRef } from "react";
import useWindowSize from "./WindowSize";

function CanvasBoard({ color, penWidth }) {
  const [drawing, setDrawing] = useState(false);

  const canvasRef = useRef();
  const ctx = useRef();

  let steps = useRef(0);
  let points = useRef([]);

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");
  }, []);

  const [width, height] = useWindowSize();

  const handleMouseMove = e => {
    const coords = [
      e.clientX - canvasRef.current.offsetLeft,
      e.clientY - canvasRef.current.offsetTop
    ];
    if (drawing) {
      ctx.current.lineTo(...coords);
      ctx.current.stroke();
    }
  };

  const startDrawing = e => {
    ctx.current.lineJoin = "round";
    ctx.current.lineCap = "round";
    ctx.current.lineWidth = penWidth;
    ctx.current.strokeStyle = color;
    ctx.current.beginPath();

    ctx.current.moveTo(
      e.clientX - canvasRef.current.offsetLeft,
      e.clientY - canvasRef.current.offsetTop
    );
    setDrawing(true);
  };

  const stopDrawing = () => {
    ctx.current.closePath();
    setDrawing(false);
    steps.current++;
    points.current.push(canvasRef.current.toDataURL());
  };

  const undoDrawing = () => {
    clearCanvas();
    if (steps.current > 0) {
      steps.current--;
      points.current.pop();
      let canvasPic = new Image();
      canvasPic.src = points.current[steps.current - 1];
      canvasPic.onload = function() {
        ctx.current.drawImage(canvasPic, 0, 0);
      };
    }
  };

  const clearCanvas = () => {
    ctx.current.clearRect(0, 0, width, height);
  };

  return (
    <div className="button-and-canvas">
      <div>
        <button
          className="undo"
          onClick={undoDrawing}
          aria-label="undo canvas"
        ></button>{" "}
        <button
          className="clear"
          onClick={clearCanvas}
          aria-label="clear canvas"
        ></button>
      </div>
      <div className="canvas">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={handleMouseMove}
        />
      </div>
    </div>
  );
}

export default CanvasBoard;
