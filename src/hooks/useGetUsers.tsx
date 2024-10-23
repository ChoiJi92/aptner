import { useInfiniteQuery } from '@tanstack/react-query'
import { getUsers } from '@/apis/getUsers'
import { QUERY_KEY } from '@/constants/queryKey'
import { UserType } from '@/types/user'

export const useGetUsers = (search: string) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching, isError } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY.GITHUB_USERS, search],
      queryFn: ({ pageParam = 1 }) => getUsers(search, pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1
        return lastPage.items.length === 20 ? nextPage : undefined
      },
      enabled: !!search,
    })
  const users: UserType[] = data?.pages.flatMap((page) => page.items) ?? []
  const isEmpty = users.length === 0 && !isLoading && !isError

  return {
    users,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    isEmpty,
  }
}
