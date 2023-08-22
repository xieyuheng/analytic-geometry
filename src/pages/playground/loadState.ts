import { State } from './State'
import { createMod } from './createMod'
import { stateReload } from './stateReload'

export type StateOptions = {
  text: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { text } = options
  const mod = createMod()

  const state: State = {
    kind: 'Play',
    text,
    mod,
    errorMessage: '',
    tick: 0,
  }

  await stateReload(state)

  return state
}
