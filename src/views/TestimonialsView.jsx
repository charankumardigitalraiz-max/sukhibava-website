import React, { useState } from 'react';
import {
  Star,
  Quote,
  MapPin,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  BadgeCheck
} from 'lucide-react';
import { testimonials } from '../data/websiteData';

export const TestimonialsView = ({ onOpenSiteVisit }) => {
  const [hoveredReviewIdx, setHoveredReviewIdx] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Reviews', count: testimonials.length },
    { id: 'titles', label: 'Documentation & Titles', count: 3 },
    { id: 'returns', label: 'High Agri Returns', count: 3 },
    { id: 'nri', label: 'NRI & Remote Care', count: 2 }
  ];

  const filteredTestimonials = testimonials.filter(t => {
    if (filterCategory === 'titles') return t.tag.includes('Documentation') || t.tag.includes('Transparency') || t.tag.includes('Title');
    if (filterCategory === 'returns') return t.tag.includes('Returns') || t.tag.includes('Tax-Free') || t.tag.includes('Generational');
    if (filterCategory === 'nri') return t.tag.includes('NRI') || t.tag.includes('Care');
    return true;
  });

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', paddingBottom: '60px' }}>

      {/* 1. Header Banner */}
      <section
        style={{
          position: 'relative',
          padding: '60px 0 48px',
          background: 'linear-gradient(135deg, rgba(14, 46, 31, 0.94) 0%, rgba(20, 83, 45, 0.88) 55%, rgba(180, 83, 9, 0.40) 100%), url("/images/luxury-farm-clubhouse.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          textAlign: 'center',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container" style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 14px',
              borderRadius: '100px',
              background: 'rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.28)',
              color: '#fef08a',
              fontSize: '12px',
              fontWeight: 600,
              marginBottom: '16px'
            }}
          >
            <Star size={13} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
            <span>Verified Investor Feedback • 100% Client Trust</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(28px, 3.8vw, 44px)',
              color: '#ffffff',
              marginBottom: '12px',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)'
            }}
          >
            Investor Experiences &amp; Reviews
          </h1>

          <p style={{ color: '#f0fdf4', fontSize: '15px', lineHeight: 1.65, margin: 0, opacity: 0.95 }}>
            Genuine experiences from doctors, IT leaders, and business families who acquired farmland with Sukhibhava Agro Projects in Kanigiri.
          </p>
        </div>
      </section>

      {/* 2. Unique 3-Card Modern Grid */}
      <section style={{ padding: '44px 0' }}>
        <div className="container">

          {/* Social Proof Metric Pill Strip */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#166534', fontWeight: 600, background: '#f0fdf4', padding: '4px 12px', borderRadius: '100px', border: '1px solid #bcead0' }}>
              <Star size={12} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
              <span>5.0 / 5.0 Rating</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#166534', fontWeight: 600, background: '#f0fdf4', padding: '4px 12px', borderRadius: '100px', border: '1px solid #bcead0' }}>
              <BadgeCheck size={12} style={{ color: '#16a34a' }} />
              <span>100% Registered Titles</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#92400e', fontWeight: 600, background: '#fef7dc', padding: '4px 12px', borderRadius: '100px', border: '1px solid #fde68a' }}>
              <Sparkles size={12} style={{ color: '#d97706' }} />
              <span>450+ Happy Families</span>
            </div>
          </div>

          {/* Interactive Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilterCategory(c.id)}
                style={{
                  background: filterCategory === c.id ? '#168852' : '#ffffff',
                  color: filterCategory === c.id ? '#ffffff' : '#1b4b35',
                  border: filterCategory === c.id ? '1.5px solid #168852' : '1.5px solid #dcece1',
                  borderRadius: '100px',
                  padding: '7px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: filterCategory === c.id ? '0 4px 14px rgba(22, 101, 59, 0.25)' : 'none'
                }}
              >
                <span>{c.label}</span>
                <span
                  style={{
                    marginLeft: '6px',
                    fontSize: '11px',
                    padding: '2px 6px',
                    borderRadius: '10px',
                    background: filterCategory === c.id ? 'rgba(255, 255, 255, 0.22)' : '#eef7f1',
                    color: filterCategory === c.id ? '#ffffff' : '#166534'
                  }}
                >
                  {c.count}
                </span>
              </button>
            ))}
          </div>

          {/* All Filtered Testimonials Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px', maxWidth: '1180px', margin: '0 auto 40px' }}>
            {filteredTestimonials.map((t, idx) => {
              const isHovered = hoveredReviewIdx === idx;
              const hasHover = hoveredReviewIdx !== null;

              return (
                <div
                  key={t.id || idx}
                  className="unique-testimonial-card"
                  onMouseEnter={() => setHoveredReviewIdx(idx)}
                  onMouseLeave={() => setHoveredReviewIdx(null)}
                  style={{
                    transform: isHovered
                      ? 'translateY(-8px) scale(1.015)'
                      : hasHover
                        ? 'scale(0.985)'
                        : 'translateY(0) scale(1)',
                    opacity: hasHover && !isHovered ? 0.88 : 1,
                    boxShadow: isHovered
                      ? `0 22px 44px -10px rgba(22, 66, 47, 0.16), 0 0 0 1.5px ${t.glowBorder}`
                      : '0 6px 20px -6px rgba(22, 66, 47, 0.05)',
                    borderColor: isHovered ? t.glowBorder : '#dcece1'
                  }}
                >
                  {/* Expanding Top Accent Line */}
                  <div
                    className="top-accent-line"
                    style={{
                      background: t.accentGradient,
                      width: isHovered ? '100%' : '48px'
                    }}
                  />

                  {/* Decorative Architectural Watermark Quote */}
                  <div className="quote-watermark">
                    <Quote size={52} />
                  </div>

                  <div>
                    {/* Top Meta: Stars & Highlight Pill */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', position: 'relative', zIndex: 2 }}>
                      <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                        {[...Array(t.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="rating-star-icon"
                            style={{ color: '#f59e0b', fill: '#f59e0b' }}
                          />
                        ))}
                      </div>

                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: t.badgeColor,
                          background: t.badgeBg,
                          padding: '3px 9px',
                          borderRadius: '100px',
                          border: `1px solid ${t.badgeBorder}`,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Sparkles size={10} />
                        <span>{t.tag}</span>
                      </span>
                    </div>

                    {/* Authentic Quote with Libre Baskerville */}
                    <p
                      className="quote-text"
                      style={{
                        color: '#1b4b35',
                        fontSize: '14.5px',
                        lineHeight: 1.62,
                        margin: '0 0 18px',
                        fontStyle: 'italic',
                        position: 'relative',
                        zIndex: 2,
                        minHeight: '84px'
                      }}
                    >
                      "{t.text}"
                    </p>
                  </div>

                  {/* Footer Investor Identity */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '14px',
                      borderTop: '1px solid #eef5f0',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          background: t.avatarGradient,
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '13px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: '0 3px 10px rgba(22, 66, 47, 0.15)'
                        }}
                      >
                        {t.name[0]}
                      </div>
                      <div>
                        <strong style={{ fontSize: '14px', color: '#16422f', display: 'block', lineHeight: 1.2 }}>
                          {t.name}
                        </strong>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                          <BadgeCheck size={12} style={{ color: '#16a34a', flexShrink: 0 }} />
                          <span style={{ fontSize: '11px', color: '#688577' }}>
                            {t.location} • <span style={{ color: '#166534', fontWeight: 600 }}>{t.plot}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: '10.5px',
                        fontWeight: 600,
                        color: '#168852',
                        background: '#f4fbf6',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        border: '1px solid #dcece1'
                      }}
                    >
                      Verified
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sleek Farm Tour CTA */}
          <div
            style={{
              background: 'linear-gradient(135deg, #f6faf7 0%, #ffffff 100%)',
              border: '1.5px solid #bcead0',
              borderRadius: '20px',
              padding: '30px 24px',
              textAlign: 'center',
              maxWidth: '740px',
              margin: '0 auto',
              boxShadow: '0 8px 24px -6px rgba(22, 66, 47, 0.05)'
            }}
          >
            <div className="badge-gold" style={{ marginBottom: '10px', fontSize: '11.5px', padding: '3px 10px' }}>
              <ShieldCheck size={13} style={{ color: '#d97706' }} />
              <span>100% Genuine Investor Experience</span>
            </div>

            <h3 style={{ fontSize: '22px', color: '#16422f', marginBottom: '8px', fontWeight: 700 }}>
              Join Our Thriving Community of Farmland Investors
            </h3>

            <p style={{ color: '#475a50', fontSize: '14px', maxWidth: '560px', margin: '0 auto 20px', lineHeight: 1.55 }}>
              Schedule a visit to our Kanigiri Agro Venture this weekend. Walk the fields, inspect our sweet water borewells, and meet our senior team in person.
            </p>

            <button
              onClick={onOpenSiteVisit}
              className="btn-amber shimmer-effect"
              style={{ padding: '11px 24px', fontSize: '14px', borderRadius: '100px' }}
            >
              <Calendar size={16} />
              <span>Schedule Your Free Farm Visit</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};