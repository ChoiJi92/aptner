import { UserType } from '@/types/user'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type BookMarkUserType = Pick<UserType, 'id' | 'login' | 'avatar_url'>

interface UserStore {
  bookmarkedUsers: BookMarkUserType[]
  addBookmark: (user: BookMarkUserType) => void
  removeBookmark: (userId: number) => void
  isBookmarked: (userId: number) => boolean
}

const useUserStore = create(
  persist<UserStore>(
    (set, get) => ({
      bookmarkedUsers: [],
      // 북마크 추가
      addBookmark: (user) =>
        set((state) => ({
          bookmarkedUsers: [
            ...state.bookmarkedUsers,
            {
              id: user.id,
              login: user.login,
              avatar_url: user.avatar_url,
            },
          ],
        })),
      // 북마크 삭제
      removeBookmark: (userId) =>
        set((state) => ({
          bookmarkedUsers: state.bookmarkedUsers.filter(
            (user) => user.id !== userId,
          ),
        })),
      // 북마크 여부 확인
      isBookmarked: (userId) =>
        get().bookmarkedUsers.some((user) => user.id === userId),
    }),
    {
      name: '@BOOKMARK_USERS',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default useUserStore
