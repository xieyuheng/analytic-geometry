import { Node } from "../../tree/Node"
import { depth } from "../../tree/depth"
import { traversalInorder } from "../../tree/traversalInorder"
import { treeEdges } from "../../tree/treeEdges"
import { generatorEntries } from "../../utils/generatorEntries"

export type NodeLayout = {
  x: number
  y: number
}

export type Layout = {
  nodes: Map<string, NodeLayout>
  edges: Array<{ first: Node; second: Node }>
}

export function treeLayout(tree: Node): Layout {
  const nodes = new Map()

  for (const [index, node] of generatorEntries(traversalInorder(tree))) {
    nodes.set(node.id, {
      x: index,
      y: depth(node),
    })
  }

  return {
    nodes,
    edges: treeEdges(tree),
  }
}
