export interface YieldData {
  id: string
  value: number
  timestamp: string
  category: string
}

export interface UserState {
  isAuthenticated: boolean
  username: string | null
}

export interface YieldState {
  data: YieldData[]
  isLoading: boolean
  error: string | null
  setData: (data: YieldData[]) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  fetchData: () => Promise<void>
}

export interface StoreState {
  user: UserState
  yield: YieldState
} 