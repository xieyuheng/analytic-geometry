export async function promiseAllFulfilled<T>(
  promises: Array<Promise<T>>,
): Promise<Array<T>> {
  const who = 'promiseAllFulfilled'
  const results = await Promise.allSettled(promises)

  const values: Array<T> = []
  for (const result of results) {
    if (result.status === 'fulfilled') {
      values.push(result.value)
    } else {
      console.log({ who, ...result })
    }
  }

  return values
}
