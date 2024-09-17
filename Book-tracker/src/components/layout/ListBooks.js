import styles from "./ListBooks.module.css";

function ListBooks({ book }) {
  return (
    <div>
      <ul className={styles.bookList}>
        <div>
          {book.map((book) => (
            <li className={styles.bookAuthor} key={book.name}>
              <span>{book.author}</span> <p>{book.name}</p>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default ListBooks;
