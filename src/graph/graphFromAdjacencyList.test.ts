import { test } from "vitest"
import { graphFromAdjacencyList } from "./graphFromAdjacencyList"

const graph = graphFromAdjacencyList({
  a: ["b", "c"],
  b: ["c"],
  c: ["a", "b", "c"],
})

test("graphFromAdjacencyList", () => {
  for (const [node, neighbors] of graph.nodeNeighbors) {
    console.log(node, neighbors)
  }

  for (const edge of graph.edges) {
    console.log(edge)
  }
})
