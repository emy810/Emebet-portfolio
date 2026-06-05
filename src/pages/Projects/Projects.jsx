import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Projects</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.title}>Full‑Stack Memory Game</h2>

            <video className={styles.video} controls preload="metadata">
              <source
                src="https://res.cloudinary.com/dtztti3h0/video/upload/v1780345245/Microsoft__Edge_-_Memory_game_and_10_more_pages_-_Personal_-_Microsoft__Edge_-_1_June_2026_qpywls.mp4"
                type="video/mp4"
              />
            </video>

            <p className={styles.desc}>
              A collaborative full‑stack memory game built during the
              HackYourFuture bootcamp. Players flip cards to match pairs while
              the game tracks time, difficulty, and progress. The backend serves
              card data from an SQLite database, allowing new cards to be added
              without changing the frontend.
            </p>

            <ul className={styles.features}>
              <li>
                <strong>Backend & Database:</strong> Node.js, Express.js, SQLite
                API for dynamic card data.
              </li>
              <li>
                <strong>Responsive Design:</strong> Mobile‑friendly layout with
                adaptive grid and card sizing.
              </li>
              <li>
                <strong>Difficulty Levels:</strong> Three modes that adjust grid
                size and complexity.
              </li>
              <li>
                <strong>Game Mechanics:</strong> Reveal logic, match detection,
                timer, reset, and win state.
              </li>
            </ul>

            <p className={styles.role}>
              <strong>My Role:</strong> Implemented matching logic, reveal
              count, timer, and card‑disappearance functionality. Also
              contributed to CSS styling and UI behavior.
            </p>

            <div className={styles.buttons}>
              <a
                href="https://ae-memory-game.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/emy810/memory-game"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.title}>Event Startup App</h2>

            <video className={styles.video} controls preload="metadata">
              <source
                src="https://res.cloudinary.com/dtztti3h0/video/upload/v1780695403/Video_Project_neres1.mp4"
                type="video/mp4"
              />
            </video>

            <p className={styles.desc}>
              A React-based event browsing application where users can explore
              upcoming events, view detailed information, add items to their
              cart, remove them, and confirm their order. The app also includes
              a full order summary page that displays purchased items and
              totals.
            </p>

            <ul className={styles.features}>
              <li>
                <strong>Event Browsing:</strong> Users can search, sort, and
                explore a list of events.
              </li>
              <li>
                <strong>Event Details:</strong> Each event has its own detail
                page with full information.
              </li>
              <li>
                <strong>Cart System:</strong> Add, remove, and update items in a
                persistent shopping cart.
              </li>
              <li>
                <strong>Order Summary:</strong> After checkout, users can review
                their full order details.
              </li>
              <li>
                <strong>Responsive UI:</strong> Clean, modern layout built with
                React and CSS Modules.
              </li>
            </ul>

            <p className={styles.role}>
              Built the full frontend architecture using React Router,
              component-based design, and state management for cart
              functionality. Implemented event detail pages, cart logic, and the
              order summary flow.
            </p>

            <div className={styles.buttons}>
              <a
                href="https://mid-frontend-project-skeleton-zahp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/emy810/mid-frontend-project-skeleton"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.title}>SpaceGalactica</h2>

            <video className={styles.video} controls preload="metadata">
              <source
                src="PASTE_SPACEGALACTICA_VIDEO_URL_HERE"
                type="video/mp4"
              />
            </video>

            <p className={styles.desc}>
              SpaceGalactica is a space‑themed web application that displays
              NASA’s Astronomy Picture of the Day (APOD), allows users to
              explore planets, and includes a wishlist feature. Originally built
              with React + Vite, it was later migrated to Next.js to practice
              the App Router and server components.
            </p>

            <ul className={styles.features}>
              <li>
                <strong>NASA APOD:</strong> Fetch and display daily astronomy
                images with title, date, and explanation.
              </li>
              <li>
                <strong>Planet Explorer:</strong> Browse planets and open
                detailed dynamic pages.
              </li>
              <li>
                <strong>Wishlist:</strong> Add or remove planets using
                localStorage persistence.
              </li>
              <li>
                <strong>Next.js App Router:</strong> Clean file‑based routing
                and server components.
              </li>
            </ul>

            <p className={styles.role}>
              <strong>Tech Stack:</strong> Next.js, React, NASA APOD API, CSS
              Modules, Vercel.
            </p>

            <div className={styles.buttons}>
              <a
                href="https://spacegalactica-next.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/emy810/spacegalactica-next"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
