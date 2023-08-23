import { State } from '../State'

export function renderButtonRight(
  state: State,
  options: { size: number },
): void {
  const { size } = options

  const lowX = state.width - size * 1
  const lowY = state.height - size * 2
  const highX = state.width - size * 0
  const highY = state.height - size * 1

  state.ctx.save()

  state.ctx.beginPath()
  state.ctx.strokeStyle = 'black'
  state.ctx.fillStyle = 'hsla(0, 100%, 100%, 50%)'
  state.ctx.lineWidth = 1
  state.ctx.moveTo(highX, (lowY + highY) / 2)
  const r = Math.sqrt(3 / 4)
  state.ctx.lineTo(lowX * r + highX * (1 - r), lowY)
  state.ctx.lineTo(lowX * r + highX * (1 - r), highY)
  state.ctx.closePath()
  state.ctx.stroke()
  state.ctx.fill()

  state.ctx.restore()

  state.overCameraButtons.set('Right', {
    boxRegion: { lowX, lowY, highX, highY },
    handler: (state) => {
      state.camera.position[0]+= 30 / state.camera.scale
    },
  })
}
