import { Graph, Node } from "./Graph"

export function graphNodes(graph: Graph): Array<Node> {
  return Array.from(graph.nodeNeighbors.keys())
}
