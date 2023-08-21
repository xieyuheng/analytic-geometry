export function* generatorEntries<A>(
  generator: Generator<A>,
): Generator<[number, A]> {
  let index = 0
  for (const value of generator) {
    yield [index, value]
    index++
  }
}
