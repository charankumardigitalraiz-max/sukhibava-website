import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro%20Projects,%20I%20would%20like%20to%20get%20details%20about%20your%20farmland%20ventures%20and%20crops.`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px'
      }}
    >
      {/* Tooltip Popup */}
      {showTooltip && (
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '12px 16px',
            boxShadow: '0 10px 30px rgba(22, 66, 47, 0.12)',
            border: '1.5px solid #bcead0',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            maxWidth: '260px'
          }}
          className="interactive-card"
        >
          <div style={{ fontSize: '13px', color: '#16422f' }}>
            <strong style={{ color: '#166534', fontWeight: 700 }}>Chat with us on WhatsApp</strong><br />
            <span style={{ color: '#5b7367', fontSize: '12px' }}>Instant response from our advisory team!</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            style={{
              background: 'none',
              border: 'none',
              color: '#86a394',
              cursor: 'pointer',
              padding: '2px'
            }}
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="pulse-glow shimmer-effect"
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'transform 0.25s ease'
        }}
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
};
