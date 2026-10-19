import styles from "./Hero.module.css";
import heroVideo from "../videos/heroVideo.mp4";  // https://marketing.org.nz/ > F12 > Network > Media > Refresh > Download (Source: https://www.youtube.com/watch?v=T_axoVY4l24)

export default function Hero () {
  return (
    <div className={styles.hero}>
      <video className={styles.video} src={heroVideo} autoPlay muted loop /> {/* Needs to be muted so it can play automatically */}
      <div className={styles.search}>
        <input type="text" placeholder="search here" />
        <button>SEARCH</button>
      </div>
    </div>
  );
}
