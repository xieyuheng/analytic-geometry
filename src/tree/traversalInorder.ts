import { Node } from "./Node"

// first, node, second, ...

export function* traversalInorder(target: Node): Generator<Node> {
  if (target.children.length === 0) {
    yield target
    return
  }

  for (const [index, child] of target.children.entries()) {
    if (index === 0) {
      for (const node of traversalInorder(child)) {
        yield node
      }

      yield target
    } else {
      for (const node of traversalInorder(child)) {
        yield node
      }
    }
  }
}
