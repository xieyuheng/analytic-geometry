import { State } from '../State'
import { transformPoint } from '../camera/transformPoint'

export function trackMouse(state: State, containerElement: HTMLElement) {
  containerElement.addEventListener('mousedown', (event) => {
    state.mouse.isDown = true
  })

  containerElement.addEventListener('mouseup', (event) => {
    state.mouse.isDown = false
  })

  containerElement.addEventListener('mousemove', (event) => {
    state.mouse.position = transformPoint(state.canvas, state.camera, [
      event.x,
      event.y,
    ])
  })
}
