import { State } from '../State'

export function renderButtonSmaller(
  state: State,
  options: { size: number },
): void {
  const { size } = options

  const lowX = state.width - size * 3
  const lowY = state.height - size * 1
  const highX = state.width - size * 2
  const highY = state.height - size * 0

  state.ctx.save()

  state.ctx.beginPath()
  state.ctx.strokeStyle = 'black'
  state.ctx.fillStyle = 'hsla(0, 100%, 100%, 50%)'
  state.ctx.lineWidth = 1
  state.ctx.arc(
    (lowX + highX) / 2,
    (lowY + highY) / 2,
    size * 0.4,
    0,
    2 * Math.PI,
  )
  state.ctx.stroke()
  state.ctx.fill()

  const length = 6
  state.ctx.moveTo((lowX + highX) / 2, (lowY + highY) / 2)
  state.ctx.lineTo((lowX + highX) / 2 + length, (lowY + highY) / 2)
  state.ctx.moveTo((lowX + highX) / 2, (lowY + highY) / 2)
  state.ctx.lineTo((lowX + highX) / 2 - length, (lowY + highY) / 2)
  state.ctx.stroke()

  state.ctx.restore()

  state.overCameraButtons.set('Smaller', {
    boxRegion: { lowX, lowY, highX, highY },
    handler: (state) => {
      if (state.camera.scale >= 5) {
        state.camera.scale /= 1.1
      }
    },
  })
}
