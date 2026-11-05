import React from 'react';
import { Calendar, ArrowRight, Trees } from 'lucide-react';
import { ScrollReveal } from '../common';

interface AboutHeroProps {
  onOpenSiteVisit: () => void;
  setActiveTab: (tab: string) => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({
  onOpenSiteVisit,
  setActiveTab
}) => {
  const handleNav = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full bg-[#fcfaf6] overflow-hidden border-b border-[#e8e4db] pt-10 sm:pt-10 lg:pt-10 pb-12 sm:pb-16"
      aria-label="About Sukhibhava Agro Heritage"
    >
      {/* Background Decorative Archival Seal Watermark */}
      <svg
        className="absolute top-0 right-0 w-80 h-80 text-[#2d503b]/[0.04] pointer-events-none select-none"
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="6 4" />
        <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M100,30 L100,170 M30,100 L170,100" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Main Asymmetrical Showcase Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heritage Story & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Terracotta Accent Eyebrow */}
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#c4683c]">
                  ESTABLISHED 2004 • ANDHRA PRADESH
                </span>
              </div>
            </ScrollReveal>

            {/* Editorial Serif Headline */}
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-normal text-[#1a2c22] leading-[1.2] tracking-[-0.02em] mb-4">
                Cultivating Productive Land &amp; <br />
                <span className="font-serif italic text-[#3e684d]">Sustainable Agricultural Wealth</span>
              </h1>
            </ScrollReveal>

            {/* Corporate Heritage Story from Original Website */}
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-[#55695c] text-sm sm:text-[14.5px] leading-relaxed max-w-[580px] mb-3 font-normal">
                We are <strong className="text-[#1a2c22] font-semibold">Sukhibhava Agro Projects Pvt. Ltd.</strong>, organic agriculture professionals with over 20 years of hands-on experience dedicated to transforming farmland into profitable, sustainable, and high-health-benefit agricultural ecosystems with strong market demand.
              </p>
              <p className="text-[#55695c] text-xs sm:text-[13.5px] leading-relaxed max-w-[580px] mb-7 font-normal">
                We specialize in commercial cultivation of <strong className="text-[#2d503b] font-semibold">Macadamia, Anjeer, and Geranium</strong>—combining modern farming technology with deep-rooted agricultural knowledge. Our farmland model empowers landowners, investors, and farmers to build lasting wealth through transparent management, scientific cultivation, and assured returns.
              </p>
            </ScrollReveal>

            {/* Action Buttons Row */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
                <button
                  type="button"
                  onClick={onOpenSiteVisit}
                  className="btn-primary btn-md group"
                >
                  <Calendar size={15} />
                  <span>Book Free Farm Tour</span>
                  <ArrowRight size={14} className="text-[#fde68a] transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('projects')}
                  className="btn-secondary btn-md group"
                >
                  <Trees size={15} className="text-[#2d503b] group-hover:text-[#c4683c] transition-colors" />
                  <span>Explore Kanigiri Venture</span>
                  <ArrowRight size={14} className="text-[#c4683c] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Brand Logo Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <ScrollReveal animation="zoom-in" delay={150} duration={800} className="w-full flex items-center justify-center lg:justify-end">
              <img
                src="/Sukhibava logo.png"
                alt="Sukhibhava Agro Projects"
                className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] h-auto object-contain select-none transition-transform duration-500 hover:scale-105"
              />
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Architectural Metrics Ribbon */}
        {/* <div className="mt-14 sm:mt-16 pt-8 sm:pt-10 border-t border-[#e8e4db]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {metrics.map((m, idx) => (
              <ScrollReveal
                key={m.label}
                animation="fade-up"
                delay={idx * 100}
                className="w-full"
              >
                <div className="flex flex-col">
                  <div className="w-8 h-8 rounded-full bg-[#f4f2ea] flex items-center justify-center text-[#2d503b] mb-2.5">
                    {m.icon}
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2c22] mb-0.5 leading-none tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#2d503b] uppercase tracking-wider mb-1">
                    {m.label}
                  </div>
                  <p className="text-[11.5px] sm:text-xs text-[#718274] m-0 font-normal leading-snug">
                    {m.sub}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutHero;
