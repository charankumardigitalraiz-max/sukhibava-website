import React from 'react';
import {
  FileCheck,
  ShieldCheck,
  Download,
  CheckCircle2,
  Phone,
  Eye,
  FileText
} from 'lucide-react';
import { legalDocs, companyInfo } from '../data/websiteData';

export const LegalView = ({ onOpenSiteVisit }) => {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', paddingBottom: '50px' }}>

      {/* 1. Header Banner */}
      <section
        style={{
          position: 'relative',
          padding: '60px 0 48px',
          background: 'linear-gradient(135deg, rgba(14, 46, 31, 0.94) 0%, rgba(20, 83, 45, 0.88) 55%, rgba(180, 83, 9, 0.40) 100%), url("/images/luxury-farmland-aerial.jpg")',
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
              color: '#dcfce7',
              fontSize: '12px',
              fontWeight: 600,
              marginBottom: '16px'
            }}
          >
            <ShieldCheck size={13} style={{ color: '#86efac' }} />
            <span>100% Freehold Legal Sanity &amp; Clear Titles • Kanigiri, AP</span>
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
            Legal Documentation &amp; Due Diligence
          </h1>

          <p style={{ color: '#f0fdf4', fontSize: '15px', lineHeight: 1.65, margin: 0, opacity: 0.95 }}>
            Every square yard in our Kanigiri Agro Venture comes with clear litigation-free titles, individual spot registration, and statutory government clearances.
          </p>
        </div>
      </section>

      {/* 2. THREE CORE LEGAL PILLARS */}
      <section style={{ padding: '44px 0', background: '#ffffff' }}>
        <div className="container">

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '22px', marginBottom: '40px' }}>

            {/* 1. Sale Deed */}
            <div
              className="interactive-card"
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                padding: '26px 22px',
                border: '1.5px solid #dcece1',
                boxShadow: '0 6px 20px -6px rgba(22, 66, 47, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#eaf8ef', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', marginBottom: '16px' }}>
                  <FileText size={22} />
                </div>

                <div className="badge-pill" style={{ fontSize: '11px', marginBottom: '8px', padding: '2px 8px' }}>
                  Freehold Ownership
                </div>

                <h3 style={{ fontSize: '20px', color: '#16422f', marginBottom: '6px', fontWeight: 700 }}>
                  Sale Deed
                </h3>

                <p style={{ color: '#168852', fontSize: '13.5px', fontWeight: 600, marginBottom: '8px' }}>
                  Legal ownership document of the property
                </p>

                <p style={{ color: '#5b7367', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>
                  Executed directly in the investor's name at the Sub-Registrar office with clear survey subdivisions and revenue registry entries.
                </p>
              </div>

              <div style={{ paddingTop: '14px', borderTop: '1px solid #eef5f0' }}>
                <span style={{ fontSize: '12px', color: '#166534', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={15} style={{ color: '#16a34a' }} /> Spot Registration Guaranteed
                </span>
              </div>
            </div>

            {/* 2. Title Clearance */}
            <div
              className="interactive-card"
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                padding: '26px 22px',
                border: '1.5px solid #dcece1',
                boxShadow: '0 6px 20px -6px rgba(22, 66, 47, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#fef7dc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', marginBottom: '16px' }}>
                  <ShieldCheck size={22} />
                </div>

                <div className="badge-gold" style={{ fontSize: '11px', marginBottom: '8px', padding: '2px 8px' }}>
                  Litigation-Free
                </div>

                <h3 style={{ fontSize: '20px', color: '#16422f', marginBottom: '6px', fontWeight: 700 }}>
                  Title Clearance
                </h3>

                <p style={{ color: '#d97706', fontSize: '13.5px', fontWeight: 600, marginBottom: '8px' }}>
                  Verified legal ownership status
                </p>

                <p style={{ color: '#5b7367', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>
                  Vetted by experienced high-court legal counsels with unbroken 30+ year link lineage and complete search reports.
                </p>
              </div>

              <div style={{ paddingTop: '14px', borderTop: '1px solid #eef5f0' }}>
                <span style={{ fontSize: '12px', color: '#166534', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={15} style={{ color: '#16a34a' }} /> Zero Encumbrance &amp; Clear Lineage
                </span>
              </div>
            </div>

            {/* 3. NA/NOC */}
            <div
              className="interactive-card"
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                padding: '26px 22px',
                border: '1.5px solid #dcece1',
                boxShadow: '0 6px 20px -6px rgba(22, 66, 47, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#eaf8ef', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', marginBottom: '16px' }}>
                  <FileCheck size={22} />
                </div>

                <div className="badge-pill" style={{ fontSize: '11px', marginBottom: '8px', padding: '2px 8px' }}>
                  Govt Compliant
                </div>

                <h3 style={{ fontSize: '20px', color: '#16422f', marginBottom: '6px', fontWeight: 700 }}>
                  NA/NOC
                </h3>

                <p style={{ color: '#168852', fontSize: '13.5px', fontWeight: 600, marginBottom: '8px' }}>
                  Land conversion approvals
                </p>

                <p style={{ color: '#5b7367', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>
                  Statutory forest department NOCs, environmental compliances, and zonal clearances adhering to Andhra Pradesh state administration norms.
                </p>
              </div>

              <div style={{ paddingTop: '14px', borderTop: '1px solid #eef5f0' }}>
                <span style={{ fontSize: '12px', color: '#166534', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={15} style={{ color: '#16a34a' }} /> 100% Statutory Adherence
                </span>
              </div>
            </div>

          </div>

          {/* Action CTA Box */}
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
            <h3 style={{ fontSize: '22px', color: '#16422f', marginBottom: '8px', fontWeight: 700 }}>
              Verify Legal Documents with Our Legal Team
            </h3>

            <p style={{ color: '#475a50', fontSize: '14px', maxWidth: '560px', margin: '0 auto 20px', lineHeight: 1.55 }}>
              We welcome prospective investors to inspect physical copy files, link documents, and passbooks during our office visits or scheduled weekend farm tours.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenSiteVisit}
                className="btn-amber shimmer-effect"
                style={{ padding: '10px 22px', fontSize: '13.5px', borderRadius: '100px' }}
              >
                <Download size={15} />
                <span>Download Brochure</span>
              </button>

              <button
                onClick={onOpenSiteVisit}
                className="btn-outline"
                style={{ padding: '10px 20px', fontSize: '13.5px', borderRadius: '100px' }}
              >
                <Eye size={15} />
                <span>View Documents</span>
              </button>

              <a
                href={`tel:${companyInfo.phone}`}
                className="btn-outline"
                style={{ padding: '10px 20px', fontSize: '13.5px', textDecoration: 'none', borderRadius: '100px' }}
              >
                <Phone size={15} />
                <span>Contact Us</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
