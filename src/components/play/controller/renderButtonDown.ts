import { State } from '../State'

export function renderButtonDown(
  state: State,
  options: { size: number },
): void {
  const { size } = options

  const lowX = state.width - size * 2
  const lowY = state.height - size * 1
  const highX = state.width - size * 1
  const highY = state.height - size * 0

  state.ctx.save()

  state.ctx.beginPath()
  state.ctx.strokeStyle = 'black'
  state.ctx.lineWidth = 1
  state.ctx.moveTo((lowX + highX) / 2, highY)
  const r = Math.sqrt(3 / 4)
  state.ctx.lineTo(highX, lowY * r + highY * (1 - r))
  state.ctx.lineTo(lowX, lowY * r + highY * (1 - r))
  state.ctx.closePath()
  state.ctx.stroke()

  state.ctx.restore()

  state.overCameraButtons.set('Down', {
    boxRegion: { lowX, lowY, highX, highY },
    handler: (state) => {
      state.camera.position[1]--
    },
  })
}
