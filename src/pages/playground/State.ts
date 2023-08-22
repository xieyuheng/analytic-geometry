import { Mod } from './Mod'

export type State = {
  kind: 'Play' | 'Error'
  text: string
  mod: Mod
  errorMessage: string
  tick: number
}
