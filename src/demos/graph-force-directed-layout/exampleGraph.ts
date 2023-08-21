import { graphFromAdjacencyList } from "../../graph/graphFromAdjacencyList"

export function exampleGraph() {
  // return graphFromAdjacencyList({
  //   a: ["b"],
  //   b: ["c"],
  //   c: ["d"],
  //   d: ["a"],
  // })

  return graphFromAdjacencyList({
    a: ["b", "c"],
    b: ["c"],
    c: ["a", "b", "c"],
    d: ["a", "e"],
    e: ["b"],
    f: ["g", "c", "f"],
    g: ["a", "b"],
  })
}
