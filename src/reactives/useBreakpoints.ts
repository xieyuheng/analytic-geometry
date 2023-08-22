import { useMediaQuery } from '@vueuse/core'

// https://tailwindcss.com/docs/responsive-design

export function useBreakpoints() {
  return {
    sm: useMediaQuery('(min-width: 640px)'),
    md: useMediaQuery('(min-width: 768px)'),
    lg: useMediaQuery('(min-width: 1024px)'),
    xl: useMediaQuery('(min-width: 1280px)'),
    '2xl': useMediaQuery('(min-width: 1536px)'),
  }
}
