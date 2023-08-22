import { Formula } from '../../components/play/formula/Formula'
import { Id } from '../../components/play/id/Id'
import { Motion } from '../../components/play/motion/Motion'

export type Mod = {
  formulas: Map<Id, Formula>
  motions: Map<Id, Motion>
}
