import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import styles from "./AddBooks.module.css";
import { useState } from "react";

function AddBooks() {
  const [book, setBook] = useState({name: '', author: ''});

  function onChange(e) {
    //By spreading (...book), we're keeping the previous data intact while updating only the specific field that changed.
    setBook({ ...book, [e.target.name]: e.target.value });
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
      .catch((error) => console.log(error));
    setBook({});
  }

  return (
    <section className={styles.bookSection}>
      <h1>Add your books!</h1>
      <form className={styles.booksForm} onSubmit={addBook}>
        {/* we need to have values in the input so we can find the right property on the book object to write on */}
        <Input
          name="name"
          label="Book name"
          type="text"
          onChange={onChange}
          value={book.name || ''} //by doing it we guarantee that when the book.name is `undefined` (like on line 25), we set it back to ''
        />
        <Input
          name="author"
          label="Book author"
          type="text"
          onChange={onChange}
          value={book.author || ''}
        />
        <SubmitButton value="Add Book" type="submit" />
      </form>
    </section>
  );
}

export default AddBooks;
