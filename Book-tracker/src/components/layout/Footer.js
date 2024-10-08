import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span>Book-tracker</span> &copy; 2024
      </p>
      <ul>
        <li>
          <Link
            to={"https://github.com/kaynan45"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </Link>
        </li>
        <li>
          <Link
            to={"https://www.instagram.com/kaynan.lkx"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </Link>
        </li>
        <li>
          <Link
            to={"https://www.linkedin.com/in/lorenzo-xavier-9317432ba/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
