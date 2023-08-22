export type ControllerButton = {
  name: string
  handler: () => void
}

export type Controller = {
  buttons: Map<string, ControllerButton>
}
