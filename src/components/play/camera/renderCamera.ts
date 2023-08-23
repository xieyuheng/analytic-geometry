import { State } from '../State'
import { adjustCamera } from './adjustCamera'
import { moveToCamera } from './moveToCamera'

export function renderCamera(state: State): void {
  state.ctx.save()

  adjustCamera(state)
  moveToCamera(state)

  const unit = 1 / state.camera.scale
  state.ctx.strokeStyle = 'hsla(20, 100%, 50%, 50%)'
  state.ctx.lineWidth = 1.5 * unit

  state.ctx.beginPath()
  state.ctx.moveTo(0, 0)
  state.ctx.lineTo(0, 15 * unit)
    state.ctx.moveTo(0, 0)
  state.ctx.lineTo(0, -15 * unit)
  state.ctx.moveTo(0, 0)
  state.ctx.lineTo(15 * unit, 0)
  state.ctx.moveTo(0, 0)
  state.ctx.lineTo(-15 * unit, 0)
  state.ctx.stroke()

  state.ctx.restore()
}
