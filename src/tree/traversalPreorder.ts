import { Node } from "./Node"

// node, first, second, ...

export function* traversalPreorder(target: Node): Generator<Node> {
  yield target

  for (const child of target.children) {
    for (const node of traversalPreorder(child)) {
      yield node
    }
  }
}
