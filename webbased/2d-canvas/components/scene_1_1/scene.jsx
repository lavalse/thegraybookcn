import React, { useEffect, useRef } from "react";

function Scene() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 120);

    ctx.fillStyle = "yellow";
    ctx.fillRect(40, 30, 150, 120);
  }, [])

  return (
    <canvas ref={canvasRef} width="500px" height="200px"></canvas>
  )
}

export default Scene;