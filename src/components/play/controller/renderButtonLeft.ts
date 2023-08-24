import { State } from '../State'
import { Rect } from '../button/Rect'

export function renderButtonLeft(
  state: State,
  options: { size: number },
): void {
  const { size } = options

  const lowX = state.width - size * 3
  const lowY = state.height - size * 2
  const highX = state.width - size * 2
  const highY = state.height - size * 1

  state.ctx.save()

  state.ctx.beginPath()
  state.ctx.strokeStyle = 'black'
  state.ctx.fillStyle = 'hsla(0, 100%, 100%, 50%)'
  state.ctx.lineWidth = 1
  state.ctx.moveTo(lowX, (lowY + highY) / 2)
  const r = Math.sqrt(3 / 4)
  state.ctx.lineTo(lowX * (1 - r) + highX * r, lowY)
  state.ctx.lineTo(lowX * (1 - r) + highX * r, highY)
  state.ctx.closePath()
  state.ctx.stroke()
  state.ctx.fill()

  state.ctx.restore()

  const rect: Rect = [lowX, lowY, highX - lowX, highY - lowY]

  state.overCameraButtons.set('Left', {
    rect,
    handler: (state) => {
      state.camera.position[0] -= 30 / state.camera.scale
    },
  })
}
