import styles from "./Stars.module.css";

function Stars({ ratings }) {
  // ratings && console.log(ratings)
  return (
    <span>
      {ratings}
    </span>
  )
}

export default Stars;
