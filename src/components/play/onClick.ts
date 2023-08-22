import { State } from './State'
import { withinBoxRegion } from './button/withinBoxRegion'

export function onClick(state: State): void {
  for (const button of state.overCameraButtons.values()) {
    console.log(button.boxRegion, state.mouse.position)
    if (withinBoxRegion(button.boxRegion, state.mouse.position)) {
      button.handler(state)
    }
  }
}
