import React, { useState } from 'react';
import {
  Leaf,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { organicProducts, companyInfo } from '../data/websiteData';
import { FloatingProductVideo } from '../components/FloatingProductVideo';
import { ScrollReveal } from '../components/common';

interface OrganicProductsViewProps {
  setActiveTab?: (tab: string) => void;
  onOpenSiteVisit?: () => void;
}

export const OrganicProductsView: React.FC<OrganicProductsViewProps> = ({
  setActiveTab,
  onOpenSiteVisit: _onOpenSiteVisit
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Farm Products' },
    { id: 'dry-fruits', label: 'Dry Fruits & Nuts' },
    { id: 'oils', label: 'Wood-Pressed Oils' },
    { id: 'honey-ghee', label: 'Pure Honey & Ghee' },
    { id: 'millets', label: 'Unpolished Millets' },
    { id: 'essential-oils', label: 'Essential Oils' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? organicProducts
    : organicProducts.filter(p => p.category === selectedCategory);

  const handleWhatsAppOrder = (productName: string) => {
    const text = encodeURIComponent(
      `Hello Sukhibhava Agro Projects, I would like to order / inquire about: ${productName} from your organic farm store.`
    );
    window.open(`https://wa.me/${companyInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#fcfaf6] min-h-screen pb-16">
      {/* 1. DIRECT HERO BANNER - FULL SCREEN WIDTH & PROPORTIONATE FIT */}
      <section className="w-full bg-[#fcfaf6] border-b border-[#e8e4db] overflow-hidden">
        <div className="w-full relative flex items-center justify-center overflow-hidden">
          <img
            src="/productspage/Sukhibhava%20Organic%20Harvest%20Banner.png"
            alt="Sukhibhava Organic Harvest Banner"
            className="w-full h-[260px] sm:h-[360px] md:h-[460px] lg:h-[520px] max-h-[580px] object-cover object-center block"
          />
        </div>
      </section>

      {/* 2. PRODUCT CATALOG GRID WITH FILTER TABS */}
      <section className="py-12 sm:py-16 border-b border-[#e8e4db]">
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10">
          {/* Section Header (Consistent Editorial Serif Style) */}
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-[680px] mx-auto mb-8 sm:mb-10">
              {/* Terracotta Accent Eyebrow */}
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#c4683c]">
                  FARM-DIRECT HARVESTS
                </span>
                <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1a2c22] leading-tight mb-3 tracking-[-0.02em]">
                Pure organic produce, <span className="italic font-serif text-[#3e684d]">honestly cultivated</span>
              </h2>

              <p className="text-[#495b50] text-sm sm:text-base leading-relaxed m-0 font-normal">
                Single-estate harvests cultivated with native cow Jeevamrutham and dispatched direct from farm to your home.
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Category Filter Pills */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="flex justify-center items-center gap-2 sm:gap-2.5 flex-wrap mb-10 sm:mb-12">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold tracking-wide transition-all duration-200 cursor-pointer ${isActive
                      ? 'bg-[#2d503b] text-white shadow-sm'
                      : 'bg-white text-[#495b50] border border-[#e8e4db] hover:border-[#2d503b]/40 hover:text-[#1a2c22] shadow-2xs'
                      }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch mb-8">
            {filteredProducts.map((p, idx) => (
              <ScrollReveal
                key={p.id || idx}
                animation="fade-up"
                delay={(idx % 4) * 100}
                className="h-full"
              >
                <div className="h-full group bg-white rounded-md sm:rounded-md overflow-hidden border border-[#e8e4db] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-[#2d503b]/30">
                  <div>
                    {/* Photo Header */}
                    <div className="relative h-44 sm:h-48 overflow-hidden bg-[#ede8dc]">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 bg-[#1a382b]/90 backdrop-blur-md text-white text-[9.5px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                        {p.badge}
                      </span>

                      {/* Unit Size */}
                      <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-[#2d503b] text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full border border-[#e8e4db] shadow-xs">
                        {p.unit}
                      </span>
                    </div>

                    {/* Content Area */}
                    <div className="p-4 sm:p-5 pb-3">
                      <h3 className="font-serif text-[15.5px] sm:text-[16.5px] text-[#1e3d2b] font-bold mb-1.5 leading-snug line-clamp-2">
                        {p.name}
                      </h3>

                      <p className="text-[#55695c] text-[12.5px] sm:text-[13px] mt-2 leading-relaxed mb-3.5 font-normal line-clamp-3">
                        {p.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="p-4 sm:p-5 pt-0">
                    <button
                      type="button"
                      onClick={() => handleWhatsAppOrder(p.name)}
                      className="btn-primary btn-sm btn-full group"
                    >
                      <MessageSquare size={13} className="text-[#fde68a]" />
                      <span>Order on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRADITIONAL WOOD-PRESSED EXTRACTION & PANTRY SHOWCASE */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <ScrollReveal animation="fade-right">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#c4683c]">
                    ESTATE PURITY STANDARD
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1a2c22] leading-tight mb-4 tracking-[-0.02em]">
                  Natural farm harvests, <span className="italic font-serif text-[#3e684d]">prepared with traditional care</span>.
                </h2>

                <p className="text-[#495b50] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  At our Kanigiri estate, crops are nurtured in chemical-free soil enriched with native cow Jeevamrutham and organic compost. Every harvest is traditionally processed in small batches — from slow wood-pressing below 45°C to natural sun clarification — preserving 100% of its native nutrients, active enzymes, and authentic aroma without synthetic additives or chemical refining.
                </p>

                {/* Action Link Row */}
                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20would%20like%20to%20inquire%20about%20ordering%20pure%20farm%20pantry%20products.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent btn-md uppercase tracking-wider group"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp Farm Desk</span>
                  </a>

                  {setActiveTab && (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('projects');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="btn-link text-xs sm:text-[13px] inline-flex items-center gap-1.5"
                    >
                      <span>Explore Our Kanigiri Farmlands</span>
                      <ArrowRight size={13} className="text-[#c4683c]" />
                    </button>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Right Showcase Photo (5 cols) */}
            <div className="lg:col-span-5">
              <ScrollReveal animation="fade-left">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#e8e4db] bg-[#ede8dc] group hover:border-[#2d503b]/30 transition-all">
                  <img
                    src="/productspage/Organic%20Pantry%20Product%20Showcase.png"
                    alt="Organic Pantry Product Showcase"
                    className="w-full h-auto object-cover block group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#1a382b]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 text-white border border-white/20 text-xs font-semibold">
                    <Leaf size={13} className="text-emerald-300" />
                    <span>Kanigiri Estate Origin</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Farm Harvest Short Reel (Bottom-Left) */}
      <FloatingProductVideo videoSrc="/productspage/short.mp4" />
    </div>
  );
};

export default OrganicProductsView;
