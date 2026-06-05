import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Skills</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.title}>Frontend</h2>
            <ul className={styles.list}>
              <li>HTML5</li>
              <li>CSS3 / Responsive Design</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>React Router</li>
              <li>CSS Modules</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2 className={styles.title}>Tools & Workflow</h2>
            <ul className={styles.list}>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Vite</li>
              <li>Next.js (App Router)</li>
              <li>REST APIs</li>
              <li>Cloudinary</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2 className={styles.title}>Soft Skills</h2>
            <ul className={styles.list}>
              <li>Problem‑solving</li>
              <li>Communication</li>
              <li>Time Management</li>
              <li>Collaboration</li>
              <li>Adaptability</li>
              <li>Attention to Detail</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
