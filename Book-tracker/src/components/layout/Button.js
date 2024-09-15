import { Link } from "react-router-dom";

import styles from "./Button.module.css";

function Button({ buttonText, buttonPath }) {
  return (
    <Link className={styles.button} to={buttonPath}>
      {buttonText}
    </Link>
  );
}

export default Button;
