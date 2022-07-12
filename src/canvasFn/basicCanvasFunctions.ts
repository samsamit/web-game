interface DrawImageProps {
  image: HTMLImageElement;
  xCrop: number;
  yCrop: number;
  cropWidth: number;
  cropHeight: number;
  posX: number;
  posY: number;
  width: number;
  height: number;
}
export const drawImageToCanvas = (
  canvasContext: CanvasRenderingContext2D,
  props: DrawImageProps
) =>
  canvasContext.drawImage(
    props.image,
    props.xCrop,
    props.yCrop,
    props.cropWidth,
    props.cropHeight,
    props.posX,
    props.posY,
    props.width,
    props.height
  );
