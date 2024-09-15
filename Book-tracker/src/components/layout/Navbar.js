import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import Container from "./Container";

import logo from "../../img/book.png";

function Navbar() {
  return (
    <nav>
      <Container>
        <ul>
          <li>
            <img className="logo" src={logo} />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-books">Add books</Link>
          </li>
          <li>
            <Link to="/book-list">Home</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
