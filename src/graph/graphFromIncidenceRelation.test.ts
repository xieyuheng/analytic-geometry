import { test } from "vitest"
import { graphFromIncidenceRelation } from "./graphFromIncidenceRelation"

const graph = graphFromIncidenceRelation([
  ["b", "c"],
  { first: "a", second: "b" },
])

test("graphFromIncidenceRelation", () => {
  for (const [node, neighbors] of graph.nodeNeighbors) {
    console.log(node, neighbors)
  }

  for (const edge of graph.edges) {
    console.log(edge)
  }
})
