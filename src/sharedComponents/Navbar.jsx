import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../images/MA_logo_red_square_tagline.png";

export default function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.divLogo}>
          <a href="/"><img className={styles.logo} src={logo} alt="Logo" /></a>
          <h1>Marketing Associsation</h1>
      </div>
      

      <div className={menuOpen ? styles.right + " " + styles.open : styles.right}>
        {/* Is the menu open? If yes, use right + open. If not, use only right. */}
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <a className={styles.link} href="https://marketing.org.nz/_hcms/mem/login?redirect_url=https%3A%2F%2Fmarketing.org.nz%2Fcustomer%2Fpersonal-preferences" target="_blank">LOGIN</a>        {/* Redirects to the actual marketing org website */}
      </div>

      <button className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>☰</button> {/* https://www.piliapp.com/symbol/menu/ */}
    </nav>
  );
}
