'use client'

import useUserStore from '@/store/useUserStore'
import User from './User'

const BookMarkUserList = () => {
  const { bookmarkedUsers } = useUserStore()

  // 북마크한 사용자가 없을 경우 메시지 표시
  if (bookmarkedUsers.length === 0) {
    return <div>북마크한 사용자가 없습니다.</div>
  }

  return (
    <>
      {bookmarkedUsers.map((user, index) => (
        <div key={`${user.id}-${index}`}>
          <User user={user} />
        </div>
      ))}
    </>
  )
}

export default BookMarkUserList
