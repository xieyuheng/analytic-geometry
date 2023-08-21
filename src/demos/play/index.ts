import { Mouse } from "./Mouse"
import { animate } from "./animate"
import { createState } from "./createState"

export function main() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const mouse: Mouse = {
    x: 0,
    y: 0,
    isDown: false,
  }

  const state = createState(ctx, {
    width: canvas.width,
    height: canvas.height,
    mouse,
  })

  animate(ctx, state)

  window.addEventListener("mousedown", (event) => {
    mouse.isDown = true
  })

  window.addEventListener("mouseup", (event) => {
    mouse.isDown = false
  })

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.x
    mouse.y = event.y
  })

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })

  window.addEventListener("resize", () => {
    state.width = window.innerWidth
    state.height = window.innerHeight
  })
}
