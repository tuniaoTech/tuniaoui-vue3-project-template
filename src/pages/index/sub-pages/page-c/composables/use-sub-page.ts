import { useSubPageProvide } from '@/pages/index/composables'

export const useSubPage = () => {
  useSubPageProvide(2)
  return {}
}
