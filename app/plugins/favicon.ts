export default defineNuxtPlugin(() => {
  useHead({
    link: [
      { rel: 'icon', type: 'image/png', href: '/logo.png' },
      { rel: 'apple-touch-icon', href: '/logo.png' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
    ],
  })
})
