import { State } from '../State'
import { createId } from '../id/createId'
import { Formula } from './Formula'

export function createFormula(state: State, formula: Formula): string {
  const id = createId(state)
  state.formulas.set(id, formula)
  return id
}
