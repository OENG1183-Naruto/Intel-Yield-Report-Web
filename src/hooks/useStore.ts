import { useUserStore } from '@/store/userStore'
import { useYieldStore } from '@/store/yieldStore'

export const useStore = () => {
  const user = useUserStore()
  const yield_ = useYieldStore()

  return {
    user,
    yield: yield_,
  }
} 