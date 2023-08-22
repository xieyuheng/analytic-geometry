export type Motion = {
  name: string
  x: (t: number) => number
  y: (t: number) => number
  range: [number, number]
  precision: number
  color: string
}
