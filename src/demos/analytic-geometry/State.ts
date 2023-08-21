import { Camera } from "./camera/Camera"
import { Formula } from "./formula/Formula"
import { Id } from "./id/Id"
import { Motion } from "./motion/Motion"
import { MouseDistance } from "./mouse-distance/MouseDistance"
import { Mouse } from "./mouse/Mouse"

export type State = {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  camera: Camera
  mouse: Mouse
  idCounter: number
  hovered?: MouseDistance
  formulas: Map<Id, Formula>
  motions: Map<Id, Motion>
  mouseDistances: Map<Id, MouseDistance>
}
