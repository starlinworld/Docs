import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const themeCSS = fileURLToPath(new URL('./assets/css/theme.css', import.meta.url))
const contentDir = fileURLToPath(new URL('./content', import.meta.url))

const contentPageExtensions = new Set(['.md', '.mdc'])

function normalizeSegment(segment: string): string {
  if (segment === 'index') {
    return ''
  }

  return segment.replace(/^\d+\./, '')
}

function collectContentRoutes(dir: string, root = dir): string[] {
  const routes = new Set<string>()

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) {
      continue
    }

    const entryPath = join(dir, entry.name)

    if (entry.isDirectory()) {
      for (const route of collectContentRoutes(entryPath, root)) {
        routes.add(route)
      }
      continue
    }

    const ext = entry.name.slice(entry.name.lastIndexOf('.'))
    if (!contentPageExtensions.has(ext)) {
      continue
    }

    const relativePath = entryPath
      .slice(root.length + 1)
      .replaceAll('\\', '/')
      .replace(/\.(md|mdc)$/i, '')

    const segments = relativePath
      .split('/')
      .map(normalizeSegment)
      .filter(Boolean)

    const route = `/${segments.join('/')}` || '/'
    routes.add(route === '/' ? '/' : route.replace(/\/+/g, '/'))
  }

  return [...routes]
}

const prerenderRoutes = [...new Set(['/', ...collectContentRoutes(contentDir)])].sort()

export default defineNuxtConfig({
  css: [themeCSS],
  routeRules: {
    '/': { redirect: '/welcome' },
  },
  nitro: {
    prerender: {
      routes: prerenderRoutes,
    },
  },
})
