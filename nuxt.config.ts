import { fileURLToPath } from 'node:url'

const themeCSS = fileURLToPath(new URL('./assets/css/theme.css', import.meta.url))

export default defineNuxtConfig({
  css: [themeCSS],
  routeRules: {
    '/': { redirect: '/welcome' },
  },
})
