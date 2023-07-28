import { useSubPageProvide } from '../../../composables'
import type { IndexPageOnLoadFunc, IndexPageOnShowFunc } from '../../../types'

export const useSubPage = () => {
  const onLoad: IndexPageOnLoadFunc = () => {
    // eslint-disable-next-line no-console
    console.log('pageC onLoad')
  }
  const onShow: IndexPageOnShowFunc = () => {
    // eslint-disable-next-line no-console
    console.log('pageC onShow')
  }

  useSubPageProvide(2, onLoad, onShow)
}
