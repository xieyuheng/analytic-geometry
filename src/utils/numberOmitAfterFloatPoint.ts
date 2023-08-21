export function numberOmitAfterFloatPoint(
  x: number,
  floatPoint: number,
): number {
  const mod = 1 / floatPoint

  return Math.floor(x * mod) / mod
}
