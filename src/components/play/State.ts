import { Button } from './button/Button'
import { Camera } from './camera/Camera'
import { Formula } from './formula/Formula'
import { HoverablePoint } from './hoverable-point/HoverablePoint'
import { Motion } from './motion/Motion'
import { Mouse } from './mouse/Mouse'

export type State = {
  // Contexts:
  container: HTMLElement
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  width: number
  height: number

  // Frame rate control:
  lastTime: number
  clickCoollingTimer: number

  // Abstract devices:
  camera: Camera
  mouse: Mouse
  HoveredPoint?: HoverablePoint

  // Entity stores:
  idCounter: number
  formulas: Map<string, Formula>
  motions: Map<string, Motion>
  hoverablePoints: Map<string, HoverablePoint>
  overCameraButtons: Map<string, Button>
}
