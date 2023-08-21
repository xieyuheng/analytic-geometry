import { animate } from "./animate"
import { createGradient } from "./createGradient"
import { createState } from "./createState"

export function main() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const mouse = {
    x: 0,
    y: 0,
  }

  const state = createState(ctx, {
    width: canvas.width,
    height: canvas.height,
    mouse,
  })

  ctx.strokeStyle = createGradient(ctx, {
    width: canvas.width,
    height: canvas.height,
  })

  animate(ctx, state)

  ctx.strokeStyle = createGradient(ctx, {
    width: canvas.width,
    height: canvas.height,
  })

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.x
    mouse.y = event.y
  })

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    state.width = window.innerWidth
    state.height = window.innerHeight

    ctx.strokeStyle = createGradient(ctx, {
      width: canvas.width,
      height: canvas.height,
    })
  })
}
