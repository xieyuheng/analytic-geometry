import { State } from './State'

export function resizeCanvas(state: State) {
  resizeCanvasOnce(state)

  new ResizeObserver(() => resizeCanvasOnce(state)).observe(state.container)
}

function resizeCanvasOnce(state: State) {
  const width = state.container.offsetWidth
  const height = state.container.offsetHeight

  state.width = width
  state.height = height

  const ratio = window.devicePixelRatio || 1

  state.canvas.width = width * ratio
  state.canvas.height = height * ratio

  state.canvas.style.width = width + 'px'
  state.canvas.style.height = height + 'px'

  state.ctx.scale(ratio, ratio)
}
