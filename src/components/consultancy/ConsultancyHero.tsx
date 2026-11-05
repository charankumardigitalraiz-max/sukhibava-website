import React from 'react';
import { ArrowRight, Sprout } from 'lucide-react';
import { companyInfo } from '../../data/websiteData';
import { ScrollReveal } from '../common';

export interface ConsultancyHeroProps {
  onScrollToForm: () => void;
}

export const ConsultancyHero: React.FC<ConsultancyHeroProps> = ({ onScrollToForm }) => {
  return (
    <section className="py-10 sm:py-14 lg:py-16 border-b border-[#e8e4db] bg-[#fcfaf6]">
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Clean & Balanced Information (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal animation="fade-up">
              {/* Location & Heritage Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[1.5px] bg-[#c4683c]" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[#c4683c]">
                  KANIGIRI &amp; PRAKASAM REGION • 20+ YEARS AGRONOMY
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-normal text-[#1a2c22] leading-[1.2] tracking-[-0.02em] mb-3.5">
                Farmland Advisory &amp; <br />
                <span className="font-serif italic text-[#3e684d]">Orchard Management</span>
              </h1>

              {/* Concise Informative Intro */}
              <p className="text-[#55695c] text-sm sm:text-[14.5px] leading-relaxed max-w-[540px] mb-6 font-normal">
                Turnkey agronomy advisory guiding landowners from scientific soil profiling and sweet-water testing to automated Israeli drip irrigation, certified saplings, and guaranteed harvest buybacks.
              </p>

              {/* Key Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[560px] mb-7 p-3 rounded-2xl bg-white border border-[#e8e4db] shadow-2xs">
                <div className="text-center p-1.5">
                  <span className="font-serif text-xl sm:text-2xl text-[#1a2c22] font-bold block leading-tight">250+</span>
                  <span className="text-[11px] text-[#718274] font-medium block mt-0.5">Acres Managed</span>
                </div>
                <div className="text-center p-1.5 border-l border-[#e8e4db]">
                  <span className="font-serif text-xl sm:text-2xl text-[#1a2c22] font-bold block leading-tight">20+</span>
                  <span className="text-[11px] text-[#718274] font-medium block mt-0.5">Years Agronomy</span>
                </div>
                <div className="text-center p-1.5 sm:border-l border-[#e8e4db]">
                  <span className="font-serif text-xl sm:text-2xl text-[#1a2c22] font-bold block leading-tight">3 Core</span>
                  <span className="text-[11px] text-[#718274] font-medium block mt-0.5">Commercial Crops</span>
                </div>
                <div className="text-center p-1.5 border-l border-[#e8e4db]">
                  <span className="font-serif text-xl sm:text-2xl text-[#1a2c22] font-bold block leading-tight">100%</span>
                  <span className="text-[11px] text-[#718274] font-medium block mt-0.5">Assured Buybacks</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                <button
                  type="button"
                  onClick={onScrollToForm}
                  className="btn-primary btn-lg group"
                >
                  <span>Request Farmland Consultation</span>
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20would%20like%20to%20consult%20regarding%20my%20farmland.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link text-sm sm:text-base inline-flex items-center gap-1.5"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Constantly Balanced Image Showcase (5 cols) */}
          <div className="lg:col-span-5 h-full">
            <ScrollReveal animation="fade-up" delay={150} className="h-full">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e8e4db] shadow-sm bg-[#ede8dc] h-[340px] sm:h-[370px] lg:h-full lg:min-h-[360px] flex flex-col justify-end">
                <img
                  src="/images/consultancy-hero-expert.jpg"
                  alt="Senior Agricultural Consultant in Field"
                  className="absolute inset-0 w-full h-full object-cover object-top block"
                />
                {/* Subtle Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2c22]/75 via-[#1a2c22]/20 to-transparent pointer-events-none" />

                {/* Top-Right Active Field Badge */}
                <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 border border-[#e8e4db] shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-semibold text-[#1a2c22] uppercase tracking-wide">
                    Field Advisory
                  </span>
                </div>

                {/* Bottom Glassmorphic Overlay Badge */}
                <div className="relative z-10 m-3.5 sm:m-4 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-[#e8e4db] shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2d503b] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Sprout size={20} className="text-[#fde68a]" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] sm:text-[13.5px] font-bold text-[#1a2c22] font-serif leading-tight">
                        Senior Field Agronomist
                      </span>
                      <span className="text-[10px] font-semibold text-[#c4683c] uppercase tracking-wider bg-[#f4f2ea] px-1.5 py-0.5 rounded">
                        20+ Yrs
                      </span>
                    </div>
                    <span className="text-[11px] text-[#55695c] block mt-0.5 font-normal truncate">
                      Kanigiri Estate • AP &amp; Telangana Farmland
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyHero;
