import { Graph } from "./Graph"

export function createEmptyGraph(): Graph {
  return {
    nodeNeighbors: new Map(),
    edges: [],
  }
}
