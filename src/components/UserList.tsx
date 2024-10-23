'use client'

import { useGetUsers } from '@/hooks/useGetUsers'
import User from './User'
import LoadingIndicator from '@/shared/LoadingIndicator'

const UserList = ({ searchText }: { searchText: string }) => {
  const { users, isLoading, isEmpty } = useGetUsers(searchText)

  if (isLoading) return <LoadingIndicator />

  if (isEmpty) return <div>검색 결과가 없습니다.</div>

  return (
    <>
      {users.map((user, index) => (
        <User user={user} key={`${user.id}-${index}`} />
      ))}
    </>
  )
}

export default UserList
