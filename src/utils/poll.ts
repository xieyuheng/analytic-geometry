type TimerId = ReturnType<typeof setInterval>

export function poll<A>(options: {
  target: () => Promise<A>
  check: (data: A) => Promise<boolean>
  then: (data: A) => Promise<void>
  catch?: (error: Error) => Promise<void>
  interval: number
}): { stop: () => void } {
  let polling: TimerId | null = null

  const stop = () => polling && clearInterval(polling)

  polling = setInterval(async () => {
    try {
      const data = await options.target()
      if (await options.check(data)) {
        await options.then(data)
        stop()
      }
    } catch (error) {
      if (!(error instanceof Error)) throw error
      if (options.catch) {
        options.catch(error)
      }
    }
  }, options.interval)

  return { stop }
}
