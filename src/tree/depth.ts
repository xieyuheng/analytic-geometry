import { Node } from "./Node"

export function depth(node: Node): number {
  let depth = 0
  while (node.parent) {
    depth++
    node = node.parent
  }

  return depth
}
