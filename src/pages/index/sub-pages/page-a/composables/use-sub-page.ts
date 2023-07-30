import { useSubPageProvide } from '../../../composables'
import type {
  IndexPageOnLoadFunc,
  IndexPageOnScrollFunc,
  IndexPageOnShowFunc,
} from '../../../types'

export const useSubPage = () => {
  const onLoad: IndexPageOnLoadFunc = () => {
    // eslint-disable-next-line no-console
    console.log('pageA onLoad')
  }
  const onShow: IndexPageOnShowFunc = () => {
    // eslint-disable-next-line no-console
    console.log('pageA onShow')
  }
  const onScroll: IndexPageOnScrollFunc = ({ top }) => {
    // eslint-disable-next-line no-console
    console.log('pageA onScroll', top)
  }

  useSubPageProvide(0, {
    onLoad,
    onShow,
    onScroll,
  })
}
