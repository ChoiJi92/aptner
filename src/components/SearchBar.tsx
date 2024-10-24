import SearchIcon from '../shared/icons/SearchIcon'
import CloseIcon from '../shared/icons/CloseIcon'
import styles from './SearchBar.module.scss'

interface SearchBarProps {
  searchText: string
  onSearch: (text: string) => void
}

const SearchBar = ({ searchText, onSearch }: SearchBarProps) => {
  // 검색어 초기화
  const handleClear = () => {
    onSearch('')
  }

  return (
    <div className={styles.container} role="search">
      <div className={styles.searchIconWrap}>
        <SearchIcon />
      </div>
      <input
        type="text"
        role="searchbox"
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="GitHub 사용자 검색"
        aria-label="GitHub 사용자 검색"
      />
      {searchText && (
        <button
          onClick={handleClear}
          className={styles.clearButton}
          aria-label="검색어 초기화"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  )
}

export default SearchBar
