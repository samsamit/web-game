import React, { useEffect, useRef, useState } from "react";

const GAME_SPEED = 2;
const useGameLoop = (callback: (time: number, deltaTime: number) => void) => {
  const frameId = useRef<number>();
  const prevTime = useRef<number>();

  const loop = (time: number) => {
    const newFrameId = requestAnimationFrame(loop);
    frameId.current = newFrameId;

    if (prevTime.current) {
      const sinceLastLoop = (time - prevTime.current) / 1000;
      if (sinceLastLoop < 1 / GAME_SPEED) return;
      const deltaTime = sinceLastLoop;
      callback(time, deltaTime);
    }
    prevTime.current = time;
  };

  useEffect(() => {
    const newFrameId = requestAnimationFrame(loop);
    frameId.current = newFrameId;
    return () => {
      cancelAnimationFrame(frameId.current!);
    };
  }, []);
};

export default useGameLoop;
