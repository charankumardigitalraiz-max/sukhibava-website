import React from 'react';
import { CheckCircle2, FlaskConical, Trees, Droplets, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '../common';

export interface ConsultancyPillar {
  id: string;
  stage: string;
  title: string;
  category: string;
  summary: string;
  deliverable: string;
  image: string;
  icon: React.ReactNode;
}

export interface ConsultancyPillarsProps {
  onSelectStage?: (stageTitle: string) => void;
}

export const ConsultancyPillars: React.FC<ConsultancyPillarsProps> = ({ onSelectStage }) => {
  const consultancyPillars: ConsultancyPillar[] = [
    {
      id: 'soil',
      stage: 'STAGE 01',
      title: 'Soil Profiling & Bio-Conversion',
      category: 'Soil Science',
      summary: '16-parameter sweet-water and soil testing, biological pH balancing, and native Jeevamrutham bio-conversion.',
      deliverable: '16-Parameter Soil Report & Biochar Plan',
      image: '/images/soil-testing-organic.jpg',
      icon: <FlaskConical size={14} />
    },
    {
      id: 'crops',
      stage: 'STAGE 02',
      title: 'Commercial Crop Blueprinting',
      category: 'Crop Architecture',
      summary: 'High-density multi-decade layouts engineered specifically for Turkish Figs, Macadamia, and Aromatic Geranium.',
      deliverable: 'Certified Saplings & Acreage Blueprints',
      image: '/images/Fresh-and-ripe-figs-showcase.png',
      icon: <Trees size={14} />
    },
    {
      id: 'irrigation',
      stage: 'STAGE 03',
      title: 'Precision Drip & Automation',
      category: 'Smart Irrigation',
      summary: 'Israeli pressure-compensating micro-drip networks with Venturi fertigation saving up to 60% sweet water.',
      deliverable: 'Automated Micro-Drip & Fertigation Setup',
      image: '/images/precision-drip-system.jpg',
      icon: <Droplets size={14} />
    },
    {
      id: 'buyback',
      stage: 'STAGE 04',
      title: 'Guaranteed Offtake & Buybacks',
      category: 'Market Linkages',
      summary: 'Direct farm-gate aggregation under APEDA export standards, on-site oil distillation, and zero middleman leakage.',
      deliverable: 'Signed Offtake Contracts & APEDA Standards',
      image: '/gallery/geranium-crop-examination.jpg',
      icon: <TrendingUp size={14} />
    }
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 border-b border-[#e8e4db] bg-[#fcfaf6]" aria-labelledby="pillars-heading">
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[580px] mx-auto mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#c4683c]">
                4-STAGE STRUCTURED FRAMEWORK
              </span>
              <span className="w-6 h-[1.5px] bg-[#c4683c]" />
            </div>
            <h2 id="pillars-heading" className="font-serif text-2xl sm:text-3xl font-normal text-[#1a2c22] leading-tight mb-2">
              Comprehensive Farmland Advisory
            </h2>
            <p className="text-[#55695c] text-xs sm:text-[13px] leading-relaxed m-0 font-normal">
              A scientific, step-by-step roadmap mitigating agronomy risks and maximizing compounding commercial yields.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Compact & Beautiful Pillar Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {consultancyPillars.map((p, idx) => (
            <ScrollReveal
              key={p.id}
              animation="fade-up"
              delay={idx * 70}
              className="h-full"
            >
              <div
                onClick={() => onSelectStage?.(p.title)}
                className="h-full bg-white rounded-2xl border border-[#e8e4db] shadow-2xs hover:shadow-md hover:border-[#2d503b]/40 transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer"
              >
                {/* Compact Header Image with Dual Badges */}
                <div className="relative h-[140px] sm:h-[150px] shrink-0 overflow-hidden bg-[#ede8dc]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Top-Left Stage Badge */}
                  <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md text-[#2d503b] text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border border-[#e8e4db] shadow-2xs">
                    {p.stage}
                  </span>

                  {/* Top-Right Category Pill */}
                  <span className="absolute top-2.5 right-2.5 bg-[#1a2c22]/85 backdrop-blur-md text-[#fde68a] text-[9.5px] font-semibold px-2 py-0.5 rounded-md shadow-2xs">
                    {p.category}
                  </span>
                </div>

                {/* Card Content: Flex-1 to push bottom strip flush to the bottom */}
                <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1 text-[#c4683c]">
                      <span className="w-5 h-5 rounded-md bg-[#f4f2ea] flex items-center justify-center text-[#2d503b] shrink-0">
                        {p.icon}
                      </span>
                      <span className="text-[10px] font-bold tracking-wider uppercase">
                        {p.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-[15.5px] font-semibold text-[#1a2c22] leading-snug group-hover:text-[#2d503b] transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-[11.5px] text-[#55695c] leading-relaxed font-normal mt-1.5 mb-3 line-clamp-3">
                      {p.summary}
                    </p>
                  </div>

                  {/* Key Deliverable Strip: Aligned at bottom */}
                  <div className="mt-3 bg-[#fcfaf6] rounded-sm border border-[#e8e4db] p-2 sm:p-2.5 flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-[#2d503b] shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <span className="text-[9.5px] text-[#718274] uppercase tracking-wider block leading-tight mb-0.5">Key Deliverable</span>
                      <span className="text-[11px] font-semibold text-[#2d503b] leading-snug block">
                        {p.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultancyPillars;
