import { State } from './State'
import { stateReload } from './stateReload'

export type StateOptions = {
  text: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { text } = options

  const state: State = {
    kind: 'Play',
    text,
    output: '',
    errorMessage: '',
    tick: 0,
  }

  await stateReload(state)

  return state
}
