import { State } from '../State'

export function transformPoint(
  state: State,
  point: [number, number],
): [number, number] {
  point = [point[0], point[1]]

  // translate to origin
  point[0] -= state.width / 2
  point[1] -= state.height / 2

  // flip y axis
  point[1] = -point[1]

  // scale
  point[0] /= state.camera.scale
  point[1] /= state.camera.scale

  // translate to camera position
  point[0] += state.camera.position[0]
  point[1] += state.camera.position[1]

  return point
}
