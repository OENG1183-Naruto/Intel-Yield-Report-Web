import { useUserStore } from '@/src/store/userStore'
import { useYieldStore } from '@/src/store/yieldStore'

export const useStore = () => {
  const user = useUserStore()
  const yield_ = useYieldStore()

  return {
    user,
    yield: yield_,
  }
} 