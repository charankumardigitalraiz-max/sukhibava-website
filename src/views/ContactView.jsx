import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { companyInfo, faqs } from '../data/websiteData';

export const ContactView = ({ onOpenSiteVisit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', paddingBottom: '50px' }}>

      {/* 1. Header Banner */}
      <section
        style={{
          position: 'relative',
          padding: '60px 0 48px',
          background: 'linear-gradient(135deg, rgba(14, 46, 31, 0.94) 0%, rgba(20, 83, 45, 0.88) 55%, rgba(180, 83, 9, 0.40) 100%), url("/images/luxury-farm-clubhouse.jpg")',
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
            <Phone size={13} style={{ color: '#86efac' }} />
            <span>Vijayawada HQ • Kanigiri Farmland Site • Prakasam Dist</span>
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
            Contact Sukhibhava Agro
          </h1>

          <p style={{ color: '#f0fdf4', fontSize: '15px', lineHeight: 1.65, margin: 0, opacity: 0.95 }}>
            Have questions regarding plot availability, title verification, or crop yield projections? Our advisory desk in Vijayawada is ready to assist you.
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Inquiry Form Grid */}
      <section style={{ padding: '44px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px', alignItems: 'flex-start' }}>

            {/* Left Column: Direct Contacts from Website */}
            <div>
              <div className="badge-gold" style={{ marginBottom: '10px', fontSize: '11.5px', padding: '3px 10px' }}>
                <Sparkles size={12} style={{ color: '#d97706' }} /> Direct Communications
              </div>

              <h2 style={{ fontSize: '24px', color: '#16422f', marginBottom: '10px', fontWeight: 700 }}>
                We're Here to Assist Your Farmland Journey
              </h2>

              <p style={{ color: '#475a50', fontSize: '14px', lineHeight: 1.6, marginBottom: '22px' }}>
                Visit our corporate office in Vijayawada or book an accompanied weekend inspection directly to our Kanigiri Agro Park in Prakasam District.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

                {/* Location */}
                <div
                  className="interactive-card"
                  style={{ display: 'flex', gap: '14px', background: '#ffffff', padding: '16px 18px', borderRadius: '14px', border: '1px solid #dcece1' }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#eaf8ef', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '14.5px', color: '#16422f', display: 'block', marginBottom: '2px', fontWeight: 700 }}>
                      Corporate Headquarters
                    </strong>
                    <span style={{ fontSize: '13px', color: '#475a50', lineHeight: 1.45, display: 'block' }}>
                      📍 Location: {companyInfo.location}
                    </span>
                    <span style={{ fontSize: '12px', color: '#688577', marginTop: '2px', display: 'block' }}>
                      Farmland Site: {companyInfo.ventureLocation}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div
                  className="interactive-card"
                  style={{ display: 'flex', gap: '14px', background: '#ffffff', padding: '16px 18px', borderRadius: '14px', border: '1px solid #dcece1' }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#eaf8ef', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '14.5px', color: '#16422f', display: 'block', marginBottom: '2px', fontWeight: 700 }}>
                      Phone &amp; Call Desk
                    </strong>
                    <div style={{ fontSize: '13.5px' }}>
                      <a href={`tel:${companyInfo.phone}`} style={{ color: '#166534', fontWeight: 700, textDecoration: 'none' }}>
                        📞 {companyInfo.phone}
                      </a>
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#5b7367', marginTop: '2px' }}>
                      Sales &amp; Advisory: <a href={`tel:${companyInfo.secondaryPhone}`} style={{ color: '#166534', fontWeight: 600 }}>{companyInfo.secondaryPhone}</a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div
                  className="interactive-card"
                  style={{ display: 'flex', gap: '14px', background: '#ffffff', padding: '16px 18px', borderRadius: '14px', border: '1px solid #dcece1' }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#eaf8ef', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '14.5px', color: '#16422f', display: 'block', marginBottom: '2px', fontWeight: 700 }}>
                      Official Email
                    </strong>
                    <a href={`mailto:${companyInfo.email}`} style={{ color: '#166534', fontWeight: 600, fontSize: '13.5px', textDecoration: 'none' }}>
                      ✉ {companyInfo.email}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                padding: '28px 24px',
                border: '1.5px solid #dcece1',
                boxShadow: '0 8px 24px -6px rgba(22, 66, 47, 0.06)'
              }}
            >
              <h3 style={{ fontSize: '19px', color: '#16422f', marginBottom: '6px', fontWeight: 700 }}>
                Send Us a Message
              </h3>
              <p style={{ color: '#5b7367', fontSize: '13px', marginBottom: '18px' }}>
                Fill out the quick form and our client advisory desk will get in touch.
              </p>

              {formSubmitted ? (
                <div style={{ background: '#f0fdf4', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid #bcead0' }}>
                  <CheckCircle2 size={32} style={{ color: '#16a34a', margin: '0 auto 8px' }} />
                  <h4 style={{ color: '#16422f', fontSize: '16px', marginBottom: '4px', fontWeight: 700 }}>Inquiry Received!</h4>
                  <p style={{ color: '#475a50', fontSize: '13px', margin: 0 }}>
                    Thank you for reaching out. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#16422f', marginBottom: '4px' }}>
                        First Name <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="First"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="form-input"
                        style={{ padding: '9px 12px', fontSize: '13.5px' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#16422f', marginBottom: '4px' }}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="form-input"
                        style={{ padding: '9px 12px', fontSize: '13.5px' }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '14px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#16422f', marginBottom: '4px' }}>
                      Email <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                      style={{ padding: '9px 12px', fontSize: '13.5px' }}
                    />
                  </div>

                  <div style={{ marginBottom: '14px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#16422f', marginBottom: '4px' }}>
                      Mobile Number <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 92816 22977"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                      style={{ padding: '9px 12px', fontSize: '13.5px' }}
                    />
                  </div>

                  <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#16422f', marginBottom: '4px' }}>
                      Comment or Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your farmland requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input"
                      style={{ resize: 'vertical', padding: '9px 12px', fontSize: '13.5px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-amber shimmer-effect"
                    style={{ width: '100%', justifyContent: 'center', padding: '10px', fontSize: '14px', borderRadius: '100px' }}
                  >
                    <Send size={15} />
                    <span>Submit</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions Accordion */}
      <section style={{ padding: '44px 0', background: '#f8faf7', borderTop: '1px solid #e1ede5' }}>
        <div className="container" style={{ maxWidth: '740px' }}>

          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div className="badge-pill" style={{ marginBottom: '8px', fontSize: '12px', padding: '4px 12px' }}>
              <HelpCircle size={13} style={{ color: '#168852' }} />
              <span>Common Questions</span>
            </div>
            <h2 style={{ fontSize: '24px', color: '#16422f', marginBottom: '6px', fontWeight: 700 }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#5b7367', fontSize: '13.5px', margin: 0 }}>
              Everything you need to know about ownership, legal titles, and farm management.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  border: openFaqIndex === i ? '1.5px solid #16a34a' : '1px solid #dcece1',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '12px'
                  }}
                >
                  <strong style={{ fontSize: '14.5px', color: '#16422f', fontWeight: 600 }}>
                    {faq.q}
                  </strong>
                  <ChevronDown
                    size={16}
                    style={{
                      color: openFaqIndex === i ? '#16a34a' : '#94a3b8',
                      transform: openFaqIndex === i ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {openFaqIndex === i && (
                  <div style={{ padding: '0 18px 16px', color: '#475a50', fontSize: '13.5px', lineHeight: 1.6, borderTop: '1px solid #f0fdf4' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
