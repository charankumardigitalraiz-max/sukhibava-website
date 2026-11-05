import React from 'react';
import {
  X,
  CheckCircle2,
  TrendingUp,
  Clock,
  Droplets,
  Award,
  Calendar,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

interface Crop {
  name: string;
  scientificName?: string;
  image: string;
  badge: string;
  overview: string;
  roiHighlight: string;
  gestation: string;
  lifespan: string;
  irrigation: string;
  highlights: string[];
}

interface CropDetailModalProps {
  crop: Crop | null;
  onClose: () => void;
  onOpenSiteVisit: () => void;
}

export const CropDetailModal: React.FC<CropDetailModalProps> = ({ crop, onClose, onOpenSiteVisit }) => {
  if (!crop) return null;

  const handleWhatsAppCropInquiry = () => {
    const message = `Hello Sukhibhava Agro Team, I am interested in your ${crop.name} plantation at the Kanigiri Estate:
🌱 Plantation Focus: ${crop.name}
📍 Location: Kanigiri Mandal, Prakasam District

Please share available plot details, gestation timeline, and weekend tour schedule.`;
    window.open(
      `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#e8e4db]"
      >
        {/* Crop Hero Image Header */}
        <div className="relative h-56 sm:h-64 overflow-hidden bg-[#ede8dc]">
          <img
            src={crop.image}
            alt={crop.name}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay for Title Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 pointer-events-none" />

          {/* Top Left Badge */}
          <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-white/60 shadow-xs">
            <span className="text-[10px] font-bold text-[#1a2c22] uppercase tracking-wider">
              {crop.badge}
            </span>
          </div>

          {/* Close Button Top Right */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-3.5 right-3.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center cursor-pointer transition-colors border border-white/20 shadow-sm"
            aria-label="Close crop details"
          >
            <X size={16} />
          </button>

          {/* Crop Title Bar Over Image */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal leading-tight mb-1 text-white drop-shadow-sm">
              {crop.name}
            </h2>
            <div className="flex items-center gap-2 text-xs text-emerald-200">
              {crop.scientificName && (
                <span className="italic">{crop.scientificName}</span>
              )}
              {crop.scientificName && <span>•</span>}
              <span className="font-medium text-emerald-100">Kanigiri Master Estate, AP</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7">
          {/* Overview Narrative */}
          <p className="text-[#55695c] text-xs sm:text-[13.5px] leading-relaxed mb-6 font-normal">
            {crop.overview}
          </p>

          {/* 4 Key Agricultural Characteristics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="bg-[#fcfaf6] p-3.5 sm:p-4 rounded-xl border border-[#e8e4db]">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={15} className="text-[#c4683c] shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#718274]">
                  Yield Profile
                </span>
              </div>
              <p className="text-xs sm:text-[12.5px] text-[#1a2c22] font-semibold m-0 leading-snug">
                {crop.roiHighlight}
              </p>
            </div>

            <div className="bg-[#fcfaf6] p-3.5 sm:p-4 rounded-xl border border-[#e8e4db]">
              <div className="flex items-center gap-2 mb-1">
                <Clock size={15} className="text-[#2d503b] shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#718274]">
                  Gestation Period
                </span>
              </div>
              <p className="text-xs sm:text-[12.5px] text-[#1a2c22] font-semibold m-0 leading-snug">
                {crop.gestation}
              </p>
            </div>

            <div className="bg-[#fcfaf6] p-3.5 sm:p-4 rounded-xl border border-[#e8e4db]">
              <div className="flex items-center gap-2 mb-1">
                <Award size={15} className="text-[#c4683c] shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#718274]">
                  Harvest Lifespan
                </span>
              </div>
              <p className="text-xs sm:text-[12.5px] text-[#1a2c22] font-semibold m-0 leading-snug">
                {crop.lifespan}
              </p>
            </div>

            <div className="bg-[#fcfaf6] p-3.5 sm:p-4 rounded-xl border border-[#e8e4db]">
              <div className="flex items-center gap-2 mb-1">
                <Droplets size={15} className="text-[#2d503b] shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#718274]">
                  Irrigation System
                </span>
              </div>
              <p className="text-xs sm:text-[12.5px] text-[#1a2c22] font-semibold m-0 leading-snug">
                {crop.irrigation}
              </p>
            </div>
          </div>

          {/* Key Advantages Checklist */}
          <div className="mb-6">
            <h4 className="font-serif text-[15px] sm:text-base text-[#1a2c22] font-semibold mb-3">
              Commercial Advantages &amp; Highlights
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {crop.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-[#2d503b] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-[13px] text-[#495b50] leading-snug font-normal">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#e8e4db] flex-wrap">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary btn-sm"
            >
              Close
            </button>

            <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
              <button
                type="button"
                onClick={handleWhatsAppCropInquiry}
                className="btn-secondary btn-sm"
              >
                <MessageSquare size={14} className="text-[#2d503b]" />
                <span>WhatsApp Inquiry</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenSiteVisit();
                }}
                className="btn-accent btn-sm uppercase tracking-wider"
              >
                <Calendar size={14} />
                <span>Book Farm Tour</span>
                <ArrowRight size={12} className="text-[#fde68a]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDetailModal;
