import { Vector } from '../../../utils/vector'
import { State } from '../State'

export function adjustCamera(state: State): Vector {
  state.ctx.translate(state.width / 2, state.height / 2)
  state.ctx.scale(state.camera.scale, -state.camera.scale)
  state.ctx.translate(-state.camera.position[0], -state.camera.position[1])

  const width = state.width / state.camera.scale
  const height = state.height / state.camera.scale

  return [width, height]
}
