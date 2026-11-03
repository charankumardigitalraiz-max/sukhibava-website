import React from 'react';
import {
  TrendingUp,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  MapPin,
  ShieldCheck,
  Sprout,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { companyInfo, leadershipData } from '../data/websiteData';

export const MarketingProfileView = ({ setActiveTab, onOpenSiteVisit }) => {
  const marketingExec = leadershipData[1];

  return (
    <div style={{ background: '#ffffff', minHeight: '85vh', padding: '36px 0 50px' }}>
      <div className="container">

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <span
            onClick={() => setActiveTab('home')}
            style={{ color: '#168852', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}
          >
            Home
          </span>
          <span style={{ color: '#94a3b8' }}>/</span>
          <span style={{ color: '#5b7367', fontSize: '13px' }}>Profile</span>
          <span style={{ color: '#94a3b8' }}>/</span>
          <span style={{ color: '#16422f', fontSize: '13px', fontWeight: 600 }}>Marketing Profile</span>
        </div>

        {/* Header Section */}
        <div style={{ maxWidth: '720px', marginBottom: '28px' }}>
          <div className="badge-pill" style={{ marginBottom: '10px', fontSize: '12px', padding: '4px 12px' }}>
            <TrendingUp size={13} style={{ color: '#168852' }} />
            <span>Investor Relations &amp; Sales Advisory</span>
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', marginBottom: '8px', color: '#16422f', fontWeight: 700 }}>
            Marketing Profile
          </h1>

          <p style={{ fontSize: '14.5px', color: '#475a50', lineHeight: 1.6, margin: 0 }}>
            Sukhibhava Agro Projects offers premium agricultural investment opportunities with a focus on sustainable farming and long-term returns in Kanigiri Mandal.
          </p>
        </div>

        {/* Main Executive Showcase Card */}
        <div
          className="interactive-card"
          style={{
            background: '#ffffff',
            borderRadius: '18px',
            overflow: 'hidden',
            border: '1.5px solid #d1e5d8',
            boxShadow: '0 12px 30px -10px rgba(22, 66, 47, 0.08)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '0',
            marginBottom: '32px'
          }}
        >
          {/* Executive Photo */}
          <div
            style={{
              background: 'linear-gradient(135deg, #eef7f1 0%, #f7fbf8 100%)',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '280px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 24px -6px rgba(22, 66, 47, 0.14)',
                border: '3px solid #ffffff'
              }}
              className="img-zoom-wrapper"
            >
              <img
                src={marketingExec.image}
                alt={`${marketingExec.name} - ${marketingExec.role}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '360px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            <div
              style={{
                marginTop: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#ffffff',
                padding: '6px 14px',
                borderRadius: '100px',
                border: '1px solid #bcead0',
                boxShadow: '0 2px 6px rgba(22, 66, 47, 0.06)'
              }}
            >
              <Sparkles size={14} style={{ color: '#d97706' }} />
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#166534' }}>
                Dedicated Investor Advisory
              </span>
            </div>
          </div>

          {/* Contact Details & Value Proposition */}
          <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '8px', fontSize: '11px', padding: '3px 9px' }}>
              <TrendingUp size={12} style={{ color: '#d97706' }} /> Sales Executive
            </div>

            <h2 style={{ fontSize: '24px', color: '#16422f', marginBottom: '4px', fontWeight: 700 }}>
              {marketingExec.name}
            </h2>

            <span style={{ fontSize: '13.5px', color: '#168852', fontWeight: 600, marginBottom: '14px', display: 'block' }}>
              Sales &amp; Investor Consultation Lead
            </span>

            <p style={{ color: '#475a50', fontSize: '14px', lineHeight: 1.65, marginBottom: '20px' }}>
              {marketingExec.description}
            </p>

            {/* Direct Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>

              {/* Phone */}
              <a
                href={`tel:${marketingExec.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#f6faf7',
                  border: '1px solid #dcece1',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  textDecoration: 'none'
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#eaf8ef', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
                  <Phone size={17} />
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#6e897c', display: 'block' }}>Direct Call</span>
                  <strong style={{ fontSize: '14.5px', color: '#16422f', fontWeight: 700 }}>{marketingExec.phone}</strong>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${marketingExec.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#f6faf7',
                  border: '1px solid #dcece1',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  textDecoration: 'none'
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#eaf8ef', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
                  <Mail size={17} />
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#6e897c', display: 'block' }}>Direct Email</span>
                  <strong style={{ fontSize: '14px', color: '#16422f', fontWeight: 600 }}>{marketingExec.email}</strong>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${marketingExec.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#f6faf7',
                  border: '1px solid #dcece1',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  textDecoration: 'none'
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#eaf8ef', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
                  <MessageSquare size={17} />
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#6e897c', display: 'block' }}>WhatsApp Chat</span>
                  <strong style={{ fontSize: '14px', color: '#166534', fontWeight: 600 }}>Message Kanka Prasad</strong>
                </div>
              </a>

            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenSiteVisit}
                className="btn-amber shimmer-effect"
                style={{ padding: '9px 20px', fontSize: '13.5px', borderRadius: '100px' }}
              >
                <Calendar size={15} />
                <span>Book Farm Visit with Kanka Prasad</span>
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className="btn-outline"
                style={{ padding: '9px 18px', fontSize: '13.5px', borderRadius: '100px' }}
              >
                <span>View Projects</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
