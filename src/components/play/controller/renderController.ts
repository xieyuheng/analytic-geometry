import { State } from '../State'
import { renderButtonDown } from './renderButtonDown'
import { renderButtonUp } from './renderButtonUp'

export function renderController(state: State): void {
  const size = 40
  renderButtonUp(state, { size })
  renderButtonDown(state, { size })
}
