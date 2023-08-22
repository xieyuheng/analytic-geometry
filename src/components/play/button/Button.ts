import { State } from '../State'
import { BoxRegion } from './BoxRegion'

export type Button = {
  boxRegion: BoxRegion
  handler: (state: State) => void
}
