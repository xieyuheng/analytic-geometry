import { State } from '../State'
import { renderButtonDown } from './renderButtonDown'
import { renderButtonLeft } from './renderButtonLeft'
import { renderButtonRight } from './renderButtonRight'
import { renderButtonUp } from './renderButtonUp'

export function renderController(state: State): void {
  state.ctx.save()

  const padding = 10
  state.ctx.translate(-padding, -padding)

  const size = 40
  renderButtonUp(state, { size })
  renderButtonDown(state, { size })
  renderButtonLeft(state, { size })
  renderButtonRight(state, { size })

  state.ctx.restore()
}
