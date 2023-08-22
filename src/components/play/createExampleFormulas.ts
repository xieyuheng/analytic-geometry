import colors from 'tailwindcss/colors'
import { State } from './State'
import { createFormula } from './formula/createFormula'

export function createExampleFormulas(state: State): void {
  createFormula(state, {
    description: 'sin',
    f: (x) => Math.sin(x),
    color: colors.rose[400],
  })

  createFormula(state, {
    description: 'x ** 2',
    f: (x) => x ** 2,
    color: colors.rose[400],
  })

  createFormula(state, {
    description: 'x * sin(x)',
    f: (x) => x * Math.sin(x),
    color: colors.rose[400],
  })
}
