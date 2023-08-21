import colors from "tailwindcss/colors"
import { State } from "./State"

export function drawGrid(ctx: CanvasRenderingContext2D, state: State): void {
  for (let x = 0; x < state.width; x += state.unit) {
    for (let y = 0; y < state.height; y += state.unit) {
      ctx.strokeStyle = colors.stone[500]
      ctx.lineWidth = 0.3
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + state.unit, y)
      ctx.moveTo(x, y)
      ctx.lineTo(x, y + state.unit)
      ctx.stroke()
    }
  }
}
