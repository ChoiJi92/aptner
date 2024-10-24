import BookMarkUserList from '@/components/BookMarkUserList'
import styles from './page.module.scss'

const BookMarkPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.pageTitle}>
        <h2>북마크한 사용자</h2>
      </div>
      <BookMarkUserList />
    </main>
  )
}

export default BookMarkPage
