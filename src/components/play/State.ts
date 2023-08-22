import { Camera } from './camera/Camera'
import { Clickable } from './clickable/Clickable'
import { Formula } from './formula/Formula'
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
  hovered?: Clickable
  formulas: Map<string, Formula>
  motions: Map<string, Motion>
  clickables: Map<string, Clickable>
}
