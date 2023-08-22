import { Camera } from './Camera'

export function transformPoint(
  canvas: HTMLCanvasElement,
  camera: Camera,
  point: [number, number],
): [number, number] {
  point = [point[0], point[1]]

  // translate to origin
  point[0] -= canvas.width / 2
  point[1] -= canvas.height / 2

  // flip y axis
  point[1] = -point[1]

  // scale
  point[0] /= camera.scale
  point[1] /= camera.scale

  // translate to camera position
  point[0] += camera.position[0]
  point[1] += camera.position[1]

  return point
}
