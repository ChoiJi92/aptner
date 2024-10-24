import { useInfiniteQuery } from '@tanstack/react-query'
import { getUsers } from '@/apis/getUsers'
import { QUERY_KEY } from '@/constants/queryKey'
import { UserType } from '@/types/user'

export const useGetUsers = (searchText: string) => {
  const { data, fetchNextPage, hasNextPage, isFetching, error } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY.GITHUB_USERS, searchText],
      queryFn: ({ pageParam = 1 }) => getUsers(searchText, pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1
        return lastPage.items.length === 20 ? nextPage : undefined
      },
      enabled: !!searchText,
      staleTime: 1000 * 60 * 5, // 5분간 캐싱
    })

  const users: UserType[] = data?.pages.flatMap((page) => page.items) ?? []

  const isEmpty = users.length === 0 && !isFetching && !error

  return {
    users,
    fetchNextPage,
    hasNextPage,
    isFetching,
    error,
    isEmpty,
  }
}
