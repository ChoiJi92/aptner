'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Header.module.scss'
import SearchIcon from '../shared/icons/SearchIcon'
import BookmarkIcon from '../shared/icons/BookmarkIcon'
import MenuIcon from '../shared/icons/MenuIcon'

const Header = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuButton = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavLinkButton = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <h1>GitHub 사용자 검색</h1>
      <button
        className={styles.menuButton}
        onClick={handleMenuButton}
        aria-label="메뉴 열기"
      >
        <MenuIcon />
      </button>
      <nav
        className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}
        aria-label="네비게이션"
      >
        <Link
          href="/"
          className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
          onClick={handleNavLinkButton}
        >
          <SearchIcon />
          검색
        </Link>
        <Link
          href="/bookmarks"
          className={`${styles.navLink} ${
            pathname === '/bookmarks' ? styles.active : ''
          }`}
          onClick={handleNavLinkButton}
        >
          <BookmarkIcon bookmarked={false} />
          북마크
        </Link>
      </nav>
    </header>
  )
}

export default Header
