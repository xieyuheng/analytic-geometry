import { State } from './State'
import { createCamera } from './camera/createCamera'
import { createMouse } from './mouse/createMouse'

export type StateOptions = {
  canvas: HTMLCanvasElement
  container: HTMLElement
}

export function createState(options: StateOptions): State {
  const { canvas, container } = options

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const camera = createCamera()
  const mouse = createMouse(canvas)

  // const width = container.offsetWidth
  // const height = container.offsetHeight

  // const ratio = window.devicePixelRatio

  // canvas.width = width * ratio
  // canvas.height = height * ratio

  // canvas.style.width = width + 'px'
  // canvas.style.height = height + 'px'

  // ctx.scale(ratio, ratio)

  return {
    container,
    canvas,
    ctx,
    camera,
    mouse,
    idCounter: 0,
    formulas: new Map(),
    motions: new Map(),
    clickables: new Map(),
  }
}
