import { Graph, Node } from "./Graph"
import { createEmptyGraph } from "./createEmptyGraph"
import { graphConnect } from "./graphConnect"

export function graphFromAdjacencyList(
  adjacencyList: Record<Node, Array<Node>>,
): Graph {
  const graph = createEmptyGraph()

  for (const [node, neighbors] of Object.entries(adjacencyList)) {
    for (const neighbor of neighbors) {
      if (node !== neighbor) {
        graphConnect(graph, node, neighbor)
      }
    }
  }

  return graph
}
