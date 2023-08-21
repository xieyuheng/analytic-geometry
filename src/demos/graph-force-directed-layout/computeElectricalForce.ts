export function computeElectricalForce(
  first: [number, number],
  second: [number, number],
): [number, number] {
  const C = 1000 * 1000

  const deltaX = second[0] - first[0]
  const deltaY = second[1] - first[1]

  const distanceSqared = deltaX ** 2 + deltaY ** 2
  const distance = Math.sqrt(distanceSqared)

  const unitX = deltaX / distance
  const unitY = deltaY / distance

  const forceX = -(C / distanceSqared) * unitX
  const forceY = -(C / distanceSqared) * unitY

  if (isNaN(forceX) || isNaN(forceY)) {
    return [0, 0]
  }

  return [forceX, forceY]
}
