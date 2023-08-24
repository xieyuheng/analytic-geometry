import { State } from '../State'
import { Rect } from './Rect'

export type Button = {
  rect: Rect
  handler: (state: State) => void
}
