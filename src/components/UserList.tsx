'use client'

import { useEffect, useRef } from 'react'
import { useGetUsers } from '@/hooks/useGetUsers'
import User from './User'
import LoadingIndicator from '@/shared/LoadingIndicator'

const UserList = ({ searchText }: { searchText: string }) => {
  const { users, fetchNextPage, hasNextPage, isFetching, isEmpty, error } =
    useGetUsers(searchText)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const lastUserRef = useRef<HTMLDivElement | null>(null)

  // 무한 스크롤 구현
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage()
        }
      },
      { threshold: 1.0 },
    )

    if (lastUserRef.current) {
      observerRef.current.observe(lastUserRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [fetchNextPage, hasNextPage, isFetching])

  // 에러시 에러메세지 표시
  if (error) {
    return <div>{error.message}</div>
  }

  // 검색 결과가 없을 때 표시
  if (isEmpty) return <div>검색 결과가 없습니다.</div>

  return (
    <>
      {users.map((user, index) => (
        <div
          key={`${user.id}-${index}`}
          ref={index === users.length - 1 ? lastUserRef : null}
        >
          <User user={user} />
        </div>
      ))}
      {isFetching && <LoadingIndicator />}
    </>
  )
}

export default UserList
