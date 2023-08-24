import { Rect } from './Rect'

export function withinRect(rect: Rect, position: [number, number]): boolean {
  const [x, y, width, height] = rect

  return (
    x < position[0] &&
    position[0] < x + width &&
    y < position[1] &&
    position[1] < y + height
  )
}
