import React from 'react';
import {
  Layers,
  ShoppingBag,
  Sprout,
  ShieldCheck,
  CheckCircle2,
  Award,
  Phone,
  ArrowRight,
  Sparkles,
  Calendar,
  MessageSquare,
  Truck,
  Leaf,
  FlaskConical,
  Droplets,
  Sun
} from 'lucide-react';
import {
  companyInfo,
  kanigiriVenture
} from '../data/websiteData';

export const ServicesView = ({ setActiveTab, onOpenSiteVisit }) => {
  return (
    <div style={{ background: 'var(--color-bg-page)', minHeight: '100vh', paddingBottom: '70px' }}>

      {/* ======================================================================
          1. IMMERSIVE HERO BANNER: The Three Integrated Pillars
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
          borderBottom: '1px solid var(--color-border)',
          overflow: 'hidden'
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
            <Sparkles size={13} style={{ color: '#86efac' }} />
            <span>Integrated Agricultural Ecosystem • Andhra Pradesh</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(30px, 4.2vw, 46px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.18,
              marginBottom: '14px',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Our 3 Core Agricultural Modules
          </h1>

          <p
            style={{
              color: '#f0fdf4',
              fontSize: '15.5px',
              lineHeight: 1.68,
              maxWidth: '720px',
              margin: '0 auto 28px',
              opacity: 0.95
            }}
          >
            Sukhibhava Agro Projects operates three synergistic business pillars: managed commercial agroforestry real estate, direct selling of pure organic farm harvests, and 20+ years of scientific on-ground agronomy consultancy.
          </p>

          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '18px',
              fontSize: '13px',
              color: '#fef3c7',
              fontWeight: 600
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} style={{ color: '#86efac' }} /> 250+ Acre Managed Farmland
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} style={{ color: '#86efac' }} /> Pure Farm-Fresh Organic Extracts
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} style={{ color: '#86efac' }} /> 20+ Yrs Field Agronomy Advisory
            </span>
          </div>
        </div>
      </section>

      {/* ======================================================================
          2. THE THREE CORE MODULES: DEDICATED CARDS WITH DIRECT ACCESS
          ====================================================================== */}
      <div className="container" style={{ marginTop: '52px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '44px', marginBottom: '60px' }}>

          {/* ------------------------------------------------------------------
              MODULE 1: FARMLAND DEVELOPMENT
              ------------------------------------------------------------------ */}
          <div
            className="interactive-card"
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              border: '1.5px solid var(--color-primary-border)',
              overflow: 'hidden',
              boxShadow: '0 12px 36px -10px rgba(22, 66, 47, 0.1)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '0'
            }}
          >
            <div style={{ position: 'relative', minHeight: '340px' }} className="img-zoom-wrapper">
              <img
                src="/images/turnkey-plantation-setup.jpg"
                alt="Kanigiri Managed Farmland"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(22, 101, 52, 0.94)',
                  backdropFilter: 'blur(6px)',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '5px 14px',
                  borderRadius: '100px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}
              >
                Module 01: Farmland Development
              </span>
            </div>

            <div style={{ padding: '38px 34px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  <Layers size={14} />
                  <span>250+ Acre Managed Agroforestry Venture</span>
                </div>

                <h2 style={{ fontSize: '26px', color: 'var(--color-primary-dark)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.25 }}>
                  Kanigiri Managed Farmland Development
                </h2>

                <p style={{ color: 'var(--color-text-muted)', fontSize: '14.5px', lineHeight: 1.65, margin: '0 0 20px' }}>
                  Our flagship managed farmland project in Kanigiri Mandal, Prakasam District, AP. We handle 100% turnkey cultivation and maintenance with Macadamia Nuts, Anjeer (Figs), and Geranium plantations while you hold individual registered legal title deeds and receive compounding tax-free returns.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ background: 'var(--color-bg-soft)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '13px' }}>
                    <strong style={{ color: 'var(--color-primary-dark)', display: 'block', marginBottom: '2px' }}>Flagship Crops:</strong>
                    <span style={{ color: 'var(--color-text-muted)' }}>Macadamia, Anjeer &amp; Geranium</span>
                  </div>
                  <div style={{ background: 'var(--color-bg-soft)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '13px' }}>
                    <strong style={{ color: 'var(--color-primary-dark)', display: 'block', marginBottom: '2px' }}>Legal Security:</strong>
                    <span style={{ color: 'var(--color-text-muted)' }}>100% Spot Registered Sale Deed</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setActiveTab('projects')}
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '14px', borderRadius: '100px' }}
                >
                  <span>Explore Farmland Venture</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={onOpenSiteVisit}
                  className="btn-amber shimmer-effect"
                  style={{ padding: '12px 22px', fontSize: '14px', borderRadius: '100px' }}
                >
                  <Calendar size={15} />
                  <span>Book Weekend Farm Tour</span>
                </button>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------
              MODULE 2: ORGANIC PRODUCT SELLING
              ------------------------------------------------------------------ */}
          <div
            className="interactive-card"
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              border: '1.5px solid var(--color-secondary-border)',
              overflow: 'hidden',
              boxShadow: '0 12px 36px -10px rgba(217, 119, 6, 0.1)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '0'
            }}
          >
            <div style={{ position: 'relative', minHeight: '340px' }} className="img-zoom-wrapper">
              <img
                src="/images/Geranium-beauty-and-wellness-products-1024x683.png"
                alt="Organic Farm Products & Extracts"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(217, 119, 6, 0.94)',
                  backdropFilter: 'blur(6px)',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '5px 14px',
                  borderRadius: '100px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}
              >
                Module 02: Organic Product Selling
              </span>
            </div>

            <div style={{ padding: '38px 34px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-secondary)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  <ShoppingBag size={14} />
                  <span>Farm-Direct Certified Harvests</span>
                </div>

                <h2 style={{ fontSize: '26px', color: 'var(--color-primary-dark)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.25 }}>
                  Sukhibhava Organic Farm Products Store
                </h2>

                <p style={{ color: 'var(--color-text-muted)', fontSize: '14.5px', lineHeight: 1.65, margin: '0 0 20px' }}>
                  Pure, certified organic produce grown in our orchards without synthetic urea, toxic pesticides, or chemical preservatives. Browse steam-distilled Geranium essential oils, cold-pressed wellness oils, raw forest honey, and naturally sun-cured harvest items.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ background: 'var(--color-bg-soft)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '13px' }}>
                    <strong style={{ color: 'var(--color-primary-dark)', display: 'block', marginBottom: '2px' }}>Product Spectrum:</strong>
                    <span style={{ color: 'var(--color-text-muted)' }}>Geranium Oil, Cold Oils, Honey</span>
                  </div>
                  <div style={{ background: 'var(--color-bg-soft)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '13px' }}>
                    <strong style={{ color: 'var(--color-primary-dark)', display: 'block', marginBottom: '2px' }}>Direct Ordering:</strong>
                    <span style={{ color: 'var(--color-text-muted)' }}>Instant WhatsApp Direct Dispatch</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setActiveTab('organic-products')}
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '14px', borderRadius: '100px' }}
                >
                  <ShoppingBag size={15} />
                  <span>Enter Organic Products Store</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20would%20like%20to%20order%20organic%20farm%20products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ padding: '12px 20px', fontSize: '14px', borderRadius: '100px' }}
                >
                  <MessageSquare size={15} style={{ color: '#16a34a' }} />
                  <span>WhatsApp Order Desk</span>
                </a>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------
              MODULE 3: AGRICULTURE ORGANIC CONSULTANCY
              ------------------------------------------------------------------ */}
          <div
            className="interactive-card"
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              border: '1.5px solid var(--color-border)',
              overflow: 'hidden',
              boxShadow: '0 12px 36px -10px rgba(22, 66, 47, 0.1)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '0'
            }}
          >
            <div style={{ position: 'relative', minHeight: '340px' }} className="img-zoom-wrapper">
              <img
                src="/images/agri-consultancy-expert.jpg"
                alt="Organic Farming Consultancy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(22, 66, 47, 0.94)',
                  backdropFilter: 'blur(6px)',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '5px 14px',
                  borderRadius: '100px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}
              >
                Module 03: Agri Organic Consultancy
              </span>
            </div>

            <div style={{ padding: '38px 34px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  <Sprout size={14} />
                  <span>Farmer & Landowner Advisory Desk</span>
                </div>

                <h2 style={{ fontSize: '26px', color: 'var(--color-primary-dark)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.25 }}>
                  Agriculture Organic Farming Consultancy
                </h2>

                <p style={{ color: 'var(--color-text-muted)', fontSize: '14.5px', lineHeight: 1.65, margin: '0 0 20px' }}>
                  Professional guidance for progressive farmers, doctors, NRI landowners, and institutions seeking to establish commercial organic orchards. We provide complete blueprints for soil biological profiling, Israeli drip irrigation, Jeevamrutham bio-inputs, and harvest buyback linkages.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ background: 'var(--color-bg-soft)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '13px' }}>
                    <strong style={{ color: 'var(--color-primary-dark)', display: 'block', marginBottom: '2px' }}>Core Services:</strong>
                    <span style={{ color: 'var(--color-text-muted)' }}>Soil Profiling, Drip & SOPs</span>
                  </div>
                  <div style={{ background: 'var(--color-bg-soft)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '13px' }}>
                    <strong style={{ color: 'var(--color-primary-dark)', display: 'block', marginBottom: '2px' }}>Experience:</strong>
                    <span style={{ color: 'var(--color-text-muted)' }}>20+ Years Field Proven</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setActiveTab('consultancy')}
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '14px', borderRadius: '100px' }}
                >
                  <Sprout size={15} />
                  <span>View Consultancy Advisory</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href={`tel:${companyInfo.phone}`}
                  className="btn-outline"
                  style={{ padding: '12px 20px', fontSize: '14px', borderRadius: '100px' }}
                >
                  <Phone size={15} style={{ color: '#16a34a' }} />
                  <span>Call Agronomist ({companyInfo.phone})</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ======================================================================
            3. HOW OUR INTEGRATED ECOSYSTEM WORKS
            ====================================================================== */}
        <div
          style={{
            background: 'linear-gradient(135deg, #f7fbf8 0%, #ffffff 100%)',
            borderRadius: '24px',
            border: '1.5px solid var(--color-border)',
            padding: '42px 34px',
            textAlign: 'center',
            marginBottom: '40px',
            boxShadow: '0 8px 24px -6px rgba(22, 66, 47, 0.05)'
          }}
        >
          <div className="badge-pill" style={{ marginBottom: '10px', fontSize: '12px', padding: '4px 14px' }}>
            <Award size={13} style={{ color: 'var(--color-primary)' }} />
            <span>Synergistic Agriculture Loop</span>
          </div>

          <h3 style={{ fontSize: '26px', color: 'var(--color-primary-dark)', fontWeight: 800, margin: '0 0 10px' }}>
            How Our 3 Pillars Work Together
          </h3>

          <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', maxWidth: '660px', margin: '0 auto 36px', lineHeight: 1.6 }}>
            From raw land development to pure value-added organic retail and knowledge sharing, Sukhibhava creates a self-sustaining cycle of agricultural prosperity.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              textAlign: 'left'
            }}
          >
            <div style={{ background: '#ffffff', padding: '26px 22px', borderRadius: '18px', border: '1.5px solid var(--color-primary-border)' }}>
              <span style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-primary)', display: 'block', marginBottom: '8px' }}>01</span>
              <strong style={{ fontSize: '17px', color: 'var(--color-primary-dark)', display: 'block', marginBottom: '8px' }}>Farmland Development</strong>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                We convert fertile red loam lands into systematically planned, drip-irrigated commercial plantations with 100% legal individual ownership.
              </p>
            </div>

            <div style={{ background: '#ffffff', padding: '26px 22px', borderRadius: '18px', border: '1.5px solid var(--color-secondary-border)' }}>
              <span style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-secondary)', display: 'block', marginBottom: '8px' }}>02</span>
              <strong style={{ fontSize: '17px', color: 'var(--color-primary-dark)', display: 'block', marginBottom: '8px' }}>Organic Product Selling</strong>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                Harvests from our managed lands are processed naturally without chemicals and delivered directly to health-conscious consumers.
              </p>
            </div>

            <div style={{ background: '#ffffff', padding: '26px 22px', borderRadius: '18px', border: '1.5px solid var(--color-border)' }}>
              <span style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-primary-dark)', display: 'block', marginBottom: '8px' }}>03</span>
              <strong style={{ fontSize: '17px', color: 'var(--color-primary-dark)', display: 'block', marginBottom: '8px' }}>Agri Consultancy</strong>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                We empower farmers and landowners across South India with the exact agronomy blueprints and market buyback channels that power our own success.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
