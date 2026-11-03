import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Layers,
  ShoppingBag,
  Sprout,
  Sparkles,
  Calendar,
  Users,
  Camera,
  ShieldCheck,
  Star,
  MessageSquare
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export const Footer = ({ setActiveTab, onOpenSiteVisit }) => {
  const handleNav = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--color-bg-soft)',
        color: 'var(--color-text-main)',
        padding: '42px 0 20px',
        borderTop: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="container">

        {/* 4-Column Clean Typography Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px',
            paddingBottom: '30px',
            borderBottom: '1px solid var(--color-border-subtle)'
          }}
        >
          {/* Column 1: Brand Emblem & Overview */}
          <div>
            <div
              onClick={() => handleNav('home')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                marginBottom: '12px'
              }}
            >
              <img
                src={companyInfo.logoImage}
                alt="Sukhibhava Agro Projects"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--color-bg-surface)',
                  padding: '2px',
                  border: '1.5px solid var(--color-primary-border)',
                  boxShadow: '0 2px 6px rgba(22, 66, 47, 0.08)',
                  objectFit: 'contain'
                }}
              />
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '16.5px',
                    fontWeight: 800,
                    color: 'var(--color-heading)',
                    display: 'block',
                    lineHeight: 1.15
                  }}
                >
                  SUKHIBHAVA AGRO
                </span>
                <span
                  style={{
                    fontSize: '9.5px',
                    color: 'var(--color-primary)',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'block'
                  }}
                >
                  Projects Pvt. Ltd.
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '13px', lineHeight: 1.6, margin: '0 0 14px', maxWidth: '280px' }}>
              Pioneering managed commercial farmlands and certified organic agriculture in Andhra Pradesh with 20+ years of hands-on agronomy expertise.
            </p>

            <span style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>
              Tagline: "{companyInfo.tagline}"
            </span>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4
              style={{
                color: 'var(--color-heading)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '14px',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Our Services
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <button onClick={() => handleNav('projects')} className="footer-link">
                  <Layers size={13.5} />
                  <span>Farmland Development</span>
                </button>
              </li>

              <li>
                <button onClick={() => handleNav('organic-products')} className="footer-link">
                  <ShoppingBag size={13.5} />
                  <span>Organic Farm Products Store</span>
                </button>
              </li>

              <li>
                <button onClick={() => handleNav('consultancy')} className="footer-link">
                  <Sprout size={13.5} />
                  <span>Agri Organic Consultancy</span>
                </button>
              </li>

              <li>
                <button onClick={() => handleNav('services')} className="footer-link">
                  <Sparkles size={13.5} />
                  <span>All 3 Modules Overview</span>
                </button>
              </li>

              <li>
                <button
                  onClick={onOpenSiteVisit}
                  className="footer-link"
                  style={{ color: 'var(--color-secondary)', fontWeight: 600 }}
                >
                  <Calendar size={13.5} style={{ color: 'var(--color-secondary)' }} />
                  <span>Book Weekend Farm Tour →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4
              style={{
                color: 'var(--color-heading)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '14px',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Quick Links
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <button onClick={() => handleNav('about')} className="footer-link">
                  <Users size={13.5} />
                  <span>About Us & Leadership</span>
                </button>
              </li>

              <li>
                <button onClick={() => handleNav('gallery')} className="footer-link">
                  <Camera size={13.5} />
                  <span>Site Gallery & Video Tours</span>
                </button>
              </li>

              <li>
                <button onClick={() => handleNav('legal')} className="footer-link">
                  <ShieldCheck size={13.5} />
                  <span>Legal Clearances & 100% Titles</span>
                </button>
              </li>

              <li>
                <button onClick={() => handleNav('testimonials')} className="footer-link">
                  <Star size={13.5} />
                  <span>Client Reviews & Stories</span>
                </button>
              </li>

              <li>
                <button onClick={() => handleNav('contact')} className="footer-link">
                  <MapPin size={13.5} />
                  <span>Contact Us & Directions</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div>
            <h4
              style={{
                color: 'var(--color-heading)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '14px',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Contact & Locations
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={14} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'var(--color-text-muted)', lineHeight: 1.45 }}>
                  Vijayawada HQ • Kanigiri Farmland, Prakasam Dist, AP
                </span>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <a
                  href={`tel:${companyInfo.phone}`}
                  style={{ color: 'var(--color-heading)', textDecoration: 'none', fontWeight: 600 }}
                >
                  {companyInfo.phone}
                </a>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={14} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <a
                  href={`mailto:${companyInfo.email}`}
                  style={{ color: 'var(--color-text-muted)', textDecoration: 'none', wordBreak: 'break-all' }}
                >
                  {companyInfo.email}
                </a>
              </div>

              {/* WhatsApp direct link */}
              <div style={{ marginTop: '2px' }}>
                <a
                  href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{
                    color: 'var(--color-primary)',
                    fontWeight: 600,
                    fontSize: '12.5px',
                    gap: '5px'
                  }}
                >
                  <MessageSquare size={13} style={{ color: 'var(--color-primary)' }} />
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '16px',
            fontSize: '12px',
            color: 'var(--color-text-muted)'
          }}
        >
          <div>
            © 2026 Sukhibhava Agro Projects Pvt. Ltd. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 500 }}>
              100% Registered Titles • APEDA Compliant
            </span>

            <button
              onClick={scrollToTop}
              title="Back to top"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-primary)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: 0
              }}
            >
              <span>Back to top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
