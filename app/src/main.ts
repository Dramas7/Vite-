import { createApp } from 'vue'
import App from './App.vue'

import './assets/tailwind.css'

const app = createApp(App)

// 注册全局组件
/* 全局指令：v-resize
 作用：监听局部元素的宽度变化 
 用法：v-resize="callback" 
 参数:callback，代表在组件中定义的回调函数 
 **/
// TODO: 该指令用轮询实现监听，有待优化
app.directive('resize', {
  mounted(el, binding) {
    let width: string | undefined = ''
    function isResize(): void {
      // 获取目标元素计算样式的规则
      const style = document.defaultView?.getComputedStyle(el)
      // 判断宽度是否变化
      if (width !== style?.width) {
        // 调用组件中已定义并传入模板中自定义指令的处理函数
        binding.value()
      } 
      width = style?.width
    }

    el.__vueSetInterval__ = setInterval(isResize, 300)
  },
  unmounted(el) {
    clearInterval(el.__vueSetInterval__)
  }
})

app.mount('#app')