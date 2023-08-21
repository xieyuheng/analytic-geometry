import { State } from "./State"
import { createCamera } from "./camera/createCamera"
import { createMouse } from "./mouse/createMouse"

export function createState(canvas: HTMLCanvasElement): State {
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
  const camera = createCamera()
  const mouse = createMouse(canvas)

  return {
    canvas,
    ctx,
    camera,
    mouse,
    idCounter: 0,
    formulas: new Map(),
    motions: new Map(),
    clickables: new Map(),
  }
}
