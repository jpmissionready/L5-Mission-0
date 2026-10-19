import styles from "./Cards.module.css";

export default function Cards ({ image, title, subtitle }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image}/>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
