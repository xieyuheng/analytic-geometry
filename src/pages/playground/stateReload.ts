import colors from 'tailwindcss/colors'
import { Formula } from '../../components/play/formula/Formula'
import { createMod } from '../../components/play/mod/createMod'
import { Motion } from '../../components/play/motion/Motion'
import { State } from './State'

export async function stateReload(state: State): Promise<void> {
  state.errorMessage = ''

  state.mod = createMod()

  function createFormula(formula: Formula) {
    state.mod.formulas.push(formula)
  }

  function createMotion(motion: Motion) {
    state.mod.motions.push(motion)
  }

  try {
    const customFunction = Function(
      'createFormula',
      'createMotion',
      'colors',
      '"use strict";\n' + state.text,
    )

    customFunction(createFormula, createMotion, colors)

    // NOTE After async execution, update `tick`
    // for `Play` component to refresh state.
    state.tick++
  } catch (error) {
    state.errorMessage = String(error)
  }
}
