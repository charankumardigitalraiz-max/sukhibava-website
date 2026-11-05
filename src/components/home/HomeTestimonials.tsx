import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, BadgeCheck } from 'lucide-react';
import { ScrollReveal } from '../common';
import { testimonials } from '../../data/websiteData';
import { TestimonialItem } from '../../types';

export const HomeTestimonials: React.FC = () => {
  const [hoveredReviewIdx, setHoveredReviewIdx] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isSectionVisible, setIsSectionVisible] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Safely scroll ONLY the horizontal track
  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.children[0] as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth : 340;
    const gap = 22;
    const targetScroll = index * (cardWidth + gap);
    sliderRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    setActiveSlide(index);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const firstCard = sliderRef.current.children[0] as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth : 340;
    const gap = 22;
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    setActiveSlide(Math.min(Math.max(0, newIndex), testimonials.length - 1));
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(sliderRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hoveredReviewIdx !== null || !isSectionVisible) return;
    const timer = setInterval(() => {
      if (!sliderRef.current) return;
      const nextIndex = (activeSlide + 1) % testimonials.length;
      scrollToSlide(nextIndex);
    }, 4500);
    return () => clearInterval(timer);
  }, [hoveredReviewIdx, activeSlide, isSectionVisible]);

  return (
    <section className="py-12 sm:py-16 bg-[#fcfaf6] border-b border-[#e8e4db] relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="w-full max-w-[1240px] mx-auto px-6">
        {/* Section Header (Consistent Editorial Style) */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[680px] mx-auto mb-12 sm:mb-14">
            {/* Terracotta Accent Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#c4683c]">
                INVESTOR STORIES
              </span>
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
            </div>

            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1a2c22] leading-tight mb-3 tracking-[-0.02em]"
            >
              Stories from our <span className="italic font-serif text-[#3e684d]">farm community</span>
            </h2>

            <p className="text-[#495b50] text-sm sm:text-base leading-relaxed m-0 font-normal">
              Genuine feedback from families, professionals, and doctors who invested in our Kanigiri managed farmlands.
            </p>
          </div>
        </ScrollReveal>

        {/* Smooth Horizontal Carousel Viewport with edge masks */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="relative w-full overflow-hidden py-1.5 pb-5 before:content-[''] before:absolute before:top-0 before:bottom-5 before:left-0 before:w-8 md:before:w-12 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-[#f7fbf8] before:to-transparent after:content-[''] after:absolute after:top-0 after:bottom-5 after:right-0 after:w-8 md:after:w-12 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-[#f7fbf8] after:to-transparent">
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex gap-5.5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-3.5 pb-4.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {(testimonials as TestimonialItem[]).map((t, idx) => {
                const isHovered = hoveredReviewIdx === idx;

                return (
                  <div
                    key={t.id || idx}
                    className="flex-[0_0_calc(100%-16px)] sm:flex-[0_0_calc(50%-14px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-[280px] sm:min-w-[290px] lg:min-w-[320px] max-w-[390px] snap-start"
                    onMouseEnter={() => setHoveredReviewIdx(idx)}
                    onMouseLeave={() => setHoveredReviewIdx(null)}
                  >
                    <div
                      className={`group relative bg-white rounded-2xl sm:rounded-3xl p-6 border flex flex-col justify-between h-full box-border transition-all duration-300 overflow-hidden cursor-default ${isHovered
                        ? '-translate-y-1.5 shadow-xl border-[#2d503b]/40'
                        : 'shadow-xs border-[#e8e4db]'
                        }`}
                    >
                      {/* Top Accent Line */}
                      <div
                        className={`absolute top-0 left-0 h-1 rounded-b bg-[#c4683c] transition-all duration-300 ${isHovered ? 'w-full' : 'w-10'
                          }`}
                      />

                      {/* Watermark Quote */}
                      <div className="absolute top-3.5 right-4 text-[#2d503b] pointer-events-none transition-all duration-500 opacity-[0.06] group-hover:opacity-[0.16] -rotate-12 group-hover:rotate-0 group-hover:scale-110">
                        <Quote size={44} />
                      </div>

                      <div>
                        {/* Rating Stars & Category Tag */}
                        <div className="flex items-center justify-between mb-3 relative z-10">
                          <div className="flex gap-1 items-center">
                            {[...Array(t.rating)].map((_, i) => (
                              <Star
                                key={i}
                                size={13}
                                className="text-amber-500 fill-amber-500 group-hover:scale-110 transition-transform duration-200"
                              />
                            ))}
                          </div>

                          <span className="text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 bg-[#f4f2ea] text-[#2d503b]">
                            <span>{t.tag}</span>
                          </span>
                        </div>

                        {/* Quote Text with Serif Elegance */}
                        <p className="font-serif text-[#1e3d2b] text-sm leading-relaxed mb-4 italic relative z-10 font-normal">
                          &quot;{t.text}&quot;
                        </p>
                      </div>

                      {/* Footer: Investor Details */}
                      <div className="flex items-center justify-between pt-3 border-t border-[#f2eee6] relative z-10">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full text-white font-bold text-xs flex items-center justify-center shrink-0 bg-[#2d503b]">
                            {t.name[0]}
                          </div>
                          <div>
                            <strong className="text-xs sm:text-[13px] text-[#1e3d2b] block leading-snug font-bold">
                              {t.name}
                            </strong>
                            <div className="flex items-center gap-1 mt-0.5">
                              <BadgeCheck size={12} className="text-emerald-700 shrink-0" />
                              <span className="text-[11px] text-[#718274]">
                                {t.location} • {t.plot}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
