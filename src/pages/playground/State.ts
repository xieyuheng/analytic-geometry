import { Mod } from './Mod'

export type State = {
  kind: 'Play' | 'Error'
  text: string
  mod: Mod
  output: string
  errorMessage: string
  tick: number
}
