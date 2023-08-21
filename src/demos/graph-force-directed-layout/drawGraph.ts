import { Graph } from "../../graph/Graph"
import { graphEdges } from "../../graph/graphEdges"
import { graphNodes } from "../../graph/graphNodes"
import { GraphLayout } from "./GraphLayout"
import { drawEdge } from "./drawEdge"
import { drawNode } from "./drawNode"

export function drawGraph(
  ctx: CanvasRenderingContext2D,
  graph: Graph,
  layout: GraphLayout,
): void {
  for (const edge of graphEdges(graph)) {
    const firstPosition = layout.nodePositions.get(edge.first)
    if (firstPosition === undefined) continue
    const secondPosition = layout.nodePositions.get(edge.second)
    if (secondPosition === undefined) continue
    drawEdge(ctx, firstPosition, secondPosition)
  }

  for (const node of graphNodes(graph)) {
    const position = layout.nodePositions.get(node)
    if (position === undefined) continue
    drawNode(ctx, node, position)
  }
}
