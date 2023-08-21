export type Node = string

export type Edge = {
  first: Node
  second: Node
}

export type Graph = {
  nodeNeighbors: Map<Node, Set<Node>>
  edges: Array<Edge>
}
