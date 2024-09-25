import styles from "./SubmitButton.module.css";

function SubmitButton({ value, type, method, disabled }) {
  return (
    <input
      disabled={disabled}
      className={styles.addBook}
      value={value}
      type={type}
      onClick={method}
    />
  );
}

export default SubmitButton;
