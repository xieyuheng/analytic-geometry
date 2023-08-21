export function drawEdge(
  ctx: CanvasRenderingContext2D,
  first: [number, number],
  second: [number, number],
): void {
  ctx.strokeStyle = "black"
  ctx.lineWidth = 1

  ctx.beginPath()
  ctx.moveTo(first[0], first[1])
  ctx.lineTo(second[0], second[1])
  ctx.stroke()
}
