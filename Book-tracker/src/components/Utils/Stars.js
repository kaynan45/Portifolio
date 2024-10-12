import styles from "./Stars.module.css";

function Stars({ ratings }) {
  // console.log(ratings)
  function createStars() {
    for (let i = 0; i < Math.round(ratings); i++) {
      return <p>{i}</p>
    }
  }
  return (
    <span>
      {createStars()}
    </span>
  )
}

export default Stars;
