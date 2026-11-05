import React from 'react';
import {
  Calendar,
  ArrowRight,
  MessageSquare,
  MapPin,
  Compass,
  ShieldCheck
} from 'lucide-react';
import { companyInfo, galleryItems } from '../data/websiteData';
import { ScrollReveal } from '../components/common';

export interface GalleryItem {
  id: number | string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

interface GalleryViewProps {
  onSelectImage: (item: GalleryItem, index: number, items: GalleryItem[]) => void;
  onOpenSiteVisit: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onSelectImage, onOpenSiteVisit }) => {
  const items = galleryItems as GalleryItem[];

  return (
    <div className="bg-[#fcfaf6] min-h-screen pb-16">
      {/* 1. HEADER BANNER */}
      <section className="py-12 sm:py-10 bg-[#fcfaf6] text-center">
        <div className="w-full max-w-[760px] mx-auto px-6 sm:px-10">
          <ScrollReveal animation="fade-up">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-7 sm:w-8 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[10.5px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#c4683c]">
                AUTHENTIC FIELD PHOTOGRAPHY
              </span>
              <span className="w-7 sm:w-8 h-[1.5px] bg-[#c4683c]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#1a2c22] leading-tight mb-3 tracking-[-0.02em]">
              Venture Field <span className="italic font-serif text-[#3e684d]">Gallery</span>
            </h1>

            <p className="text-[#55695c] text-xs sm:text-[14px] leading-relaxed max-w-[620px] mx-auto m-0 font-normal">
              Real on-ground photographs from our 250+ acre Kanigiri estate: flourishing Geranium crop canopy, Macadamia orchards, Anjeer plantations, and active drip irrigation works.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. ALL IMAGES GRID */}
      <section className="py-6 sm:py-4">
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10">
          {/* Responsive Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {items.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                animation="fade-up"
                delay={(idx % 4) * 80}
              >
                <div
                  onClick={() => onSelectImage(item, idx, items)}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#e8e4db] shadow-2xs hover:shadow-lg hover:border-[#2d503b]/35 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-[220px] sm:h-[240px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500 ${
                      item.category === 'Geranium' ? 'object-[center_20%]' : 'object-center'
                    }`}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Book Site Visit CTA Lounge */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="text-center mt-12 sm:mt-16">
              <div className="relative bg-white border border-[#e8e4db] rounded-2xl sm:rounded-3xl p-7 sm:p-10 max-w-[840px] mx-auto shadow-sm overflow-hidden">
                {/* Subtle Archival Glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#2d503b]/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

                {/* Eyebrow Kicker */}
                <div className="flex items-center justify-center gap-2.5 mb-3">
                  <span className="w-6 sm:w-8 h-[1.5px] bg-[#c4683c]" />
                  <span className="text-[10.5px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#c4683c]">
                    WEEKEND FARMLAND INSPECTION TOUR
                  </span>
                  <span className="w-6 sm:w-8 h-[1.5px] bg-[#c4683c]" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-[34px] font-serif font-normal text-[#1a2c22] leading-tight mb-3">
                  Experience Kanigiri Estate In Person
                </h2>

                <p className="text-[#55695c] text-xs sm:text-[14px] leading-relaxed max-w-[580px] mx-auto mb-7 font-normal">
                  Walk through flourishing plantations, inspect automated Israeli drip networks, and review original 100% freehold registered title documents directly with our senior agronomists.
                </p>

                {/* 3 Reassurance Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 max-w-[680px] mx-auto mb-8">
                  <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#fcfaf6] border border-[#e8e4db]">
                    <MapPin size={14} className="text-[#c4683c] shrink-0" />
                    <span className="text-xs font-medium text-[#1a2c22]">
                      Pickup: Vijayawada, Guntur &amp; Ongole
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#fcfaf6] border border-[#e8e4db]">
                    <Compass size={14} className="text-[#2d503b] shrink-0" />
                    <span className="text-xs font-medium text-[#1a2c22]">
                      Guided Agronomist Walkthrough
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#fcfaf6] border border-[#e8e4db]">
                    <ShieldCheck size={14} className="text-[#2d503b] shrink-0" />
                    <span className="text-xs font-medium text-[#1a2c22]">
                      No Purchase Obligation
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
                  <button
                    type="button"
                    onClick={onOpenSiteVisit}
                    className="btn-accent btn-md group"
                  >
                    <Calendar size={16} />
                    <span>Book Free Weekend Tour</span>
                    <ArrowRight size={14} className="text-[#fde68a] transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20would%20like%20to%20know%20more%20about%20the%20Kanigiri%20Estate%20Weekend%20Tour.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary btn-md group"
                  >
                    <MessageSquare size={15} className="text-[#2d503b]" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div >
      </section >
    </div >
  );
};

export default GalleryView;
