import { reactive, watch } from 'vue'

type Theme = {
  name: string
  knownThemeNames: Array<string>
}

const globalTheme: Theme = reactive({
  name: 'system',
  knownThemeNames: ['system', 'light', 'dark'],
})

let initialized = false

export function useGlobalTheme(): Theme {
  if (initialized) {
    return globalTheme
  }

  globalTheme.name = initialName()

  initialized = true

  return globalTheme
}

function initialName(): string {
  if (
    window.localStorage.getItem('theme') === 'dark' ||
    (!window.localStorage.getItem('theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
    return 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    return 'system'
  }
}

watch(
  () => globalTheme.name,
  (value, oldValue) => {
    if (oldValue) {
      document.documentElement.classList.remove(oldValue)
    }

    if (value === 'system') {
      window.localStorage.removeItem('theme')
    } else {
      window.localStorage.setItem('theme', value)
      document.documentElement.classList.add(value)
    }
  },
)
