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
      addBookmark: (user) =>
        set((state) => ({
          bookmarkedUsers: [...state.bookmarkedUsers, user],
        })),
      removeBookmark: (userId) =>
        set((state) => ({
          bookmarkedUsers: state.bookmarkedUsers.filter(
            (user) => user.id !== userId,
          ),
        })),
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
