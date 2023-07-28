import { getCurrentInstance, inject } from 'vue'
import { indexPageContextKey } from '../tokens'
import type { IndexPageOnLoadFunc, IndexPageOnShowFunc } from '../types'

export const useSubPageProvide = (
  index: number,
  onLoad: IndexPageOnLoadFunc,
  onShow: IndexPageOnShowFunc
) => {
  const instance = getCurrentInstance()
  const { uid } = instance!

  const indexPage = inject(indexPageContextKey, null)

  indexPage?.addItem({
    uid,
    index,
    onLoad,
    onShow,
  })

  return {
    indexPage,
  }
}
