<script setup lang="ts">
import { nextTick } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import TnTabbar from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar.vue'
import TnTabbarItem from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar-item.vue'

/* 引入子页面 */
import PageA from './sub-pages/page-a/index.vue'
import PageB from './sub-pages/page-b/index.vue'
import PageC from './sub-pages/page-c/index.vue'
import PageD from './sub-pages/page-d/index.vue'

import { useIndex, useIndexCustomStyle } from './composables'

const {
  tabbarData,
  currentTabbarIndex,
  renderPageStatus,
  tabbarChangeHandle,
  scrollViewScrollHandle,
} = useIndex()
const { pageContainerStyle } = useIndexCustomStyle(currentTabbarIndex)

onLoad((options: any) => {
  // 当前进入子页面的索引值
  const index = Number(options?.index || 0)
  // 设置默认被渲染的页面
  renderPageStatus.value[index] = true
  nextTick(() => {
    // 设置当前子页面的索引值
    currentTabbarIndex.value = index
  })
})
</script>

<template>
  <view class="page">
    <!-- 首页子页面 -->
    <view
      v-if="renderPageStatus[0]"
      class="page__container"
      :style="pageContainerStyle(0)"
    >
      <scroll-view
        class="scroll-view"
        scroll-y
        @scroll="scrollViewScrollHandle"
      >
        <PageA />
      </scroll-view>
    </view>
    <view
      v-if="renderPageStatus[1]"
      class="page__container"
      :style="pageContainerStyle(1)"
    >
      <scroll-view
        class="scroll-view"
        scroll-y
        @scroll="scrollViewScrollHandle"
      >
        <PageB />
      </scroll-view>
    </view>
    <view
      v-if="renderPageStatus[2]"
      class="page__container"
      :style="pageContainerStyle(2)"
    >
      <scroll-view
        class="scroll-view"
        scroll-y
        @scroll="scrollViewScrollHandle"
      >
        <PageC />
      </scroll-view>
    </view>
    <view
      v-if="renderPageStatus[3]"
      class="page__container"
      :style="pageContainerStyle(3)"
    >
      <scroll-view
        class="scroll-view"
        scroll-y
        @scroll="scrollViewScrollHandle"
      >
        <PageD />
      </scroll-view>
    </view>
  </view>

  <!-- 底部导航栏 -->
  <TnTabbar
    v-model="currentTabbarIndex"
    fixed
    :placeholder="false"
    @change="tabbarChangeHandle"
  >
    <TnTabbarItem
      v-for="(item, index) in tabbarData"
      :key="index"
      :text="item.text"
      :icon="item.icon"
      :active-icon="item.activeIcon"
    />
  </TnTabbar>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
