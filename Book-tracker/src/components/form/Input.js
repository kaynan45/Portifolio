import styles from "./Input.module.css";

function Input({ label, type, name, onChange, value }) {
  return (
    <div className={styles.book}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        className={styles.bookInputs}
        onChange={onChange}
        value={value}
        requireda
      />
    </div>
  );
}

export default Input;
