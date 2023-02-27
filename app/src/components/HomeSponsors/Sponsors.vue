<template>
  <div class="grid grid-cols-1 gap-1 overflow-hidden text-sm text-[#3c3c43b3] rounded-2xl">
    <div class="grid grid-cols-1 gap-1 sm:grid-cols-2">
      <h2 class="flex items-center justify-center col-span-full h-12 bg-[#f6f6f7]">Platinum Sponsor</h2>
      <SponsorItem v-for="(logoSrc, index) in sponsorsLogoSrc.platinum" :key="index" class="h-[184px]">
        <img :src="logoSrc" alt="sponsorsLogo" class="w-48 h-10" />
      </SponsorItem>
    </div>
    <div v-resize="goldGridHandler" class="grid gap-1" :class="goldGridColClass" ref="goldSponsorContainer">
      <h2 class="flex items-center justify-center col-span-full h-12 bg-[#f6f6f7]">Platinum Sponsor</h2>
      <SponsorItem v-for="(logoSrc, index) in sponsorsLogoSrc.gold" :key="index" class="h-28">
        <img :src="logoSrc" alt="sponsorsLogo" class="max-w-[120px] max-h-9" />
      </SponsorItem>
      <!-- 空元素，腾出空广告位，仅显示背景颜色， 让视觉更和谐 -->
      <SponsorItem v-for="n in restGridItem"></SponsorItem>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SponsorItem from './Slot/SponsorItem.vue'
  import { reactive, ref} from 'vue'
  // 赞助商logo列表接口
  interface SponsorsLogoSrc {
    platinum: string[]
    gold: string[]
  }
  // 赞助商logo列表
  const sponsorsLogoSrc: SponsorsLogoSrc = reactive({
    platinum: ['https://sponsors.vuejs.org/images/stackblitz.svg', 'https://sponsors.vuejs.org/images/storyblok.png'],
    gold: ['https://sponsors.vuejs.org/images/tailwind_labs.svg', 'https://sponsors.vuejs.org/images/repl_it.svg', 'https://sponsors.vuejs.org/images/vue_jobs.png', 'https://sponsors.vuejs.org/images/divriots.png', 'https://sponsors.vuejs.org/images/cypress_io.svg', 'https://sponsors.vuejs.org/images/prefect_io.svg', 'https://sponsors.vuejs.org/images/jetbrains.png', 'https://sponsors.vuejs.org/images/pineview_labs.svg']
  })

  // 定义gold赞助商的网格列数的类名
  let goldGridColClass = ref('grid-cols-5')

  // 定义应补足的网格数
  let restGridItem = ref<number>(0)

  // 获取黄金赞助商区域的DOM节点
  const goldSponsorContainer = ref<HTMLElement | null>()

  // TODO: 关于补足空缺，目前的实现方法是：先用轮询来更新网格列数类名，根据网格列数获取预期的剩余网格数，最后更新至模板中
  // 性能不佳，有加载延迟，有待优化
  // 定义监听gold赞助商区域的容器宽度变化的回调函数
  function goldGridHandler(): void {
    // 获取 gold 赞助商区域的容器宽度
    let width = goldSponsorContainer.value?.clientWidth as number
    // 获取 gold 赞助商个数
    let goldSponsorNum: number = sponsorsLogoSrc.gold.length
    // 定义倍数 n ，网格总数应等于网格列轨道数的整数倍， 即 n * goldGridColNum
    let n: number = 0
    // 获取列数
    let goldGridColNum:number = parseInt(goldGridColClass.value.charAt(goldGridColClass.value.length - 1))
    
    // 先设定倍数 n = 0，进行迭代，直至网格总数大于赞助位（goldSponsorNum) 数量
    while (++n) {
      // 定义预期网格数
      let expectedGridItemNum: number = n * goldGridColNum
      
      if (expectedGridItemNum >= goldSponsorNum) {
        restGridItem.value = expectedGridItemNum - goldSponsorNum
        break
      }
    }

    // 根据容器自身宽度响应式地重置布局样式
    if (width < 415) {
      goldGridColClass.value = 'grid-cols-1'
    } else if (width < 575) {
      goldGridColClass.value = 'grid-cols-2'
    } else if (width < 767) {
      goldGridColClass.value = 'grid-cols-3'
    } else if (width < 898) {
      goldGridColClass.value = 'grid-cols-4'
    } else {
      goldGridColClass.value = 'grid-cols-5'
    }
  }
</script>

