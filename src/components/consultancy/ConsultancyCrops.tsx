import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common';

export interface CommercialCrop {
  id: string;
  name: string;
  botanical: string;
  tag: string;
  gestation: string;
  lifespan: string;
  returns: string;
  image: string;
  summary: string;
  highlights: string[];
}

export interface ConsultancyCropsProps {
  onSelectCrop: (cropName: string) => void;
}

export const ConsultancyCrops: React.FC<ConsultancyCropsProps> = ({ onSelectCrop }) => {
  const commercialCrops: CommercialCrop[] = [
    {
      id: 'macadamia',
      name: 'Macadamia Nut Orchards',
      botanical: 'Macadamia integrifolia',
      tag: 'Generational Wealth',
      gestation: '4 - 5 Yrs',
      lifespan: '60 - 80 Yrs',
      returns: 'Compounding',
      image: '/images/Macadamia-plant-and-nut-close-ups-1024x683.png',
      summary: 'High-value commercial nut with 90%+ domestic import deficit in India. High international demand and compounding multi-decade wealth.',
      highlights: ['90% Domestic Market Deficit', 'Decades-Long Compounding Yield']
    },
    {
      id: 'anjeer',
      name: 'Turkish Figs (Anjeer)',
      botanical: 'Ficus carica',
      tag: 'Fast Cashflow',
      gestation: '18 - 24 Mo',
      lifespan: '25 - 30 Yrs',
      returns: 'Recurring',
      image: '/images/Fresh-and-ripe-figs-showcase.png',
      summary: 'Fast-yielding superfood delivering continuous seasonal harvests. High nutritional consumer appeal with year-round retail and bulk demand.',
      highlights: ['Continuous Seasonal Harvests', 'High Nutritional & Market Demand']
    },
    {
      id: 'geranium',
      name: 'Aromatic Geranium',
      botanical: 'Pelargonium graveolens',
      tag: 'Quarterly Liquidity',
      gestation: '4 - 5 Mo',
      lifespan: 'Cyclical',
      returns: '3-4 Cuts/Yr',
      image: '/gallery/geranium-field-rows.jpg',
      summary: 'High-value essential oil crop yielding 3 to 4 harvests per year. Steam-distilled on-site for immediate liquidity and guaranteed buyback.',
      highlights: ['3 - 4 Cuts Per Annum', 'On-Site Steam Distillation']
    }
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 border-b border-[#e8e4db] bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[580px] mx-auto mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#c4683c]">
                RECOMMENDED COMMERCIAL CROPS
              </span>
              <span className="w-6 h-[1.5px] bg-[#c4683c]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a2c22] leading-tight mb-2">
              High-Yield Plantation Blueprints
            </h2>
            <p className="text-[#55695c] text-xs sm:text-[13px] leading-relaxed m-0 font-normal">
              Scientific crop models selected for sweet-water efficiency, climate resilience, and compounding market returns in AP &amp; Telangana.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Compact & Refined Crop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {commercialCrops.map((crop, idx) => (
            <ScrollReveal
              key={crop.id}
              animation="fade-up"
              delay={idx * 80}
              className="h-full"
            >
              <div className="h-full bg-white rounded-2xl border border-[#e8e4db] shadow-2xs hover:shadow-md hover:border-[#2d503b]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div>
                  {/* Compact Header Image with Dual Overlay Badges */}
                  <div className="relative h-[165px] sm:h-[175px] overflow-hidden bg-[#ede8dc]">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Top-Left Category Tag */}
                    <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md text-[#2d503b] text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border border-[#e8e4db] shadow-2xs">
                      {crop.tag}
                    </span>

                    {/* Top-Right Gestation Badge */}
                    <span className="absolute top-2.5 right-2.5 bg-[#1a2c22]/85 backdrop-blur-md text-[#fde68a] text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-2xs">
                      {crop.gestation}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5">
                    <span className="text-[10px] font-medium italic text-[#718274] block leading-none mb-1">
                      {crop.botanical}
                    </span>
                    <h3 className="font-serif text-[17px] font-semibold text-[#1a2c22] leading-snug group-hover:text-[#2d503b] transition-colors">
                      {crop.name}
                    </h3>

                    <p className="text-[11.5px] text-[#55695c] leading-relaxed font-normal mt-1.5 mb-3 line-clamp-2">
                      {crop.summary}
                    </p>

                    {/* Compact 3-Column Metric Strip */}
                    <div className="grid grid-cols-3 gap-1 p-2 rounded-xl bg-[#fcfaf6] border border-[#e8e4db] text-center mb-3">
                      <div>
                        <span className="text-[9px] text-[#718274] uppercase tracking-wider block">Gestation</span>
                        <strong className="text-[11px] text-[#1a2c22] font-semibold block leading-tight">{crop.gestation}</strong>
                      </div>
                      <div className="border-x border-[#e8e4db] px-0.5">
                        <span className="text-[9px] text-[#718274] uppercase tracking-wider block">Lifespan</span>
                        <strong className="text-[11px] text-[#2d503b] font-semibold block leading-tight">{crop.lifespan}</strong>
                      </div>
                      <div>
                        <span className="text-[9px] text-[#718274] uppercase tracking-wider block">Returns</span>
                        <strong className="text-[11px] text-[#c4683c] font-semibold block leading-tight truncate">{crop.returns}</strong>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="flex flex-col gap-1.5">
                      {crop.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 size={12.5} className="text-[#2d503b] shrink-0" />
                          <span className="text-[11px] text-[#4a5e50] font-medium leading-tight">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-4 sm:p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectCrop(crop.name)}
                    className="btn-secondary btn-sm btn-full group"
                  >
                    <span>Inquire About {crop.name.split(' ')[0]}</span>
                    <ArrowRight size={13} className="text-[#2d503b] transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultancyCrops;
