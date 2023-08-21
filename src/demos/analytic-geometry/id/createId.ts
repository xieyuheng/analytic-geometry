import { State } from "../State"

export function createId(state: State): string {
  return String(state.idCounter++)
}
