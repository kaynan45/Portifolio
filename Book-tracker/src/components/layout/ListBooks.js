import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./ListBooks.module.css";

import Container from "../layout/Container";
import Button from "./Button";
import Message from "./Message";
import Loading from "../Utils/Loading";
// import Ratings from "../Utils/Ratings"

function ListBooks({ book, setBook }) {
  const location = useLocation();

  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  // const [rating, setRatings] = useState({});
  const [covers, setCovers] = useState({});

  useEffect(
    () => {
      book.forEach((singleBook) => {
        //? Braking the book array into singleBooks objects, doing that we can...
        fetch(
          `https://openlibrary.org/search.json?title=${singleBook.name}&author=${singleBook.author}`
        )
          .then((response) => response.json())
          .then((data) => {
            // const bookRating = Math.round(data.docs[0].ratings_sortable);
            // setRatings((prevRatings) => {
            //   return {...prevRatings, [singleBook.id]: bookRating}
            // })
            // console.log(rating)
            if (data.docs && data.docs.length > 0) {
              const coverId = data.docs[0].cover_i;
              if (coverId) {
                setCovers((prevCovers) => ({
                  ...prevCovers,
                  [singleBook.id]: coverId,
                }));
              }
            }
          })
          .catch((error) => console.log(error));
      });
    },
    [book]
  );

  return (
    <div className={styles.bookContainer}>
      <div className={styles.titleContainer}>
        <h1>
          My <span>Tracked Books</span>
        </h1>
        <Button buttonText="Add a new book!" buttonPath="../add-books" />
      </div>
      {message && <Message messageText={message} />}
      <Container customClass="start">
        <ul className={styles.books}>
          {book.map((singleBook) => (
            <li className={styles.book} key={singleBook.id}>
              <Link
                to={`https://www.amazon.com/s?k=${encodeURIComponent(
                  singleBook.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  {/* Because that is a public url, we don`t have to fetch it, we can just provide the url as a src and boom */}
                  {covers[singleBook.id] ? (
                    <img
                      alt="book-cover"
                      src={`https://covers.openlibrary.org/b/id/${
                        covers[singleBook.id]
                      }-M.jpg`}
                    />
                  ) : (
                    <Loading />
                  )}
                </span>
              </Link>
              <h3>{singleBook.name}</h3> <p>{singleBook.author}</p>
              <Button buttonText="Book read" buttonPath="../read-books" />
              {/* <Ratings rating={rating}/> */}
            </li>
          ))}
          {/* <h1 className={styles.downTitle}>Keep adding books!</h1> */}
        </ul>
      </Container>
    </div>
  );
}

export default ListBooks;
