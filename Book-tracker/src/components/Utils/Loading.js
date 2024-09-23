import styles from "./Loading.module.css";

function Loading() {
  return (
    <div>
      <div className={styles.loader}></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
