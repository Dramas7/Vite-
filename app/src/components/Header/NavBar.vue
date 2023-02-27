<template>
  <nav class="flex items-center h-full">
    <Link />
    <VectorArea />
    <MIniSearchButton />
    <BigMenu />
  </nav>
</template>

<script setup lang="ts">
  import VectorArea from './VectorArea.vue'
  import Link from './Link.vue'
  import BigMenu from './BigMenu.vue'
  import MIniSearchButton from './MIniSearchButton.vue'
</script>
