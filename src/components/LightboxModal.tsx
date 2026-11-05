import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
  image: string;
  title?: string;
  category?: string;
  caption?: string;
}

export interface LightboxModalProps {
  isOpen: boolean;
  image: LightboxImage | string | null;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  image,
  index,
  total,
  onClose,
  onPrev,
  onNext
}) => {
  if (!isOpen || !image) return null;

  const hasPrev = index > 0;
  const hasNext = index < total - 1;

  const imageUrl = typeof image === 'string' ? image : image.image;
  const imageTitle = typeof image === 'string' ? '' : image.title || '';
  const imageCategory = typeof image === 'string' ? '' : image.category || '';
  const imageCaption = typeof image === 'string' ? '' : image.caption || '';
  const hasCaptionInfo = Boolean(imageTitle || imageCaption || imageCategory);

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 bg-white/95 hover:bg-white border border-emerald-200 text-slate-800 rounded-full w-9.5 h-9.5 flex items-center justify-center cursor-pointer shadow-md transition-colors"
          aria-label="Close lightbox"
        >
          <X size={20} />
        </button>

        {/* Image Container with Prev/Next buttons */}
        <div className="relative w-full max-h-[72vh] flex justify-center items-center">
          <img
            src={imageUrl}
            alt={imageTitle || 'Gallery image'}
            className="max-w-full max-h-[72vh] object-contain rounded-2xl border-2 border-white/80 shadow-2xl"
          />

          {hasPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-emerald-200 text-slate-800 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-md transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-emerald-200 text-slate-800 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-md transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Caption Card (Rendered if caption details exist) */}
        {hasCaptionInfo && (
          <div className="mt-4 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-3.5 border border-emerald-200 text-center max-w-xl shadow-lg">
            <div className="inline-flex items-center gap-2 mb-1 flex-wrap justify-center">
              {imageCategory && (
                <span className="badge-pill text-[11px] px-2 py-0.5 rounded-full">
                  {imageCategory}
                </span>
              )}
              {imageTitle && (
                <strong className="text-sm sm:text-base text-emerald-950 font-bold font-heading">
                  {imageTitle}
                </strong>
              )}
            </div>
            {imageCaption && (
              <p className="text-slate-600 text-xs sm:text-sm m-0 leading-relaxed">
                {imageCaption}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
