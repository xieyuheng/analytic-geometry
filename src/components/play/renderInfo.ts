import { numberOmitAfterFloatPoint } from '../../utils/numberOmitAfterFloatPoint'
import { State } from './State'
import { adjustCamera } from './camera/adjustCamera'
import { drawTextOverCamera } from './drawTextOverCamera'

export function renderInfo(state: State): void {
  state.ctx.save()

  const [width, height] = adjustCamera(state)

  const mouseX = state.mouse.adjustedPosition[0]
  const mouseY = state.mouse.adjustedPosition[1]

  drawTextOverCamera(
    state,
    `x: ${numberOmitAfterFloatPoint(mouseX, 0.01)}`,
    [-width / 2 + 0.3, height / 2 - 0.2],
    {
      fontScale: 1.8,
      textBaseline: 'hanging',
    },
  )
  drawTextOverCamera(
    state,
    `y: ${numberOmitAfterFloatPoint(mouseY, 0.01)}`,
    [-width / 2 + 0.3, height / 2 - 0.9],
    {
      fontScale: 1.8,
      textBaseline: 'hanging',
    },
  )

  state.ctx.restore()
}
