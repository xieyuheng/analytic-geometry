import { State } from "./State"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.width, state.height)

  ctx.font = "60px sans-serif"
  ctx.fillText("Hello world", 0, 0)

  let text = ctx.measureText("Hello world")
  console.log(text.width)

  // requestAnimationFrame(() => animate(ctx, state))
}
