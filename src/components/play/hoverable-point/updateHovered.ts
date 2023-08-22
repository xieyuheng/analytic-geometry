import { State } from '../State'

export function updateHovered(state: State): void {
  state.HoveredPoint = undefined
  let distance = 0.5
  for (const [id, hoverablePoint] of state.hoverablePoints) {
    if (hoverablePoint.distance < distance) {
      distance = hoverablePoint.distance
      state.HoveredPoint = hoverablePoint
    }
  }
}
