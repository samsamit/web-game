import React, { useEffect, useRef, useState } from "react";
import { drawImageToCanvas } from "../../canvasFn/basicCanvasFunctions";
import { Character, drawCharacter } from "../../classes/Character";
import useGameLoop from "../../hooks/useGameLoop";

const RENDER_CYCLE: number = 1000;

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const character: Character = {
    posX: 50,
    posY: 50,
    spriteSheetSrc: process.env.PUBLIC_URL + "/character-sprite.png",
  };

  const drawCanvas = (context: CanvasRenderingContext2D | null) => {
    if (!context) return;
    // context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    drawCharacter(context, character);
  };

  useGameLoop((time, deltaTime) => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (!context) return;
      drawCanvas(context);
    }
  });

  return <canvas height={500} width={500} ref={canvasRef} className="Canvas" />;
};

export default Canvas;
