export function mapAssign<K, V>(target: Map<K, V>, source: Map<K, V>): void {
  for (const [k, v] of source) {
    target.set(k, v)
  }
}
