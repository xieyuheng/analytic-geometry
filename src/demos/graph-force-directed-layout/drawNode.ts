import { Node } from "../../graph/Graph"

export function drawNode(
  ctx: CanvasRenderingContext2D,
  node: Node,
  [x, y]: [number, number],
): void {
  const boxWidth = 34
  const boxHeight = 26

  ctx.strokeStyle = "black"
  ctx.lineWidth = 2

  ctx.beginPath()
  ctx.clearRect(x - boxWidth / 2, y - boxHeight / 2, boxWidth, boxHeight)
  ctx.roundRect(x - boxWidth / 2, y - boxHeight / 2, boxWidth, boxHeight, 4)
  ctx.stroke()

  ctx.font = "20px sans-serif"
  ctx.textBaseline = "middle"
  ctx.textAlign = "center"
  ctx.fillText(node, x, y)
}
