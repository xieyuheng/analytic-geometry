import { State } from "./State"

export function drawLine(
  ctx: CanvasRenderingContext2D,
  state: State,
  angle: number,
  x: number,
  y: number,
): void {
  const dx = state.mouse.x - x
  const dy = state.mouse.y - y
  const distance = Math.sqrt(dx * dx + dy * dy)
  const length = distance * 0.12

  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length)
  ctx.stroke()
}
