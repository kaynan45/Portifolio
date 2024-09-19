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
    //By spreading (...book), we're keeping the previous data intact while updating only the specific field that changed.
    setBook({ ...book, [e.target.name]: e.target.value });
    console.log(book);
  }

  function addBook(e) {
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
      <form className={styles.booksForm} onSubmit={addBook}>
        {/* we need to have values in the input so we can find the right property on the book object to write on */}
        <Input name="name" label="Book name" type="text" onChange={onChange} />
        <Input
          name="author"
          label="Book author"
          type="text"
          onChange={onChange}
        />
        <input className={styles.addBook} value="Add Book" type="submit" />
      </form>
    </section>
  );
}

export default AddBooks;
