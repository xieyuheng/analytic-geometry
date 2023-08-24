import { State } from './State'
import { renderCamera } from './camera/renderCamera'
import { renderController } from './controller/renderController'
import { renderFormula } from './formula/renderFormula'
import { renderHoveredPoint } from './hoverable-point/renderHoveredPoint'
import { updateHoveredPoint } from './hoverable-point/updateHoveredPoint'
import { renderMotion } from './motion/renderMotion'
import { onClick } from './mouse/onClick'
import { renderCoordinate } from './renderCoordinate'
import { renderInfo } from './renderInfo'

export function render(state: State, passedTime?: number): void {
  passedTime = passedTime || 0
  const deltaTime = passedTime - state.lastTime
  state.lastTime = passedTime

  state.ctx.clearRect(0, 0, state.width, state.height)

  renderCoordinate(state)

  for (const [id, formula] of state.formulas) {
    renderFormula(state, id, formula)
  }

  for (const [id, motion] of state.motions) {
    renderMotion(state, id, motion)
  }

  const clickPeriod = 120
  if (state.clickCoollingTimer <= 0) {
    if (state.mouse.isDown) {
      onClick(state)
      state.clickCoollingTimer = clickPeriod
    }
  } else {
    state.clickCoollingTimer -= deltaTime
  }

  updateHoveredPoint(state)
  if (state.hoveredPoint) {
    renderHoveredPoint(state, state.hoveredPoint)
  }

  renderController(state)

  renderCamera(state)
  renderInfo(state)

  requestAnimationFrame((passedTime) => render(state, passedTime))
}
