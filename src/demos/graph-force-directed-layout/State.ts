import { Mouse } from "./Mouse"

export type State = {
  width: number
  height: number
  mouse: Mouse
  unit: number

  // Faster FPS will be slow to 60 FPS.
  // Slower FPS will be run as fast as possible.
  lastTime: number
  interval: number
  timer: number
}
