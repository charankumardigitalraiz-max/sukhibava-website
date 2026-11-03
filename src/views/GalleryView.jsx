import React, { useState } from 'react';
import {
  Camera,
  Calendar,
  Maximize2
} from 'lucide-react';
import { galleryItems } from '../data/websiteData';

export const GalleryView = ({ onSelectImage, onOpenSiteVisit }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Geranium', 'Macadamia', 'Anjeer', 'Farmland', 'Nursery'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div style={{ background: 'var(--color-bg-page)', minHeight: '100vh', paddingBottom: '60px' }}>

      {/* ======================================================================
          1. HEADER BANNER (Refined Weight, Clean Botanical Aesthetic)
          ====================================================================== */}
      <section
        style={{
          background: 'linear-gradient(180deg, var(--color-primary-soft) 0%, var(--color-bg-page) 100%)',
          padding: '38px 0 26px',
          textAlign: 'center',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="badge-pill" style={{ marginBottom: '10px', fontSize: '12px', padding: '3px 13px' }}>
            <Camera size={13} style={{ color: 'var(--color-primary)' }} />
            <span>Authentic Kanigiri Farmland Photography</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(24px, 3.2vw, 34px)',
              color: 'var(--color-heading)',
              marginBottom: '8px',
              fontWeight: 600,
              lineHeight: 1.28,
              letterSpacing: '-0.015em'
            }}
          >
            Venture Gallery & Field Highlights
          </h1>

          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
            Real on-ground photographs from our 250+ acre Kanigiri estate: thriving Geranium fields, Macadamia orchards, Anjeer plantations, and active drip irrigation works.
          </p>
        </div>
      </section>

      {/* ======================================================================
          2. FILTER TABS & IMAGE GRID
          ====================================================================== */}
      <section style={{ padding: '30px 0 40px' }}>
        <div className="container">

          {/* Category Filter Pills (Global Theme-Driven) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                style={{ padding: '6px 16px', fontSize: '12.5px' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Responsive Image Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onSelectImage(item, idx, filteredItems)}
                className="interactive-card"
                style={{
                  background: 'var(--color-bg-surface)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1.5px solid var(--color-border)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s var(--ease-smooth)'
                }}
              >
                <div>
                  {/* Image Container */}
                  <div style={{ position: 'relative', height: '195px', overflow: 'hidden', background: 'var(--color-bg-soft)' }} className="img-zoom-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: item.category === 'Geranium' ? 'center 20%' : 'center',
                        display: 'block'
                      }}
                    />

                    {/* Top Category Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '9px',
                        left: '9px',
                        background: 'rgba(255, 255, 255, 0.94)',
                        backdropFilter: 'blur(6px)',
                        padding: '2.5px 9px',
                        borderRadius: '100px',
                        fontSize: '10.5px',
                        fontWeight: 600,
                        color: 'var(--color-primary-dark)',
                        border: '1px solid var(--color-primary-border)',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                      }}
                    >
                      {item.category}
                    </div>

                    {/* Expand Lightbox Icon */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '9px',
                        right: '9px',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.92)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary-dark)',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <Maximize2 size={13} />
                    </div>
                  </div>

                  {/* Caption Area */}
                  <div style={{ padding: '12px 14px 14px' }}>
                    <h3 style={{ fontSize: '14.5px', color: 'var(--color-heading)', marginBottom: '4px', fontWeight: 600, lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.45 }}>
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Book Site Visit CTA */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <div
              style={{
                background: 'var(--color-bg-surface)',
                border: '1.5px solid var(--color-primary-border)',
                borderRadius: '16px',
                padding: '24px 20px',
                maxWidth: '640px',
                margin: '0 auto',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <h3 style={{ fontSize: '18px', color: 'var(--color-heading)', marginBottom: '5px', fontWeight: 600 }}>
                Experience the Land in Person
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '13px', margin: '0 0 16px', lineHeight: 1.5 }}>
                Join our weekend site tour from Vijayawada or Ongole with complimentary air-conditioned transport.
              </p>
              <button
                onClick={onOpenSiteVisit}
                className="btn-amber shimmer-effect"
                style={{ padding: '9px 22px', fontSize: '13px' }}
              >
                <Calendar size={14} />
                <span>Book Free Weekend Farm Tour</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
