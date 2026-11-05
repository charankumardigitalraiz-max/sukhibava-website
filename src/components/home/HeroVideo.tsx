import React from 'react';
import { ArrowRight, ShieldCheck, Sprout, Leaf, Users } from 'lucide-react';
import { ScrollReveal } from '../common';

interface HeroVideoProps {
  setActiveTab?: (tab: string) => void;
  onOpenSiteVisit?: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  setActiveTab,
  onOpenSiteVisit: _onOpenSiteVisit
}) => {
  const handleNav = (tabId: string) => {
    if (setActiveTab) {
      setActiveTab(tabId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = `/${tabId}`;
    }
  };

  return (
    <section
      className="relative w-full bg-[#fcfaf6] overflow-hidden min-h-[calc(100vh-74px)] lg:h-[calc(100vh-74px)] flex flex-col justify-between"
      aria-label="Sukhibhava Farmland Hero"
    >
      {/* Background Decorative Botanical Watermark (Bottom-Left) */}
      <svg
        className="absolute -bottom-8 -left-8 w-60 h-60 text-[#2d503b]/[0.07] pointer-events-none select-none -z-0"
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M45,155 C35,120 40,80 85,50 C130,20 165,30 175,65 C185,100 150,140 105,170 C60,200 55,190 45,155 Z" />
        <path d="M85,50 Q115,105 105,170" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M20,175 C10,145 20,110 55,90 C90,70 120,80 130,110 C140,140 110,170 75,190 C40,210 30,205 20,175 Z" opacity="0.6" />
      </svg>

      {/* 1. Main 2-Column Hero Area (Edge-to-Edge Full Screen Width, Attached to Header) */}
      <div className="flex-1 w-full flex flex-col justify-center relative z-10 pt-2 sm:pt-4 lg:pt-0 pb-4 sm:pb-6 lg:pb-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Typography & CTAs (6 cols) */}
          <div className="lg:col-span-6 pl-6 sm:pl-10 md:pl-14 lg:pl-12 xl:pl-20 pr-6 lg:pr-4 flex flex-col justify-center">
            {/* Terracotta Accent Eyebrow */}
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-4.5">
                <span className="w-8 sm:w-10 h-[2px] bg-[#c4683c]" />
                <span className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#c4683c]">
                  GOOD GROUND / GROWING FORWARD
                </span>
              </div>
            </ScrollReveal>

            {/* Main Editorial Serif Headline */}
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[44px] xl:text-[54px] 2xl:text-[62px] font-normal text-[#1a2c22] leading-[1.08] tracking-[-0.025em] mb-4 sm:mb-5">
                Land that gives your future room to grow.
              </h1>
            </ScrollReveal>

            {/* Paragraph Description */}
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-[#495b50] text-[15px] sm:text-base lg:text-[16px] xl:text-[17px] leading-relaxed max-w-[580px] mb-6 sm:mb-8 font-normal">
                Thoughtfully managed commercial farmlands, pure organic harvests, and grounded agronomy advisory. We help families and investors cultivate lasting wealth through 100% freehold registered plantation estates—growing high-demand Macadamia, Anjeer, and Geranium with automated Israeli drip irrigation and complete end-to-end management.
              </p>
            </ScrollReveal>

            {/* Action Buttons Row */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="flex items-center gap-5 sm:gap-7 flex-wrap">
                <button
                  type="button"
                  onClick={() => handleNav('projects')}
                  className="btn-primary btn-lg group"
                >
                  <span>Explore our projects</span>
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="btn-link text-sm sm:text-base"
                >
                  Meet the advisors
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Flush Against Right Edge with Curved Left Border (6 cols) */}
          <div className="lg:col-span-6 w-full h-[320px] sm:h-[420px] lg:h-[calc(100vh-170px)] lg:max-h-[640px] lg:min-h-[460px] pl-6 lg:pl-0 pr-0">
            <ScrollReveal animation="fade-left" delay={150} duration={1000} className="w-full h-full">
              <div className="relative w-full h-full rounded-l-3xl sm:rounded-l-[3rem] lg:rounded-l-[3.5rem] rounded-r-none overflow-hidden shadow-xs bg-[#ede8dc]">
                <img
                  src="/images/harvestly-hero-farmland.png"
                  alt="Scenic managed farmland estate in Kanigiri at sunrise"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* 2. Bottom Sub-Hero Feature Strip (Full Width Edge-to-Edge with Equal Columns) */}
      <div className="shrink-0 w-full border-t border-[#e8e4db] bg-[#fcfaf6]">
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-20 py-4 sm:py-4.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full divide-y sm:divide-y-0 sm:divide-x divide-[#e8e4db] items-center">
            {/* 1. Trust Motto */}
            <ScrollReveal animation="fade-up" delay={200} className="w-full">
              <div className="flex items-center gap-3 py-2 sm:py-0 sm:px-4 lg:px-6 first:pl-0">
                <div className="w-8 h-8 rounded-full border border-[#2d503b]/30 flex items-center justify-center text-[#2d503b] shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <span className="text-[#2d503b] text-xs sm:text-[13px] font-medium tracking-wide">
                  Built on trust, grown with intent.
                </span>
              </div>
            </ScrollReveal>

            {/* 2. Farmland Development */}
            <ScrollReveal animation="fade-up" delay={300} className="w-full">
              <button
                type="button"
                onClick={() => handleNav('projects')}
                className="flex items-center gap-3 py-2.5 sm:py-0 sm:px-4 lg:px-6 text-left group cursor-pointer bg-transparent border-none p-0 w-full hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 rounded-full border border-[#2d503b]/30 flex items-center justify-center text-[#2d503b] group-hover:bg-[#2d503b] group-hover:text-white transition-colors shrink-0">
                  <Sprout size={16} />
                </div>
                <span className="text-[#2d503b] text-xs sm:text-[12px] font-semibold tracking-wider uppercase group-hover:text-[#143e2b] transition-colors">
                  FARMLAND DEVELOPMENT
                </span>
              </button>
            </ScrollReveal>

            {/* 3. Organic Products */}
            <ScrollReveal animation="fade-up" delay={400} className="w-full">
              <button
                type="button"
                onClick={() => handleNav('organic-products')}
                className="flex items-center gap-3 py-2.5 sm:py-0 sm:px-4 lg:px-6 text-left group cursor-pointer bg-transparent border-none p-0 w-full hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 rounded-full border border-[#2d503b]/30 flex items-center justify-center text-[#2d503b] group-hover:bg-[#2d503b] group-hover:text-white transition-colors shrink-0">
                  <Leaf size={16} />
                </div>
                <span className="text-[#2d503b] text-xs sm:text-[12px] font-semibold tracking-wider uppercase group-hover:text-[#143e2b] transition-colors">
                  ORGANIC PRODUCTS
                </span>
              </button>
            </ScrollReveal>

            {/* 4. Agriculture Consultancy */}
            <ScrollReveal animation="fade-up" delay={500} className="w-full">
              <button
                type="button"
                onClick={() => handleNav('consultancy')}
                className="flex items-center gap-3 py-2.5 sm:py-0 sm:px-4 lg:px-6 text-left group cursor-pointer bg-transparent border-none p-0 w-full hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 rounded-full border border-[#2d503b]/30 flex items-center justify-center text-[#2d503b] group-hover:bg-[#2d503b] group-hover:text-white transition-colors shrink-0">
                  <Users size={16} />
                </div>
                <span className="text-[#2d503b] text-xs sm:text-[12px] font-semibold tracking-wider uppercase group-hover:text-[#143e2b] transition-colors">
                  AGRICULTURE CONSULTANCY
                </span>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
