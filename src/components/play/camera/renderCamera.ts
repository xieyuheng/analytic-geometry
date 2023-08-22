import { State } from '../State'
import { adjustCamera } from './adjustCamera'
import { moveToCamera } from './moveToCamera'

export function renderCamera(state: State): void {
  state.ctx.save()

  adjustCamera(state)
  moveToCamera(state)

  state.ctx.strokeStyle = 'hsla(20, 100%, 50%, 50%)'
  state.ctx.lineWidth = 1 / 20

  state.ctx.beginPath()
  state.ctx.moveTo(0, 0)
  state.ctx.lineTo(0, 0.5)
  state.ctx.moveTo(0, 0)
  state.ctx.lineTo(0.5, 0)
  state.ctx.moveTo(0, 0)
  state.ctx.lineTo(0, -0.5)
  state.ctx.moveTo(0, 0)
  state.ctx.lineTo(-0.5, 0)
  state.ctx.stroke()

  state.ctx.restore()
}
