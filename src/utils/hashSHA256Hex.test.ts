import { expect, test } from 'vitest'
import { hashSHA256Hex } from './hashSHA256Hex'

test('hashSHA256Hex', async () => {
  expect(await hashSHA256Hex('')).toEqual(
    'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  )
})
