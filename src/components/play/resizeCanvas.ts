import { State } from './State'

export function resizeCanvas(state: State) {
  state.canvas.width = state.container.offsetWidth
  state.canvas.height = state.container.offsetHeight

  new ResizeObserver(() => {
    state.canvas.width = state.container.offsetWidth
    state.canvas.height = state.container.offsetHeight
  }).observe(state.container)
}
