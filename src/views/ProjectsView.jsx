import React from 'react';
import {
  Sprout,
  MapPin,
  CheckCircle2,
  Droplets,
  Calendar,
  ArrowRight,
  Sparkles,
  Play,
  ShieldCheck,
  Layers,
  FileText,
  Sun,
  Video,
  MessageSquare,
  Award,
  TrendingUp,
  Leaf,
  Clock,
  Check
} from 'lucide-react';
import { companyInfo, cropsData, kanigiriVenture } from '../data/websiteData';

export const ProjectsView = ({ onSelectCrop, onOpenSiteVisit }) => {
  // 6-Step Land Ownership Roadmap (Modeled after premier agroforestry standards)
  const investmentSteps = [
    {
      step: '01',
      title: 'Soil & Sweet Water Profiling',
      desc: 'Scientific lab testing of 16 soil parameters, organic carbon, and high-yield sweet water borewells in Kanigiri.',
      icon: <Droplets size={20} style={{ color: 'var(--color-primary)' }} />
    },
    {
      step: '02',
      title: '100% Legal Clearances',
      desc: 'Rigorous 30-year Encumbrance Certificate (EC), digital revenue passbook, and clear litigation-free titles.',
      icon: <ShieldCheck size={20} style={{ color: 'var(--color-secondary)' }} />
    },
    {
      step: '03',
      title: 'Direct Registered Sale Deed',
      desc: 'The land is registered directly in your name as an individual Sale Deed at the local Sub-Registrar Office.',
      icon: <FileText size={20} style={{ color: 'var(--color-primary)' }} />
    },
    {
      step: '04',
      title: 'Solar Fencing & 30ft Roads',
      desc: 'Concrete boundary demarcation, 24/7 electrified solar security fence, and all-weather 30ft internal avenue roads.',
      icon: <Sun size={20} style={{ color: 'var(--color-secondary)' }} />
    },
    {
      step: '05',
      title: 'Israeli Drip & Plantations',
      desc: 'Automated pressure-compensating drip network delivering organic Jeevamrutham directly to root zones.',
      icon: <Sprout size={20} style={{ color: 'var(--color-primary)' }} />
    },
    {
      step: '06',
      title: 'Lifelong Care & Harvest Buybacks',
      desc: '20+ years turnkey agronomy supervision, pruning, labor management, APEDA compliance, and guaranteed buybacks.',
      icon: <TrendingUp size={20} style={{ color: 'var(--color-secondary)' }} />
    }
  ];

  const handleWhatsAppCropInquiry = (cropName) => {
    const message = `Hello Sukhibhava Agro Team, I am interested in your Managed Farmland Project in Kanigiri, AP:
🌱 Plantation Focus: ${cropName}
📍 Location: Kanigiri Mandal, Prakasam District

Please share available acre plot sizes, price per acre, and weekend site tour details.`;
    window.open(
      `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div style={{ background: 'var(--color-bg-page)', minHeight: '100vh', paddingBottom: '70px' }}>

      {/* ======================================================================
          1. IMMERSIVE HERO SECTION: Layered Atmospheric Farmland Banner
          ====================================================================== */}
      <section
        style={{
          position: 'relative',
          padding: '64px 0 52px',
          background: 'linear-gradient(135deg, rgba(17, 56, 37, 0.94) 0%, rgba(22, 110, 68, 0.88) 55%, rgba(180, 83, 9, 0.45) 100%), url("/images/luxury-farmland-aerial.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container" style={{ maxWidth: '860px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          {/* Top Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 14px',
              borderRadius: '100px',
              background: 'rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#dcfce7',
              fontSize: '12.5px',
              fontWeight: 600,
              marginBottom: '16px'
            }}
          >
            <MapPin size={13} style={{ color: '#86efac' }} />
            <span>250+ Acre Managed Farmland • Kanigiri Mandal, Prakasam Dist, AP</span>
          </div>

          {/* Slogan & Title */}
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '14px',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Invest in Real Earth. <br />
            <span style={{ color: '#fef08a' }}>Compound Generational Wealth.</span>
          </h1>

          <p
            style={{
              color: '#f0fdf4',
              fontSize: '15px',
              lineHeight: 1.65,
              maxWidth: '680px',
              margin: '0 auto 28px',
              opacity: 0.94
            }}
          >
            "There is no safer or more rewarding investment on earth than fertile earth." High-ROI agroforestry farmlands featuring Macadamia Nuts, Turkish Figs, and Geranium with automated Israeli drip irrigation and complete turnkey care.
          </p>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '12px',
              marginBottom: '32px'
            }}
          >
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', padding: '12px 14px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.18)' }}>
              <strong style={{ fontSize: '20px', color: '#fef08a', display: 'block', fontWeight: 800 }}>250+ Acres</strong>
              <span style={{ fontSize: '11.5px', color: '#dcfce7' }}>Demarcated Red Soil Land</span>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', padding: '12px 14px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.18)' }}>
              <strong style={{ fontSize: '20px', color: '#fef08a', display: 'block', fontWeight: 800 }}>100% Registered</strong>
              <span style={{ fontSize: '11.5px', color: '#dcfce7' }}>Individual Sale Deed & Passbook</span>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', padding: '12px 14px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.18)' }}>
              <strong style={{ fontSize: '20px', color: '#fef08a', display: 'block', fontWeight: 800 }}>3 High-ROI Crops</strong>
              <span style={{ fontSize: '11.5px', color: '#dcfce7' }}>Macadamia, Anjeer & Geranium</span>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', padding: '12px 14px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.18)' }}>
              <strong style={{ fontSize: '20px', color: '#fef08a', display: 'block', fontWeight: 800 }}>20+ Years</strong>
              <span style={{ fontSize: '11.5px', color: '#dcfce7' }}>Turnkey Agronomy Management</span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenSiteVisit}
              className="btn-amber shimmer-effect"
              style={{ padding: '12px 26px', fontSize: '14px', borderRadius: '100px' }}
            >
              <Calendar size={15} />
              <span>Book Free Weekend Farm Tour</span>
            </button>

            <a
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20am%20interested%20in%20your%20Kanigiri%20Managed%20Farmland%20Projects.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                padding: '12px 24px',
                fontSize: '14px',
                borderRadius: '100px',
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.35)'
              }}
            >
              <MessageSquare size={15} style={{ color: '#86efac' }} />
              <span>Talk to Farmland Advisor</span>
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================================
          2. THREE FLAGSHIP COMMERCIAL PLANTATION PORTFOLIOS
          ====================================================================== */}
      <section style={{ padding: '52px 0 44px' }}>
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 36px' }}>
            <div className="badge-pill" style={{ marginBottom: '8px', fontSize: '12px', padding: '3px 12px' }}>
              <Sparkles size={13} style={{ color: 'var(--color-secondary)' }} />
              <span>Flagship Commercial Portfolios</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 34px)',
                color: 'var(--color-heading)',
                marginBottom: '8px',
                fontWeight: 700,
                letterSpacing: '-0.015em'
              }}
            >
              Scientifically Curated High-Yield Crops
            </h2>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
              Engineered to combine quick cash-flow turnaround with 60+ years of compounding royalty wealth, optimized for the fertile red soils of Kanigiri, Andhra Pradesh.
            </p>
          </div>

          {/* 3 Premium Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '24px' }}>
            {cropsData.map((crop) => (
              <div
                key={crop.id}
                className="interactive-card"
                style={{
                  background: 'var(--color-bg-surface)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1.5px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div>
                  {/* Photo Header */}
                  <div style={{ position: 'relative', height: '190px', overflow: 'hidden', background: 'var(--color-bg-soft)' }} className="img-zoom-wrapper">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />

                    {/* Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        background: 'rgba(255, 255, 255, 0.94)',
                        backdropFilter: 'blur(6px)',
                        padding: '3px 10px',
                        borderRadius: '100px',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--color-primary-dark)',
                        border: '1px solid var(--color-primary-border)',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                      }}
                    >
                      {crop.badge}
                    </div>

                    <span
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        background: 'rgba(22, 66, 47, 0.88)',
                        backdropFilter: 'blur(6px)',
                        color: '#ffffff',
                        fontSize: '10.5px',
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: '6px'
                      }}
                    >
                      {crop.scientificName}
                    </span>
                  </div>

                  {/* Content Area */}
                  <div style={{ padding: '16px 18px 12px' }}>
                    <h3 style={{ fontSize: '18px', color: 'var(--color-heading)', marginBottom: '5px', fontWeight: 700 }}>
                      {crop.name}
                    </h3>

                    <p style={{ color: 'var(--color-text-muted)', fontSize: '12.5px', lineHeight: 1.5, marginBottom: '14px' }}>
                      {crop.tagline}
                    </p>

                    {/* ROI Highlight Card */}
                    <div
                      style={{
                        background: 'var(--color-primary-soft)',
                        border: '1px solid var(--color-primary-border)',
                        borderRadius: '10px',
                        padding: '10px 12px',
                        marginBottom: '14px'
                      }}
                    >
                      <span style={{ fontSize: '10.5px', color: 'var(--color-primary-dark)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '2px' }}>
                        Commercial Return Projection
                      </span>
                      <strong style={{ fontSize: '12.5px', color: 'var(--color-primary)', lineHeight: 1.35, display: 'block' }}>
                        {crop.roiHighlight}
                      </strong>
                    </div>

                    {/* Key Technical Parameters Table */}
                    <div
                      style={{
                        background: 'var(--color-bg-soft)',
                        borderRadius: '10px',
                        border: '1px solid var(--color-border)',
                        padding: '10px 12px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '7px',
                        fontSize: '11.5px',
                        marginBottom: '14px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: 'var(--color-text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={12} style={{ color: 'var(--color-primary)' }} /> Gestation:
                        </span>
                        <strong style={{ color: 'var(--color-heading)' }}>{crop.gestation.split(';')[0]}</strong>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: 'var(--color-text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <Award size={12} style={{ color: 'var(--color-secondary)' }} /> Lifespan:
                        </span>
                        <strong style={{ color: 'var(--color-heading)' }}>{crop.lifespan.split(' ')[0]} {crop.lifespan.split(' ')[1]}</strong>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: 'var(--color-text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <Droplets size={12} style={{ color: 'var(--color-primary)' }} /> Irrigation:
                        </span>
                        <strong style={{ color: 'var(--color-heading)' }}>Automated Drip</strong>
                      </div>
                    </div>

                    {/* Top 2 Key Advantages */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {crop.highlights.slice(0, 2).map((h, hIdx) => (
                        <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '11.5px', color: 'var(--color-text-main)' }}>
                          <Check size={12} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2.5px' }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Card Actions */}
                <div style={{ padding: '12px 18px 16px', borderTop: '1px solid var(--color-border-subtle)', display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => onSelectCrop(crop)}
                    className="btn-soft"
                    style={{ flex: 1, padding: '8px 12px', fontSize: '12px' }}
                  >
                    <span>View Blueprint</span>
                    <ArrowRight size={12} />
                  </button>

                  <button
                    onClick={() => handleWhatsAppCropInquiry(crop.name)}
                    className="btn-amber"
                    style={{ padding: '8px 12px', fontSize: '12px', gap: '5px' }}
                  >
                    <MessageSquare size={13} />
                    <span>Inquire</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================================
          3. THE 6-STEP LAND OWNERSHIP & DEVELOPMENT ROADMAP (Sai Properties & Navya Sai Standard)
          ====================================================================== */}
      <section
        style={{
          padding: '52px 0 48px',
          background: 'linear-gradient(180deg, var(--color-bg-soft) 0%, var(--color-bg-page) 100%)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 36px' }}>
            <div className="badge-pill" style={{ marginBottom: '8px', fontSize: '12px', padding: '3px 12px' }}>
              <Layers size={13} style={{ color: 'var(--color-primary)' }} />
              <span>Transparent 6-Step Execution</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 34px)',
                color: 'var(--color-heading)',
                marginBottom: '8px',
                fontWeight: 700,
                letterSpacing: '-0.015em'
              }}
            >
              How Farmland Ownership Works
            </h2>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
              We eliminate all agricultural complexities for investors. From initial soil testing to lifetime harvest buybacks, your asset is managed with corporate precision.
            </p>
          </div>

          {/* 6 Connected Steps Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            {investmentSteps.map((s, idx) => (
              <div
                key={idx}
                className="interactive-card"
                style={{
                  background: 'var(--color-bg-surface)',
                  borderRadius: '14px',
                  padding: '20px 18px',
                  border: '1.5px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative'
                }}
              >
                {/* Step Pill */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'var(--color-primary-soft)',
                      border: '1px solid var(--color-primary-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {s.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: 'var(--color-primary-dark)',
                      background: 'var(--color-primary-soft)',
                      padding: '2px 8px',
                      borderRadius: '100px',
                      border: '1px solid var(--color-primary-border)'
                    }}
                  >
                    STAGE {s.step}
                  </span>
                </div>

                <h3 style={{ fontSize: '15px', color: 'var(--color-heading)', marginBottom: '6px', fontWeight: 700, lineHeight: 1.3 }}>
                  {s.title}
                </h3>

                <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================================
          4. INFRASTRUCTURE & AMENITIES GRID (Real Site Features)
          ====================================================================== */}
      <section style={{ padding: '52px 0 44px' }}>
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 36px' }}>
            <div className="badge-pill" style={{ marginBottom: '8px', fontSize: '12px', padding: '3px 12px' }}>
              <ShieldCheck size={13} style={{ color: 'var(--color-primary)' }} />
              <span>World-Class Farm Amenities</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 34px)',
                color: 'var(--color-heading)',
                marginBottom: '8px',
                fontWeight: 700,
                letterSpacing: '-0.015em'
              }}
            >
              Enterprise Farmland Infrastructure
            </h2>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
              Every single acre is supported by heavy-duty infrastructure ensuring perennial water access, round-the-clock physical security, and all-weather road transit.
            </p>
          </div>

          {/* 6 Features */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
            {kanigiriVenture.features.map((feat, i) => (
              <div
                key={i}
                className="interactive-card"
                style={{
                  background: 'var(--color-bg-surface)',
                  padding: '18px 20px',
                  borderRadius: '14px',
                  border: '1.5px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'var(--color-primary-soft)',
                      border: '1px solid var(--color-primary-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary)',
                      flexShrink: 0
                    }}
                  >
                    <CheckCircle2 size={16} />
                  </div>
                  <strong style={{ color: 'var(--color-heading)', fontSize: '14.5px', fontWeight: 700 }}>
                    {feat.title}
                  </strong>
                </div>

                <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================================
          5. SITE DEVELOPMENT VIDEO: Premium Cinema Lounge
          ====================================================================== */}
      <section
        style={{
          padding: '52px 0',
          background: 'linear-gradient(180deg, var(--color-bg-soft) 0%, var(--color-bg-page) 100%)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 28px' }}>
            <div className="badge-pill" style={{ marginBottom: '8px', fontSize: '12px', padding: '3px 12px' }}>
              <Play size={12} style={{ color: 'var(--color-primary)' }} />
              <span>Ground Verification Video</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 34px)',
                color: 'var(--color-heading)',
                marginBottom: '8px',
                fontWeight: 700,
                letterSpacing: '-0.015em'
              }}
            >
              Watch Kanigiri Venture Site Development
            </h2>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
              Real on-ground video documentation highlighting our fertile red soil topography, sweet groundwater reservoirs, and ongoing agricultural infrastructure.
            </p>
          </div>

          {/* Cinema Frame */}
          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '2px solid var(--color-bg-surface)',
              background: '#000000'
            }}
          >
            <video
              src={kanigiriVenture.videoUrl}
              controls
              playsInline
              style={{
                width: '100%',
                maxHeight: '420px',
                display: 'block'
              }}
            />
          </div>

        </div>
      </section>

      {/* ======================================================================
          6. WEEKEND VIP FARM TOUR BOOKING LOUNGE
          ====================================================================== */}
      <section style={{ padding: '52px 0 20px' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)',
              color: '#ffffff',
              borderRadius: '20px',
              padding: '38px 28px',
              maxWidth: '820px',
              margin: '0 auto',
              boxShadow: 'var(--shadow-md)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Ambient Background Accent */}
            <div
              style={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            <div className="badge-pill" style={{ marginBottom: '12px', fontSize: '12px', padding: '3px 12px', background: 'rgba(255,255,255,0.15)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.25)' }}>
              <Calendar size={13} style={{ color: '#fef08a' }} />
              <span>Complimentary AC Vehicle Site Tour</span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(22px, 3.2vw, 32px)',
                color: '#ffffff',
                marginBottom: '10px',
                fontWeight: 700,
                letterSpacing: '-0.015em'
              }}
            >
              Experience Kanigiri With Your Own Eyes
            </h3>

            <p style={{ color: '#dcfce7', fontSize: '14px', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
              Join our regular weekend farm inspection with complimentary air-conditioned vehicle pickup from Vijayawada, Guntur, and Ongole. Inspect the soil, drip lines, and 100% legal documents in person.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenSiteVisit}
                className="btn-amber shimmer-effect"
                style={{ padding: '12px 28px', fontSize: '14px', borderRadius: '100px' }}
              >
                <Calendar size={15} />
                <span>Book Guided Weekend Farm Visit</span>
              </button>

              <a
                href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20would%20like%20to%20know%20the%20pickup%20points%20for%20the%20Weekend%20Farm%20Tour.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{
                  padding: '12px 22px',
                  fontSize: '14px',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  borderColor: 'rgba(255, 255, 255, 0.35)'
                }}
              >
                <MessageSquare size={15} style={{ color: '#86efac' }} />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
