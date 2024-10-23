import styles from './SearchBar.module.scss'

interface SearchBarProps {
  searchText: string
  onSearch: (text: string) => void
}

const SearchBar = ({ searchText, onSearch }: SearchBarProps) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="GitHub 사용자 검색"
      />
    </div>
  )
}

export default SearchBar
