import { createTree } from "../../tree/createTree"
import { State } from "./State"
import { drawGrid } from "./drawGrid"
import { drawTree } from "./drawTree"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.width, state.height)

  drawGrid(ctx, state)

  const tree = createTree({
    id: "a",
    children: [
      { id: "b", children: [{ id: "d" }, { id: "e" }] },
      {
        id: "c",
        children: [
          { id: "f", children: [{ id: "h" }, { id: "i" }] },
          { id: "g", children: [{ id: "j" }] },
        ],
      },
    ],
  })

  ctx.fillText("preorder", state.unit * 2, state.unit * (2 - 1))

  drawTree(ctx, state, tree, {
    order: "preorder",
    offset: [state.unit * 2, state.unit * 2],
  })

  ctx.fillText("inorder", state.unit * 2, state.unit * (2 + 5 - 1))

  drawTree(ctx, state, tree, {
    order: "inorder",
    offset: [state.unit * 2, state.unit * (2 + 5)],
  })

  ctx.fillText("postorder", state.unit * 2, state.unit * (2 + 10 - 1))

  drawTree(ctx, state, tree, {
    order: "postorder",
    offset: [state.unit * 2, state.unit * (2 + 10)],
  })

  // requestAnimationFrame(() => animate(ctx, state))
}
