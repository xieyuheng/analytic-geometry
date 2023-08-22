import { Vector } from '../../utils/vector'
import { State } from './State'

// Assume the `adjustCamera` is called.

export function drawText(
  state: State,
  text: string,
  position: Vector,
  options: {
    fontScale?: number
    textBaseline?: CanvasTextBaseline
  },
): void {
  const fontScale = options.fontScale || 1

  state.ctx.save()

  state.ctx.scale(
    (1 / state.camera.scale) * fontScale,
    (-1 / state.camera.scale) * fontScale,
  )

  if (options.textBaseline) {
    state.ctx.textBaseline = options.textBaseline
  }

  state.ctx.fillText(
    text,
    (position[0] * state.camera.scale) / fontScale,
    (-[position[1]] * state.camera.scale) / fontScale,
  )

  state.ctx.restore()
}
