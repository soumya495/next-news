import styles from '../styles/Paginator.module.css'
import { useRouter } from 'next/router'

export const Paginator = ({ pageNumber }) => {
  const router = useRouter()
  return (
    <div className={styles.paginator}>
      <div
        onClick={() => {
          if (pageNumber > 1) {
            router.push(`/feed/${pageNumber - 1}`)
          }
        }}
        className={pageNumber === 1 ? styles.disabled : styles.active}
      >
        Prev
      </div>
      <div>#{pageNumber}</div>
      <div
        onClick={() => {
          if (pageNumber < 5) {
            router.push(`/feed/${pageNumber + 1}`)
          }
        }}
        className={pageNumber === 5 ? styles.disabled : styles.active}
      >
        Next
      </div>
    </div>
  )
}

export default Paginator
