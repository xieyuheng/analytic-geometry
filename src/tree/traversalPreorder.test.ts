import { expect, test } from "vitest"
import { createTree } from "./createTree"
import { traversalPreorder } from "./traversalPreorder"

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

test("traversalPreorder", () => {
  expect(Array.from(traversalPreorder(tree)).map((node) => node.id)).toEqual([
    "a",
    "b",
    "d",
    "e",
    "c",
    "f",
    "h",
    "i",
    "g",
    "j",
  ])
})
