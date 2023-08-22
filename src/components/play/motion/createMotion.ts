import { State } from '../State'
import { Id } from '../id/Id'
import { createId } from '../id/createId'
import { Motion } from './Motion'

export function createMotion(state: State, motion: Motion): Id {
  const id = createId(state)
  state.motions.set(id, motion)
  return id
}
