import SearchContainer from '@/components/SearchContainer'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>GitHub 사용자 검색</h1>
      </header>

      <SearchContainer />
    </main>
  )
}
