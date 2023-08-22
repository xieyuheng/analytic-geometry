import { State } from '../State'
import { withinBoxRegion } from '../button/withinBoxRegion'

export function updateHovered(state: State): void {
  state.hoveredPoint = undefined

  for (const button of state.overCameraButtons.values()) {
    if (withinBoxRegion(button.boxRegion, state.mouse.position)) {
      return
    }
  }

  let distance = 0.5
  for (const [id, hoverablePoint] of state.hoverablePoints) {
    if (hoverablePoint.distance < distance) {
      distance = hoverablePoint.distance
      state.hoveredPoint = hoverablePoint
    }
  }
}
