import { nextTick, provide, reactive, ref } from 'vue'
import { useOrderedChildren } from '@tuniao/tnui-vue3-uniapp/hooks'

import { indexPageContextKey } from '../tokens'

import type { IndexSubPageContext } from '../tokens'

type TabbarItem = {
  text: string
  icon: string
  activeIcon: string
}
type TabbarData = TabbarItem[]

export const useIndex = () => {
  // 导航栏数据
  const tabbarData: TabbarData = [
    {
      text: '页面A',
      icon: 'circle',
      activeIcon: 'circle-fill',
    },
    {
      text: '页面B',
      icon: 'circle',
      activeIcon: 'circle-fill',
    },
    {
      text: '页面C',
      icon: 'circle',
      activeIcon: 'circle-fill',
    },
    {
      text: '页面D',
      icon: 'circle',
      activeIcon: 'circle-fill',
    },
  ]

  // 当前选中的tabbar索引
  const currentTabbarIndex = ref(-1)
  // 标记页面是否已经渲染
  const renderPageStatus = ref<boolean[]>(
    Array.from({ length: tabbarData.length }).map(() => false)
  )

  // 底部导航栏发生切换事件
  const tabbarChangeHandle = (index: number) => {
    if (!renderPageStatus.value[index]) {
      renderPageStatus.value[index] = true
      nextTick(() => {
        items.value[index]?.onLoad()
      })
    }
    nextTick(() => {
      items.value[index]?.onShow()
    })
  }

  // 子页面数据
  const {
    children: items,
    addChild: addItem,
    removeChild: removeItem,
  } = useOrderedChildren<IndexSubPageContext>()

  provide(
    indexPageContextKey,
    reactive({
      items,
      addItem,
      removeItem,
    })
  )

  return {
    tabbarData,
    currentTabbarIndex,
    renderPageStatus,
    tabbarChangeHandle,
  }
}
