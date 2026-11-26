import styles from "./ProjectCard.module.css";

function FeatureList({ items }) {
  return (
    <ul className={styles.features}>
      {items.map((item) => (
        <li key={item.label}>
          <strong>{item.label}:</strong> {item.text}
        </li>
      ))}
    </ul>
  );
}

function Media({ project }) {
  if (project.video) {
    return (
      <video className={styles.video} controls preload="metadata">
        <source src={project.video} type="video/mp4" />
      </video>
    );
  }

  return (
    <a
      className={styles.preview}
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} live demo`}
    >
      <span className={styles.previewTitle}>{project.title}</span>
      <span className={styles.previewCta}>View the live app →</span>
    </a>
  );
}

export default function ProjectCard({ project }) {
  const {
    featured,
    title,
    tagline,
    description,
    features,
    sections,
    role,
    tech,
    liveUrl,
    githubUrl,
  } = project;

  const buttons = (
    <div className={styles.buttons}>
      {liveUrl && (
        <a
          className={styles.primary}
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      )}
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
    </div>
  );

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <header className={styles.header}>
        {featured && <span className={styles.badge}>★ Flagship Project</span>}
        <h2 className={styles.title}>{title}</h2>
        {tagline && <p className={styles.tagline}>{tagline}</p>}
      </header>

      <div className={featured ? styles.featuredBody : undefined}>
        <div className={styles.main}>
          <Media project={project} />

          <p className={styles.desc}>{description}</p>

          {tech?.length > 0 && (
            <ul className={styles.tech} aria-label="Technologies used">
              {tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}

          {featured && buttons}
        </div>

        <div className={styles.details}>
          {features && <FeatureList items={features} />}

          {sections?.map((section) => (
            <div key={section.heading} className={styles.section}>
              <h3 className={styles.sectionHeading}>{section.heading}</h3>
              <FeatureList items={section.items} />
            </div>
          ))}

          {role && (
            <p className={styles.role}>
              <strong>My Role:</strong> {role}
            </p>
          )}
        </div>
      </div>

      {!featured && buttons}
    </article>
  );
}
