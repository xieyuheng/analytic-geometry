import { Graph } from "../../graph/Graph"
import { graphNodes } from "../../graph/graphNodes"
import { GraphLayout } from "./GraphLayout"
import { computeElectricalForces } from "./computeElectricalForces"
import { computeSpringForces } from "./computeSpringForces"

export function evolveGraph(
  graph: Graph,
  layout: GraphLayout,
  options: {
    step: number
  },
): void {
  const { step } = options

  const coolingFactor = 0.999

  const springForces = computeSpringForces(graph, layout)
  const electricalForces = computeElectricalForces(graph, layout)

  for (const node of graphNodes(graph)) {
    const position = layout.nodePositions.get(node)
    if (position === undefined) continue

    const springForce = springForces.get(node)
    if (springForce) {
      position[0] += springForce[0] * coolingFactor ** step
      position[1] += springForce[1] * coolingFactor ** step
    }

    const electricalForce = electricalForces.get(node)
    if (electricalForce) {
      position[0] += electricalForce[0] * coolingFactor ** step
      position[1] += electricalForce[1] * coolingFactor ** step
    }
  }
}
