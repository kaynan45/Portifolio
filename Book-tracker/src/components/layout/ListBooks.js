import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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

  const [coverId, setCoverId] = useState();

  useEffect(() => {
    fetch(
      `https://openlibrary.org/search.json?title=${book.name}&author=${book.author}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  }, [book]);

  return (
    <div className={styles.bookContainer}>
      <div className={styles.titleContainer}>
        <h1>My tracked books</h1>
        <Button buttonText="Add a new book!" buttonPath="../add-books" />
      </div>
      {message && <Message messageText={message} />}
      <Container customClass="start">
        <ul className={styles.books}>
          {book.map((book) => (
            <li className={styles.book} key={book.id}>
              <span>
                {/* Because that is a public url, we don`t have to fetch it, we can just provide the url as a src and boom */}
                <img
                  src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
                />
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
