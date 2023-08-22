import { Vector } from './Vector'

export function vectorMul(x: Vector, y: Vector): Vector {
  if (x.length !== y.length) {
    throw new Error(
      [
        `[vectorMul] Vector length mismatch.`,
        ``,
        `  x.length: ${x.length}`,
        `  y.length: ${y.length}`,
      ].join('\n'),
    )
  }

  const z: Vector = []
  for (let i = 0; i < x.length; i++) {
    z.push(x[i] * y[i])
  }

  return z
}
