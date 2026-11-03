import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const LightboxModal = ({ isOpen, image, index, total, onClose, onPrev, onNext }) => {
  if (!isOpen || !image) return null;

  const hasPrev = index > 0;
  const hasNext = index < total - 1;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 100000 }}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '920px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-46px',
            right: 0,
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid #bcead0',
            color: '#16422f',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <X size={20} />
        </button>

        {/* Image Container with Prev/Next buttons */}
        <div style={{ position: 'relative', width: '100%', maxHeight: '72vh', display: 'flex', justifyContent: 'center' }}>
          <img
            src={image.image}
            alt={image.title}
            style={{
              maxWidth: '100%',
              maxHeight: '72vh',
              objectFit: 'contain',
              borderRadius: '20px',
              border: '3px solid #ffffff',
              boxShadow: '0 20px 45px rgba(22, 66, 47, 0.2)'
            }}
          />

          {hasPrev && (
            <button
              onClick={onPrev}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.92)',
                border: '1px solid #bcead0',
                color: '#16422f',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {hasNext && (
            <button
              onClick={onNext}
              style={{
                position: 'absolute',
                right: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.92)',
                border: '1px solid #bcead0',
                color: '#16422f',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Luminous Light Caption Card */}
        <div
          style={{
            marginTop: '16px',
            background: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '14px 24px',
            border: '1.5px solid #bcead0',
            textAlign: 'center',
            maxWidth: '620px',
            boxShadow: '0 8px 24px rgba(22, 66, 47, 0.08)'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="badge-pill" style={{ fontSize: '11px', padding: '2px 8px' }}>
              {image.category}
            </span>
            <strong style={{ fontSize: '16px', color: '#16422f', fontWeight: 700 }}>{image.title}</strong>
          </div>
          <p style={{ color: '#475a50', fontSize: '13.5px', margin: '4px 0 0' }}>
            {image.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
