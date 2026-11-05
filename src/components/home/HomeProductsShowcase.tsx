import React, { useState } from 'react';
import { LayoutGrid, Leaf, Package, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common';

interface HomeProductsShowcaseProps {
  setActiveTab?: (tab: string) => void;
}

export const HomeProductsShowcase: React.FC<HomeProductsShowcaseProps> = ({ setActiveTab }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'wellness' | 'pantry'>('all');

  const handleNav = (tabId: string) => {
    if (setActiveTab) {
      setActiveTab(tabId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = `/${tabId}`;
    }
  };

  const products = [
    {
      id: 'cold-pressed-oil',
      name: 'COLD-PRESSED OIL',
      category: 'pantry',
      image: '/images/home/prod-cold-pressed-oil.jpg'
    },
    {
      id: 'herbal-wellness',
      name: 'HERBAL WELLNESS',
      category: 'wellness',
      image: '/images/home/prod-herbal-wellness.jpg'
    },
    {
      id: 'fresh-honey',
      name: 'FARM FRESH HONEY',
      category: 'pantry',
      image: '/images/home/prod-fresh-honey.jpg'
    },
    {
      id: 'organic-grains',
      name: 'ORGANIC GRAINS',
      category: 'pantry',
      image: '/images/home/prod-organic-grains.jpg'
    }
  ];

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <section className="relative w-full bg-[#fcfaf6] py-12 sm:py-16 border-b border-[#e8e4db] overflow-hidden">
      {/* Decorative Botanical Corner Leaf Silhouette */}
      <svg
        className="absolute top-0 left-0 w-44 sm:w-56 h-44 sm:h-56 text-[#2d503b]/[0.07] pointer-events-none select-none"
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0,0 Q35,15 45,50 Q15,35 0,0 Z" />
        <path d="M0,0 Q20,50 60,60 Q50,20 0,0 Z" opacity="0.6" />
        <path d="M0,30 Q45,60 70,95 Q60,40 0,30 Z" opacity="0.4" />
      </svg>

      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Top Annotation Tags */}
        {/* <div className="hidden lg:flex items-center justify-between text-[10.5px] font-semibold tracking-[0.22em] text-[#7a8a7d] uppercase mb-4">
          <div className="flex items-center gap-2">
            <span>GOOD</span>
            <span>•</span>
            <span>FOOD</span>
            <span>•</span>
            <span>HEALTHY</span>
            <span>•</span>
            <span>LIVES</span>
          </div>
          <div className="flex items-center gap-2">
            <span>PURE FOOD • BRIGHTER TOMORROWS</span>
          </div>
        </div> */}

        {/* Section Header (No Circular Logo) */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[680px] mx-auto mb-12 sm:mb-14">
            {/* Terracotta Accent Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#c4683c]">
                FROM THE FARM
              </span>
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1a2c22] leading-tight mb-3 tracking-[-0.02em]">
              Organic, useful, honestly <span className="italic font-serif text-[#3e684d]">grown</span><span className="text-[#c4683c]">.</span>
            </h2>

            <p className="text-[#495b50] text-sm sm:text-base leading-relaxed m-0 font-normal">
              Everyday products shaped by better ingredients and better growing practices.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Layout: Left Category Icons + 4 Product Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start mb-12">
          {/* Left Vertical Filter Icons (Desktop: vertical column, Mobile: horizontal bar) */}
          <ScrollReveal animation="fade-right" delay={100} className="shrink-0 self-center lg:self-start">
            <div className="flex lg:flex-col gap-3 lg:pt-4">
              {/* Filter 1: ALL */}
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`flex flex-col items-center justify-center gap-1 w-14 h-14 rounded-full transition-all cursor-pointer border ${activeFilter === 'all'
                  ? 'bg-[#2d503b] text-white border-[#2d503b] shadow-md scale-105'
                  : 'bg-white text-[#495b50] border-[#e8e4db] hover:border-[#2d503b]/40 shadow-2xs'
                  }`}
                title="All products"
              >
                <LayoutGrid size={16} />
                <span className="text-[9px] font-bold tracking-wider uppercase">ALL</span>
              </button>

              {/* Filter 2: WELLNESS */}
              <button
                type="button"
                onClick={() => setActiveFilter('wellness')}
                className={`flex flex-col items-center justify-center gap-1 w-14 h-14 rounded-full transition-all cursor-pointer border ${activeFilter === 'wellness'
                  ? 'bg-[#2d503b] text-white border-[#2d503b] shadow-md scale-105'
                  : 'bg-white text-[#495b50] border-[#e8e4db] hover:border-[#2d503b]/40 shadow-2xs'
                  }`}
                title="Wellness products"
              >
                <Leaf size={16} />
                <span className="text-[8px] font-bold tracking-wider uppercase">WELLNESS</span>
              </button>

              {/* Filter 3: PANTRY */}
              <button
                type="button"
                onClick={() => setActiveFilter('pantry')}
                className={`flex flex-col items-center justify-center gap-1 w-14 h-14 rounded-full transition-all cursor-pointer border ${activeFilter === 'pantry'
                  ? 'bg-[#2d503b] text-white border-[#2d503b] shadow-md scale-105'
                  : 'bg-white text-[#495b50] border-[#e8e4db] hover:border-[#2d503b]/40 shadow-2xs'
                  }`}
                title="Pantry staples"
              >
                <Package size={16} />
                <span className="text-[9px] font-bold tracking-wider uppercase">PANTRY</span>
              </button>
            </div>
          </ScrollReveal>

          {/* 4 Product Cards Grid */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((p, idx) => (
              <ScrollReveal
                key={p.id}
                animation="fade-up"
                delay={idx * 100}
                className="h-full"
              >
                <div
                  onClick={() => handleNav('organic-products')}
                  className="h-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e8e4db] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-[#2d503b]/30 cursor-pointer"
                >
                  {/* Photo Area with Proportionate Height */}
                  <div className="relative h-[165px] sm:h-[180px] overflow-hidden bg-[#ede8dc]">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                    />
                  </div>

                  {/* Content Area with Exact Serif Typography */}
                  <div className="p-4 sm:p-5 text-center">
                    <h3 className="font-serif text-xs sm:text-[13.5px] font-bold tracking-[0.08em] uppercase text-[#1e3d2b] mb-2 leading-snug">
                      {p.name}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-bold text-[#6d7e72] tracking-[0.16em] uppercase group-hover:text-[#1a382b] transition-colors">
                      <span>EXPLORE PRODUCT</span>
                      <ArrowRight size={11} className="text-[#c4683c] transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Centered Primary CTA Button with Decorative Accent Lines */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="flex items-center justify-center gap-4 sm:gap-6 my-2">
            <span className="hidden sm:inline-block w-8 sm:w-12 h-[1px] bg-[#c4683c]/40" />
            <button
              type="button"
              onClick={() => handleNav('organic-products')}
              className="btn-primary btn-md uppercase tracking-wider group"
            >
              <span>Shop organic products</span>
              <ArrowRight size={14} className="text-[#fde68a] transition-transform group-hover:translate-x-0.5" />
            </button>
            <span className="hidden sm:inline-block w-8 sm:w-12 h-[1px] bg-[#c4683c]/40" />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default HomeProductsShowcase;

