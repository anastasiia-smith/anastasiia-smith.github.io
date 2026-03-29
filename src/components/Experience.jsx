import { EXPERIENCE } from '../experience';

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <header className="section__head">
          <h2 id="experience-title" className="section__title">
            Experience
          </h2>
          <p className="section__subtitle">Selected roles — concise outcomes and stack.</p>
        </header>

        <ol className="experience__list">
          {EXPERIENCE.map((job) => (
            <li key={job.id} className="experience__item">
              <div className="experience__card">
                <div className="experience__head">
                  <h3 className="experience__company">{job.company}</h3>
                  <p className="experience__role">{job.title}</p>
                  <p className="experience__meta">
                    <span>{job.location}</span>
                    <span className="experience__meta-sep" aria-hidden="true">
                      ·
                    </span>
                    <span className="experience__period">{job.period}</span>
                  </p>
                </div>

                {job.highlights?.length ? (
                  <ul className="experience__highlights">
                    {job.highlights.map((line, i) => (
                      <li key={`${job.id}-h-${i}`}>{line}</li>
                    ))}
                  </ul>
                ) : null}

                {job.stack ? (
                  <p className="experience__stack">
                    <span className="experience__stack-label">Technologies</span>
                    {job.stack}
                  </p>
                ) : null}

                {job.projects?.length ? (
                  <div className="experience__projects">
                    <h4 className="experience__projects-label">Projects</h4>
                    <ul className="experience__projects-list">
                      {job.projects.map((p) => (
                        <li key={`${job.id}-${p.name}`}>
                          {p.url ? (
                            <a href={p.url} target="_blank" rel="noopener noreferrer" className="experience__project-link">
                              {p.name}
                            </a>
                          ) : (
                            <span className="experience__project-name">{p.name}</span>
                          )}
                          {p.description ? (
                            <span className="experience__project-desc"> — {p.description}</span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
