import React from 'react';
import { Target, Compass, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../common';
import { aboutData } from '../../data/websiteData';

export const AboutVisionMission: React.FC = () => {
  const visionPoints = [
    'Become India’s premier managed organic agroforestry venture',
    'Champion 100% chemical-free sustainable soil stewardship',
    'Empower investors, local farmers, and rural communities',
    'Generate compounding, long-term generational wealth',
    'Pioneer automated Israeli drip irrigation and precision agronomy'
  ];

  const missionPoints = [
    'Develop high-value Macadamia, Turkish Fig & Geranium estates',
    'Deploy scientific organic agronomy and bio-nutrition protocols',
    'Maximize harvest productivity and multi-decade commercial returns',
    'Provide turnkey end-to-end farm maintenance and 24/7 security',
    'Ensure 100% legal transparency with spot-registered freehold deeds'
  ];

  return (
    <section
      className="py-10 sm:py-14 bg-[#fcfaf6] border-b border-[#e8e4db] overflow-hidden"
      aria-labelledby="vision-mission-heading"
    >
      <div className="w-full max-w-[1140px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[620px] mx-auto mb-8 sm:mb-10">
            {/* Terracotta Accent Eyebrow */}
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <span className="w-7 sm:w-8 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[10.5px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#c4683c]">
                GUIDING PRINCIPLES
              </span>
              <span className="w-7 sm:w-8 h-[1.5px] bg-[#c4683c]" />
            </div>

            <h2
              id="vision-mission-heading"
              className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-normal text-[#1a2c22] leading-tight mb-2 tracking-[-0.02em]"
            >
              Our vision &amp; <span className="italic font-serif text-[#3e684d]">mission</span>
            </h2>

            <p className="text-[#495b50] text-xs sm:text-[13.5px] leading-relaxed m-0 font-normal">
              Building an enduring institution dedicated to agricultural excellence, soil stewardship, and multi-generational prosperity.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Strategic Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-[960px] mx-auto items-stretch">
          {/* VISION CARD */}
          <ScrollReveal animation="fade-up" delay={0} className="h-full">
            <div className="h-full bg-white rounded-2xl p-5 sm:p-6 border border-[#e8e4db] shadow-2xs hover:shadow-md hover:border-[#2d503b]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Compact Header */}
                <div className="flex items-center justify-between gap-3 mb-3.5 pb-3 border-b border-[#f0ede6]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#f4f2ea] text-[#2d503b] flex items-center justify-center shrink-0">
                      <Target size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-wider uppercase text-[#c4683c] block leading-none mb-1">
                        STRATEGIC ASPIRATION
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl text-[#1a2c22] font-normal m-0 leading-tight">
                        Our Vision
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#718274] bg-[#f4f2ea] px-2 py-0.5 rounded">
                    HORIZON 2030+
                  </span>
                </div>

                {/* Core Description */}
                <p className="text-xs sm:text-[13px] text-[#495b50] leading-relaxed mb-3.5 m-0 font-normal">
                  {aboutData.vision}
                </p>

                {/* Checklist */}
                <ul className="list-none p-0 m-0 flex flex-col gap-2">
                  {visionPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-[12.5px] text-[#495b50] leading-snug">
                      <CheckCircle2 size={14} className="text-[#c4683c] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* MISSION CARD */}
          <ScrollReveal animation="fade-up" delay={150} className="h-full">
            <div className="h-full bg-white rounded-2xl p-5 sm:p-6 border border-[#e8e4db] shadow-2xs hover:shadow-md hover:border-[#2d503b]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Compact Header */}
                <div className="flex items-center justify-between gap-3 mb-3.5 pb-3 border-b border-[#f0ede6]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#f4f2ea] text-[#2d503b] flex items-center justify-center shrink-0">
                      <Compass size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-wider uppercase text-[#2d503b] block leading-none mb-1">
                        DAILY EXECUTION
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl text-[#1a2c22] font-normal m-0 leading-tight">
                        Our Mission
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#718274] bg-[#f4f2ea] px-2 py-0.5 rounded">
                    TURNKEY CARE
                  </span>
                </div>

                {/* Core Description */}
                <p className="text-xs sm:text-[13px] text-[#495b50] leading-relaxed mb-3.5 m-0 font-normal">
                  {aboutData.mission}
                </p>

                {/* Checklist */}
                <ul className="list-none p-0 m-0 flex flex-col gap-2">
                  {missionPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-[12.5px] text-[#495b50] leading-snug">
                      <CheckCircle2 size={14} className="text-[#2d503b] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
