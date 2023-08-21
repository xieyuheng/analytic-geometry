import { State } from "../State"

export function updateHovered(state: State): void {
  state.hovered = undefined
  let distance = 0.5
  for (const [id, clickable] of state.clickables) {
    if (clickable.distance < distance) {
      distance = clickable.distance
      state.hovered = clickable
    }
  }
}
