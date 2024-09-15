import styles from "./Home.module.css";

import book from "../../img/books.png";
import Button from "../layout/Button";
function Home() {
  return (
    <section>
      <h1>Welcome to <span>Book-tracker!</span></h1>
      <p>Start tracking your books right now!</p>
      <Button buttonText="Track" buttonPath="/add-books"/>
      <img src={book} />
    </section>
  );
}

export default Home;
