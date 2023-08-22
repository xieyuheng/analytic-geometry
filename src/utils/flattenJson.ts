export type Json = string | number | boolean | null | Array<Json> | JsonObject

export type JsonObject = { [x: string]: Json }

export type LeafJson = string | number | boolean | null | Array<Json>

export function flattenJson(json: JsonObject): Record<string, LeafJson> {
  const record = {}
  flattenJsonCollect(json, [], record)
  return record
}

function isLeafJson(json: Json): json is LeafJson {
  return typeof json !== 'object' || json instanceof Array
}

function flattenJsonCollect(
  json: { [x: string]: Json },
  parts: Array<string>,
  record: Record<string, LeafJson>,
): void {
  for (const [part, value] of Object.entries(json)) {
    if (isLeafJson(value)) {
      const key = [...parts, part].join('.')
      record[key] = value
    } else {
      flattenJsonCollect(value, [...parts, part], record)
    }
  }
}
