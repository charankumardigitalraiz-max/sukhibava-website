import React, { useState } from 'react';
import { X, Calendar, MapPin, Phone, User, Mail, Users, CheckCircle, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export const SiteVisitModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupCity: 'Vijayawada',
    preferredDate: '',
    attendees: '2',
    interestCrop: 'All Crops (Tri-Crop Model)'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={resetAndClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          maxWidth: '560px',
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(22, 66, 47, 0.25)',
          border: '2px solid #bcead0',
          position: 'relative'
        }}
        className="interactive-card"
      >
        {/* Header (Clean Light Theme) */}
        <div
          style={{
            background: 'linear-gradient(135deg, #eaf8ef 0%, #f6fcf8 100%)',
            padding: '24px 28px',
            borderBottom: '1.5px solid #dcece1',
            position: 'relative'
          }}
        >
          <button
            onClick={resetAndClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: '#ffffff',
              border: '1px solid #dcece1',
              color: '#16422f',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
            }}
          >
            <X size={18} />
          </button>

          <span className="badge-gold" style={{ fontSize: '11px', padding: '2px 10px', marginBottom: '8px' }}>
            <Sparkles size={12} style={{ color: '#d97706' }} /> Complimentary Tour
          </span>

          <h3 style={{ fontSize: '22px', color: '#16422f', marginTop: '6px', marginBottom: '4px', fontWeight: 700 }}>
            Book Your Kanigiri Farm Site Visit
          </h3>

          <p style={{ color: '#166534', fontSize: '13px', margin: 0, fontWeight: 500 }}>
            Includes AC Vehicle Pick-up, Guided Orchard Walk &amp; Soil Inspection
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: '28px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#eaf8ef',
                  color: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}
              >
                <CheckCircle size={36} />
              </div>

              <h4 style={{ fontSize: '20px', color: '#16422f', marginBottom: '8px', fontWeight: 700 }}>
                Tour Booking Requested!
              </h4>

              <p style={{ color: '#475a50', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '24px' }}>
                Thank you, <strong>{formData.name}</strong>. Our logistics executive will call you at <strong>{formData.phone}</strong> to confirm your vehicle pickup slot and weekend travel itinerary.
              </p>

              <button
                onClick={resetAndClose}
                className="btn-amber shimmer-effect"
                style={{ padding: '10px 24px', fontSize: '14px' }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#16422f', marginBottom: '6px' }}>
                  Full Name <span style={{ color: '#dc2626' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                    style={{ paddingLeft: '40px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#16422f', marginBottom: '6px' }}>
                    Phone Number <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                      style={{ paddingLeft: '40px' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#16422f', marginBottom: '6px' }}>
                    Pickup Location
                  </label>
                  <div style={{ position: 'relative' }}>
                    <MapPin size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    <select
                      value={formData.pickupCity}
                      onChange={(e) => setFormData({ ...formData, pickupCity: e.target.value })}
                      className="form-input"
                      style={{ paddingLeft: '40px' }}
                    >
                      <option value="Vijayawada">Vijayawada (HQ Pickup)</option>
                      <option value="Ongole">Ongole</option>
                      <option value="Guntur">Guntur</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Self Drive">Self Vehicle to Kanigiri</option>
                    </select>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#16422f', marginBottom: '6px' }}>
                    Preferred Weekend
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#16422f', marginBottom: '6px' }}>
                    No. of Attendees
                  </label>
                  <select
                    value={formData.attendees}
                    onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                    className="form-input"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons (Couple/Friends)</option>
                    <option value="3-4">3 - 4 Persons (Family)</option>
                    <option value="5+">5+ Persons (Investor Group)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-amber shimmer-effect"
                style={{ width: '100%', justifyContent: 'center', padding: '13px', fontSize: '15px', marginTop: '6px' }}
              >
                <Calendar size={18} />
                <span>Confirm Free Weekend Tour</span>
              </button>

              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: '#688577' }}>
                  🚐 Air-conditioned vehicle • No obligation to purchase
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
