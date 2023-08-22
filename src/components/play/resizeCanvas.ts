export function resizeCanvas(
  canvas: HTMLCanvasElement,
  containerElement: HTMLElement,
) {
  canvas.width = containerElement.offsetWidth
  canvas.height = containerElement.offsetHeight

  new ResizeObserver(() => {
    canvas.width = containerElement.offsetWidth
    canvas.height = containerElement.offsetHeight
  }).observe(containerElement)
}
