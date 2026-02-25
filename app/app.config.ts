const siteTitle = '星林宇宙服务器 文档'

export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc',
    },
  },
  header: {
    title: siteTitle,
    logo: {
      light: '/logo.png',
      dark: '/logo.png',
      alt: siteTitle,
      display: 'logo',
      favicon: '/favicon.ico',
    },
  },
  seo: {
    titleTemplate: `%s - ${siteTitle}`,
    title: siteTitle,
    description: '星林宇宙Minecraft服务器官方文档、游玩指南',
  },
})
