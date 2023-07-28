import { useSubPageProvide } from '../../../composables'
import type { IndexPageOnLoadFunc, IndexPageOnShowFunc } from '../../../types'

export const useSubPage = () => {
  const onLoad: IndexPageOnLoadFunc = () => {
    // eslint-disable-next-line no-console
    console.log('pageB onLoad')
  }
  const onShow: IndexPageOnShowFunc = () => {
    // eslint-disable-next-line no-console
    console.log('pageB onShow')
  }

  useSubPageProvide(1, onLoad, onShow)
}
