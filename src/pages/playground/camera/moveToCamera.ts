import { Camera } from "./Camera"

export function moveToCamera(
  ctx: CanvasRenderingContext2D,
  camera: Camera,
): void {
  ctx.translate(camera.position[0], camera.position[1])
}
