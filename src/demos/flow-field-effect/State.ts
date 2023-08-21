export type State = {
  width: number
  height: number

  mouse: {
    x: number
    y: number
  }

  cellSize: number

  // About the curve of the field.
  radius: number
  radiusVelocity: number
  radiusLimit: number

  zoom: number
}
