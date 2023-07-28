import type { InjectionKey } from 'vue'
import type { IndexPageOnLoadFunc, IndexPageOnShowFunc } from '../types'

export type IndexSubPageContext = {
  uid: number
  onLoad: IndexPageOnLoadFunc
  onShow: IndexPageOnShowFunc
}

export type IndexPageContext = {
  items: IndexSubPageContext[]
  addItem: (item: IndexSubPageContext) => void
  removeItem: (uid: number) => void
}

export const indexPageContextKey: InjectionKey<IndexPageContext> = Symbol(
  'indexPageContextKey'
)
