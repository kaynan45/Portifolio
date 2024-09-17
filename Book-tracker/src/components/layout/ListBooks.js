import styles from "./ListBooks.module.css";

function ListBooks({ name, author }) {
  return (
    <div>
      <ul className={styles.bookList}>
        <div className={styles.bookAuthor}>
          <li>
            <span>Author one</span>
            <p>Book one</p>
          </li>
        </div>
        <div>
          <li>
            <span>Author one</span>
            <p>Book one</p>
          </li>
        </div>
      </ul>
    </div>
  )
}

export default ListBooks