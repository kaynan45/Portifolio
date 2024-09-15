import styles from "./AddBooks.module.css";

function AddBooks() {
  function addBook(e) {
    e.preventDefault();
    alert("book added!");
  }

  return (
    <section className={styles.bookSection}>
      <h1>Add your books!</h1>
      <form className={styles.booksForm}>
        <div>
          <label>Book name</label>
          <input type="text" className={styles.bookInputs}/>
        </div>
        <div>
          <label>Book author</label>
          <input type="text" className={styles.bookInputs}/>
        </div>
        <input className={styles.addBook} value="Add Book" type="submit" onClick={addBook} />
      </form>
    </section>
  );
}

export default AddBooks;
