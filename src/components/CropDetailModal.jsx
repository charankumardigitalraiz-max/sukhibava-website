import React from 'react';
import { X, CheckCircle2, TrendingUp, Clock, Droplets, Globe, Award, ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react';

export const CropDetailModal = ({ crop, onClose, onOpenSiteVisit }) => {
  if (!crop) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          maxWidth: '720px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(22, 66, 47, 0.25)',
          border: '2px solid #bcead0',
          position: 'relative'
        }}
        className="interactive-card"
      >
        {/* Crop Hero Image with Clean Light Overlay */}
        <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }} className="img-zoom-wrapper">
          <img
            src={crop.image}
            alt={crop.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(255, 255, 255, 0.92)',
              border: '1px solid #bcead0',
              color: '#16422f',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <X size={20} />
          </button>

          <div style={{ position: 'absolute', bottom: '16px', left: '20px', right: '20px', background: 'rgba(255, 255, 255, 0.94)', backdropFilter: 'blur(12px)', padding: '12px 18px', borderRadius: '16px', border: '1px solid #bcead0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="badge-pill" style={{ fontSize: '11px', padding: '2px 8px', marginBottom: '2px' }}>
                {crop.badge}
              </span>
              <h2 style={{ color: '#16422f', fontSize: '22px', margin: '2px 0 0', fontWeight: 700 }}>
                {crop.name}
              </h2>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '12px', color: '#168852', fontWeight: 600 }}>
                📍 Kanigiri Farmland
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '28px 32px' }}>

          <p style={{ fontSize: '15px', color: '#475a50', lineHeight: 1.75, marginBottom: '24px' }}>
            {crop.overview}
          </p>

          {/* Key Agricultural Characteristics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px',
            marginBottom: '28px'
          }}>
            <div style={{ background: '#f6faf7', padding: '16px', borderRadius: '14px', border: '1px solid #dcece1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#166534', marginBottom: '4px' }}>
                <TrendingUp size={18} style={{ color: '#16a34a' }} />
                <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>Projected Net Returns</span>
              </div>
              <p style={{ fontSize: '13.5px', color: '#16422f', fontWeight: 600, margin: 0 }}>
                {crop.roiHighlight}
              </p>
            </div>

            <div style={{ background: '#f6faf7', padding: '16px', borderRadius: '14px', border: '1px solid #dcece1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d97706', marginBottom: '4px' }}>
                <Clock size={18} style={{ color: '#d97706' }} />
                <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>Gestation &amp; Harvest</span>
              </div>
              <p style={{ fontSize: '13.5px', color: '#16422f', fontWeight: 600, margin: 0 }}>
                {crop.gestation}
              </p>
            </div>

            <div style={{ background: '#f6faf7', padding: '16px', borderRadius: '14px', border: '1px solid #dcece1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#166534', marginBottom: '4px' }}>
                <Award size={18} style={{ color: '#16a34a' }} />
                <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>Economic Lifespan</span>
              </div>
              <p style={{ fontSize: '13.5px', color: '#16422f', fontWeight: 600, margin: 0 }}>
                {crop.lifespan}
              </p>
            </div>

            <div style={{ background: '#f6faf7', padding: '16px', borderRadius: '14px', border: '1px solid #dcece1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#166534', marginBottom: '4px' }}>
                <Droplets size={18} style={{ color: '#16a34a' }} />
                <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>Irrigation Protocol</span>
              </div>
              <p style={{ fontSize: '13.5px', color: '#16422f', fontWeight: 600, margin: 0 }}>
                {crop.irrigation}
              </p>
            </div>
          </div>

          {/* Key Advantages Checklist */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '16px', color: '#16422f', marginBottom: '14px', fontWeight: 700 }}>
              Key Commercial Advantages
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {crop.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} style={{ color: '#16a34a', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '14px', color: '#334d40' }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer CTAs */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '18px', borderTop: '1px solid #eef5f0' }}>
            <button
              onClick={onClose}
              className="btn-outline"
              style={{ padding: '10px 20px', fontSize: '14px' }}
            >
              Close
            </button>
            <button
              onClick={onOpenSiteVisit}
              className="btn-amber shimmer-effect"
              style={{ padding: '10px 22px', fontSize: '14px' }}
            >
              <Calendar size={16} />
              <span>Book Farm Tour to See This Crop</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
