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

  const width = container.offsetWidth
  const height = container.offsetHeight

  const mouse = createMouse({ width, height })

  return {
    container,
    canvas,
    ctx,
    width,
    height,
    camera,
    mouse,
    idCounter: 0,
    formulas: new Map(),
    motions: new Map(),
    hoverablePoints: new Map(),
  }
}
