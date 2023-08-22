import { State } from '../State'
import { transformPoint } from '../camera/transformPoint'

export function trackMouse(state: State) {
  state.canvas.addEventListener('mousedown', (event) => {
    event.preventDefault()
    state.mouse.isDown = true
  })

  state.canvas.addEventListener('mouseup', (event) => {
    event.preventDefault()
    state.mouse.isDown = false
  })

  state.canvas.addEventListener('mousemove', (event) => {
    state.mouse.position = [event.offsetX, event.offsetY]
    state.mouse.adjustedPosition = transformPoint(state, [
      event.offsetX,
      event.offsetY,
    ])
  })

  state.canvas.addEventListener('touchstart', (event) => {
    const offsetX =
      event.touches[0].pageX - (event.touches[0].target as any).offsetLeft

    const offsetY =
      event.touches[0].pageY - (event.touches[0].target as any).offsetTop

    state.mouse.position = [offsetX, offsetY]
    state.mouse.adjustedPosition = transformPoint(state, [offsetX, offsetY])

    state.mouse.isDown = true
  })

  state.canvas.addEventListener('touchend', (event) => {
    state.mouse.isDown = false
  })

  state.canvas.addEventListener('touchmove', (event: TouchEvent) => {
    const offsetX =
      event.touches[0].pageX - (event.touches[0].target as any).offsetLeft

    const offsetY =
      event.touches[0].pageY - (event.touches[0].target as any).offsetTop

    state.mouse.position = [offsetX, offsetY]
    state.mouse.adjustedPosition = transformPoint(state, [offsetX, offsetY])

    state.mouse.isDown = true
  })
}
