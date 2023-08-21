import { State } from "./State"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  if (state.mouse.isDown) {
    ctx.fillStyle = "hsla(240, 100%, 0%, 0.5)"
    ctx.beginPath()
    ctx.moveTo(state.mouse.x, state.mouse.y)
    ctx.arc(state.mouse.x, state.mouse.y, 8, 0, Math.PI * 2)
    ctx.fill()
  }

  requestAnimationFrame(() => animate(ctx, state))
}
