import { State } from '../State'

export type BoxRegion = {
  lowX: number
  lowY: number
  highX: number
  highY: number
}

export type Button = {
  boxRegion: BoxRegion
  handler: (state: State) => void
}
