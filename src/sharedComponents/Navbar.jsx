import styles from "./Navbar.module.css";

export default function Navbar () {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LOGO</div>
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