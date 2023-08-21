import { Node } from "../../graph/Graph"

export type GraphLayout = {
  nodePositions: Map<Node, [number, number]>
}
