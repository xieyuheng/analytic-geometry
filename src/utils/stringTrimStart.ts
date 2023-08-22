export function stringTrimStart(input: string, pattern: string): string {
  if (input.startsWith(pattern)) {
    const prefix = input.slice(pattern.length)
    return stringTrimStart(prefix, pattern)
  }

  return input
}
