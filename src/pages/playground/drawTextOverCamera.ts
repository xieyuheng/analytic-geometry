import { Vector, vectorAdd } from "../../utils/vector"
import { State } from "./State"
import { drawText } from "./drawText"

// Assume the `adjustCamera` is called.

export function drawTextOverCamera(
  state: State,
  text: string,
  position: Vector,
  options: {
    fontScale?: number
    textBaseline?: CanvasTextBaseline
  },
): void {
  drawText(state, text, vectorAdd(position, state.camera.position), options)
}
