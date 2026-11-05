import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro%20Projects,%20I%20would%20like%20to%20get%20details%20about%20your%20farmland%20ventures%20and%20crops.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-3 sm:p-3.5 shadow-xl border-1.5 border-emerald-200 flex items-center gap-2.5 max-w-[260px] animate-fade-in">
          <div className="text-xs text-slate-800 leading-snug">
            <strong className="text-emerald-800 font-bold block">Chat with us on WhatsApp</strong>
            <span className="text-slate-500 text-[11.5px]">Instant response from our advisory team!</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 cursor-pointer p-0.5 bg-transparent border-none transition-colors"
            aria-label="Dismiss WhatsApp hint"
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
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#128c7e] to-[#25d366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all no-underline cursor-pointer"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};
