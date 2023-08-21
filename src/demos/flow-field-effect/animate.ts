import { State } from "./State"
import { drawLine } from "./drawLine"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.width, state.height)

  state.radius += state.radiusVelocity
  if (state.radius > state.radiusLimit || state.radius < -state.radiusLimit) {
    state.radiusVelocity *= -1
  }

  for (let x = state.cellSize; x < state.width; x += state.cellSize) {
    for (let y = state.cellSize; y < state.height; y += state.cellSize) {
      const angle =
        (Math.cos(x * state.zoom) + Math.sin(y * state.zoom)) * state.radius
      drawLine(ctx, state, angle, x, y)
    }
  }

  requestAnimationFrame(() => animate(ctx, state))
}
