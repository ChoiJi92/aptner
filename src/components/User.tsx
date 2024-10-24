import Link from 'next/link'
import Image from 'next/image'

import styles from './User.module.scss'
import { UserType } from '@/types/user'
import useUserStore from '@/store/useUserStore'
import BookmarkIcon from '../shared/icons/BookmarkIcon'

const User = ({
  user,
}: {
  user: Pick<UserType, 'id' | 'login' | 'avatar_url'>
}) => {
  const { isBookmarked, addBookmark, removeBookmark } = useUserStore()
  const bookMarked = isBookmarked(user.id)

  // 북마크 추가 및 삭제
  const handleBookmark = () => {
    if (bookMarked) {
      removeBookmark(user.id)
    } else {
      addBookmark(user)
    }
  }

  return (
    <div className={styles.container}>
      <Image
        src={user.avatar_url}
        alt={`${user.login} 프로필 이미지`}
        className={styles.userImage}
        width={50}
        height={50}
      />
      <div className={styles.userInfo}>
        <h3 className={styles.userName}>{user.login}</h3>
        <Link
          href={`https://github.com/${user.login}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.profileLink}
          aria-label={`${user.login} 프로필 보기`}
        >
          View Profile
        </Link>
      </div>
      <button
        onClick={handleBookmark}
        className={styles.bookmarkButton}
        aria-label="북마크"
      >
        <BookmarkIcon bookmarked={bookMarked} />
      </button>
    </div>
  )
}

export default User
