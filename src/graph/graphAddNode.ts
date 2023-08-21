import { Graph, Node } from "./Graph"

export function graphAddNode(graph: Graph, node: Node): void {
  const neighbors = graph.nodeNeighbors.get(node)
  if (neighbors === undefined) {
    graph.nodeNeighbors.set(node, new Set())
  }
}
