import { Mouse } from './Mouse'

export function createMouse(options: { width: number; height: number }): Mouse {
  return {
    adjustedPosition: [options.width / 2, options.height / 2],
    position: [options.width / 2, options.height / 2],
    isDown: false,
  }
}
