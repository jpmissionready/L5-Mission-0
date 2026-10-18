import styles from "./Navbar.module.css";
import logo from "../images/MA_logo_red_square_tagline.png";

export default function Navbar () {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <div className={styles.right}>
        <button className={styles.link}>LOGIN / REGISTER</button>
        <span className={styles.divider}>|</span>
        <button className={styles.link}>MEMBERSHIP</button>
        <span className={styles.divider}>|</span>
        <button className={styles.menu}>☰</button>
      </div>
    </nav>
  );
}
