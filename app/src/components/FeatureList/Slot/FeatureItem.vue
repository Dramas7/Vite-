<template>
  <div class="p-2 w-full md:w-1/3 sm:w-1/2">
    <div class="flex flex-col p-6 h-full rounded-xl bg-[#f6f6f7]">
      <div class="flex justify-center items-center mb-5 w-12 h-12 text-2xl rounded-md bg-[#e3e3e5]">
        <slot name="icon"></slot>
      </div>
      <h2 class="mb-2 text-base text-[#3c3c43eb] font-semibold">
        <slot name="title"></slot>
      </h2>
      <p class="text-sm text-[#3c3c43b3]">
        <slot name="details"></slot>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>


