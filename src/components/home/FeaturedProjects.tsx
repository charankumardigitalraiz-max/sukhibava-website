import React from 'react';
import { MapPin, ArrowRight, Sprout, Trees, Layers } from 'lucide-react';
import { ScrollReveal } from '../common';

interface FeaturedProjectsProps {
  setActiveTab?: (tab: string) => void;
  onOpenSiteVisit?: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
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

  const projects = [
    {
      id: 'green-valley',
      name: 'GREEN VALLEY ESTATE',
      location: 'KURNOOL, ANDHRA PRADESH',
      category: 'Managed farmland',
      image: '/images/home/proj-green-valley.jpg',
      icon: <Sprout size={15} className="text-[#2d503b]" />
    },
    {
      id: 'sunrise-orchards',
      name: 'SUNRISE ORCHARDS',
      location: 'PRAKASAM, ANDHRA PRADESH',
      category: 'Organic orchard',
      image: '/images/home/proj-sunrise-orchards.jpg',
      icon: <Trees size={15} className="text-[#2d503b]" />
    },
    {
      id: 'riverbend-farms',
      name: 'RIVERBEND FARMS',
      location: 'NELLORE, ANDHRA PRADESH',
      category: 'Future-ready plots',
      image: '/images/home/proj-riverbend-farms.jpg',
      icon: <Layers size={15} className="text-[#2d503b]" />
    },
    {
      id: 'kanigiri-agro-estate',
      name: 'KANIGIRI AGRO ESTATE',
      location: 'KANIGIRI, ANDHRA PRADESH',
      category: 'Managed agroforestry',
      image: '/images/home/proj-green-valley.jpg',
      icon: <Sprout size={15} className="text-[#2d503b]" />
    },
  ];

  return (
    <section className="relative w-full bg-[#fcfaf6] py-12 sm:py-16 border-b border-[#e8e4db] overflow-hidden">
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Top Annotation Tag */}
        {/* <div className="hidden lg:flex items-center justify-end text-[10.5px] font-semibold tracking-[0.22em] text-[#7a8a7d] uppercase mb-4">
          <div className="flex items-center gap-2">
            <span>LAND</span>
            <span>•</span>
            <span>PEOPLE</span>
            <span>•</span>
            <span>A BRIGHTER TOMORROW</span>
          </div>
        </div> */}

        {/* Section Header (No Circular Logo) */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[680px] mx-auto mb-12 sm:mb-14">
            {/* Terracotta Accent Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#c4683c]">
                FIND YOUR GROUND
              </span>
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1a2c22] leading-tight mb-3 tracking-[-0.02em]">
              Featured <span className="italic font-serif text-[#3e684d]">farm projects</span>
            </h2>

            <p className="text-[#495b50] text-sm sm:text-base leading-relaxed m-0 font-normal">
              Explore carefully selected opportunities, locations, and growing plans.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Featured Projects Grid (Properly Sized & Contained) */}
        <div className="w-full max-w-[1200px] mx-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-6 items-stretch">
            {projects.map((proj, idx) => (
              <ScrollReveal
                key={proj.id}
                animation="fade-up"
                delay={idx * 100}
                className="h-full"
              >
                <div
                  onClick={() => handleNav('projects')}
                  className="h-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e8e4db] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-[#2d503b]/30 cursor-pointer"
                >
                  <div>
                    {/* Photo Header with Smooth Hover Scale */}
                    <div className="relative h-[165px] sm:h-[180px] overflow-hidden bg-[#ede8dc]">
                      <img
                        src={proj.image}
                        alt={proj.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                      />
                    </div>

                    {/* Content Area with Exact Serif Typography */}
                    <div className="p-4 sm:p-5 pb-1">
                      <h3 className="text-xs sm:text-[13.5px] font-bold tracking-[0.11em] uppercase text-[#1e3d2b] mb-2 leading-snug">
                        {proj.name}
                      </h3>

                      <div className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px] text-[#718274] font-semibold uppercase">
                        <MapPin size={11} className="text-[#c4683c] shrink-0" />
                        <span>{proj.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tag & Arrow Row (Seamless, Amber Arrow) */}
                  <div className="px-4 sm:px-5 py-3.5 pt-1.5 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-6.5 h-6.5 rounded-full bg-[#f4f2ea] flex items-center justify-center shrink-0">
                        {proj.icon}
                      </div>
                      <span className="text-[11.5px] sm:text-xs font-normal text-[#516355]">
                        {proj.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-center text-[#c4683c] group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Centered Action Button */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="text-center">
            <button
              type="button"
              onClick={() => handleNav('projects')}
              className="btn-primary btn-sm group"
            >
              <span>View all projects</span>
              <ArrowRight size={13} className="text-[#fde68a] transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </ScrollReveal>

        {/* <div className="flex items-center justify-center gap-3 mt-12 sm:mt-14 text-[10.5px] sm:text-xs font-semibold tracking-[0.25em] text-[#85988a] uppercase">
          <span className="w-8 sm:w-12 h-[1px] bg-[#d9d5cb]" />
          <span>HEALTHY LAND • PROSPEROUS LIVES</span>
          <span className="w-8 sm:w-12 h-[1px] bg-[#d9d5cb]" />
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedProjects;
