import React from 'react';
import { 
  UserCheck, 
  Award, 
  ShieldCheck, 
  Sprout, 
  Calendar, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { leadershipData } from '../data/websiteData';

export const ManagementProfileView = ({ setActiveTab, onOpenSiteVisit }) => {
  const md = leadershipData[0];

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
          <span style={{ color: '#16422f', fontSize: '13px', fontWeight: 600 }}>Management Profile</span>
        </div>

        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '28px' }}>
          <div className="badge-pill" style={{ marginBottom: '10px', fontSize: '12px', padding: '4px 12px' }}>
            <UserCheck size={13} style={{ color: '#168852' }} />
            <span>Executive Board &amp; Farm Leadership</span>
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', marginBottom: '8px', color: '#16422f', fontWeight: 700 }}>
            Management Profile
          </h1>

          <p style={{ fontSize: '14.5px', color: '#475a50', lineHeight: 1.6, margin: 0 }}>
            Our management team brings extensive experience in agriculture, land development, and farm management. Ensuring every project is executed with precision and professionalism.
          </p>
        </div>

        {/* Managing Director Profile Showcase Card */}
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
            gap: '0'
          }}
        >
          {/* Left: MD Photo */}
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
                src={md.image} 
                alt="Managing Director - Sukhibhava Agro Projects"
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
              <Award size={14} style={{ color: '#16a34a' }} />
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#166534' }}>
                20+ Years Agricultural Leadership
              </span>
            </div>
          </div>

          {/* Right: Detailed Biography & Pillars */}
          <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '10px', fontSize: '11px', padding: '3px 9px' }}>
              <Sparkles size={12} style={{ color: '#d97706' }} /> Managing Director
            </div>

            <h2 style={{ fontSize: '22px', color: '#16422f', marginBottom: '10px', fontWeight: 700 }}>
              Leadership Dedicated to Agricultural Excellence
            </h2>

            <p style={{ color: '#475a50', fontSize: '14px', lineHeight: 1.65, marginBottom: '18px' }}>
              {md.description}
            </p>

            {/* Key Commitments */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '22px' }}>
              <div style={{ background: '#f6faf7', padding: '12px', borderRadius: '10px', border: '1px solid #e2ece5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#166534', fontWeight: 700, marginBottom: '4px', fontSize: '13px' }}>
                  <ShieldCheck size={16} style={{ color: '#16a34a' }} />
                  <span>100% Transparency</span>
                </div>
                <p style={{ margin: 0, fontSize: '12px', color: '#5b7367' }}>
                  Direct land mutations, individual spot registration, and open-book farm management.
                </p>
              </div>

              <div style={{ background: '#f6faf7', padding: '12px', borderRadius: '10px', border: '1px solid #e2ece5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#166534', fontWeight: 700, marginBottom: '4px', fontSize: '13px' }}>
                  <Sprout size={16} style={{ color: '#16a34a' }} />
                  <span>Scientific Farming</span>
                </div>
                <p style={{ margin: 0, fontSize: '12px', color: '#5b7367' }}>
                  Horticulture expert oversight, Israeli drip irrigation, and high-value export crop yields.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenSiteVisit}
                className="btn-amber shimmer-effect"
                style={{ padding: '10px 22px', fontSize: '13.5px', borderRadius: '100px' }}
              >
                <Calendar size={15} />
                <span>Schedule a Farm Visit</span>
              </button>

              <button 
                onClick={() => setActiveTab('contact')}
                className="btn-outline"
                style={{ padding: '10px 20px', fontSize: '13.5px', borderRadius: '100px' }}
              >
                <span>Contact Leadership</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
