export default function ProjectCard({ project, onOpenGallery }) {
  const hasGallery = project.gallery?.length > 0;

  return (
    <article className="project-card">
      <div className="project-card__media">
        <img
          className="project-card__img"
          src={project.cover}
          alt={`${project.title} screenshot`}
          width={640}
          height={400}
          decoding="async"
        />
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
        <div className="project-card__actions">
          {project.links?.live ? (
            <a className="btn btn--primary" href={project.links.live} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          ) : null}
          {project.links?.repo ? (
            <a className="btn" href={project.links.repo} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          ) : null}
          {hasGallery ? (
            <button type="button" className="btn" onClick={() => onOpenGallery(project)}>
              Screens
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
