<script lang="ts" setup>
import PageContainer from '../../components/page-container/index.vue'
import { useSubPage } from './composables'

useSubPage()
</script>

// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif

<template>
  <PageContainer>
    <view class="page tn-gray-light_bg tn-flex-center"> pageA </view>
  </PageContainer>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
