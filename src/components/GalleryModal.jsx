import { useEffect } from 'react';

export default function GalleryModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  if (!project) return null;

  const shots = project.gallery?.length
    ? project.gallery
    : [{ src: project.cover, alt: project.title }];

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
      onClick={onClose}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__head">
          <h2 id="gallery-modal-title" className="modal__title">
            {project.title}
          </h2>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close gallery">
            ×
          </button>
        </div>
        <div className="modal__body">
          <div className="modal__gallery">
            {shots.map(({ src, alt }) => (
              <figure key={`${src}`} className="modal__shot">
                <img src={src} alt={alt || project.title} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
