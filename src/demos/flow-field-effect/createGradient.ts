import colors from "tailwindcss/colors"

export function createGradient(
  ctx: CanvasRenderingContext2D,
  options: { width: number; height: number },
): CanvasGradient {
  const gradient = ctx.createLinearGradient(0, 0, options.width, options.height)

  gradient.addColorStop(1 / 7, colors.red[400])
  gradient.addColorStop(2 / 7, colors.orange[400])
  gradient.addColorStop(3 / 7, colors.yellow[400])
  gradient.addColorStop(4 / 7, colors.green[400])
  gradient.addColorStop(5 / 7, colors.blue[400])
  gradient.addColorStop(6 / 7, colors.indigo[400])
  gradient.addColorStop(7 / 7, colors.purple[400])

  return gradient
}
