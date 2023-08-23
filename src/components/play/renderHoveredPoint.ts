import { numberOmitAfterFloatPoint } from '../../utils/numberOmitAfterFloatPoint'
import { State } from './State'
import { adjustCamera } from './camera/adjustCamera'
import { drawText } from './drawText'
import { HoverablePoint } from './hoverable-point/HoverablePoint'

export function renderHoveredPoint(
  state: State,
  hoveredPoint: HoverablePoint,
): void {
  state.ctx.save()

  adjustCamera(state)

  state.ctx.beginPath()

  const x = hoveredPoint.position[0]
  const y = hoveredPoint.position[1]

  const xText = `x: ${numberOmitAfterFloatPoint(x, 0.001)}`
  const yText = `y: ${numberOmitAfterFloatPoint(y, 0.001)}`
  const description = hoveredPoint.description || ''

  const unit = 1 / state.camera.scale
  const fontScale = 2

  const descriptionMetrics = state.ctx.measureText(description)
  const xTextMetrics = state.ctx.measureText(xText)
  const yTextMetrics = state.ctx.measureText(yText)

  const maxWidth = Math.max(
    descriptionMetrics.width,
    xTextMetrics.width,
    yTextMetrics.width,
  )

  const boxWidth = maxWidth * unit * 2.2
  const boxHeight = 75 * unit

  state.ctx.beginPath()
  state.ctx.strokeStyle = 'black'
  state.ctx.lineWidth = 1 / state.camera.scale
  state.ctx.strokeRect(x, y, boxWidth, boxHeight)

  state.ctx.fillStyle = 'hsla(0, 100%, 100%, 50%)'
  state.ctx.fillRect(x, y, boxWidth, boxHeight)

  state.ctx.fillStyle = 'black'
  drawText(state, xText, [x + 3 * unit, y + 6 * unit], {
    fontScale,
  })
  drawText(state, yText, [x + 3 * unit, y + 6 * unit + 24 * unit], {
    fontScale,
  })
  drawText(state, description, [x + 3 * unit, y + 6 * unit + 48 * unit], {
    fontScale,
  })

  state.ctx.fillStyle = 'black'
  state.ctx.arc(x, y, 3 / state.camera.scale, 0, Math.PI * 2)
  state.ctx.fill()

  state.ctx.restore()
}
