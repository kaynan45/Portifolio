import styles from './SubmitButton.module.css'

function SubmitButton({ value, type, method }) {

  return (
    <input className={styles.addBook} value={value} type={type} onClick={method}/>
  )
}

export default SubmitButton