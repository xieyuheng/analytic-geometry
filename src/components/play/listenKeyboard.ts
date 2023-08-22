import { State } from './State'

export function listenKeyboard(state: State): void {
  state.canvas.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      state.camera.position[1]--
    }

    if (event.key === 'ArrowUp') {
      state.camera.position[1]++
    }

    if (event.key === 'ArrowLeft') {
      state.camera.position[0]--
    }

    if (event.key === 'ArrowRight') {
      state.camera.position[0]++
    }
  })
}
