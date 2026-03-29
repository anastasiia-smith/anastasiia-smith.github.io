import { useState, useCallback } from 'react';
import { PROJECTS } from '../projects';
import ProjectCard from './ProjectCard';
import GalleryModal from './GalleryModal';

export default function Portfolio() {
  const [galleryProject, setGalleryProject] = useState(null);
  const closeGallery = useCallback(() => setGalleryProject(null), []);

  return (
    <>
      <section id="portfolio" className="section" aria-labelledby="portfolio-title">
        <div className="container">
          <header className="section__head">
            <h2 id="portfolio-title" className="section__title">
              Portfolio
            </h2>
            <p className="section__subtitle">Selected interfaces and product work.</p>
          </header>
          <div className="portfolio__grid">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenGallery={setGalleryProject}
              />
            ))}
          </div>
        </div>
      </section>
      <GalleryModal project={galleryProject} onClose={closeGallery} />
    </>
  );
}
