import { Node } from "./Node"

export function createNode(
  id: string,
  parent?: Node,
  children?: Array<Node>,
): Node {
  return {
    id,
    parent,
    children: children || [],
  }
}
