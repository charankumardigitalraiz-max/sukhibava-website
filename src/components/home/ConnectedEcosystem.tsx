import React from 'react';
import { Sprout, Leaf, Users, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common';

interface ConnectedEcosystemProps {
  setActiveTab?: (tab: string) => void;
}

export const ConnectedEcosystem: React.FC<ConnectedEcosystemProps> = ({ setActiveTab }) => {
  const handleNav = (tabId: string) => {
    if (setActiveTab) {
      setActiveTab(tabId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = `/${tabId}`;
    }
  };

  const ecosystemItems = [
    {
      id: 'farmland-development',
      title: 'FARMLAND DEVELOPMENT',
      desc: 'Thoughtful land development for productive, sustainable farms.',
      image: '/images/home/eco-farmland-dev.jpg',
      icon: <Sprout size={16} className="text-[#2d503b]" />,
      tab: 'projects'
    },
    {
      id: 'organic-products',
      title: 'ORGANIC PRODUCTS',
      desc: 'Pure, natural and locally sourced for healthier living.',
      image: '/images/home/eco-organic-products.jpg',
      icon: <Leaf size={16} className="text-[#2d503b]" />,
      tab: 'organic-products'
    },
    {
      id: 'agri-consultancy',
      title: 'AGRICULTURE CONSULTANCY',
      desc: 'Expert guidance for smarter, more profitable farming.',
      image: '/images/home/eco-agri-consultancy.jpg',
      icon: <Users size={16} className="text-[#2d503b]" />,
      tab: 'consultancy'
    }
  ];

  return (
    <section className="relative w-full bg-[#fcfaf6] py-12 sm:py-16 border-b border-[#e8e4db] overflow-hidden">
      {/* Decorative Corner Foliage Silhouettes */}
      <svg
        className="absolute top-0 left-0 w-36 sm:w-48 h-36 sm:h-48 text-[#2d503b]/[0.08] pointer-events-none select-none"
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0,0 Q30,10 40,40 Q10,30 0,0 Z" />
        <path d="M0,0 Q15,40 50,50 Q40,15 0,0 Z" opacity="0.7" />
        <path d="M0,20 Q35,50 60,80 Q50,35 0,20 Z" opacity="0.5" />
      </svg>

      <svg
        className="absolute bottom-0 right-0 w-36 sm:w-48 h-36 sm:h-48 text-[#2d503b]/[0.08] pointer-events-none select-none rotate-180"
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0,0 Q30,10 40,40 Q10,30 0,0 Z" />
        <path d="M0,0 Q15,40 50,50 Q40,15 0,0 Z" opacity="0.7" />
      </svg>

      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Top Annotation Tags */}
        {/* <div className="hidden lg:flex items-center justify-between text-[10.5px] font-semibold tracking-[0.22em] text-[#7a8a7d] uppercase mb-4">
          <div className="flex items-center gap-2">
            <span>PEOPLE</span>
            <span>•</span>
            <span>LAND</span>
            <span>•</span>
            <span>FOOD</span>
            <span>•</span>
            <span>A BETTER TOMORROW</span>
          </div>
          <div className="flex items-center gap-2">
            <span>CULTIVATING A BRIGHTER TOMORROW</span>
          </div>
        </div> */}

        {/* Section Header (No Circular Logo) */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[680px] mx-auto mb-12 sm:mb-14">
            {/* Terracotta Accent Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#c4683c]">
                WHAT WE GROW
              </span>
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1a2c22] leading-tight mb-3 tracking-[-0.02em]">
              One connected <span className="italic font-serif text-[#3e684d]">ecosystem</span>
            </h2>

            <p className="text-[#495b50] text-sm sm:text-base leading-relaxed m-0 font-normal">
              From land development to organic living, we help good ideas take root.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Ecosystem Cards (Properly Sized & Contained) */}
        <div className="w-full max-w-[1040px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {ecosystemItems.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                animation="fade-up"
                delay={idx * 150}
                className="h-full"
              >
                <div
                  onClick={() => handleNav(item.tab)}
                  className="h-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e8e4db] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-[#2d503b]/30 cursor-pointer"
                >
                  <div>
                    {/* Photo Area Filling Full Card Width with Floating Badge */}
                    <div className="relative w-full h-[165px] sm:h-[180px] bg-[#ede8dc]">
                      <div className="w-full h-full overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                        />
                      </div>
                      {/* Floating Circular Icon Badge Overlapping Image Bottom */}
                      <div className="absolute -bottom-4.5 left-1/2 -translate-x-1/2 w-9.5 h-9.5 rounded-full bg-[#fcfaf6] border-2 border-white shadow-sm flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                    </div>

                    {/* Title & Description with Compact Elegant Typography */}
                    <div className="text-center px-4 sm:px-5 pt-6 pb-2">
                      <h3 className="text-xs sm:text-[13.5px] font-bold tracking-[0.11em] uppercase text-[#1e3d2b] mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[11.5px] sm:text-xs text-[#55695c] leading-relaxed mb-3 font-normal max-w-[250px] mx-auto">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom CTA Button (Seamless without dividing line, Amber Arrow) */}
                  <div className="text-center px-4 pb-5 pt-0 mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold tracking-[0.18em] text-[#244634] group-hover:text-[#142e20] group-hover:gap-2 transition-all uppercase">
                      <span>LEARN MORE</span>
                      <ArrowRight size={12} className="text-[#c4683c] transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom Motto */}
        {/* <div className="flex items-center justify-center gap-3 mt-12 sm:mt-16 text-[10.5px] sm:text-xs font-semibold tracking-[0.25em] text-[#85988a] uppercase">
          <span className="w-8 sm:w-12 h-[1px] bg-[#d9d5cb]" />
          <span>ROOTED IN A HEALTHIER TOMORROW</span>
          <span className="w-8 sm:w-12 h-[1px] bg-[#d9d5cb]" />
        </div> */}
      </div>
    </section>
  );
};

export default ConnectedEcosystem;
