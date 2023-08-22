export async function registerServiceWorker(workerFile: string): Promise<void> {
  const who = 'registerServiceWorker'

  if (!('serviceWorker' in navigator)) {
    console.error(`[${who}] serviceWorker is not supported`)
    return
  }

  try {
    const registration = await navigator.serviceWorker.register(workerFile, {
      scope: '/',
    })

    registration.addEventListener('updatefound', () => {
      // If updatefound is fired, it means that there's
      // a new service worker being installed.

      const installingWorker = registration.installing
      console.log(`[${who}] updatefound`, installingWorker)

      // You can listen for changes to the installing service worker's
      // state via installingWorker.onstatechange
    })

    if (registration.installing) {
      console.log(`[${who}] service worker installing`)
    } else if (registration.waiting) {
      console.log(`[${who}] service worker installed`)
    } else if (registration.active) {
      console.log(`[${who}] service worker active`)
    }
  } catch (error) {
    console.error(`[${who}] register failed, error: ${error}`)
  }
}
