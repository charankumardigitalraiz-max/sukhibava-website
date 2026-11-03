import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  MapPin,
  Menu,
  X,
  Calendar,
  Sparkles,
  MessageSquare,
  ChevronDown,
  ShoppingBag,
  Sprout,
  Leaf,
  ArrowRight
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export const Navbar = ({ activeTab, setActiveTab, onOpenSiteVisit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesMenuOpen(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesMenuOpen(false);
    }, 180);
  };

  const handleNavClick = (tabId) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: '100%'
      }}
    >
      {/* 1. Luminous Light Micro-Bar */}
      <div
        className="micro-bar-wrapper"
        style={{
          maxHeight: isScrolled ? '0px' : '38px',
          opacity: isScrolled ? 0 : 1,
          borderBottom: isScrolled ? 'none' : '1px solid #e1eee5'
        }}
      >
        <div className="nav-container micro-bar-container">
          {/* Left Column: Location & Phone */}
          <div className="micro-bar-left">
            {/* Desktop Location */}
            <span className="micro-location-desktop">
              <MapPin size={12.5} style={{ color: '#16a34a', flexShrink: 0 }} />
              <span>Vijayawada HQ • Kanigiri Farmland Venture</span>
            </span>

            {/* Tablet Location */}
            <span className="micro-location-tablet">
              <MapPin size={12.5} style={{ color: '#16a34a', flexShrink: 0 }} />
              <span>Kanigiri, AP</span>
            </span>

            {/* Phone Link (Always Interactive) */}
            <a
              href={`tel:${companyInfo.phone}`}
              className="micro-phone-link"
              title="Call Sukhibhava Agro Projects"
            >
              <Phone size={12} style={{ color: '#16a34a', flexShrink: 0 }} />
              <span>{companyInfo.phone}</span>
            </a>
          </div>

          {/* Right Column: Motto & WhatsApp Support */}
          <div className="micro-bar-right">
            {/* Motto Badge (Desktop only) */}
            <span className="micro-bar-motto">
              <Sparkles size={12.5} style={{ color: '#f59e0b', flexShrink: 0 }} />
              <span>20+ Yrs Organic Agriculture Excellence</span>
            </span>

            {/* WhatsApp Link */}
            <a
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20am%20interested%20in%20your%20farmland%20ventures.`}
              target="_blank"
              rel="noopener noreferrer"
              className="micro-whatsapp-link"
              title="Chat with Sukhibhava Agro on WhatsApp"
            >
              <MessageSquare size={12} style={{ color: '#16a34a', flexShrink: 0 }} />
              <span className="whatsapp-text-full">WhatsApp Support →</span>
              <span className="whatsapp-text-mobile">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar with Frosted Glass / Primary Emerald Color on Scroll */}
      <nav
        className={isScrolled ? 'nav-scrolled' : ''}
        style={{
          background: isScrolled
            ? 'linear-gradient(135deg, #113825 0%, #165333 55%, #18663e 100%)'
            : 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: isScrolled
            ? '0 10px 30px -6px rgba(17, 56, 37, 0.45), 0 2px 6px rgba(0, 0, 0, 0.1)'
            : '0 1px 4px rgba(22, 66, 47, 0.06)',
          borderBottom: isScrolled
            ? '1.5px solid rgba(245, 158, 11, 0.35)'
            : '1px solid rgba(22, 101, 59, 0.1)',
          transition: 'background 0.35s ease, box-shadow 0.35s ease, height 0.3s ease, border-color 0.3s ease',
          height: isScrolled ? '66px' : '74px',
          display: 'flex',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <div className="nav-container">

          {/* Logo & Brand Identity (Firmly Anchored to Left) */}
          <div
            onClick={() => handleNavClick('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              userSelect: 'none',
              flexShrink: 0
            }}
          >
            {/* High-Res Official Brand Emblem inside Crisp White Badge */}
            <div
              style={{
                width: isScrolled ? '44px' : '48px',
                height: isScrolled ? '44px' : '48px',
                borderRadius: '50%',
                background: '#ffffff',
                padding: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isScrolled
                  ? '0 3px 12px rgba(0, 0, 0, 0.28)'
                  : '0 2px 8px rgba(22, 66, 47, 0.1)',
                border: isScrolled
                  ? '1.5px solid rgba(255, 255, 255, 0.45)'
                  : '1.5px solid #cce5d5',
                flexShrink: 0,
                transition: 'all 0.25s ease'
              }}
            >
              <img
                src={companyInfo.logoImage}
                alt="Sukhibhava Agro Projects"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Clean, Unified Brand Name on Right Side of Logo */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span
                className="brand-name-title"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: isScrolled ? '17.5px' : '19px',
                  fontWeight: 800,
                  color: isScrolled ? '#ffffff' : '#143e2b',
                  letterSpacing: '-0.015em',
                  lineHeight: 1.15,
                  transition: 'color 0.3s ease, font-size 0.25s ease'
                }}
              >
                SUKHIBHAVA AGRO
              </span>
              <span
                className="brand-name-subtitle"
                style={{
                  fontSize: isScrolled ? '9.5px' : '10px',
                  color: isScrolled ? '#86efac' : '#168852',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  display: 'block',
                  lineHeight: 1.2,
                  fontFamily: 'var(--font-display)',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease'
                }}
              >
                Projects Pvt. Ltd.
              </span>
            </div>
          </div>

          {/* Desktop Navigation Menu (Right-Aligned) */}
          <div style={{ display: 'none', alignItems: 'center', gap: '5px' }} className="desktop-nav-menu">

            {/* 1. Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            >
              Home
            </button>

            {/* 2. About */}
            <button
              onClick={() => handleNavClick('about')}
              className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
            >
              About
            </button>

            {/* 3. Services Dropdown (The 3 Core Modules) */}
            <div
              className="nav-dropdown-wrapper"
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`nav-link ${(activeTab === 'services' || activeTab === 'organic-products' || activeTab === 'consultancy') ? 'active' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
              >
                <span>Services</span>
                <ChevronDown
                  size={13}
                  style={{
                    opacity: 0.8,
                    transition: 'transform 0.22s ease',
                    transform: servicesMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                />
              </button>

              {/* Seamless Dropdown Container with Zero Hover Gap */}
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  paddingTop: '6px', // Invisible hover bridge: cursor never crosses empty gap
                  zIndex: 1050,
                  opacity: servicesMenuOpen ? 1 : 0,
                  transform: servicesMenuOpen ? 'translateY(0)' : 'translateY(6px)',
                  pointerEvents: servicesMenuOpen ? 'auto' : 'none',
                  transition: 'opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Refined Lightweight Dropdown Card */}
                <div
                  style={{
                    minWidth: '240px',
                    background: '#ffffff',
                    borderRadius: '13px',
                    padding: '6px',
                    border: '1.5px solid #dcece1',
                    boxShadow: '0 14px 34px -4px rgba(17, 56, 37, 0.16), 0 3px 8px rgba(0, 0, 0, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px'
                  }}
                >
                  {/* Item 1: Organic Farm Products */}
                  <button
                    onClick={() => handleNavClick('organic-products')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      border: 'none',
                      background: activeTab === 'organic-products' ? '#eaf8ef' : 'transparent',
                      color: activeTab === 'organic-products' ? '#166534' : '#274737',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'all 0.18s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== 'organic-products') {
                        e.currentTarget.style.background = '#f0fbf4';
                        e.currentTarget.style.color = '#166534';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== 'organic-products') {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#274737';
                      }
                    }}
                  >
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '7px',
                      background: '#eaf8ef',
                      border: '1px solid #bcead0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#166534',
                      flexShrink: 0
                    }}>
                      <ShoppingBag size={14} />
                    </div>
                    <span style={{ flex: 1, letterSpacing: '-0.01em' }}>Organic Farm Products</span>
                  </button>

                  {/* Item 2: Agri Organic Consultancy */}
                  <button
                    onClick={() => handleNavClick('consultancy')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      border: 'none',
                      background: activeTab === 'consultancy' ? '#fef7dc' : 'transparent',
                      color: activeTab === 'consultancy' ? '#b45309' : '#274737',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'all 0.18s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== 'consultancy') {
                        e.currentTarget.style.background = '#fef7dc';
                        e.currentTarget.style.color = '#b45309';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== 'consultancy') {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#274737';
                      }
                    }}
                  >
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '7px',
                      background: '#fef7dc',
                      border: '1px solid #fde68a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#b45309',
                      flexShrink: 0
                    }}>
                      <Sprout size={14} />
                    </div>
                    <span style={{ flex: 1, letterSpacing: '-0.01em' }}>Agri Organic Consultancy</span>
                  </button>

                  {/* Item 3: Farmland Development */}
                  <button
                    onClick={() => handleNavClick('projects')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      border: 'none',
                      background: activeTab === 'projects' ? '#f0fdf4' : 'transparent',
                      color: activeTab === 'projects' ? '#166534' : '#274737',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'all 0.18s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== 'projects') {
                        e.currentTarget.style.background = '#f0fbf4';
                        e.currentTarget.style.color = '#166534';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== 'projects') {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#274737';
                      }
                    }}
                  >
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '7px',
                      background: '#f0fdf4',
                      border: '1px solid #bcead0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#166534',
                      flexShrink: 0
                    }}>
                      <Leaf size={14} />
                    </div>
                    <span style={{ flex: 1, letterSpacing: '-0.01em' }}>Farmland Development</span>
                  </button>

                  {/* Subtle Divider & Quick Link to Overview */}
                  <div style={{ borderTop: '1px solid #edf4f0', margin: '3px 4px 1px', paddingTop: '5px' }}>
                    <button
                      onClick={() => handleNavClick('services')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '5px 8px',
                        borderRadius: '6px',
                        border: 'none',
                        background: 'transparent',
                        color: '#168852',
                        fontSize: '11.5px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f0fbf4'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <span>All 3 Modules Overview</span>
                      <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Projects */}
            <button
              onClick={() => handleNavClick('projects')}
              className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
            >
              Projects
            </button>

            {/* 5. Gallery */}
            <button
              onClick={() => handleNavClick('gallery')}
              className={`nav-link ${activeTab === 'gallery' ? 'active' : ''}`}
            >
              Gallery
            </button>

            {/* 6. Legal Docs */}
            <button
              onClick={() => handleNavClick('legal')}
              className={`nav-link ${activeTab === 'legal' ? 'active' : ''}`}
            >
              Legal Docs
            </button>

            {/* 7. Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            >
              Contact
            </button>

            {/* Call to Action Button */}
            <div style={{ marginLeft: '12px' }}>
              <button
                onClick={onOpenSiteVisit}
                className="btn-amber shimmer-effect"
                style={{ padding: '8px 16px', fontSize: '13px', gap: '6px' }}
              >
                <Calendar size={14} />
                <span>Book Site Tour</span>
              </button>
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            style={{
              background: isScrolled ? 'rgba(255, 255, 255, 0.15)' : '#f0fdf4',
              border: isScrolled ? '1px solid rgba(255, 255, 255, 0.28)' : '1px solid #bbf7d0',
              padding: '8px',
              borderRadius: '8px',
              color: isScrolled ? '#ffffff' : '#166534',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.25s ease'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: isScrolled ? 'rgba(17, 56, 37, 0.98)' : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: isScrolled ? '2px solid #22a360' : '2px solid #bbf7d0',
            padding: '20px 24px 28px',
            boxShadow: '0 20px 40px rgba(22, 66, 47, 0.16)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            transition: 'background 0.3s ease',
            maxHeight: 'calc(100vh - 80px)',
            overflowY: 'auto'
          }}
        >
          <button onClick={() => handleNavClick('home')} className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} style={{ width: '100%', justifyContent: 'flex-start' }}>Home</button>
          <button onClick={() => handleNavClick('about')} className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} style={{ width: '100%', justifyContent: 'flex-start' }}>About</button>

          {/* Mobile Services Box */}
          <div style={{
            background: isScrolled ? 'rgba(255, 255, 255, 0.08)' : '#f4faf6',
            borderRadius: '12px',
            padding: '12px 14px',
            border: isScrolled ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid #dcece1',
            margin: '4px 0'
          }}>
            <div
              onClick={() => handleNavClick('services')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontWeight: 700,
                fontSize: '13.5px',
                color: isScrolled ? '#ffffff' : '#16422f',
                cursor: 'pointer',
                marginBottom: '8px'
              }}
            >
              <span>Our 3 Core Modules</span>
              <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: 600, background: '#eaf8ef', padding: '2px 8px', borderRadius: '100px' }}>
                Explore All
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <button
                onClick={() => handleNavClick('organic-products')}
                className={`nav-link ${activeTab === 'organic-products' ? 'active' : ''}`}
                style={{ width: '100%', justifyContent: 'flex-start', fontSize: '13px', padding: '7px 10px', gap: '8px' }}
              >
                <ShoppingBag size={14} style={{ color: '#16a34a' }} />
                <span>Organic Farm Products (Store)</span>
              </button>
              <button
                onClick={() => handleNavClick('consultancy')}
                className={`nav-link ${activeTab === 'consultancy' ? 'active' : ''}`}
                style={{ width: '100%', justifyContent: 'flex-start', fontSize: '13px', padding: '7px 10px', gap: '8px' }}
              >
                <Sprout size={14} style={{ color: '#d97706' }} />
                <span>Agri Organic Consultancy</span>
              </button>
              <button
                onClick={() => handleNavClick('projects')}
                className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
                style={{ width: '100%', justifyContent: 'flex-start', fontSize: '13px', padding: '7px 10px', gap: '8px' }}
              >
                <Leaf size={14} style={{ color: '#166534' }} />
                <span>Farmland Development</span>
              </button>
            </div>
          </div>

          <button onClick={() => handleNavClick('projects')} className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`} style={{ width: '100%', justifyContent: 'flex-start' }}>Projects</button>
          <button onClick={() => handleNavClick('gallery')} className={`nav-link ${activeTab === 'gallery' ? 'active' : ''}`} style={{ width: '100%', justifyContent: 'flex-start' }}>Gallery</button>
          <button onClick={() => handleNavClick('legal')} className={`nav-link ${activeTab === 'legal' ? 'active' : ''}`} style={{ width: '100%', justifyContent: 'flex-start' }}>Legal Docs</button>
          <button onClick={() => handleNavClick('contact')} className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`} style={{ width: '100%', justifyContent: 'flex-start' }}>Contact</button>

          <div style={{ marginTop: '12px' }}>
            <button onClick={() => { setMobileMenuOpen(false); onOpenSiteVisit(); }} className="btn-amber" style={{ width: '100%' }}>
              <Calendar size={16} /> Book Weekend Farm Tour
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
