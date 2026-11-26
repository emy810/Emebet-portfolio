import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.heading}>About Me</h1>

        <p className={styles.text}>
          I&apos;m Emebet Hunde, a frontend developer with a background in
          mathematics and healthcare. I recently completed the HackYourFuture
          Frontend Development programme, where I built React applications in
          collaborative team environments and worked with modern frontend tools
          and workflows.
        </p>

        <p className={styles.text}>
          One project that reflects how I work is TravelGuru, a travel booking
          platform originally developed as a team project. I was responsible for
          authentication and user profiles, and after the programme ended, I took
          ownership of the application when its backend and data services became
          unavailable. I restored the Firebase backend, fixed authentication,
          replaced expired APIs and redeployed the application independently.
        </p>

        <p className={styles.text}>
          Today, I build with React, JavaScript, Firebase, Firestore, React Router
          and Vite, and I&apos;m looking for a Frontend Developer role where I can
          contribute, collaborate and continue growing as an engineer.
        </p>
      </div>
    </section>
  );
}
