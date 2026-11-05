import React from 'react';
import { Calendar } from 'lucide-react';
import { ScrollReveal } from '../common';
import { ProcessStep } from '../../types';

const howItWorks: ProcessStep[] = [
  {
    step: '01',
    title: 'Select Unit',
    desc: 'Choose between 25 Cents, 50 Cents, or 1 Acre based on your wealth goals & portfolio preferences.'
  },
  {
    step: '02',
    title: 'Free Farm Tour',
    desc: 'Join our complimentary weekend AC vehicle inspection tour from Vijayawada, Guntur, or Ongole.'
  },
  {
    step: '03',
    title: 'Legal Clearances',
    desc: 'Inspect 30-year Encumbrance Certificate (EC), digital revenue records, soil reports & sweet water lab tests.'
  },
  {
    step: '04',
    title: 'Spot Registration',
    desc: 'The land is directly registered in your name as an individual Sale Deed at the local Sub-Registrar Office.'
  },
  {
    step: '05',
    title: 'Planting & Drip',
    desc: 'Our agronomists install Israeli pressure-compensating drip pipes and plant high-yield certified mother saplings.'
  },
  {
    step: '06',
    title: 'Lifelong Care & Harvests',
    desc: 'We care, prune, biological soil feed, harvest, and buy back produce with 100% tax-free agricultural payouts.'
  }
];

interface OwnershipProcessProps {
  onOpenSiteVisit: () => void;
}

export const OwnershipProcess: React.FC<OwnershipProcessProps> = ({ onOpenSiteVisit }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#fcfaf6] border-b border-[#e8e4db] overflow-hidden" aria-labelledby="process-heading">
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10">
        {/* Section Header (Consistent Editorial Style) */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[680px] mx-auto mb-12 sm:mb-14">
            {/* Terracotta Accent Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#c4683c]">
                OWNERSHIP ROADMAP
              </span>
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
            </div>

            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1a2c22] leading-tight mb-3 tracking-[-0.02em]"
            >
              A seamless path to <span className="italic font-serif text-[#3e684d]">farmland ownership</span>
            </h2>

            <p className="text-[#495b50] text-sm sm:text-base leading-relaxed m-0 font-normal">
              A legally transparent, end-to-end journey from initial farm tour to spot registration and lifetime harvest care.
            </p>
          </div>
        </ScrollReveal>

        {/* 6-Step Visual Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {howItWorks.map((st, idx) => (
            <ScrollReveal
              key={st.step}
              animation="fade-up"
              delay={(idx % 3) * 150}
            >
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-[#2d503b] text-white flex items-center justify-center text-[12px] font-bold shrink-0 shadow-sm">
                  {st.step}
                </div>
                <div>
                  <h3 className="font-serif text-[16px] text-[#1e3d2b] font-bold mb-1 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-[#55695c] text-[12.5px] sm:text-[13px] leading-relaxed m-0 font-normal">
                    {st.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Site Tour CTA */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={onOpenSiteVisit}
              className="btn-accent btn-md uppercase tracking-wider"
            >
              <Calendar size={14} />
              <span>Book Your Free Weekend Inspection Tour</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
