import { useSubPageProvide } from '../../../composables'
import type { IndexPageOnLoadFunc, IndexPageOnShowFunc } from '../../../types'

export const useSubPage = () => {
  const onLoad: IndexPageOnLoadFunc = () => {
    // eslint-disable-next-line no-console
    console.log('pageA onLoad')
  }
  const onShow: IndexPageOnShowFunc = () => {
    // eslint-disable-next-line no-console
    console.log('pageA onShow')
  }

  useSubPageProvide(0, onLoad, onShow)
}
