import colors from "tailwindcss/colors"
import { State } from "./State"
import { createMotion } from "./motion/createMotion"

// https://en.wikipedia.org/wiki/Parametric_equation

export function createExampleMotions(state: State): void {
  createMotion(state, {
    name: "Circle of radian 3.",
    x: (t) => Math.sin(t) * 3,
    y: (t) => Math.cos(t) * 3,
    range: [0, Math.PI * 2],
    precision: 0.1,
    color: colors.orange[400],
  })

  // https://en.wikipedia.org/wiki/Butterfly_curve_(transcendental)
  createMotion(state, {
    name: "Butterfly curve.",
    x: (t) =>
      5 * Math.sin(t) *
      (Math.E ** Math.cos(t) -
        2 * Math.cos(4 * t) -
        Math.sin(Math.sin(Math.sin(Math.sin(Math.sin(t / 12)))))),
    y: (t) =>
      5 * Math.cos(t) *
      (Math.E ** Math.cos(t) -
        2 * Math.cos(4 * t) -
        Math.sin(Math.sin(Math.sin(Math.sin(Math.sin(t / 12)))))),
    range: [0, Math.PI * 12],
    precision: 0.01,
    color: colors.orange[400],
  })
}
