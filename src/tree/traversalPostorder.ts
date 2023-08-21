import { Node } from "./Node"

// first, second, ..., node

export function* traversalPostorder(target: Node): Generator<Node> {
  for (const child of target.children) {
    for (const node of traversalPostorder(child)) {
      yield node
    }
  }

  yield target
}
