'use client'
import { useState } from 'react'
import SearchBar from './SearchBar'
import styles from './SearchContainer.module.scss'
import UserList from './UserList'
import { useDebounce } from '@/hooks/useDebounce'

const SearchContainer = () => {
  const [searchText, setSearchText] = useState<string>('')
  const debouncedSearchText = useDebounce(searchText, 500)

  const handleSearch = (text: string) => {
    setSearchText(text)
  }
  return (
    <div className={styles.container}>
      <SearchBar searchText={searchText} onSearch={handleSearch} />
      <div className={styles.wrap}>
        <h2 className={styles.wrapTitle}>검색 결과</h2>
        <UserList searchText={debouncedSearchText} />
      </div>
    </div>
  )
}

export default SearchContainer
