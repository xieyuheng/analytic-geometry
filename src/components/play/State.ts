import { Camera } from './camera/Camera'
import { Formula } from './formula/Formula'
import { HoverablePoint } from './hoverable-point/HoverablePoint'
import { Motion } from './motion/Motion'
import { Mouse } from './mouse/Mouse'

export type State = {
  container: HTMLElement
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  width: number
  height: number
  camera: Camera
  mouse: Mouse
  idCounter: number
  hovered?: HoverablePoint
  formulas: Map<string, Formula>
  motions: Map<string, Motion>
  hoverablePoints: Map<string, HoverablePoint>
}
