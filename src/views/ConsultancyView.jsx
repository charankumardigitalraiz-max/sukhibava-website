import React, { useState } from 'react';
import {
  Sprout,
  Leaf,
  CheckCircle2,
  Award,
  Phone,
  ArrowRight,
  Sparkles,
  Calendar,
  Send,
  MessageSquare,
  Droplets,
  TrendingUp,
  FlaskConical,
  Check
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export const ConsultancyView = ({ setActiveTab, onOpenSiteVisit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    acres: '',
    helpType: 'Commercial Crop Planning'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }

    const message = `Hello Sukhibhava Agronomy Team, I would like to consult regarding my farmland:
Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location || 'Not Specified'}
Land Area: ${formData.acres || 'Not Specified'} Acres
Guidance Required: ${formData.helpType}

Please guide me on organic conversion, crop selection, and setup.`;

    window.open(
      `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
    setIsSubmitted(true);
  };

  // 4 Compact, Professional Pillars with Fresh Dedicated Images (Zero Telugu Text)
  const consultancyPillars = [
    {
      id: 'soil',
      title: 'Soil Testing & Bio-Conversion',
      category: 'Stage 01: Soil Preparation',
      summary: 'Scientific soil lab profiling and 100% chemical-free organic conversion.',
      highlights: [
        { label: 'Lab Profiling', desc: 'Soil pH, organic carbon, NPK & sweet water TDS' },
        { label: 'Bio Protocol', desc: 'Jeevamrutham, biochar & green manure enrichment' }
      ],
      points: [
        'Complete lab soil and sweet water profiling',
        'Traditional Jeevamrutham and biochar protocol'
      ],
      image: '/images/soil-testing-organic.jpg',
      icon: <FlaskConical size={15} style={{ color: '#166534' }} />
    },
    {
      id: 'crops',
      title: 'High-Value Commercial Crop Planning',
      category: 'Stage 02: Crop Blueprint',
      summary: 'Data-driven crop layouts engineered for multi-tiered commercial yield.',
      highlights: [
        { label: 'High-Yield Crops', desc: 'Turkish Figs (Anjeer), Macadamia & Geranium' },
        { label: 'Orchard Design', desc: 'Spacing layouts & certified disease-free saplings' }
      ],
      points: [
        'Orchard spacing and intercropping designs',
        'Certified disease-free mother sapling procurement'
      ],
      image: '/images/Fresh-and-ripe-figs-showcase.png',
      icon: <Leaf size={15} style={{ color: '#166534' }} />
    },
    {
      id: 'irrigation',
      title: 'Precision Drip & Water Automation',
      category: 'Stage 03: Smart Irrigation',
      summary: 'Israeli gravity drip technology delivering liquid bio-nutrients to root zones.',
      highlights: [
        { label: 'Smart Venturi', desc: 'Zero-clog filtration for organic bio-nutrients' },
        { label: 'Water Savings', desc: 'Up to 60% water conservation for dryland acreage' }
      ],
      points: [
        'Zero-clog filtration for organic bio-nutrients',
        'Up to 60% water savings for borewells and drylands'
      ],
      image: '/images/precision-drip-system.jpg',
      icon: <Droplets size={15} style={{ color: '#166534' }} />
    },
    {
      id: 'turnkey',
      title: 'Turnkey Farm Setup & Market Buybacks',
      category: 'Stage 04: Harvest & Sales',
      summary: 'End-to-end estate security, professional labor management, and assured market sales.',
      highlights: [
        { label: 'Infrastructure', desc: 'Solar perimeter fencing & worker SOP guidelines' },
        { label: 'Market Linkage', desc: 'APEDA organic certification & harvest buybacks' }
      ],
      points: [
        'Solar fencing and worker SOP guidelines',
        'Guaranteed institutional buyback linkages'
      ],
      image: '/images/turnkey-plantation-setup.jpg',
      icon: <TrendingUp size={15} style={{ color: '#166534' }} />
    }
  ];

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', paddingBottom: '60px' }}>

      {/* ======================================================================
          1. HERO SECTION: Layered Atmospheric Farmland Banner
          ====================================================================== */}
      <section
        style={{
          position: 'relative',
          padding: '60px 0 48px',
          background: 'linear-gradient(135deg, rgba(14, 46, 31, 0.94) 0%, rgba(20, 83, 45, 0.88) 55%, rgba(180, 83, 9, 0.40) 100%), url("/images/precision-drip-system.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'center'
            }}
          >
            {/* Left: Concise English Copy */}
            <div>
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
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}
              >
                <Award size={13} style={{ color: '#fde68a' }} />
                <span>20+ Years Senior Field Agronomy Guidance</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(28px, 3.8vw, 42px)',
                  color: '#ffffff',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: '14px',
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Organic Farm Guidance &amp; Agri Consultancy
              </h1>

              <p style={{ color: '#f0fdf4', fontSize: '15px', lineHeight: 1.65, marginBottom: '22px', opacity: 0.95 }}>
                We guide progressive farmers, doctors, NRI landowners, and institutions in transforming land into high-yielding, profitable organic orchards with Israeli drip fertigation and assured market buybacks.
              </p>

              {/* 3 Quick Benefit Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#dcfce7', fontWeight: 600 }}>
                  <CheckCircle2 size={16} style={{ color: '#86efac', flexShrink: 0 }} />
                  <span>Custom soil testing &amp; 1-season Jeevamrutham bio-conversion</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#dcfce7', fontWeight: 600 }}>
                  <CheckCircle2 size={16} style={{ color: '#86efac', flexShrink: 0 }} />
                  <span>Commercial crop blueprints: Macadamia Nuts, Figs &amp; Geranium</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#dcfce7', fontWeight: 600 }}>
                  <CheckCircle2 size={16} style={{ color: '#86efac', flexShrink: 0 }} />
                  <span>Precision drip automation, solar fencing &amp; buyback tie-ups</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20would%20like%20to%20consult%20regarding%20my%20farmland.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber shimmer-effect"
                  style={{ padding: '11px 22px', fontSize: '13.5px', borderRadius: '100px' }}
                >
                  <MessageSquare size={14} />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${companyInfo.phone}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '11px 20px',
                    fontSize: '13.5px',
                    borderRadius: '100px',
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(10px)',
                    color: '#ffffff',
                    border: '1.5px solid rgba(255, 255, 255, 0.4)',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <Phone size={14} style={{ color: '#86efac' }} />
                  <span>Call {companyInfo.phone}</span>
                </a>
              </div>
            </div>

            {/* Right: Fresh Dedicated Agronomist Image */}
            <div>
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 14px 34px -8px rgba(22, 66, 47, 0.14)',
                  border: '1.5px solid #dcece1',
                  position: 'relative',
                  height: '330px'
                }}
              >
                <img
                  src="/images/agri-consultancy-expert.jpg"
                  alt="Agricultural Consultant in Field"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />

                {/* Floating Experience Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '14px',
                    right: '14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    border: '1px solid var(--color-primary-border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'var(--color-primary-subtle)',
                      border: '1px solid var(--color-primary-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary)',
                      flexShrink: 0
                    }}
                  >
                    <Sprout size={18} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '13.5px', color: 'var(--color-heading)', display: 'block', lineHeight: 1.25 }}>
                      250+ Acres Managed Experience
                    </strong>
                    <span style={{ fontSize: '11.5px', color: 'var(--color-text-muted)' }}>
                      Trusted guidance for 450+ farmers and landowners
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          2. COMPACT 4-PILLAR CARDS (Clean Photos + Refined English Typography)
          ====================================================================== */}
      <div className="container" style={{ marginTop: '40px' }}>

        <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 30px' }}>
          <div className="badge-pill" style={{ marginBottom: '6px', fontSize: '11.5px', padding: '3px 11px' }}>
            <Sparkles size={11} style={{ color: '#16a34a' }} />
            <span>Structured 4-Stage Support</span>
          </div>

          <h2 style={{ fontSize: 'clamp(22px, 2.6vw, 28px)', color: '#16422f', fontWeight: 800, margin: '0 0 6px' }}>
            What We Guide You Through
          </h2>

          <p style={{ color: '#5b7367', fontSize: '13.5px', margin: 0 }}>
            Proven organic methodology to develop profitable, low-risk commercial plantations.
          </p>
        </div>

        {/* Compact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '44px'
          }}
        >
          {consultancyPillars.map((p) => (
            <div
              key={p.id}
              className="interactive-card"
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                border: '1.5px solid #dcece1',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 6px 18px -6px rgba(22, 66, 47, 0.05)'
              }}
            >
              <div>
                {/* Compact Photo Header */}
                <div style={{ position: 'relative', height: '145px', overflow: 'hidden' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(255, 255, 255, 0.94)',
                      backdropFilter: 'blur(6px)',
                      color: 'var(--color-primary-dark)',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      padding: '2.5px 9px',
                      borderRadius: '100px',
                      border: '1px solid var(--color-primary-border)'
                    }}
                  >
                    {p.category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '16px 16px 14px' }}>
                  {/* Header: Stage Icon + Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '8px' }}>
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '8px',
                        background: 'var(--color-primary-soft)',
                        border: '1px solid var(--color-primary-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {p.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: '14.5px',
                        color: 'var(--color-heading)',
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: 1.3
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>

                  {/* Concise Summary */}
                  <p
                    style={{
                      fontSize: '12.5px',
                      color: 'var(--color-text-main)',
                      lineHeight: 1.5,
                      margin: '0 0 12px'
                    }}
                  >
                    {p.summary}
                  </p>

                  {/* Key Deliverables Micro-Panel */}
                  <div
                    style={{
                      background: 'var(--color-bg-soft)',
                      borderRadius: '10px',
                      border: '1px solid var(--color-border)',
                      padding: '10px 11px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '7px'
                    }}
                  >
                    {(p.highlights || p.points).map((item, idx) => {
                      if (typeof item === 'object' && item.label) {
                        return (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '7px'
                            }}
                          >
                            <CheckCircle2
                              size={13}
                              style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2.5px' }}
                            />
                            <div style={{ fontSize: '11.5px', color: 'var(--color-text-main)', lineHeight: 1.4 }}>
                              <span style={{ fontWeight: 700, color: 'var(--color-heading)' }}>{item.label}: </span>
                              <span>{item.desc}</span>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '7px'
                          }}
                        >
                          <CheckCircle2
                            size={13}
                            style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2.5px' }}
                          />
                          <span style={{ fontSize: '11.5px', color: 'var(--color-text-main)', lineHeight: 1.4 }}>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Inquire Button using Global Theme-Driven Button Class */}
              <div style={{ padding: '10px 16px 14px', borderTop: '1px solid var(--color-border-subtle)' }}>
                <button
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, helpType: p.title }));
                    const formBox = document.getElementById('consultation-quick-box');
                    if (formBox) formBox.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-soft btn-full"
                >
                  <span>Inquire About This Stage</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================================
            3. COMPACT QUICK INQUIRY BOX (Frictionless, Simple 3 Fields)
            ====================================================================== */}
        {/* <div
          id="consultation-quick-box"
          style={{
            background: 'linear-gradient(135deg, #f7fbf8 0%, #ffffff 100%)',
            borderRadius: '18px',
            border: '1.5px solid #bcead0',
            padding: '28px 24px',
            maxWidth: '680px',
            margin: '0 auto 40px',
            boxShadow: '0 8px 24px -6px rgba(22, 66, 47, 0.06)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '18px' }}>
            <div className="badge-pill" style={{ marginBottom: '6px', fontSize: '11px', padding: '3px 10px' }}>
              <Calendar size={11} style={{ color: '#16a34a' }} />
              <span>Direct Agronomist Connect</span>
            </div>
            <h3 style={{ fontSize: '21px', color: '#16422f', fontWeight: 800, margin: '0 0 4px' }}>
              Request Farmland Consultation
            </h3>
            <p style={{ color: '#5b7367', fontSize: '13px', margin: 0 }}>
              Share your land details to connect directly with our senior agricultural team via WhatsApp.
            </p>
          </div>

          {isSubmitted ? (
            <div
              style={{
                background: 'var(--color-primary-subtle)',
                border: '1px solid var(--color-primary-border)',
                borderRadius: '12px',
                padding: '18px',
                textAlign: 'center'
              }}
            >
              <CheckCircle2 size={32} style={{ color: 'var(--color-primary)', margin: '0 auto 8px' }} />
              <strong style={{ fontSize: '15px', color: 'var(--color-heading)', display: 'block', marginBottom: '4px' }}>
                Consultation Request Prepared!
              </strong>
              <p style={{ color: 'var(--color-text-main)', fontSize: '13px', margin: '0 0 12px' }}>
                Thank you. We have received your query and will assist you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-outline btn-sm"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '12px' }}>
             
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '3px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Reddy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                    style={{ padding: '9px 12px', fontSize: '13px' }}
                  />
                </div>

            
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '3px' }}>
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                    style={{ padding: '9px 12px', fontSize: '13px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '3px' }}>
                    District / Mandal
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Prakasam / Guntur"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="form-input"
                    style={{ padding: '9px 12px', fontSize: '13px' }}
                  />
                </div>

              
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#16422f', marginBottom: '3px' }}>
                    Land Area (Acres)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5 Acres"
                    value={formData.acres}
                    onChange={(e) => setFormData({ ...formData, acres: e.target.value })}
                    className="form-input"
                    style={{ padding: '9px 12px', fontSize: '13px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '3px' }}>
                  Guidance Required
                </label>
                <select
                  value={formData.helpType}
                  onChange={(e) => setFormData({ ...formData, helpType: e.target.value })}
                  className="form-input"
                  style={{ padding: '9px 12px', fontSize: '13px' }}
                >
                  <option value="Commercial Crop Planning (Macadamia, Figs, Geranium)">Commercial Crop Planning (Macadamia, Figs, Geranium)</option>
                  <option value="Soil Health & Bio-Input Conversion">Soil Health & Bio-Input Conversion</option>
                  <option value="Precision Drip Irrigation Setup">Precision Drip Irrigation Setup</option>
                  <option value="Turnkey Organic Farm Development">Turnkey Organic Farm Development</option>
                  <option value="Organic Certification & Buyback Agreement">Organic Certification & Buyback Agreement</option>
                </select>
              </div>

             
              <button
                type="submit"
                className="btn-amber shimmer-effect btn-full"
                style={{ padding: '11px 18px', fontSize: '13.5px', fontWeight: 700 }}
              >
                <Send size={14} />
                <span>Submit & Connect with Senior Agronomist via WhatsApp</span>
              </button>
            </form>
          )}
        </div>

        {/* ======================================================================
            4. COMMON QUESTIONS (English Only, Crisp)
            ====================================================================== */}
        <div style={{ maxWidth: '680px', margin: '0 auto 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <h4 style={{ fontSize: '18px', color: 'var(--color-heading)', fontWeight: 700, margin: '0 0 3px' }}>
              Common Questions by Farmers & Landowners
            </h4>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ background: 'var(--color-bg-surface)', borderRadius: '10px', border: '1px solid var(--color-border)', padding: '14px 16px' }}>
              <strong style={{ fontSize: '13.5px', color: 'var(--color-heading)', display: 'block', marginBottom: '3px' }}>
                1. How fast can chemical-treated soil be converted to organic?
              </strong>
              <p style={{ fontSize: '12.5px', color: 'var(--color-text-main)', lineHeight: 1.5, margin: 0 }}>
                With intensive Jeevamrutham application and biochar integration, soil microbial count revives within 90 to 120 days. Full APEDA organic certification follows in subsequent monitored seasons.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-surface)', borderRadius: '10px', border: '1px solid var(--color-border)', padding: '14px 16px' }}>
              <strong style={{ fontSize: '13.5px', color: 'var(--color-heading)', display: 'block', marginBottom: '3px' }}>
                2. Can dryland red soils support Macadamia and Fig orchards?
              </strong>
              <p style={{ fontSize: '12.5px', color: 'var(--color-text-main)', lineHeight: 1.5, margin: 0 }}>
                Yes. Macadamia and Turkish Figs perform exceptionally well in well-drained red gravelly soils. With drip irrigation delivering 15–20 liters per plant daily, these crops thrive in Andhra Pradesh and Telangana climates.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-surface)', borderRadius: '10px', border: '1px solid var(--color-border)', padding: '14px 16px' }}>
              <strong style={{ fontSize: '13.5px', color: 'var(--color-heading)', display: 'block', marginBottom: '3px' }}>
                3. Do you provide marketing and buyback agreements?
              </strong>
              <p style={{ fontSize: '12.5px', color: 'var(--color-text-main)', lineHeight: 1.5, margin: 0 }}>
                Yes. Under our turnkey management and advisory contracts, Sukhibhava facilitates institutional buyback tie-ups and direct sales linkages for certified Macadamia, dried figs, and Geranium oil.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
