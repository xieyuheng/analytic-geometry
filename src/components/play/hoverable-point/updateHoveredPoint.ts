import { State } from '../State'
import { withinRect } from '../button/withinRect'

export function updateHoveredPoint(state: State): void {
  state.hoveredPoint = undefined

  for (const button of state.overCameraButtons.values()) {
    if (withinRect(button.rect, state.mouse.position)) {
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
