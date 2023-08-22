import { vectorDistance } from '../../../utils/vector'
import { State } from '../State'
import { adjustCamera } from '../camera/adjustCamera'
import { Id } from '../id/Id'
import { Motion } from './Motion'

export function renderMotion(state: State, id: Id, motion: Motion): void {
  state.ctx.save()

  adjustCamera(state.ctx, state.camera)

  state.ctx.strokeStyle = motion.color
  state.ctx.lineWidth = id === state.hovered?.id ? 1 / 12 : 1 / 20

  let xmin = 0
  let ymin = 0
  let distance = Infinity
  for (let t = motion.range[0]; t < motion.range[1]; t += motion.precision) {
    const t0 = t
    const t1 = t + motion.precision
    const x0 = motion.x(t0)
    const x1 = motion.x(t1)
    const y0 = motion.y(t0)
    const y1 = motion.y(t1)
    state.ctx.beginPath()
    state.ctx.moveTo(x0, y0)
    state.ctx.lineTo(x1, y1)
    state.ctx.stroke()

    const newDistance = vectorDistance(state.mouse.position, [x0, y0])
    if (newDistance < distance) {
      xmin = x0
      ymin = y0
      distance = newDistance
    }
  }

  state.clickables.set(id, {
    id,
    name: motion.name,
    position: [xmin, ymin],
    distance,
  })

  state.ctx.restore()
}
