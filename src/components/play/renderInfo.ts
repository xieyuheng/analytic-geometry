import { numberOmitAfterFloatPoint } from '../../utils/numberOmitAfterFloatPoint'
import { State } from './State'
import { adjustCamera } from './camera/adjustCamera'
import { drawTextOverCamera } from './utils/drawTextOverCamera'

export function renderInfo(state: State): void {
  state.ctx.save()

  const [width, height] = adjustCamera(state)

  const mouseX = state.mouse.adjustedPosition[0]
  const mouseY = state.mouse.adjustedPosition[1]

  const unit = 1 / state.camera.scale

  drawTextOverCamera(
    state,
    `x: ${numberOmitAfterFloatPoint(mouseX, 0.01)}`,
    [-width / 2 + 9 * unit, height / 2 - 6 * unit],
    {
      fontScale: 1.8,
      textBaseline: 'hanging',
    },
  )
  drawTextOverCamera(
    state,
    `y: ${numberOmitAfterFloatPoint(mouseY, 0.01)}`,
    [-width / 2 + 9 * unit, height / 2 - 27 * unit],
    {
      fontScale: 1.8,
      textBaseline: 'hanging',
    },
  )

  state.ctx.restore()
}
