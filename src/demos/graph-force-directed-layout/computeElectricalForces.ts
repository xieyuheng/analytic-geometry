import { Graph, Node } from "../../graph/Graph"
import { graphNodes } from "../../graph/graphNodes"
import { GraphLayout } from "./GraphLayout"
import { computeElectricalForce } from "./computeElectricalForce"

export function computeElectricalForces(
  graph: Graph,
  layout: GraphLayout,
): Map<Node, [number, number]> {
  const forces = new Map()

  for (const node of graphNodes(graph)) {
    const position = layout.nodePositions.get(node)
    if (position === undefined) continue

    const force: [number, number] = [0, 0]
    for (const other of graphNodes(graph)) {
      if (other !== node) {
        const otherPosition = layout.nodePositions.get(other)
        if (otherPosition === undefined) continue

        const [x, y] = computeElectricalForce(position, otherPosition)
        force[0] += x
        force[1] += y
      }
    }

    forces.set(node, force)
  }

  return forces
}
