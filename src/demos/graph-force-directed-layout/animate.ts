import { Graph } from "../../graph/Graph"
import { GraphLayout } from "./GraphLayout"
import { State } from "./State"
import { drawGraph } from "./drawGraph"
import { evolveGraph } from "./evolveGraph"

let step = 0

export function animate(
  ctx: CanvasRenderingContext2D,
  state: State,
  graph: Graph,
  layout: GraphLayout,
  passedTime?: number,
): void {
  passedTime = passedTime || 0
  const deltaTime = passedTime - state.lastTime
  state.lastTime = passedTime

  if (passedTime === 0 || state.timer > state.interval) {
    ctx.clearRect(0, 0, state.width, state.height)
    evolveGraph(graph, layout, { step })
    drawGraph(ctx, graph, layout)
    step++
  } else {
    state.timer += deltaTime
  }

  requestAnimationFrame((passedTime) =>
    animate(ctx, state, graph, layout, passedTime),
  )
}
