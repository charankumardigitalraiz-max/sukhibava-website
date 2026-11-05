import React from 'react';
import { MessageSquare } from 'lucide-react';
import { ScrollReveal } from '../common';
import { cropsData } from '../../data/websiteData';
import { openWhatsAppInquiry } from '../../utils';
import { CropItem } from '../../types';

interface CommercialCropsShowcaseProps {
  setActiveTab?: (tab: string) => void;
  onSelectCrop: (crop: CropItem) => void;
}

export const CommercialCropsShowcase: React.FC<CommercialCropsShowcaseProps> = ({
  setActiveTab: _setActiveTab,
  onSelectCrop
}) => {
  return (
    <section className="py-12 sm:py-16 bg-[#fcfaf6] border-b border-[#e8e4db] overflow-hidden" aria-labelledby="crops-heading">
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10">
        {/* Section Header (Consistent Editorial Style) */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[680px] mx-auto mb-12 sm:mb-14">
            {/* Terracotta Accent Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#c4683c]">
                COMMERCIAL PLANTATION
              </span>
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
            </div>

            <h2
              id="crops-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1a2c22] leading-tight mb-3 tracking-[-0.02em]"
            >
              Flagship commercial <span className="italic font-serif text-[#3e684d]">crops</span>
            </h2>

            <p className="text-[#495b50] text-sm sm:text-base leading-relaxed m-0 font-normal">
              Three scientifically curated high-value agroforestry assets engineered for multi-tiered income, high global demand, and perpetual yields.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Flagship Crops Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {cropsData.map((crop, idx) => (
            <ScrollReveal
              key={crop.id}
              animation="fade-up"
              delay={idx * 150}
              className="h-full"
            >
              <div className="h-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e8e4db] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-[#2d503b]/30">
                <div>
                  {/* Photo Header */}
                  <div className="relative h-[165px] sm:h-[180px] overflow-hidden bg-[#ede8dc]">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#1a382b]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                      {crop.badge}
                    </div>
                  </div>

                  <div className="p-5 pb-3">
                    <h3 className="font-serif text-[16.5px] sm:text-[17.5px] text-[#1e3d2b] font-bold mb-1 leading-snug">
                      {crop.name}
                    </h3>

                    <p className="text-[#55695c] text-[12.5px] sm:text-[13px] leading-relaxed mb-3.5 font-normal">
                      {crop.tagline}
                    </p>

                    <div className="flex gap-3 text-[11px] text-[#78887b] font-medium pb-2">
                      <span>
                        <strong className="text-[#1e3d2b] font-semibold">Gestation:</strong>{' '}
                        {crop.gestation}
                      </span>
                      <span>•</span>
                      <span>
                        <strong className="text-[#1e3d2b] font-semibold">Lifespan:</strong>{' '}
                        {crop.lifespan}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-5 pt-0 flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      openWhatsAppInquiry(
                        `Inquiry for ${crop.name}`,
                        `Kanigiri Farmland crop: ${crop.name}`
                      )
                    }
                    className="btn-accent btn-sm flex-1 font-bold"
                  >
                    <MessageSquare size={13} />
                    <span>Inquire Crop</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectCrop(crop as CropItem)}
                    className="btn-secondary btn-sm font-semibold"
                  >
                    <span>Details</span>
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

export default CommercialCropsShowcase;
