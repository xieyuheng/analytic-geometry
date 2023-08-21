import { animate } from "./animate"
import { createExampleFormulas } from "./createExampleFormulas"
import { createExampleMotions } from "./createExampleMotions"
import { createState } from "./createState"
import { trackMouse } from "./mouse/trackMouse"
import { resizeCanvas } from "./resizeCanvas"

export function main() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  const state = createState(canvas)
  resizeCanvas(state.canvas)

  state.camera.position = [1, 1]

  createExampleFormulas(state)
  createExampleMotions(state)
  trackMouse(state)
  animate(state)
}
