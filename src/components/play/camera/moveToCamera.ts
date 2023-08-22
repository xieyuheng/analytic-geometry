import { State } from '../State'

export function moveToCamera(state: State): void {
  state.ctx.translate(state.camera.position[0], state.camera.position[1])
}
