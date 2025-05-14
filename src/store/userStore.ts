import { create } from 'zustand'
import { UserState } from '@/types/store'

export const useUserStore = create<UserState>((set) => ({
  isAuthenticated: false,
  username: null,
  login: (username: string) => set({ isAuthenticated: true, username }),
  logout: () => set({ isAuthenticated: false, username: null }),
})) 