import { Mouse } from "./Mouse"

export function createMouse(canvas: HTMLCanvasElement): Mouse {
  return {
    position: [canvas.width / 2, canvas.height / 2],
    isDown: false,
  }
}
