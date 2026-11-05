import React from 'react';
import { Camera, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../common';
import { aboutData } from '../../data/websiteData';

interface AboutStoryProps {
  onOpenSiteVisit: () => void;
  setActiveTab: (tab: string) => void;
}

export const AboutStory: React.FC<AboutStoryProps> = ({
  onOpenSiteVisit,
  setActiveTab
}) => {
  return (
    <section
      id="story"
      className="py-12 sm:py-16 md:py-20 bg-[#fcfaf6] border-b border-[#e8e4db] overflow-hidden"
      aria-labelledby="about-story-heading"
    >
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: CCTV Farm Monitoring Visual (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="fade-right">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e8e4db] bg-white shadow-xs group hover:border-[#2d503b]/30">
                <div className="relative overflow-hidden bg-[#ede8dc] h-[280px] sm:h-[360px] lg:h-[400px]">
                  <img
                    src={aboutData.cctvImage}
                    alt="Sukhibhava High-Tech Farm Monitoring & CCTV Surveillance"
                    className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating CCTV Badge */}
                  <div className="absolute bottom-4 left-4 bg-[#1a382b]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/20 text-white shadow-sm">
                    <Camera size={14} className="text-emerald-300" />
                    <span className="text-xs font-semibold">
                      24/7 CCTV &amp; Solar Gated Security
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Authentic Company Story (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-left">
              {/* Terracotta Accent Eyebrow */}
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#c4683c]">
                  WHO WE ARE
                </span>
              </div>

              {/* Editorial Serif Headline */}
              <h2
                id="about-story-heading"
                className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#1a2c22] leading-tight mb-4 tracking-[-0.02em]"
              >
                Transforming fertile land into <span className="italic font-serif text-[#3e684d]">generational wealth</span>.
              </h2>

              {/* Story Paragraphs */}
              <p className="text-[#495b50] text-[15px] sm:text-[15.5px] leading-relaxed mb-4 font-normal">
                {aboutData.companyHistory}
              </p>

              <p className="text-[#495b50] text-[15px] sm:text-[15.5px] leading-relaxed mb-6 font-normal">
                {aboutData.specialization}
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#2d503b] font-medium">
                  <CheckCircle2 size={16} className="text-[#c4683c] shrink-0" />
                  <span>Spot registration at Sub-Registrar</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#2d503b] font-medium">
                  <CheckCircle2 size={16} className="text-[#c4683c] shrink-0" />
                  <span>Automated Israeli drip fertigation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#2d503b] font-medium">
                  <CheckCircle2 size={16} className="text-[#c4683c] shrink-0" />
                  <span>Turnkey organic buyback contracts</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#2d503b] font-medium">
                  <CheckCircle2 size={16} className="text-[#c4683c] shrink-0" />
                  <span>100% Tax-Free Agricultural Returns</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex gap-4 sm:gap-5 flex-wrap">
                <button
                  type="button"
                  onClick={onOpenSiteVisit}
                  className="btn-accent btn-md uppercase tracking-wider group"
                >
                  <Calendar size={15} />
                  <span>Schedule Site Inspection</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-secondary btn-md uppercase tracking-wider group"
                >
                  <span>View Our Projects</span>
                  <ArrowRight size={14} className="text-[#c4683c]" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
