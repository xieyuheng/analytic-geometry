import colors from "tailwindcss/colors"
import { State } from "./State"
import { createFormula } from "./formula/createFormula"

export function createExampleFormulas(state: State): void {
  createFormula(state, {
    name: "sin",
    f: (x) => Math.sin(x),
    precision: 0.1,
    color: colors.rose[400],
  })

  createFormula(state, {
    name: "x ** 2",
    f: (x) => x ** 2,
    precision: 0.1,
    color: colors.rose[400],
  })

  createFormula(state, {
    name: "x * sin(x)",
    f: (x) => x * Math.sin(x),
    precision: 0.1,
    color: colors.rose[400],
  })
}
