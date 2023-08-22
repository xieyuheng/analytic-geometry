export function rangeArray(start: number, end: number): Array<number> {
  const results: Array<number> = []

  for (let i = start; i < end; i++) {
    results.push(i)
  }

  return results
}
