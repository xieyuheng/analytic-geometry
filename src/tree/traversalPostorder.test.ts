import { expect, test } from "vitest"
import { createTree } from "./createTree"
import { traversalPostorder } from "./traversalPostorder"

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

test("traversalPostorder", () => {
  expect(Array.from(traversalPostorder(tree)).map((node) => node.id)).toEqual([
    "d",
    "e",
    "b",
    "h",
    "i",
    "f",
    "j",
    "g",
    "c",
    "a",
  ])
})
