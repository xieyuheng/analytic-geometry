import { State } from './State'

export async function stateReload(state: State): Promise<void> {
  state.errorMessage = ''
  state.output = ''

  // state.mod.loader.onOutput = (output) => {
  //   state.output += output
  //   state.output += '\n'
  // }

  // state.mod = createMod({
  //   loader: state.mod.loader,
  //   url: state.mod.url,
  //   text: state.text,
  //   stmts: [],
  // })

  try {
    // state.mod.stmts = parseStmts(state.text)

    // for (const stmt of state.mod.stmts) {
    //   await stmt.execute(state.mod)
    // }

    // NOTE After async execution, update `tick`
    // for `Play` component to refresh state.
    state.tick++
  } catch (error) {
    state.errorMessage = String(error)
  }
}
