import { Vector } from "../../../utils/vector"
import { Camera } from "./Camera"

export function adjustCamera(
  ctx: CanvasRenderingContext2D,
  camera: Camera,
): Vector {
  ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2)
  ctx.scale(camera.scale, -camera.scale)
  ctx.translate(-camera.position[0], -camera.position[1])

  const width = ctx.canvas.width / camera.scale
  const height = ctx.canvas.height / camera.scale

  return [width, height]
}
