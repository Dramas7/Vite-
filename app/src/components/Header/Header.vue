<template>
  <header class="fixed h-16 w-full transition-colors duration-500">
    <div class="flex items-center justify-between my-0 mx-auto pl-6 pr-2 py-0 max-w-[1376px] h-full min-[825px]:px-9">
      <div class="flex items-center">
        <Logo />
        <SearchButton />
      </div>
      <NavBar />
    </div>
  </header>
</template>

<script setup lang="ts">
  import Logo from './Logo.vue'
  import SearchButton from './SearchButton.vue'
  import NavBar from './NavBar.vue'
</script>
