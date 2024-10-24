import SearchIcon from './icons/SearchIcon'
import CloseIcon from './icons/CloseIcon'
import styles from './SearchBar.module.scss'

interface SearchBarProps {
  searchText: string
  onSearch: (text: string) => void
}

const SearchBar = ({ searchText, onSearch }: SearchBarProps) => {
  const handleClear = () => {
    onSearch('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchIconWrap}>
        <SearchIcon />
      </div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="GitHub 사용자 검색"
      />
      {searchText && (
        <button onClick={handleClear} className={styles.clearButton}>
          <CloseIcon />
        </button>
      )}
    </div>
  )
}

export default SearchBar
