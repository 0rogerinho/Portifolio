import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Download, ZoomIn } from 'lucide-react';
import { Technologies } from '../Skill/Technologies';
import { ISoftwareModal } from './@types';

const SoftwareModal = ({ software, onClose }: ISoftwareModal) => {
  const [activeImage, setActiveImage] = useState(
    software.images[0] ?? software.cover,
  );
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setActiveImage(software.images[0] ?? software.cover);
    setExpandedImage(null);
  }, [software]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (expandedImage) {
        setExpandedImage(null);
        return;
      }
      onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, expandedImage]);

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        role="presentation"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="software-modal-title"
          className="relative flex w-full max-w-3xl max-h-[90vh] flex-col overflow-hidden rounded-2xl border border-white/40 bg-[url('/background/desktop.png')] bg-cover"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/30 bg-[rgba(0,1,14,0.75)] p-2 transition-colors hover:bg-white/10"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="modal-scroll space-y-6 overflow-y-auto overscroll-contain p-5 pr-6 md:p-8 md:pr-10">
            <div className="space-y-2">
              <h2
                id="software-modal-title"
                className="text-2xl font-semibold md:text-3xl"
              >
                {software.name}
              </h2>
              <div className="flex flex-wrap gap-3 text-sm opacity-80">
                <span>Plataforma: {software.platform}</span>
                {software.version && <span>Versão: {software.version}</span>}
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setExpandedImage(activeImage)}
                className="group relative flex w-full items-center justify-center rounded-xl border border-white/20 bg-black/40 p-2 cursor-zoom-in"
                aria-label="Expandir imagem"
              >
                <img
                  src={activeImage}
                  alt={`${software.name} preview`}
                  className="w-full max-h-[420px] h-auto object-contain rounded-lg"
                />
                <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1 rounded-full border border-white/30 bg-black/60 px-2.5 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                  <ZoomIn className="h-3.5 w-3.5" />
                  Ampliar
                </span>
              </button>

              {software.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {software.images.map((image) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveImage(image)}
                      onDoubleClick={() => setExpandedImage(image)}
                      className={`shrink-0 rounded-lg border bg-black/40 p-1 transition-all ${
                        activeImage === image
                          ? 'border-white scale-105'
                          : 'border-white/30 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt="Miniatura"
                        className="h-14 w-24 object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Sobre</h3>
              <p className="text-sm md:text-base text-[#D4D4D4] leading-relaxed whitespace-pre-line">
                {software.description}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {software.technologies.map(({ skill, img }) => (
                  <Technologies key={skill} srcImg={img} skill={skill} />
                ))}
              </div>
            </div>

            {software.downloads.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Download</h3>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {software.downloads.map(({ label, url }) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold transition-all hover:bg-white/20 hover:scale-[1.02]"
                    >
                      <Download className="h-4 w-4" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {expandedImage && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setExpandedImage(null)}
          role="presentation"
        >
          <button
            type="button"
            onClick={() => setExpandedImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/30 bg-black/60 p-2 transition-colors hover:bg-white/10"
            aria-label="Fechar imagem"
          >
            <X className="h-5 w-5" />
          </button>

          <img
            src={expandedImage}
            alt={`${software.name} em tamanho real`}
            className="max-h-[95vh] max-w-[95vw] h-auto w-auto object-contain rounded-lg shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>,
    document.body,
  );
};

export default SoftwareModal;
