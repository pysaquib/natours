import styles from "./header.module.css";
import Logo from "../assets/img/logo-white.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo_box}>
        <img src={Logo} alt="Logo" className={styles.logo}></img>
      </div>
      <div className={styles.text_box}>
        <h1 className={styles.heading_primary}>
          <span className={styles.heading_primary_main}>Outdoors</span>
          <span className={styles.heading_primary_sub}>
            is where life happens
          </span>
        </h1>
        <a
          href="#"
          className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}
        >
          Discover all tours
        </a>
      </div>
    </header>
  );
};

export default Header;
