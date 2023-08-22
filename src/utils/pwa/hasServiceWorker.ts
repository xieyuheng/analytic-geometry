export async function hasServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    return false
  }

  const registrations = await navigator.serviceWorker.getRegistrations()

  return registrations.length > 0
}
