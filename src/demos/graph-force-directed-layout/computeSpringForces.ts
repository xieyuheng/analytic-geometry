import { Graph, Node } from "../../graph/Graph"
import { graphNodeNeighborsOrFail } from "../../graph/graphNodeNeighborsOrFail"
import { graphNodes } from "../../graph/graphNodes"
import { GraphLayout } from "./GraphLayout"
import { computeSpringForce } from "./computeSpringForce"

export function computeSpringForces(
  graph: Graph,
  layout: GraphLayout,
): Map<Node, [number, number]> {
  const forces = new Map()

  for (const node of graphNodes(graph)) {
    const position = layout.nodePositions.get(node)
    if (position === undefined) continue

    const force: [number, number] = [0, 0]
    for (const neighbor of graphNodeNeighborsOrFail(graph, node)) {
      if (neighbor !== node) {
        const neighborPosition = layout.nodePositions.get(neighbor)
        if (neighborPosition === undefined) continue

        const [x, y] = computeSpringForce(position, neighborPosition)
        force[0] += x
        force[1] += y
      }
    }

    forces.set(node, force)
  }

  return forces
}
