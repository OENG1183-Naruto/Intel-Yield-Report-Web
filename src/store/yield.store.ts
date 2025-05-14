import { create } from 'zustand'
import { YieldState, YieldData } from '@/types/store'

export const useYieldStore = create<YieldState>((set) => ({
  data: [],
  isLoading: false,
  error: null,
  setData: (data: YieldData[]) => set({ data }),
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
  fetchData: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await fetch('/api/yield-data')
      const data = await response.json()
      set({ data, isLoading: false })
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An error occurred', isLoading: false })
    }
  },
})) 