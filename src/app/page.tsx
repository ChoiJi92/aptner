import SearchContainer from '@/components/SearchContainer'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <SearchContainer />
    </main>
  )
}
