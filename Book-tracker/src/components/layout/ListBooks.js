import { useLocation } from "react-router-dom";

import styles from "./ListBooks.module.css";

import Container from "../layout/Container";
import Button from "./Button";
import Message from "./Message";


function ListBooks({ book }) {
  const location = useLocation();

  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.bookContainer}>
      <div className={styles.titleContainer}>
        <h1>My tracked books</h1>
        <Button buttonText="Add a new book!" buttonPath="../add-books" />
      </div>
      {message && <Message messageText={message} /> }
      <Container customClass="start">
        <ul className={styles.books}>
          {book.map((book) => (
            <li className={styles.book} key={book.id}>
              <span>
                <img src="https://via.placeholder.com/200" />
              </span>
              <h3>{book.name}</h3> <p>{book.author}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default ListBooks;
