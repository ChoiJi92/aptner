'use client'

import React from 'react'
import useUserStore from '@/store/useUserStore'
import User from './User'

const BookMarkUserList = () => {
  const { bookmarkedUsers } = useUserStore()
  if (bookmarkedUsers.length === 0) {
    return <div>북마크한 사용자가 없습니다.</div>
  }
  return (
    <div>
      {bookmarkedUsers.map((user, index) => (
        <div key={`${user.id}-${index}`}>
          <User user={user} />
        </div>
      ))}
    </div>
  )
}

export default BookMarkUserList