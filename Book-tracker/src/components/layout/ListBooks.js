import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./ListBooks.module.css";

import Container from "../layout/Container";
import Button from "./Button";
import Message from "./Message";
import Loading from "../Utils/Loading";

function ListBooks({ book }) {
  const location = useLocation();

  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  const [covers, setCovers] = useState({});

  useEffect(() => {
    book.forEach((singleBook) => {
      //? Braking the book array into singleBooks objects, doing that we can...
      fetch(
        `https://openlibrary.org/search.json?title=${singleBook.name}&author=${singleBook.author}` // Use the created singleBook object to get the name and the author of the books
      )
        .then((response) => response.json())
        .then((data) => {
          //data provided by the API
          if (data.docs && data.docs.length > 0) {
            //if the data docs exists...
            const coverId = data.docs[0].cover_i; // Allocate it`s value into a variable named coverId
            if (coverId) {
              //If coverId have some value inside
              setCovers((prevCovers) => ({
                // `prevCovers` is a reference to the previous state of `covers`
                ...prevCovers, // Spreading the object to maintain the previous data of it
                [singleBook.id]: coverId, // Dynamically creating a key (being each book id) and a value that is the cover id provided by the API
              }));
            }
          }
        })
        .catch((error) => console.log(error));
    });
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
          {book.map((singleBook) => (
            <li className={styles.book} key={singleBook.id}>
              <span>
                {/* Because that is a public url, we don`t have to fetch it, we can just provide the url as a src and boom */}
                {covers[singleBook.id] ? (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${
                      covers[singleBook.id]
                    }-M.jpg`}
                  />
                ) : (
                  <Loading />
                )}
              </span>
              <h3>{singleBook.name}</h3> <p>{singleBook.author}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default ListBooks;
