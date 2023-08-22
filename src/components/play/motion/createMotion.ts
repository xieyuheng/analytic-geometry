import { State } from '../State'
import { createId } from '../id/createId'
import { Motion } from './Motion'

export function createMotion(state: State, motion: Motion): string {
  const id = createId(state)
  state.motions.set(id, motion)
  return id
}
