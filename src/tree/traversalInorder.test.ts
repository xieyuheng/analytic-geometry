import { expect, test } from "vitest"
import { createTree } from "./createTree"
import { traversalInorder } from "./traversalInorder"

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

test("traversalInorder", () => {
  expect(Array.from(traversalInorder(tree)).map((node) => node.id)).toEqual([
    "d",
    "b",
    "e",
    "a",
    "h",
    "f",
    "i",
    "c",
    "j",
    "g",
  ])
})
