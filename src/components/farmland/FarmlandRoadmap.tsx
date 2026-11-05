import React from 'react';
import { Droplets, ShieldCheck, FileText, Sun, Sprout, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '../common';

export interface OwnershipStep {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const FarmlandRoadmap: React.FC = () => {
  const steps: OwnershipStep[] = [
    {
      step: '01',
      title: 'Soil & Water Profiling',
      desc: '16-parameter lab profiling of red sandy loam soil and sweet water borewell quality verification.',
      icon: <Droplets size={17} />
    },
    {
      step: '02',
      title: 'Title & EC Verification',
      desc: '30-year Encumbrance Certificate (EC), digital revenue passbook, and 100% litigation-free title review.',
      icon: <ShieldCheck size={17} />
    },
    {
      step: '03',
      title: 'Direct Sale Deed Registration',
      desc: 'Individual Sale Deed registered directly in your name at the local Sub-Registrar Office.',
      icon: <FileText size={17} />
    },
    {
      step: '04',
      title: 'Fencing & Avenue Roads',
      desc: 'Concrete boundary markers, 24/7 electrified solar fencing, and 30ft internal avenue roads.',
      icon: <Sun size={17} />
    },
    {
      step: '05',
      title: 'Israeli Drip & Sapling Setup',
      desc: 'Pressure-compensating drip network delivering precision water and certified commercial saplings.',
      icon: <Sprout size={17} />
    },
    {
      step: '06',
      title: 'Turnkey Care & Buybacks',
      desc: '20+ years complete agronomy management, seasonal harvesting, and institutional buyback linkages.',
      icon: <TrendingUp size={17} />
    }
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 border-b border-[#e8e4db] bg-white" aria-labelledby="roadmap-heading">
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[580px] mx-auto mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#c4683c]">
                TRANSPARENT PROCESS
              </span>
              <span className="w-6 h-[1.5px] bg-[#c4683c]" />
            </div>
            <h2 id="roadmap-heading" className="font-serif text-2xl sm:text-3xl font-normal text-[#1a2c22] leading-tight mb-2">
              Farmland Ownership Roadmap
            </h2>
            <p className="text-[#55695c] text-xs sm:text-[13px] leading-relaxed m-0 font-normal">
              A transparent 6-stage framework from legal title verification to lifetime turnkey management and harvest buybacks.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {steps.map((s, idx) => (
            <ScrollReveal
              key={idx}
              animation="fade-up"
              delay={idx * 60}
              className="h-full"
            >
              <div className="h-full bg-[#fcfaf6] rounded-2xl p-5 border border-[#e8e4db] shadow-2xs hover:shadow-md hover:border-[#2d503b]/35 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#e8e4db] text-[#2d503b] group-hover:bg-[#2d503b] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-2xs">
                      {s.icon}
                    </div>
                    <span className="text-[10px] font-bold text-[#c4683c] bg-[#c4683c]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      STEP {s.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-[15.5px] text-[#1a2c22] font-semibold mb-1 leading-snug group-hover:text-[#2d503b] transition-colors">
                    {s.title}
                  </h3>

                  <p className="m-0 text-xs text-[#55695c] leading-relaxed font-normal">
                    {s.desc}
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

export default FarmlandRoadmap;
