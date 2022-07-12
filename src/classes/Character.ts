import { drawImageToCanvas } from "../canvasFn/basicCanvasFunctions";

interface BaseCharacter {
  spriteSheetSrc: string;
  posX: number;
  posY: number;
}

export type Character = BaseCharacter;

export const drawCharacter = (
  canvasContext: CanvasRenderingContext2D,
  character: Character
) => {
  const charecterSprite = new Image();
  charecterSprite.src = character.spriteSheetSrc;
  charecterSprite.onload = () =>
    drawImageToCanvas(canvasContext, {
      cropHeight: charecterSprite.height / 4,
      cropWidth: charecterSprite.width / 4,
      height: 50,
      image: charecterSprite,
      posX: character.posX,
      posY: character.posY,
      width: 50,
      xCrop: 0,
      yCrop: 0,
    });
};

//process.env.PUBLIC_URL + "/character-sprite.png"
