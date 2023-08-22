import { Mod } from '../../components/play/Mod'

export type State = {
  kind: 'Play' | 'Error'
  text: string
  mod: Mod
  errorMessage: string
  tick: number
}
