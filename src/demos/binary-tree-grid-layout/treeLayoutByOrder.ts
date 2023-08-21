import { Node } from "../../tree/Node.js"
import { depth } from "../../tree/depth.js"
import { traversalInorder } from "../../tree/traversalInorder.js"
import { traversalPostorder } from "../../tree/traversalPostorder.js"
import { traversalPreorder } from "../../tree/traversalPreorder.js"
import { treeEdges } from "../../tree/treeEdges.js"
import { generatorEntries } from "../../utils/generatorEntries.js"

export type NodeLayout = {
  x: number
  y: number
}

export type TreeLayout = {
  nodes: Map<string, NodeLayout>
  edges: Array<{ first: Node; second: Node }>
}

export type TraversalOrder = "inorder" | "preorder" | "postorder"

function traversal(tree: Node, order: TraversalOrder) {
  switch (order) {
    case "inorder": {
      return traversalInorder(tree)
    }

    case "preorder": {
      return traversalPreorder(tree)
    }

    case "postorder": {
      return traversalPostorder(tree)
    }
  }
}

export function treeLayoutByOrder(
  tree: Node,
  options: {
    order: TraversalOrder
  },
): TreeLayout {
  const { order } = options

  const nodes = new Map()

  for (const [index, node] of generatorEntries(traversal(tree, order))) {
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
