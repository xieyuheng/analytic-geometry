import { vectorDistance } from "../../../utils/vector"
import { State } from "../State"
import { adjustCamera } from "../camera/adjustCamera"
import { Id } from "../id/Id"
import { Formula } from "./Formula"

export function renderFormula(state: State, id: Id, formula: Formula): void {
  state.ctx.save()

  const [width] = adjustCamera(state.ctx, state.camera)

  state.ctx.strokeStyle = formula.color
  state.ctx.lineWidth = id === state.hovered?.id ? 1 / 12 : 1 / 20

  let xmin = 0
  let ymin = 0
  let distance = Infinity
  for (let x = -width / 2; x < width / 2 + 1; x += formula.precision) {
    const x0 = x
    const x1 = x + formula.precision
    const y0 = formula.f(x0)
    const y1 = formula.f(x1)
    state.ctx.beginPath()
    state.ctx.moveTo(x0, y0)
    state.ctx.lineTo(x1, y1)
    state.ctx.stroke()

    const newDistance = vectorDistance(state.mouse.position, [x0, y0])
    if (newDistance < distance) {
      xmin = x0
      ymin = y0
      distance = newDistance
    }
  }

  state.mouseDistances.set(id, {
    id,
    name: formula.name,
    position: [xmin, ymin],
    distance,
  })

  state.ctx.restore()
}
