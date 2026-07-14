import { create } from 'zustand'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  // Firebase 로그인 상태가 바뀔 때 Zustand 상태도 변경합니다.
  startAuthListener: () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      set({ user, loading: false })
    })

    return unsubscribe
  }
}))

export default useAuthStore
