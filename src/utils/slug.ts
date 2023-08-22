export function slug(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/\//g, '-')
    .replace(/\./g, '-')
    .replace(/[^\p{Letter}\-_ 0-9]+/gu, '')
    .replace(/\s/gu, '-')
    .replace(/_/g, '-')
    .replace(/\-+/g, '-')
    .replace(/\-$/g, '')
    .replace(/^\-/g, '')
}
