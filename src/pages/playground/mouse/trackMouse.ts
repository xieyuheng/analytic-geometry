import { State } from "../State"
import { transformPoint } from "../camera/transformPoint"

export function trackMouse(state: State) {
  window.addEventListener("mousedown", (event) => {
    state.mouse.isDown = true
  })

  window.addEventListener("mouseup", (event) => {
    state.mouse.isDown = false
  })

  window.addEventListener("mousemove", (event) => {
    state.mouse.position = transformPoint(state.canvas, state.camera, [
      event.x,
      event.y,
    ])
  })
}
