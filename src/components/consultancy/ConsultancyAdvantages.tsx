import React from 'react';
import { Sprout, Droplets, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '../common';

export interface AdvisoryAdvantage {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const ConsultancyAdvantages: React.FC = () => {
  const advisoryAdvantages: AdvisoryAdvantage[] = [
    {
      title: 'Hands-On Experience, Not Theory',
      desc: 'Our agronomists actively cultivate and manage 250+ acres of commercial farmland in Kanigiri, AP. Every recommendation is tested in real soil, weather, and market conditions.',
      icon: <Sprout size={20} className="text-[#2d503b]" />
    },
    {
      title: 'Turnkey Israeli Drip Engineering',
      desc: 'From water quality profiling to automated pressure-compensating drip lines and Venturi fertigation, we deliver precision water care that saves up to 60% water.',
      icon: <Droplets size={20} className="text-[#2d503b]" />
    },
    {
      title: 'Direct Institutional Buyback Tie-ups',
      desc: 'We eliminate middleman leakage with verified buyback linkages and on-site processing for Macadamia nuts, dried figs, and pure Geranium essential oil.',
      icon: <ShieldCheck size={20} className="text-[#2d503b]" />
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 border-b border-[#e8e4db]">
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[620px] mx-auto mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <span className="w-7 sm:w-8 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[10.5px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#c4683c]">
                PROVEN FIELD ADVANTAGE
              </span>
              <span className="w-7 sm:w-8 h-[1.5px] bg-[#c4683c]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-[34px] font-normal text-[#1a2c22] leading-tight mb-3">
              Why Landowners Choose Sukhibhava
            </h2>
            <p className="text-[#55695c] text-xs sm:text-[13.5px] leading-relaxed m-0 font-normal">
              Commercial agriculture requires more than theoretical advice. We offer hands-on, field-proven execution.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advisoryAdvantages.map((adv, i) => (
            <ScrollReveal
              key={i}
              animation="fade-up"
              delay={i * 90}
              className="h-full"
            >
              <div className="h-full bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#e8e4db] shadow-2xs hover:shadow-md hover:border-[#2d503b]/35 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[#f4f2ea] flex items-center justify-center mb-4 text-[#2d503b]">
                  {adv.icon}
                </div>
                <h3 className="font-serif text-[18px] font-semibold text-[#1a2c22] leading-snug mb-2">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#55695c] leading-relaxed font-normal m-0">
                  {adv.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

