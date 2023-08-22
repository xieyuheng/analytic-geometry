import { hashSHA256ArrayBuffer } from './hashSHA256ArrayBuffer'

export async function hashSHA256Hex(message: string): Promise<string> {
  const arrayBuffer = await hashSHA256ArrayBuffer(message)
  const bytes = Array.from(new Uint8Array(arrayBuffer))
  return bytes.map((b) => b.toString(16).padStart(2, '0')).join('')
}
