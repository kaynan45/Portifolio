import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import Container from "./Container";

import logo from "../../img/book.png";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Container>
        <ul>
          <li>
          <Link to="/">
            <img className="logo" src={logo} alt="Book Tracker logo"/>
          </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-books">Add books</Link>
          </li>
          <li>
            <Link to="/book-list">Book list</Link>
          </li>
          <li>
            <Link to="/read-books">Read Books</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
