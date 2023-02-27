<template>
  <div class="mx-auto px-4 max-w-[1248px] md:px-12 sm:px-8">
    <div class="flex flex-wrap">
      <FeatureItem v-for="item in featureInfo">
        <template #icon>{{ item.icon }}</template>
        <template #title>{{ item.title }}</template>
        <template #details>{{ item.detail }}</template>
      </FeatureItem>
    </div>
  </div>
</template>

<script setup lang="ts">
  import FeatureItem from './Slot/FeatureItem.vue'
  import { reactive } from 'vue'

  const featureInfo = reactive([
    {
      icon: '💡',
      title: '极速的启动服务',
      detail: '使用原生ESM文件，无需打包！'
    },
    {
      icon: '⚡',
      title: '轻量快速的热重载',
      detail: '无论应用大小如何，都始终极快地模块热替换（HMR）'
    },
    {
      icon: '🛠',
      title: '丰富的功能',
      detail: '对 Typescript、Jsx、Css 等支持开箱即用。'
    },
    {
      icon: '📦',
      title: '优化的构建',
      detail: '可选“多页应用”或“库”的预配置 Rollup 构建'
    },
    {
      icon: '🔩',
      title: '通用的插件',
      detail:'在开发和构建之间共享 Rollup-superset 插件接口。'
    },
    {
      icon: '🔑',
      title: '完全的类型系统API',
      detail: '灵活的 API 和完整的TypeScript类型。'
    }
  ])
</script>

<style></style>
