import { Graph } from "../../graph/Graph"
import { graphNodes } from "../../graph/graphNodes"
import { GraphLayout } from "./GraphLayout"

export function graphLayoutRandom(
  graph: Graph,
  options: {
    limit: { width: number; height: number }
  },
): GraphLayout {
  const { limit } = options

  const nodePositions = new Map()
  for (const node of graphNodes(graph)) {
    nodePositions.set(node, [
      Math.random() * limit.width,
      Math.random() * limit.height,
    ])
  }

  return {
    nodePositions,
  }
}
