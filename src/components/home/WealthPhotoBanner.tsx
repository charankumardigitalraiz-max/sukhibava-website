import React from 'react';
import { Quote, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '../common';

export const WealthPhotoBanner: React.FC = () => {
  return (
    <section
      className="relative py-16 md:py-20 text-white text-center overflow-hidden border-b border-slate-200"
      aria-label="Agricultural Wealth & Tax Freedom"
    >
      <img
        src="/images/luxury-farmland-aerial.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none scale-105 transition-transform duration-1000 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/90 to-emerald-950/95 pointer-events-none" />
      <div className="w-full max-w-[820px] mx-auto px-6 relative z-10">
        {/* Quote Icon */}
        <ScrollReveal animation="zoom-in" delay={0}>
          <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4 text-amber-200 shadow-sm">
            <Quote size={20} />
          </div>
        </ScrollReveal>

        {/* Heading with Editorial Serif Typography */}
        <ScrollReveal animation="fade-up" delay={100}>
          <h2 className="font-serif italic font-normal text-2xl md:text-[32px] leading-snug text-white mb-4 tracking-[-0.01em]">
            &ldquo;There is no better investment on earth <br />
            <span className="text-amber-200">than investing in real earth.&rdquo;</span>
          </h2>
        </ScrollReveal>

        {/* Content Paragraph */}
        <ScrollReveal animation="fade-up" delay={200}>
          <p className="text-emerald-100 text-[15px] leading-relaxed mx-auto mb-5 max-w-[680px] opacity-95">
            While physical gold remains static and urban concrete depreciates, fertile managed farmland compounds perpetual value through natural tree girth growth, high-value export harvests, and capital land appreciation.
          </p>
        </ScrollReveal>

        {/* Tax-Free Legal Protection Badge */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-white/15 border border-amber-200/35 text-[12.5px] text-amber-100 font-semibold shadow-xs">
            <ShieldCheck size={15} className="text-emerald-300" />
            <span>100% Tax-Free Agricultural Income • Section 10(1) of Indian Income Tax Act</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
