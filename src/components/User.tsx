import Link from 'next/link'
import Image from 'next/image'

import styles from './User.module.scss'
import { UserType } from '@/types/user'

const User = ({
  user,
}: {
  user: Pick<UserType, 'id' | 'login' | 'avatar_url'>
}) => {
  return (
    <div className={styles.container}>
      <Image
        src={user.avatar_url}
        alt={user.login}
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
        >
          View Profile
        </Link>
      </div>
      <button onClick={() => {}} className={styles.bookmarkButton}>
        북마크
      </button>
    </div>
  )
}

export default User
