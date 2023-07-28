import { getCurrentInstance, inject } from 'vue'
import { indexPageContextKey } from '../tokens'
import type { IndexPageOnLoadFunc, IndexPageOnShowFunc } from '../types'

export const useSubPageProvide = (
  onLoad: IndexPageOnLoadFunc,
  onShow: IndexPageOnShowFunc
) => {
  const instance = getCurrentInstance()
  const { uid } = instance!

  const indexPage = inject(indexPageContextKey, null)

  indexPage?.addItem({
    uid,
    onLoad,
    onShow,
  })

  return {
    indexPage,
  }
}
