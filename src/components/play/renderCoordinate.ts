import { State } from './State'
import { adjustCamera } from './camera/adjustCamera'

export function renderCoordinate(state: State): void {
  state.ctx.save()

  const [width, height] = adjustCamera(state)

  state.ctx.strokeStyle = 'hsla(240, 100%, 50%, 50%)'
  state.ctx.lineWidth = 1 / 30

  for (let x = Math.floor(-width / 2); x <= Math.ceil(width / 2); x += 1) {
    state.ctx.beginPath()
    state.ctx.moveTo(x, 0)
    state.ctx.lineTo(x + 1, 0)
    state.ctx.moveTo(x, 0)
    state.ctx.lineTo(x, 1 / 5)
    state.ctx.stroke()
  }

  for (let y = Math.floor(-height / 2); y <= Math.ceil(height / 2); y += 1) {
    state.ctx.beginPath()
    state.ctx.moveTo(0, y)
    state.ctx.lineTo(0, y + 1)
    state.ctx.moveTo(0, y)
    state.ctx.lineTo(1 / 5, y)
    state.ctx.stroke()
  }

  state.ctx.restore()
}
