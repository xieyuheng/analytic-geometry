import { reactive } from 'vue'

type Backend = {
  url: string
}

function initialBackendURL() {
  if (import.meta.env.VITE_BACKEND_URL) {
    return import.meta.env.VITE_BACKEND_URL
  }

  if (import.meta.env.DEV) {
    return 'http://localhost:5108'
  } else {
    return 'https://api.mimor.app:5108'
  }
}

const globalBackend: Backend = reactive({
  url: initialBackendURL(),
})

export function useGlobalBackend() {
  return globalBackend
}
