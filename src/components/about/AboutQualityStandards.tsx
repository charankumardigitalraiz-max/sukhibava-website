import React from 'react';
import { ShieldCheck, FileCheck, Droplets, Sprout } from 'lucide-react';
import { ScrollReveal } from '../common';

interface ValuePillar {
  step: string;
  tag: string;
  title: string;
  desc: string;
  highlight: string;
  icon: React.ReactNode;
}

const coreValues: ValuePillar[] = [
  {
    step: '01',
    tag: 'LEGAL SECURITY',
    title: '100% Freehold Ownership',
    desc: 'Direct spot registration and individual digital passbook mutation at the local Sub-Registrar Office with 30-year clear legal titles.',
    highlight: 'Spot Registered Deed',
    icon: <FileCheck size={22} />
  },
  {
    step: '02',
    tag: 'AGRI TECHNOLOGY',
    title: 'Precision Israeli Agronomy',
    desc: 'Automated pressure-compensating drip irrigation and liquid Jeevamrutham root-zone delivery designed for optimal yield and water conservation.',
    highlight: 'Automated Drip Care',
    icon: <Droplets size={22} />
  },
  {
    step: '03',
    tag: 'SOIL STEWARDSHIP',
    title: 'Organic Soil Health First',
    desc: 'Zero harmful chemical pesticides. Deep bio-conversion with green manure, organic carbon enrichment, and biological soil conditioners.',
    highlight: 'APEDA Bio-Organic',
    icon: <Sprout size={22} />
  },
  {
    step: '04',
    tag: 'ASSET PROTECTION',
    title: 'Lifetime Asset Security',
    desc: '24/7 solar-powered electrified security perimeter fencing, gated security checkpoints, CCTV surveillance, and turnkey organic buyback agreements.',
    highlight: '24/7 CCTV & Security',
    icon: <ShieldCheck size={22} />
  }
];

export const AboutQualityStandards: React.FC = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 bg-[#fcfaf6] border-b border-[#e8e4db] overflow-hidden"
      aria-labelledby="quality-standards-heading"
    >
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[660px] mx-auto mb-10 sm:mb-12">
            {/* Terracotta Accent Eyebrow */}
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-7 sm:w-8 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[10.5px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#c4683c]">
                INSTITUTIONAL COMMITMENTS
              </span>
              <span className="w-7 sm:w-8 h-[1.5px] bg-[#c4683c]" />
            </div>

            <h2
              id="quality-standards-heading"
              className="text-2xl sm:text-3xl lg:text-[38px] font-serif font-normal text-[#1a2c22] leading-tight mb-2.5 tracking-[-0.02em]"
            >
              The Sukhibhava quality <span className="italic font-serif text-[#3e684d]">standards</span>
            </h2>

            <p className="text-[#495b50] text-xs sm:text-[13.5px] leading-relaxed m-0 font-normal">
              Every acre we develop adheres to strict scientific agronomy protocols, organic bio-integrity, and iron-clad legal security.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Standards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {coreValues.map((val, idx) => (
            <ScrollReveal
              key={idx}
              animation="fade-up"
              delay={idx * 100}
              className="h-full"
            >
              <div className="h-full bg-white p-6 sm:p-3 rounded-md border border-[#e8e4db] shadow-2xs hover:shadow-xl hover:border-[#2d503b]/40 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
                {/* Top Glowing Accent Line on Hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2d503b] via-[#c4683c] to-[#2d503b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />

                <div>
                  {/* Top Row: Icon Badge + Index Watermark */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#f4f2ea] text-[#2d503b] group-hover:bg-[#2d503b] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs">
                      {val.icon}
                    </div>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1a2c22]/15 group-hover:text-[#c4683c]/35 transition-colors select-none">
                      {val.step}
                    </span>
                  </div>

                  {/* Category Eyebrow */}
                  <span className="text-[10px] text-[#c4683c] font-bold uppercase tracking-[0.18em] block mb-1.5">
                    {val.tag}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-[17px] sm:text-[18px] text-[#1a2c22] font-normal mb-2 leading-snug group-hover:text-[#2d503b] transition-colors">
                    {val.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#55695c] text-[12.5px] sm:text-[13px] leading-relaxed m-0 font-normal">
                    {val.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutQualityStandards;
