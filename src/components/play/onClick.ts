import { State } from './State'

export function onClick(state: State): void {
  console.log(state.mouse)
}
