<template>
  <div class="pt-20 pb-16 px-6 sm:pt-24 sm:px-16 lg:pt-36">
    <div class="flex flex-col max-w-[1152px] mx-auto lg:flex-row">
      <div class="order-last max-w-[592px] mx-auto text-center tracking-[.4px] lg:order-first lg:text-left">
        <h1 class="font-bold">
          <span class="text-[32px] text-transparent leading-[56px] bg-brand-name-gradient !bg-clip-text sm:text-5xl lg:text-[56px] lg:leading-[64px]">Vite</span>
        </h1>
        <p class="text-[32px] leading-[56px] text-[#3c3c43eb] font-bold sm:text-5xl lg:text-[56px] lg:leading-[64px]">下一代的前端工具链</p>
        <p class="flex justify-center items-center pt-0 sm:pt-3 lg:justify-start">
          <span class="text-lg leading-9 text-[#3c3c43b3] sm:text-xl lg:text-2xl">为开发者提供极速响应</span>
          <samp class="px-1.5 py-1 ml-1.5 text-sm text-white rounded-[10px] bg-[#646cff]">v4.1.2 </samp>
        </p>
        <ul class="flex flex-wrap justify-center items-center pt-4 m-[-6px] h-auto text-sm font-semibold sm:pt-8 sm:h-[84px] lg:justify-start">
          <li class="p-1.5">
            <a href="javascript:;" class="flex justify-center items-center px-5 h-10 rounded-full text-white bg-[#646cff]">开始</a>
          </li>
          <li class="p-1.5">
            <a href="javascript:;" class="flex justify-center items-center px-5 h-10 rounded-full text-black bg-[#f6f6f7]">为什么选 Vite?</a>
          </li>
          <li class="p-1.5">
            <a href="javascript:;" class="flex justify-center items-center px-5 h-10 rounded-full text-black bg-[#f6f6f7]">在 Github 上查看</a>
          </li>
        </ul>
      </div>
      <div class="flex justify-center items-center order-first lg:order-last lg:flex-grow">
        <div class="relative flex justify-center items-center w-[392px] h-60 sm:h-72 lg:w-full lg:h-full lg:translate-x-[-32px] lg:translate-y-[-32px]">
          <div class="absolute w-48 h-48 rounded-full bg-brand-img-gradient blur-[72px] sm:w-64 sm:h-64 lg:h-80 lg:w-80"></div>
          <img class="absolute max-w-[192px] sm:max-w-[256px] lg:max-w-xs" src="https://cn.vitejs.dev/logo-with-shadow.png" alt="logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
