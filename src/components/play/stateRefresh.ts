import { Mod } from './Mod'
import { State } from './State'
import { createFormula } from './formula/createFormula'
import { createMotion } from './motion/createMotion'

export function stateRefresh(state: State, mod: Mod): void {
  state.formulas = new Map()
  state.motions = new Map()
  state.clickables = new Map()

  for (const formula of mod.formulas) {
    createFormula(state, formula)
  }

  for (const motion of mod.motions) {
    createMotion(state, motion)
  }
}
