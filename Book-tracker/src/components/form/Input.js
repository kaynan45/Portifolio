import styles from './Input.module.css'

function Input({ label, type, name ,onChange }) {
  return (
    <div className={styles.book}>
      <label>{label}</label>
      <input type={type} name={name} className={styles.bookInputs} onChange={onChange}/>
    </div>
  );
}

export default Input;
