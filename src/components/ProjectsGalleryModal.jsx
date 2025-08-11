import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { fullProjects } from '../constants';
import { useCardMouseMove } from '../hooks/useCardMouseMove';
import TitleHeader from './TitleHeader';


const ProjectGalleryModal = ({ open, onClose }) => {
  const rootRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ensure portal container exists once
    let node = document.getElementById('project-modal-root');
    if (!node) {
      node = document.createElement('div');
      node.id = 'project-modal-root';
      document.body.appendChild(node);
    }
    rootRef.current = node;
    setMounted(true);
  }, []);

  const cardRefs = useRef([]);
  const handleMouseMove = useCardMouseMove(cardRefs);

  useEffect(() => {
    if (!open) return;

    // Lock body scroll
    const prevBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    const preventTouchScroll = (e) => e.preventDefault();
    window.addEventListener('touchmove', preventTouchScroll, {
      passive: false,
    });

    // Focus close button for accessibility
    const prevActive = document.activeElement;
    setTimeout(() => closeBtnRef.current?.focus(), 0);

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('touchmove', preventTouchScroll);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      prevActive?.focus?.();
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[999] flex items-start justify-center p-5 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="All projects"
    >
      <div
        className="bg-black-100 text-white rounded-xl max-w-6xl w-full shadow-lg overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 flex items-center justify-between shrink-0">
          <div className="grow-1">
            <TitleHeader title="Projects" sub="🛠️ Some of my professional and personal projects"/>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="text-white-50 hover:text-white transition-colors px-3 py-2 rounded-md"
            aria-label="Close projects modal"
          >
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div className="p-6 overflow-y-auto grow">
          <div className="grid-3-cols gap-6">
            {fullProjects.map((p, idx) => (
              <article
                key={p.name + idx}
                className="card card-border bg-black-200 rounded-xl overflow-hidden"
                style={{ minHeight: 160 }}
                ref={(el) => (cardRefs.current[idx] = el)}
                onMouseMove={handleMouseMove(idx)}
              >
                <div className="image-wrapper" style={{ height: 180 }}>
                  <img
                    src={p.preview}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <p className="text-white-50 text-sm line-clamp-3">
                    {p.description}
                  </p>
                  <p className="text-blue-50 text-sm">
                    <strong>Tech:</strong> {p.tech}
                  </p>

                  <div className="flex gap-3 mt-3">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-black-200 border border-black-50 hover:bg-black-50 transition-colors text-sm"
                      >
                        Live Site
                      </a>
                    )}
                    {p.github && p.github !== 'private' && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-white text-black font-semibold hover:opacity-90 transition-opacity text-sm"
                      >
                        GitHub
                      </a>
                    )}
                    {p.github === 'private' && (
                      <button
                        className="px-3 py-2 rounded-lg bg-white/5 text-white-50 text-sm"
                        disabled
                      >
                        Private
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-black-50 flex justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-black-200 border border-black-50 hover:bg-black-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    rootRef.current
  );
};

export default ProjectGalleryModal;
