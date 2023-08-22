import { State } from './State'

export async function stateReload(state: State): Promise<void> {
  state.errorMessage = ''
  state.output = ''

  function defineFormula() {
    //
  }

  function defineMotion() {
    //
  }

  try {
    const customFunction = Function(
      'defineFormula',
      'defineMotion',
      '"use strict";\n' + state.text,
    )

    customFunction(defineFormula, defineMotion)

    // NOTE After async execution, update `tick`
    // for `Play` component to refresh state.
    state.tick++
  } catch (error) {
    state.errorMessage = String(error)
  }
}
