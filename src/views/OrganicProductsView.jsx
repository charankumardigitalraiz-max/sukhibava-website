import React from 'react';
import {
  ShoppingBag,
  Star,
  MessageSquare,
  BadgeCheck,
  Truck,
  ShieldCheck,
  Sparkles,
  Leaf,
  ArrowRight
} from 'lucide-react';
import {
  companyInfo,
  organicProducts
} from '../data/websiteData';

export const OrganicProductsView = ({ setActiveTab, onOpenSiteVisit }) => {
  const handleWhatsAppInquiry = (product) => {
    const message = `Hello Sukhibhava Agro, I am interested in your organic farm product:
🌱 Product: ${product.name}
📍 Farm Harvest: ${product.harvestOrigin || 'Kanigiri Organic Estate, AP'}

Please share details regarding harvest availability, packaging, and home delivery.`;
    window.open(
      `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div style={{ background: 'var(--color-bg-page)', minHeight: '100vh', paddingBottom: '60px' }}>

      {/* ======================================================================
          1. REFINED EDITORIAL HERO HEADER
          ====================================================================== */}
      <section
        style={{
          background: 'linear-gradient(180deg, var(--color-primary-soft) 0%, var(--color-bg-page) 100%)',
          padding: '36px 0 24px',
          textAlign: 'center',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          {/* Delicate Micro-Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '3px 12px',
              borderRadius: '100px',
              background: 'var(--color-bg-surface)',
              border: '1px solid var(--color-primary-border)',
              color: 'var(--color-primary-dark)',
              fontSize: '11.5px',
              fontWeight: 600,
              marginBottom: '10px'
            }}
          >
            <Leaf size={12} style={{ color: 'var(--color-primary)' }} />
            <span>Farm-Direct Harvests • Kanigiri, AP</span>
          </div>

          {/* Refined Heading (Weight 600, Clean & Editorial) */}
          <h1
            style={{
              fontSize: 'clamp(22px, 2.8vw, 32px)',
              color: 'var(--color-heading)',
              marginBottom: '8px',
              fontWeight: 600,
              lineHeight: 1.3,
              letterSpacing: '-0.015em'
            }}
          >
            Organic Farm Products Store
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '13.5px',
              lineHeight: 1.6,
              margin: '0 auto 14px',
              maxWidth: '560px'
            }}
          >
            Naturally harvested crops and traditional cold-pressed pantry essentials from our 250+ acre organic estate — zero chemical pesticides, delivered fresh.
          </p>

          {/* Discreet Assurance Badges */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              fontSize: '11.5px',
              color: 'var(--color-primary-dark)',
              fontWeight: 500
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={13} style={{ color: 'var(--color-primary)' }} /> 100% Chemical-Free
            </span>
            <span style={{ color: 'var(--color-border)' }}>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Sparkles size={13} style={{ color: 'var(--color-secondary)' }} /> Bilona & Cold Pressed
            </span>
            <span style={{ color: 'var(--color-border)' }}>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Truck size={13} style={{ color: 'var(--color-primary)' }} /> Direct Home Dispatch
            </span>
          </div>
        </div>
      </section>

      {/* ======================================================================
          2. COMPACT PRODUCTS GRID (No Prices, No Grams — WhatsApp Connected)
          ====================================================================== */}
      <div className="container" style={{ marginTop: '26px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(235px, 1fr))',
            gap: '18px',
            marginBottom: '36px'
          }}
        >
          {organicProducts.map((p) => (
            <div
              key={p.id}
              className="interactive-card"
              style={{
                background: 'var(--color-bg-surface)',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1.5px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                {/* Photo Header (140px) */}
                <div style={{ position: 'relative', height: '140px', overflow: 'hidden', background: 'var(--color-bg-soft)' }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />

                  {/* Tag Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      background: 'rgba(255, 255, 255, 0.94)',
                      backdropFilter: 'blur(6px)',
                      color: 'var(--color-primary-dark)',
                      fontSize: '10px',
                      fontWeight: 600,
                      padding: '2.5px 8px',
                      borderRadius: '100px',
                      border: '1px solid var(--color-primary-border)',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                    }}
                  >
                    {p.badge}
                  </span>
                </div>

                {/* Content Area */}
                <div style={{ padding: '12px 14px 10px' }}>
                  {/* Rating & Origin Micro-Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Star size={11} style={{ color: 'var(--color-secondary-bright)', fill: 'var(--color-secondary-bright)' }} />
                      <span style={{ fontSize: '11px', color: 'var(--color-text-main)', fontWeight: 600 }}>5.0</span>
                      <span style={{ fontSize: '10.5px', color: 'var(--color-text-muted)' }}>({p.reviewsCount})</span>
                    </div>
                    <span style={{ fontSize: '10.5px', color: 'var(--color-primary)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                      <BadgeCheck size={11} /> Kanigiri Farm
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-heading)',
                      margin: '0 0 5px',
                      fontWeight: 600,
                      lineHeight: 1.3,
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                    title={p.name}
                  >
                    {p.name}
                  </h3>

                  {/* Concise Description */}
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.45,
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      minHeight: '33px',
                      marginTop: "10px"
                    }}
                  >
                    {p.shortDesc}
                  </p>
                </div>
              </div>

              {/* Single WhatsApp Action Button */}
              <div style={{ padding: '10px 14px 12px', borderTop: '1px solid var(--color-border-subtle)' }}>
                <button
                  onClick={() => handleWhatsAppInquiry(p)}
                  className="btn-soft btn-full"
                  style={{
                    padding: '8px 12px',
                    fontSize: '12px',
                    fontWeight: "600",
                    borderRadius: '8px',
                    color: "white",
                    backgroundColor: 'var(--color-secondary-bright)'
                  }}
                >
                  <MessageSquare size={13} />
                  <span>Enquire on WhatsApp</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================================
            3. CLEAN TRUST FOOTER BAR
            ====================================================================== */}
        <div
          style={{
            background: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '14px 18px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            fontSize: '12px',
            color: 'var(--color-text-main)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <ShieldCheck size={15} style={{ color: 'var(--color-primary)' }} />
            <span><strong>100% Organic:</strong> Chemical-free traditional farming</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <Truck size={15} style={{ color: 'var(--color-primary)' }} />
            <span><strong>Direct Farm Dispatch:</strong> Packed fresh at Kanigiri</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <MessageSquare size={15} style={{ color: 'var(--color-secondary)' }} />
            <span><strong>WhatsApp Orders:</strong> Direct customer support & inquiries</span>
          </div>
        </div>

      </div>
    </div>
  );
};
