import { State } from './State'
import { renderCamera } from './camera/renderCamera'
import { updateHovered } from './clickable/updateHovered'
import { renderFormula } from './formula/renderFormula'
import { renderMotion } from './motion/renderMotion'
import { renderCoordinate } from './renderCoordinate'
import { renderHovered } from './renderHovered'
import { renderInfo } from './renderInfo'

export function animate(state: State): void {
  state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)

  renderCamera(state)
  renderCoordinate(state)
  renderInfo(state)

  for (const [id, formula] of state.formulas) {
    renderFormula(state, id, formula)
  }

  for (const [id, motion] of state.motions) {
    renderMotion(state, id, motion)
  }

  updateHovered(state)
  renderHovered(state)

  requestAnimationFrame(() => animate(state))
}
