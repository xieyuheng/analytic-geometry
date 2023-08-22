import { Mod } from './Mod'
import { State } from './State'
import { createId } from './id/createId'

export function stateRefresh(state: State, mod: Mod): void {
  state.formulas = new Map()
  state.motions = new Map()
  state.hoverablePoints = new Map()

  for (const formula of mod.formulas) {
    state.formulas.set(createId(state), formula)
  }

  for (const motion of mod.motions) {
    state.motions.set(createId(state), motion)
  }
}
