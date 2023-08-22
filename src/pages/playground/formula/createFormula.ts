import { State } from '../State'
import { Id } from '../id/Id'
import { createId } from '../id/createId'
import { Formula } from './Formula'

export function createFormula(state: State, formula: Formula): Id {
  const id = createId(state)
  state.formulas.set(id, formula)
  return id
}
