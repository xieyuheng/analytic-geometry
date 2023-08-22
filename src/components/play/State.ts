import { Camera } from './camera/Camera'
import { Clickable } from './clickable/Clickable'
import { Formula } from './formula/Formula'
import { Id } from './id/Id'
import { Motion } from './motion/Motion'
import { Mouse } from './mouse/Mouse'

export type State = {
  container: HTMLElement
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  camera: Camera
  mouse: Mouse
  idCounter: number
  hovered?: Clickable
  formulas: Map<Id, Formula>
  motions: Map<Id, Motion>
  clickables: Map<Id, Clickable>
}
