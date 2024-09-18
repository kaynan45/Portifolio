import styles from './Input.module.css'

function Input({ label, type }) {
  return (
    <div className={styles.book}>
      <label>{label}</label>
      <input type={type} className={styles.bookInputs} />
    </div>
  );
}

export default Input;
