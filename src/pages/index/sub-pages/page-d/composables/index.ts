import { useSubPageProvide } from '../../../composables'
import type { IndexPageOnLoadFunc, IndexPageOnShowFunc } from '../../../types'

export const useSubPage = () => {
  const onLoad: IndexPageOnLoadFunc = () => {
    // eslint-disable-next-line no-console
    console.log('pageD onLoad')
  }
  const onShow: IndexPageOnShowFunc = () => {
    // eslint-disable-next-line no-console
    console.log('pageD onShow')
  }

  useSubPageProvide(onLoad, onShow)
}
