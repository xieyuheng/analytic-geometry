import { vectorDistance } from '../../../utils/vector'
import { State } from '../State'
import { adjustCamera } from '../camera/adjustCamera'
import { Motion } from './Motion'

export function renderMotion(state: State, id: string, motion: Motion): void {
  state.ctx.save()

  adjustCamera(state)

  state.ctx.strokeStyle = motion.color || 'black'
  state.ctx.lineWidth = id === state.HoveredPoint?.id ? 1 / 12 : 1 / 20

  const precision = motion.precision || 0.1

  let xmin = 0
  let ymin = 0
  let distance = Infinity
  for (let t = motion.range[0]; t < motion.range[1]; t += precision) {
    const t0 = t
    const t1 = t + precision
    const x0 = motion.x(t0)
    const x1 = motion.x(t1)
    const y0 = motion.y(t0)
    const y1 = motion.y(t1)
    state.ctx.beginPath()
    state.ctx.moveTo(x0, y0)
    state.ctx.lineTo(x1, y1)
    state.ctx.stroke()

    const newDistance = vectorDistance(state.mouse.adjustedPosition, [x0, y0])
    if (newDistance < distance) {
      xmin = x0
      ymin = y0
      distance = newDistance
    }
  }

  state.hoverablePoints.set(id, {
    id,
    description: motion.description,
    position: [xmin, ymin],
    distance,
  })

  state.ctx.restore()
}
