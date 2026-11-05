import React from 'react';
import { Sprout, Droplets, FileText, ShieldCheck, MapPin, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '../common';

export interface InfrastructureFeature {
  title: string;
  tag: string;
  desc: string;
  icon: React.ReactNode;
}

export const FarmlandInfrastructure: React.FC = () => {
  const features: InfrastructureFeature[] = [
    {
      title: '100% Freehold Registered Title',
      tag: 'Legal Security',
      desc: 'Individual sale deed registered directly in your name at Sub-Registrar Office with 30-year clear EC and digital revenue passbook.',
      icon: <FileText size={18} />
    },
    {
      title: 'Sweet Water & Automated Drip',
      tag: 'Water Security',
      desc: 'Abundant sweet-water borewells paired with Israeli pressure-compensating micro-drip networks, saving up to 60% water.',
      icon: <Droplets size={18} />
    },
    {
      title: 'Fertile Red Sandy Loam Soil',
      tag: 'Agronomy Base',
      desc: 'Optimal soil pH and high organic carbon, enriched with native Jeevamrutham bio-inputs for thriving Macadamia and Anjeer roots.',
      icon: <Sprout size={18} />
    },
    {
      title: '24/7 Solar Fencing & Gated Security',
      tag: 'Estate Safety',
      desc: 'Full perimeter electrified solar fencing, dedicated security cabin, site supervisor quarters, and continuous estate monitoring.',
      icon: <ShieldCheck size={18} />
    },
    {
      title: '30-Foot Wide Internal Avenue Roads',
      tag: 'Access & Logistics',
      desc: 'All-weather internal red gravel roads lined with shade-giving avenue trees, ensuring seamless access for family visits and farm machinery.',
      icon: <MapPin size={18} />
    },
    {
      title: 'Turnkey Agronomy & Offtake Care',
      tag: 'Passive Wealth',
      desc: 'Experienced field agronomists handle pruning, bio-nutrition, seasonal harvests, on-site processing, and guaranteed buybacks.',
      icon: <TrendingUp size={18} />
    }
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 border-b border-[#e8e4db] bg-[#fcfaf6]" aria-labelledby="infrastructure-heading">
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[580px] mx-auto mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#c4683c]">
                ESTATE INFRASTRUCTURE &amp; AMENITIES
              </span>
              <span className="w-6 h-[1.5px] bg-[#c4683c]" />
            </div>
            <h2 id="infrastructure-heading" className="font-serif text-2xl sm:text-3xl font-normal text-[#1a2c22] leading-tight mb-2">
              Enterprise Farmland Infrastructure
            </h2>
            <p className="text-[#55695c] text-xs sm:text-[13px] leading-relaxed m-0 font-normal">
              Every acre is backed by on-ground infrastructure ensuring perennial sweet water, round-the-clock security, and complete accessibility.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feat, i) => (
            <ScrollReveal
              key={i}
              animation="fade-up"
              delay={i * 60}
              className="h-full"
            >
              <div className="h-full bg-white p-5 rounded-2xl border border-[#e8e4db] shadow-2xs hover:shadow-md hover:border-[#2d503b]/35 transition-all duration-300 flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-[#f4f2ea] text-[#2d503b] group-hover:bg-[#2d503b] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 shadow-2xs mt-0.5">
                  {feat.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9.5px] font-bold text-[#c4683c] uppercase tracking-wider bg-[#c4683c]/10 px-2 py-0.5 rounded-full">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-[15.5px] sm:text-[16px] text-[#1a2c22] font-semibold leading-snug mb-1.5 group-hover:text-[#2d503b] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="m-0 text-xs text-[#55695c] leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmlandInfrastructure;

