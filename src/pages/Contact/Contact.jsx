import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact</h1>

        <p className={styles.text}>
          Feel free to reach out if you’d like to collaborate or learn more
          about my work.
        </p>

        <div className={styles.info}>
          <p>
            <strong>Email:</strong> emymak93@yahoo.com
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/emy810"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/emy810
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/emebet-webdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/emebet-webdev
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
