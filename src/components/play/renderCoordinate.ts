import { State } from './State'
import { adjustCamera } from './camera/adjustCamera'

export function renderCoordinate(state: State): void {
  state.ctx.save()

  const [width, height] = adjustCamera(state)

  state.ctx.strokeStyle = 'black'
  state.ctx.lineWidth = 1 / 30

  for (
    let x = Math.floor(-width / 2) - state.camera.position[0];
    x <= Math.ceil(width / 2) - state.camera.position[0];
    x += 1
  ) {
    state.ctx.beginPath()
    state.ctx.moveTo(x, 0)
    state.ctx.lineTo(x + 1, 0)
    state.ctx.moveTo(x, 0)
    state.ctx.lineTo(x, 1 / 5)
    state.ctx.stroke()
  }

  for (
    let y = Math.floor(-height / 2) + state.camera.position[1];
    y <= Math.ceil(height / 2) + state.camera.position[1];
    y += 1
  ) {
    state.ctx.beginPath()
    state.ctx.moveTo(0, y)
    state.ctx.lineTo(0, y + 1)
    state.ctx.moveTo(0, y)
    state.ctx.lineTo(1 / 5, y)
    state.ctx.stroke()
  }

  state.ctx.restore()
}
