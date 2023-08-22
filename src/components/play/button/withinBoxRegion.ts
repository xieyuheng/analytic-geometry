import { BoxRegion } from './BoxRegion'

export function withinBoxRegion(
  boxRegion: BoxRegion,
  position: [number, number],
): boolean {
  const [x, y] = position
  return (
    boxRegion.lowX < x &&
    x < boxRegion.highX &&
    boxRegion.lowY < y &&
    y < boxRegion.highY
  )
}
