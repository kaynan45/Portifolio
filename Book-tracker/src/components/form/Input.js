import styles from './Input.module.css'

function Input({ label, type, onChange }) {
  return (
    <div className={styles.book}>
      <label>{label}</label>
      <input type={type} className={styles.bookInputs} onChange={onChange}/>
    </div>
  );
}

export default Input;
