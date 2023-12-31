import { expect, test } from 'vitest'
import { slug } from './slug'

// prettier-ignore
test("slug", () => {
  expect(slug("a.b.c")).toEqual('a-b-c')
  expect(slug("a/b/c")).toEqual('a-b-c')

  const target = "構造-the-constructivization-of-mathematics"

  expect(slug("構造 / The constructivization of mathematics")).toEqual(target)
  expect(slug("[構造] / The constructivization of mathematics---")).toEqual(target)
  expect(slug("---[構造] / The constructivization of mathematics---")).toEqual(target)
  expect(slug("---「構造」 / The constructivization of mathematics---")).toEqual(target)
  expect(slug("---「構造」 / The constructivization of mathematics___")).toEqual(target)
  expect(slug("---「構造」 / The_constructivization_of_mathematics___")).toEqual(target)
})
