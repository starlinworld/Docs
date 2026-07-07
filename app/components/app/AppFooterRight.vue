<script setup lang="ts">
const appConfig = useAppConfig()

const links = computed(() => [
  ...Object.entries(appConfig.socials || {}).map(([key, url]) => ({
    'icon': `i-simple-icons-${key}`,
    'to': url,
    'target': '_blank',
    'rel': 'noopener noreferrer',
    'aria-label': `${key} social link`,
  })),
  // {
  //   'icon': 'i-simple-line-icons-globe',
  //   'to': 'https://starlin.world',
  //   'target': '_blank',
  //   'aria-label': '服务器官网',
  // },
  {
    'icon': 'i-simple-icons-qq',
    'to': 'https://jq.qq.com/?_wv=1027&k=1DsWS4Ls',
    'target': '_blank',
    'rel': 'noopener noreferrer',
    'aria-label': 'QQ 群',
  },
  {
    'icon': 'i-simple-icons-bilibili',
    'to': 'https://space.bilibili.com/178184777',
    'target': '_blank',
    'rel': 'noopener noreferrer',
    'aria-label': '哔哩哔哩',
  },
  {
    'icon': 'i-simple-icons-github',
    'to': 'https://github.com/starlinworld',
    'target': '_blank',
    'rel': 'noopener noreferrer',
    'aria-label': 'GitHub',
  },
  // appConfig.github && appConfig.github.url && {
  //   'icon': 'i-simple-icons-github',
  //   'to': appConfig.github.url,
  //   'target': '_blank',
  //   'rel': 'noopener noreferrer',
  //   'aria-label': '文档 GitHub 仓库',
  // },
].filter(Boolean))
</script>

<template>
  <template v-if="links.length">
    <UButton
      v-for="(link, index) of links"
      :key="index"
      size="sm"
      v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
    />
  </template>
  <!-- <UColorModeButton /> -->
</template>