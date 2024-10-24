'use client'

import { useState } from 'react'
import SearchBar from './SearchBar'
import styles from './SearchContainer.module.scss'
import UserList from './UserList'
import { useDebounce } from '@/hooks/useDebounce'

const SearchContainer = () => {
  const [searchText, setSearchText] = useState<string>('')
  // 검색 성능 최적화를 위해 디바운스 적용 (500ms)
  const debouncedSearchText = useDebounce(searchText, 500)

  const handleSearch = (text: string) => {
    setSearchText(text)
  }

  return (
    <div className={styles.container}>
      <SearchBar searchText={searchText} onSearch={handleSearch} />
      <div>
        <h2 className={styles.title}>검색 결과</h2>
        <UserList searchText={debouncedSearchText} />
      </div>
    </div>
  )
}

export default SearchContainer
