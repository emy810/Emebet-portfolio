import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Hi, I'm Emebet</h1>
      <p className={styles.subtitle}>Junior Frontend Developer</p>

      <div className={styles.buttons}>
        <Link to="/projects" className={styles.primary}>
          View My Work
        </Link>
        <Link to="/contact" className={styles.secondary}>
          Contact Me
        </Link>
      </div>
    </section>
  );
}
