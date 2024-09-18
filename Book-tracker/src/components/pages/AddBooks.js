import Input from "../form/Input";
import styles from "./AddBooks.module.css";
import { useState } from "react";

function AddBooks() {
  const [book, setBook] = useState({});
  // const book = {
  //   name: "book test",
  //   author: "author test"
  // }

  function onChange(e) {
    (setBook({...book,[e.target.value]: e.target.name}))
    console.log(book)
  }

  function addBookName(e) {
    e.preventDefault();
    fetch("http://localhost:5000/book-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <section className={styles.bookSection}>
      <h1>Add your books!</h1>
      <form className={styles.booksForm}>
        <Input label="Book name" type="text" onChange={onChange}/>
        <Input label="Book author" type="text" onChange={onChange}/>
        <input
          className={styles.addBook}
          value="Add Book"
          type="submit"
          // onClick={addBookName}
        />
      </form>
    </section>
  );
}

export default AddBooks;
