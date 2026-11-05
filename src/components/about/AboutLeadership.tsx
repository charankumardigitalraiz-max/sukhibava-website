import React from 'react';
import { TrendingUp, Award } from 'lucide-react';
import { ScrollReveal } from '../common';
import { leadershipData } from '../../data/websiteData';

interface AboutLeadershipProps {
  onOpenSiteVisit?: () => void;
  setActiveTab?: (tab: string) => void;
}

export const AboutLeadership: React.FC<AboutLeadershipProps> = () => {
  const md = leadershipData[0];
  const marketingExec = leadershipData[1];

  return (
    <section
      id="profiles"
      className="py-12 sm:py-16 md:py-20 bg-[#fcfaf6] border-b border-[#e8e4db] overflow-hidden"
      aria-labelledby="leadership-heading"
    >
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[640px] mx-auto mb-10 sm:mb-12">
            {/* Terracotta Accent Eyebrow */}
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-7 sm:w-8 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[10.5px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#c4683c]">
                EXECUTIVE PROFILES
              </span>
              <span className="w-7 sm:w-8 h-[1.5px] bg-[#c4683c]" />
            </div>

            <h2
              id="leadership-heading"
              className="text-2xl sm:text-3xl lg:text-[38px] font-serif font-normal text-[#1a2c22] leading-tight mb-2.5 tracking-[-0.02em]"
            >
              Leadership &amp; advisory <span className="italic font-serif text-[#3e684d]">team</span>
            </h2>

            <p className="text-[#495b50] text-xs sm:text-[13.5px] leading-relaxed m-0 font-normal">
              Senior agricultural board and dedicated investor advisory specialists committed to your long-term farmland success.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1040px] mx-auto items-stretch">
          {/* Profile 1: Managing Director */}
          <ScrollReveal animation="fade-up" delay={0} className="h-full">
            <div className="h-full bg-white rounded-md border border-[#e8e4db] p-6 sm:p-7 shadow-2xs hover:shadow-lg transition-all duration-300 group hover:border-[#2d503b]/30 flex flex-col justify-start">
              {/* Header with Avatar & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border border-[#e8e4db] shadow-2xs bg-[#ede8dc]">
                  <img
                    src={md.image}
                    alt="Managing Director"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f4f2ea] border border-[#e8e4db] text-[10px] font-bold tracking-wider uppercase text-[#2d503b] mb-1">
                    <Award size={11} className="text-[#c4683c]" />
                    Executive Board
                  </span>
                  <h3 className="font-serif text-xl sm:text-[22px] text-[#1a2c22] font-normal my-0.5 leading-snug">
                    Managing Director
                  </h3>
                  <span className="text-xs text-[#718274] font-medium block leading-snug">
                    Farm Operations &amp; Agronomy Management
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#55695c] text-[12.5px] sm:text-[13px] leading-relaxed m-0 font-normal">
                {md.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Profile 2: Kanka Prasad */}
          <ScrollReveal animation="fade-up" delay={150} className="h-full">
            <div className="h-full bg-white rounded-3xl border border-[#e8e4db] p-6 sm:p-7 shadow-2xs hover:shadow-lg transition-all duration-300 group hover:border-[#2d503b]/30 flex flex-col justify-start">
              {/* Header with Avatar & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border border-[#e8e4db] shadow-2xs bg-[#ede8dc]">
                  <img
                    src={marketingExec.image}
                    alt={marketingExec.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f4f2ea] border border-[#e8e4db] text-[10px] font-bold tracking-wider uppercase text-[#c4683c] mb-1">
                    <TrendingUp size={11} className="text-[#c4683c]" />
                    Investor Advisory
                  </span>
                  <h3 className="font-serif text-xl sm:text-[22px] text-[#1a2c22] font-normal my-0.5 leading-snug">
                    {marketingExec.name}
                  </h3>
                  <span className="text-xs text-[#718274] font-medium block leading-snug">
                    Sales Executive &amp; Investor Consultation
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#55695c] text-[12.5px] sm:text-[13px] leading-relaxed m-0 font-normal">
                {marketingExec.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;
