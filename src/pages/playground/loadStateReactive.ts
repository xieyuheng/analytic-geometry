import { State } from './State'
import { StateOptions, loadState } from './loadState'
import { stateReactive } from './stateReactive'

let cache: State | undefined = undefined

export async function loadStateReactive(options: StateOptions): Promise<State> {
  if (cache) {
    return cache
  }

  const state = stateReactive(await loadState(options))

  cache = state

  return state
}
