import { Vector } from './Vector'

export function vectorAddScalar(x: Vector, s: number): Vector {
  const z: Vector = []
  for (let i = 0; i < x.length; i++) {
    z.push(x[i] + s)
  }

  return z
}
