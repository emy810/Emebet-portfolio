import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.heading}>About Me</h1>

        <p className={styles.text}>
          I’m a web development trainee focused on building clean, user‑centered
          digital experiences. I recently completed the HackYourFuture Frontend
          Development bootcamp, where I gained hands‑on experience through real
          projects and collaborative learning.
        </p>

        <p className={styles.text}>
          I’m currently strengthening my skills through independent projects and
          continuous learning, supported by a strong analytical background in
          healthcare and mathematics. I enjoy creating intuitive interfaces and
          solving problems through thoughtful, modern web development.
        </p>
      </div>
    </section>
  );
}
