import styles from "./Projects.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Projects</h1>
        <p className={styles.intro}>
          A selection of things I&apos;ve built, starting with the project I&apos;m most proud of.
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
