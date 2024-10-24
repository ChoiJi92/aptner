'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.scss'
import SearchIcon from './icons/SearchIcon'
import BookmarkIcon from './icons/BookmarkIcon'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <h1>GitHub 사용자 검색</h1>
      <nav className={styles.nav} aria-label="네비게이션">
        <Link
          href="/"
          className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
        >
          <SearchIcon />
          검색
        </Link>
        <Link
          href="/bookmarks"
          className={`${styles.navLink} ${
            pathname === '/bookmarks' ? styles.active : ''
          }`}
        >
          <BookmarkIcon bookmarked={false} />
          북마크
        </Link>
      </nav>
    </header>
  )
}

export default Header
