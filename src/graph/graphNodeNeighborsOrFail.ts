import { Graph, Node } from "./Graph"

export function graphNodeNeighborsOrFail(graph: Graph, node: Node): Set<Node> {
  const neighbors = graph.nodeNeighbors.get(node)

  if (neighbors === undefined) {
    throw new Error(
      [
        `[graphNodeNeighborsOrFail] The node is not in the graph.`,
        ``,
        `  node: ${node}`,
      ].join("\n"),
    )
  }

  return neighbors
}
