import { Mod } from './Mod'

export function createMod(): Mod {
  return {
    formulas: new Map(),
    motions: new Map(),
  }
}
