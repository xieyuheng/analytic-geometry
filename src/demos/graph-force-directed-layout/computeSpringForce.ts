export function computeSpringForce(
  first: [number, number],
  second: [number, number],
): [number, number] {
  const C = 1 / 20
  const springLength = 100

  const deltaX = second[0] - first[0]
  const deltaY = second[1] - first[1]
  const distanceSqared = deltaX ** 2 + deltaY ** 2
  const distance = Math.sqrt(distanceSqared)

  const factor = Math.log(Math.abs(distance / springLength))

  const forceX = C * factor * deltaX
  const forceY = C * factor * deltaY

  if (isNaN(forceX) || isNaN(forceY)) {
    return [0, 0]
  }

  return [forceX, forceY]
}
