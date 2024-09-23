import ListBooks from "../layout/ListBooks";

import { useEffect, useState } from "react";

function BookList() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/book-list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setBook(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <ListBooks book={book} setBook={setBook} />;
}

export default BookList;
