import React from 'react';
import {
  Sprout,
  Target,
  Compass,
  Award,
  Leaf,
  Users,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Camera,
  TrendingUp,
  UserCheck,
  Droplets,
  Sun,
  FileCheck,
  Building2
} from 'lucide-react';
import { aboutData, companyInfo, leadershipData } from '../data/websiteData';

export const AboutView = ({ onOpenSiteVisit, setActiveTab }) => {
  const md = leadershipData[0];
  const marketingExec = leadershipData[1];

  const coreValues = [
    {
      title: '100% Freehold Ownership',
      desc: 'Direct spot registration and individual mutation at the local Sub-Registrar Office with 30-year clear legal titles.',
      icon: <FileCheck size={20} style={{ color: 'var(--color-primary)' }} />
    },
    {
      title: 'Precision Israeli Agronomy',
      desc: 'Automated drip irrigation and Jeevamrutham root-zone delivery designed for optimal yield and water conservation.',
      icon: <Droplets size={20} style={{ color: 'var(--color-primary)' }} />
    },
    {
      title: 'Organic Soil Health First',
      desc: 'Zero harmful chemical pesticides. Deep bio-conversion with green manure, organic carbon enrichment, and biochar.',
      icon: <Sprout size={20} style={{ color: 'var(--color-secondary)' }} />
    },
    {
      title: 'Lifetime Asset Security',
      desc: '24/7 electrified solar security fence, gated entrance, CCTV surveillance, and turnkey post-harvest buyback arrangements.',
      icon: <ShieldCheck size={20} style={{ color: 'var(--color-secondary)' }} />
    }
  ];

  return (
    <div style={{ background: 'var(--color-bg-page)', minHeight: '100vh', paddingBottom: '70px' }}>

      {/* ======================================================================
          1. IMMERSIVE HERO BANNER: Corporate Heritage & Farmland Leadership
          ====================================================================== */}
      <section
        style={{
          position: 'relative',
          padding: '64px 0 52px',
          background: 'linear-gradient(135deg, rgba(14, 46, 31, 0.94) 0%, rgba(20, 83, 45, 0.88) 55%, rgba(180, 83, 9, 0.40) 100%), url("/images/turnkey-plantation-setup.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          textAlign: 'center',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container" style={{ maxWidth: '860px', position: 'relative', zIndex: 2 }}>
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
              color: '#dcfce7',
              fontSize: '12.5px',
              fontWeight: 600,
              marginBottom: '16px'
            }}
          >
            <Leaf size={13} style={{ color: '#86efac' }} />
            <span>20+ Years Field Agricultural Excellence • Kanigiri Mandal, AP</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(30px, 4vw, 46px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.18,
              marginBottom: '14px',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-heading)'
            }}
          >
            About Sukhibhava Agro Projects
          </h1>

          <p
            style={{
              color: '#f0fdf4',
              fontSize: '15.5px',
              lineHeight: 1.68,
              maxWidth: '700px',
              margin: '0 auto 28px',
              opacity: 0.95
            }}
          >
            Pioneering managed agroforestry real estate in Andhra Pradesh. We combine two decades of disciplined organic agronomy with high-value commercial crops to generate secure, compounding, intergenerational wealth for our investors.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenSiteVisit}
              className="btn-amber shimmer-effect"
              style={{ padding: '12px 26px', fontSize: '14px', borderRadius: '100px' }}
            >
              <Calendar size={16} />
              <span>Book Free Weekend Farm Tour</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 22px',
                fontSize: '14px',
                borderRadius: '100px',
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(10px)',
                color: '#ffffff',
                border: '1.5px solid rgba(255, 255, 255, 0.4)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)';
                e.currentTarget.style.borderColor = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              }}
            >
              <span>Explore Kanigiri Venture</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================================
          2. CORE LEGACY & HIGH-TECH FARM MONITORING
          ====================================================================== */}
      <section style={{ padding: '64px 0 52px', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>

            {/* Left: CCTV Farm Monitoring Visual */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '22px',
                  overflow: 'hidden',
                  boxShadow: '0 18px 40px -12px rgba(22, 66, 47, 0.16)',
                  border: '1.5px solid var(--color-primary-border)',
                  background: '#ffffff'
                }}
              >
                <div className="img-zoom-wrapper" style={{ position: 'relative' }}>
                  <img
                    src={aboutData.cctvImage}
                    alt="Sukhibhava High-Tech Farm Monitoring & CCTV Surveillance"
                    style={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '4 / 3',
                      maxHeight: '400px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '14px',
                      left: '14px',
                      background: 'rgba(22, 66, 47, 0.92)',
                      backdropFilter: 'blur(8px)',
                      padding: '6px 14px',
                      borderRadius: '100px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      border: '1px solid rgba(253, 230, 138, 0.4)'
                    }}
                  >
                    <Camera size={14} style={{ color: '#86efac' }} />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#fef08a' }}>
                      24/7 CCTV &amp; Gated Security
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Authentic Company Story */}
            <div>
              <div className="badge-pill" style={{ marginBottom: '10px', fontSize: '12px', padding: '4px 12px' }}>
                <Sparkles size={13} style={{ color: 'var(--color-primary)' }} />
                <span>Who We Are</span>
              </div>

              <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', color: 'var(--color-primary-dark)', marginBottom: '14px', fontWeight: 800 }}>
                Transforming Fertile Land into Generational Wealth
              </h2>

              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: 1.68, marginBottom: '14px' }}>
                {aboutData.companyHistory}
              </p>

              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: 1.68, marginBottom: '22px' }}>
                {aboutData.specialization}
              </p>

              {/* 2 Pillars Summary */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '26px' }}>
                <div style={{ background: 'var(--color-bg-soft)', padding: '14px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                  <strong style={{ color: 'var(--color-primary)', fontSize: '13.5px', display: 'block', marginBottom: '4px' }}>
                    Transparent Ownership
                  </strong>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                    100% individual spot registration &amp; mutation
                  </span>
                </div>

                <div style={{ background: 'var(--color-bg-soft)', padding: '14px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                  <strong style={{ color: 'var(--color-primary)', fontSize: '13.5px', display: 'block', marginBottom: '4px' }}>
                    Scientific Cultivation
                  </strong>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                    Macadamia, Anjeer &amp; Geranium with Israeli drip
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={onOpenSiteVisit}
                  className="btn-amber shimmer-effect"
                  style={{ padding: '11px 24px', fontSize: '14px', borderRadius: '100px' }}
                >
                  <Calendar size={15} />
                  <span>Schedule Site Inspection</span>
                </button>

                <button
                  onClick={() => setActiveTab('projects')}
                  className="btn-outline"
                  style={{ padding: '11px 22px', fontSize: '14px', borderRadius: '100px' }}
                >
                  <span>View Our Projects</span>
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          3. VISION & MISSION: Strategic Principles
          ====================================================================== */}
      <section style={{ padding: '56px 0', background: 'var(--color-bg-soft)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 34px' }}>
            <div className="badge-pill" style={{ marginBottom: '8px', fontSize: '12px', padding: '4px 14px' }}>
              <Compass size={13} style={{ color: 'var(--color-primary)' }} />
              <span>Guiding Principles</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 34px)', color: 'var(--color-primary-dark)', marginBottom: '8px', fontWeight: 800 }}>
              Our Vision &amp; Mission
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', margin: 0 }}>
              Building an enduring institution dedicated to agricultural excellence, soil stewardship, and investor prosperity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>

            {/* VISION CARD */}
            <div
              className="interactive-card"
              style={{
                background: '#ffffff',
                padding: '32px 26px',
                borderRadius: '20px',
                border: '1.5px solid var(--color-primary-border)',
                boxShadow: '0 8px 24px -6px rgba(22, 66, 47, 0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--color-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  <Target size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Strategic Aspiration</span>
                  <h3 style={{ fontSize: '20px', color: 'var(--color-primary-dark)', margin: '2px 0 0', fontWeight: 800 }}>OUR VISION</h3>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {aboutData.visionPoints.map((pt, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: '#16a34a', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', color: 'var(--color-text-main)', lineHeight: 1.55 }}>
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* MISSION CARD */}
            <div
              className="interactive-card"
              style={{
                background: '#ffffff',
                padding: '32px 26px',
                borderRadius: '20px',
                border: '1.5px solid var(--color-secondary-border)',
                boxShadow: '0 8px 24px -6px rgba(217, 119, 6, 0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--color-secondary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
                  <Compass size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--color-secondary-hover)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Daily Execution</span>
                  <h3 style={{ fontSize: '20px', color: 'var(--color-primary-dark)', margin: '2px 0 0', fontWeight: 800 }}>OUR MISSION</h3>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {aboutData.missionPoints.map((pt, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', color: 'var(--color-text-main)', lineHeight: 1.55 }}>
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          4. CORE GOVERNANCE & VALUE PILLARS
          ====================================================================== */}
      <section style={{ padding: '60px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 36px' }}>
            <div className="badge-pill" style={{ marginBottom: '8px', fontSize: '12px', padding: '4px 14px' }}>
              <ShieldCheck size={13} style={{ color: 'var(--color-primary)' }} />
              <span>Institutional Commitments</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 34px)', color: 'var(--color-primary-dark)', marginBottom: '10px', fontWeight: 800 }}>
              The Sukhibhava Quality Standards
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', margin: 0, lineHeight: 1.6 }}>
              Every acre we develop adheres to strict scientific protocols and iron-clad legal security.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '22px' }}>
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="interactive-card"
                style={{
                  background: 'var(--color-bg-soft)',
                  padding: '26px 22px',
                  borderRadius: '18px',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: '#ffffff',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '14px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                    }}
                  >
                    {val.icon}
                  </div>

                  <h3 style={{ fontSize: '18px', color: 'var(--color-primary-dark)', fontWeight: 700, marginBottom: '8px' }}>
                    {val.title}
                  </h3>

                  <p style={{ color: 'var(--color-text-muted)', fontSize: '13.5px', lineHeight: 1.55, margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          5. EXECUTIVE LEADERSHIP & ADVISORY PROFILES
          ====================================================================== */}
      <section id="profiles" style={{ padding: '60px 0', background: 'var(--color-bg-soft)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 38px' }}>
            <div className="badge-pill" style={{ marginBottom: '10px', fontSize: '12px', padding: '4px 14px' }}>
              <Users size={13} style={{ color: 'var(--color-primary)' }} />
              <span>Executive Profiles</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 34px)', color: 'var(--color-primary-dark)', marginBottom: '8px', fontWeight: 800 }}>
              Leadership &amp; Advisory Team
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', margin: 0, lineHeight: 1.6 }}>
              Senior agricultural board and dedicated investor advisory leaders committed to your long-term farmland success.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px', maxWidth: '1040px', margin: '0 auto' }}>

            {/* Profile 1: Managing Director */}
            <div
              className="interactive-card"
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1.5px solid var(--color-primary-border)',
                padding: '30px 26px',
                boxShadow: '0 8px 24px -6px rgba(22, 66, 47, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Header with Avatar & Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                  <div
                    style={{
                      width: '76px',
                      height: '76px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: '3px solid var(--color-primary)',
                      boxShadow: '0 4px 14px rgba(22, 101, 52, 0.2)',
                      background: '#f0fdf4'
                    }}
                  >
                    <img
                      src={md.image}
                      alt="Managing Director"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        background: 'var(--color-primary-subtle)',
                        border: '1px solid var(--color-primary-border)',
                        borderRadius: '100px',
                        padding: '3px 10px',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--color-primary-dark)',
                        marginBottom: '4px'
                      }}
                    >
                      <UserCheck size={11} style={{ color: '#16a34a' }} />
                      <span>Executive Board</span>
                    </div>
                    <h3 style={{ fontSize: '20px', color: 'var(--color-primary-dark)', fontWeight: 800, margin: '2px 0 3px' }}>
                      Managing Director
                    </h3>
                    <span style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600, display: 'block' }}>
                      Farm Operations &amp; Management
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'var(--color-bg-soft)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '10px',
                    padding: '8px 14px',
                    marginBottom: '16px'
                  }}
                >
                  <Award size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                    20+ Years in Agriculture &amp; Farmland Development
                  </span>
                </div>

                {/* Description */}
                <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: 1.62, marginBottom: '18px' }}>
                  {md.description}
                </p>

                {/* Commitments Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '22px' }}>
                  <div style={{ background: 'var(--color-bg-soft)', padding: '12px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary-dark)', fontWeight: 700, fontSize: '12.5px', marginBottom: '3px' }}>
                      <ShieldCheck size={14} style={{ color: '#16a34a' }} />
                      <span>100% Transparent</span>
                    </div>
                    <span style={{ fontSize: '11.5px', color: 'var(--color-text-subtle)', display: 'block', lineHeight: 1.4 }}>
                      Direct mutation &amp; spot registration
                    </span>
                  </div>

                  <div style={{ background: 'var(--color-bg-soft)', padding: '12px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary-dark)', fontWeight: 700, fontSize: '12.5px', marginBottom: '3px' }}>
                      <Sprout size={14} style={{ color: '#16a34a' }} />
                      <span>Scientific Farming</span>
                    </div>
                    <span style={{ fontSize: '11.5px', color: 'var(--color-text-subtle)', display: 'block', lineHeight: 1.4 }}>
                      Israeli drip &amp; high-value crops
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                <button
                  onClick={onOpenSiteVisit}
                  className="btn-amber shimmer-effect"
                  style={{ flex: 1, padding: '10px 16px', fontSize: '13.5px', borderRadius: '100px', justifyContent: 'center' }}
                >
                  <Calendar size={14} />
                  <span>Schedule Farm Tour</span>
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="btn-outline"
                  style={{ padding: '10px 18px', fontSize: '13.5px', borderRadius: '100px' }}
                >
                  <span>Contact</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* Profile 2: Kanka Prasad */}
            <div
              className="interactive-card"
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1.5px solid var(--color-secondary-border)',
                padding: '30px 26px',
                boxShadow: '0 8px 24px -6px rgba(217, 119, 6, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Header with Avatar & Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                  <div
                    style={{
                      width: '76px',
                      height: '76px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: '3px solid var(--color-secondary)',
                      boxShadow: '0 4px 14px rgba(217, 119, 6, 0.2)',
                      background: '#fef7dc'
                    }}
                  >
                    <img
                      src={marketingExec.image}
                      alt={marketingExec.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        background: 'var(--color-secondary-soft)',
                        border: '1px solid var(--color-secondary-border)',
                        borderRadius: '100px',
                        padding: '3px 10px',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--color-secondary-hover)',
                        marginBottom: '4px'
                      }}
                    >
                      <TrendingUp size={11} style={{ color: '#d97706' }} />
                      <span>Sales &amp; Advisory Lead</span>
                    </div>
                    <h3 style={{ fontSize: '20px', color: 'var(--color-primary-dark)', fontWeight: 800, margin: '2px 0 3px' }}>
                      {marketingExec.name}
                    </h3>
                    <span style={{ fontSize: '13px', color: 'var(--color-secondary)', fontWeight: 600, display: 'block' }}>
                      Sales Executive &amp; Consultation
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'var(--color-secondary-soft)',
                    border: '1px solid var(--color-secondary-border)',
                    borderRadius: '10px',
                    padding: '8px 14px',
                    marginBottom: '16px'
                  }}
                >
                  <Sparkles size={15} style={{ color: '#d97706', flexShrink: 0 }} />
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-secondary-active)' }}>
                    Dedicated Investor Advisory Specialist
                  </span>
                </div>

                {/* Description */}
                <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: 1.62, marginBottom: '18px' }}>
                  {marketingExec.description}
                </p>

                {/* Direct Contact Channels */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px', marginBottom: '22px' }}>
                  <a
                    href={`tel:${marketingExec.phone}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: 'var(--color-bg-soft)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      textDecoration: 'none'
                    }}
                  >
                    <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'var(--color-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
                      <Phone size={13} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '11px', color: 'var(--color-text-subtle)' }}>Direct Call:</span>
                      <strong style={{ fontSize: '13px', color: 'var(--color-primary-dark)', fontWeight: 700 }}>{marketingExec.phone}</strong>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Kanka%20Prasad,%20I%20am%20interested%20in%20Sukhibhava%20farmland%20investment.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: 'var(--color-bg-soft)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      textDecoration: 'none'
                    }}
                  >
                    <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'var(--color-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
                      <MessageSquare size={13} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '11px', color: 'var(--color-text-subtle)' }}>WhatsApp:</span>
                      <strong style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600 }}>Chat with Kanka Prasad</strong>
                    </div>
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                <a
                  href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Kanka%20Prasad,%20I%20would%20like%20to%20book%20a%20site%20visit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber shimmer-effect"
                  style={{ flex: 1, padding: '10px 16px', fontSize: '13.5px', borderRadius: '100px', justifyContent: 'center', textDecoration: 'none' }}
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp Chat</span>
                </a>
                <button
                  onClick={onOpenSiteVisit}
                  className="btn-outline"
                  style={{ padding: '10px 18px', fontSize: '13.5px', borderRadius: '100px' }}
                >
                  <Calendar size={13} />
                  <span>Book Visit</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
