import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>
          <span>EM</span>
        </Link>
      </div>

      <button
        className={styles.menuButton}
        type="button"
        aria-expanded={menuOpen}
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={styles.hamburger} />
      </button>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        <li>
          <NavLink
            to="/"
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <button className={styles.toggle} onClick={toggleTheme}>
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}
