import React, { useState } from 'react';
import {
  Star,
  Quote,
  Calendar,
  ShieldCheck,
  Sparkles,
  BadgeCheck
} from 'lucide-react';
import { testimonials } from '../data/websiteData';
import { TestimonialItem } from '../types';

interface TestimonialsViewProps {
  onOpenSiteVisit: () => void;
}

export const TestimonialsView: React.FC<TestimonialsViewProps> = ({ onOpenSiteVisit }) => {
  const [hoveredReviewIdx, setHoveredReviewIdx] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Reviews', count: testimonials.length },
    { id: 'titles', label: 'Documentation & Titles', count: 3 },
    { id: 'returns', label: 'High Agri Returns', count: 3 },
    { id: 'nri', label: 'NRI & Remote Care', count: 2 }
  ];

  const filteredTestimonials = (testimonials as TestimonialItem[]).filter(t => {
    if (filterCategory === 'titles') return t.tag.includes('Documentation') || t.tag.includes('Transparency') || t.tag.includes('Title');
    if (filterCategory === 'returns') return t.tag.includes('Returns') || t.tag.includes('Tax-Free') || t.tag.includes('Generational');
    if (filterCategory === 'nri') return t.tag.includes('NRI') || t.tag.includes('Care');
    return true;
  });

  return (
    <div className="bg-[var(--color-bg-soft)] min-h-screen pb-16">
      {/* 1. Header Banner */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-emerald-950 via-emerald-900 to-amber-950 text-white text-center border-b border-slate-200">
        <div className="w-full max-w-[780px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-amber-200 text-xs font-semibold mb-4">
            <Star size={13} className="text-amber-400 fill-amber-400" />
            <span>Verified Investor Feedback • 100% Client Trust</span>
          </div>

          <h1 className="text-3xl md:text-5xl text-white font-bold mb-3 tracking-tight font-heading">
            Investor Experiences &amp; Reviews
          </h1>

          <p className="text-emerald-50 text-sm md:text-base leading-relaxed m-0 opacity-95">
            Genuine experiences from doctors, IT leaders, and business families who acquired farmland with Sukhibhava Agro Projects in Kanigiri.
          </p>
        </div>
      </section>

      {/* 2. Testimonials Grid Section */}
      <section className="py-12 md:py-14">
        <div className="w-full max-w-[1240px] mx-auto px-6">
          {/* Social Proof Metric Pill Strip */}
          <div className="flex justify-center items-center gap-2.5 flex-wrap mb-7">
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-800 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <Star size={12} className="text-amber-500 fill-amber-500" />
              <span>5.0 / 5.0 Rating</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-800 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <BadgeCheck size={12} className="text-emerald-600" />
              <span>100% Registered Titles</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-800 font-semibold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Sparkles size={12} className="text-amber-600" />
              <span>450+ Happy Families</span>
            </div>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex justify-center items-center gap-2 flex-wrap mb-9">
            {categories.map((c) => {
              const isActive = filterCategory === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setFilterCategory(c.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold cursor-pointer transition-all duration-200 ${isActive
                      ? 'bg-emerald-800 text-white border border-emerald-800 shadow-sm'
                      : 'bg-white text-emerald-950 border border-slate-200 hover:border-emerald-300'
                    }`}
                >
                  <span>{c.label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-800'
                      }`}
                  >
                    {c.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* All Filtered Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredTestimonials.map((t, idx) => {
              const isHovered = hoveredReviewIdx === idx;

              return (
                <div
                  key={t.id || idx}
                  onMouseEnter={() => setHoveredReviewIdx(idx)}
                  onMouseLeave={() => setHoveredReviewIdx(null)}
                  className={`group relative bg-white rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 overflow-hidden cursor-default ${isHovered
                      ? '-translate-y-1.5 shadow-xl border-emerald-300'
                      : 'shadow-sm border-slate-200'
                    }`}
                >
                  {/* Top Accent Line */}
                  <div
                    className={`absolute top-0 left-0 h-1 rounded-b bg-gradient-to-r from-emerald-600 to-amber-500 transition-all duration-300 ${isHovered ? 'w-full' : 'w-12'
                      }`}
                  />

                  {/* Watermark Quote */}
                  <div className="absolute top-3.5 right-4 text-emerald-800 pointer-events-none transition-all duration-500 opacity-[0.08] group-hover:opacity-[0.22] -rotate-12 group-hover:rotate-0 group-hover:scale-110">
                    <Quote size={52} />
                  </div>

                  <div>
                    {/* Top Meta: Stars & Highlight Pill */}
                    <div className="flex items-center justify-between mb-3.5 relative z-10">
                      <div className="flex gap-1 items-center">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="text-amber-500 fill-amber-500 group-hover:scale-110 transition-transform duration-200"
                          />
                        ))}
                      </div>

                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <Sparkles size={10} />
                        <span>{t.tag}</span>
                      </span>
                    </div>

                    {/* Quote Text */}
                    <p className="text-emerald-950 text-sm leading-relaxed mb-4.5 italic relative z-10 min-h-[84px]">
                      &quot;{t.text}&quot;
                    </p>
                  </div>

                  {/* Footer Investor Identity */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-slate-100 relative z-10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9.5 h-9.5 rounded-full text-white font-bold text-xs flex items-center justify-center shrink-0 bg-gradient-to-tr from-emerald-700 to-teal-600 shadow-sm">
                        {t.name[0]}
                      </div>
                      <div>
                        <strong className="text-sm text-emerald-950 block leading-snug font-heading">
                          {t.name}
                        </strong>
                        <div className="flex items-center gap-1 mt-0.5">
                          <BadgeCheck size={12} className="text-emerald-600 shrink-0" />
                          <span className="text-xs text-slate-500">
                            {t.location} • <span className="text-emerald-700 font-semibold">{t.plot}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-[10.5px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Verified
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Farm Tour CTA */}
          <div className="bg-gradient-to-br from-[#f6faf7] to-white border border-emerald-200 rounded-2xl p-7 md:p-8 text-center max-w-[740px] mx-auto shadow-sm">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 uppercase tracking-wider mb-2.5">
              <ShieldCheck size={13} className="text-amber-600" />
              <span>100% Genuine Investor Experience</span>
            </div>

            <h3 className="text-xl md:text-2xl text-emerald-950 font-bold mb-2 font-heading">
              Join Our Thriving Community of Farmland Investors
            </h3>

            <p className="text-slate-600 text-sm max-w-[560px] mx-auto mb-5 leading-relaxed">
              Schedule a visit to our Kanigiri Agro Venture this weekend. Walk the fields, inspect our sweet water borewells, and meet our senior team in person.
            </p>

            <button
              type="button"
              onClick={onOpenSiteVisit}
              className="btn-amber shimmer-effect px-6 py-3 text-sm rounded-full inline-flex items-center gap-2 font-bold cursor-pointer"
            >
              <Calendar size={16} />
              <span>Schedule Your Free Farm Visit</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsView;
