import React from 'react';
import { Calendar, ArrowRight, MessageSquare, MapPin, Compass, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../../data/websiteData';
import { ScrollReveal } from '../common';

export interface FarmlandTourBannerProps {
  onOpenSiteVisit: () => void;
}

export const FarmlandTourBanner: React.FC<FarmlandTourBannerProps> = ({ onOpenSiteVisit }) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="w-full max-w-[840px] mx-auto px-6 sm:px-10">
        <ScrollReveal animation="fade-up">
          <div className="relative bg-white border border-[#e8e4db] rounded-2xl sm:rounded-3xl p-7 sm:p-10 text-center shadow-sm overflow-hidden">
            {/* Subtle Ambient Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#2d503b]/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-6 sm:w-8 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[10.5px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#c4683c]">
                INSPECT BEFORE YOU INVEST
              </span>
              <span className="w-6 sm:w-8 h-[1.5px] bg-[#c4683c]" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-serif font-normal text-[#1a2c22] leading-tight mb-3">
              Experience Kanigiri Estate In Person
            </h2>

            <p className="text-[#55695c] text-xs sm:text-[14px] leading-relaxed max-w-[580px] mx-auto mb-7 font-normal">
              Join our weekend guided farm tour. Inspect 250+ acres of active Macadamia, Fig, and Geranium plantations, verify sweet-water borewells, and meet our senior agronomists firsthand.
            </p>

            {/* 3 Reassurance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 max-w-[680px] mx-auto mb-8">
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#fcfaf6] border border-[#e8e4db]">
                <MapPin size={14} className="text-[#c4683c] shrink-0" />
                <span className="text-xs font-medium text-[#1a2c22]">
                  AC Pickup: Vijayawada, Guntur &amp; Ongole
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#fcfaf6] border border-[#e8e4db]">
                <Compass size={14} className="text-[#2d503b] shrink-0" />
                <span className="text-xs font-medium text-[#1a2c22]">
                  Guided Agronomist Walkthrough
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#fcfaf6] border border-[#e8e4db]">
                <ShieldCheck size={14} className="text-[#2d503b] shrink-0" />
                <span className="text-xs font-medium text-[#1a2c22]">
                  No Purchase Obligation
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
              <button
                type="button"
                onClick={onOpenSiteVisit}
                className="btn-accent btn-md group"
              >
                <Calendar size={16} />
                <span>Book Free Weekend Tour</span>
                <ArrowRight size={14} className="text-[#fde68a] transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20would%20like%20to%20know%20more%20about%20the%20Kanigiri%20Estate%20Weekend%20Tour.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary btn-md group"
              >
                <MessageSquare size={15} className="text-[#2d503b]" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FarmlandTourBanner;

