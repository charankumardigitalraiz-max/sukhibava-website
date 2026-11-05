import React from 'react';
import {
  FileCheck,
  Droplets,
  Sprout,
  Sun,
  Wrench,
  Building2
} from 'lucide-react';
import { ScrollReveal } from '../common';
import { InfrastructureItem } from '../../types';

const coreInfrastructure: InfrastructureItem[] = [
  {
    id: 'dev',
    step: '01',
    title: 'Land Acquisition & Clear Titles',
    subtitle: '100% Freehold Ownership',
    desc: 'Meticulous 30-year legal vetting, encumbrance clearance, and direct spot registered sale deed with individual digital passbook at the local Sub-Registrar.',
    image: '/images/turnkey-plantation-setup.jpg',
    icon: <FileCheck size={20} className="text-primary" />,
    points: [
      'Direct Sub-Registrar spot registration',
      'Assistance for digital Pattadar Passbook',
      'Zero litigation or boundary disputes'
    ]
  },
  {
    id: 'drip',
    step: '02',
    title: 'Automated Israeli Drip Grid',
    subtitle: 'Precision Root Fertigation',
    desc: 'Automated pressure-compensating micro-drip networks connected to high-yield sweet water borewells, delivering liquid organic Jeevamrutham straight to tree root zones.',
    image: '/images/precision-drip-system.jpg',
    icon: <Droplets size={20} className="text-primary" />,
    points: [
      'Up to 60% water conservation',
      'Automated Venturi liquid bio-fertilization',
      'Individual root-zone micro emitters'
    ]
  },
  {
    id: 'crops',
    step: '03',
    title: 'High-Density Plantation Care',
    subtitle: '3 Flagship Commercial Crops',
    desc: 'Expert high-density plantation of Macadamia, Turkish Fig, and Geranium using premium certified tissue-culture mother saplings suited to Kanigiri soil.',
    image: '/images/Macadamia-plant-and-nut-close-ups-1024x683.png',
    icon: <Sprout size={20} className="text-secondary" />,
    points: [
      'Certified mother nursery saplings',
      'Scientific plant spacing & companion cropping',
      'High domestic & international demand'
    ]
  },
  {
    id: 'solar',
    step: '04',
    title: 'Solar Power & Gated Security',
    subtitle: '24/7 Perimeter Protection',
    desc: 'All ventures are fortified with solar-powered electrified perimeter fencing, solar avenue street lighting, gated security checkpoints, and modern CCTV surveillance.',
    image: '/images/farm-cctv-monitoring.jpg',
    icon: <Sun size={20} className="text-secondary" />,
    points: [
      'Solar-powered electrified fencing',
      'Eco-friendly solar avenue streetlights',
      '24/7 CCTV surveillance & manned entry'
    ]
  },
  {
    id: 'agronomy',
    step: '05',
    title: 'Turnkey Agronomy & Buybacks',
    subtitle: '20+ Yrs Field Management',
    desc: 'Complete turnkey care from planting mother saplings to pruning, biological soil nutrition, weeding, and post-harvest produce buybacks with APEDA export linkages.',
    image: '/gallery/geranium-crop-examination.jpg',
    icon: <Wrench size={20} className="text-primary" />,
    points: [
      'Dedicated on-site agronomists & labor',
      'Regular photo & video growth updates',
      'APEDA & organic buyback networks'
    ]
  },
  {
    id: 'clubhouse',
    step: '06',
    title: 'Farmhouse & Agro-Tourism',
    subtitle: 'Weekend Family Retreat',
    desc: 'Complimentary access to luxury farm guesthouse, organic dining lounge, botanical walkways, and guided farm walks for investor families on weekends.',
    image: '/images/luxury-farm-clubhouse.jpg',
    icon: <Building2 size={20} className="text-secondary" />,
    points: [
      'Complimentary weekend cottage stay',
      'Farm-to-table organic dining lounge',
      'Lush botanical trails & recreation areas'
    ]
  }
];

export const CoreInfrastructure: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#fcfaf6] border-b border-[#e8e4db] overflow-hidden" aria-labelledby="core-infra-heading">
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10">
        {/* Section Header (Consistent Editorial Style) */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-[680px] mx-auto mb-12 sm:mb-14">
            {/* Terracotta Accent Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#c4683c]">
                FARM INFRASTRUCTURE
              </span>
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#c4683c]" />
            </div>

            <h2
              id="core-infra-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1a2c22] leading-tight mb-3 tracking-[-0.02em]"
            >
              Complete on-ground <span className="italic font-serif text-[#3e684d]">engineering</span>
            </h2>

            <p className="text-[#495b50] text-sm sm:text-base leading-relaxed m-0 font-normal">
              Institutional infrastructure ensuring 100% freehold security, automated Israeli drip fertigation, and turnkey plantation care.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Institutional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {coreInfrastructure.map((inf, idx) => (
            <ScrollReveal
              key={inf.id}
              animation="fade-up"
              delay={(idx % 3) * 150}
              className="h-full"
            >
              <div className="h-full group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e8e4db] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-[#2d503b]/30">
                <div>
                  {/* Photo Header */}
                  <div className="relative h-[165px] sm:h-[175px] overflow-hidden bg-[#ede8dc]">
                    <img
                      src={inf.image}
                      alt={inf.title}
                      className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#1a382b]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                      SERVICE {inf.step}
                    </div>
                  </div>

                  <div className="p-5 pb-5">
                    {/* Icon & Title Row */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#f4f2ea] flex items-center justify-center shrink-0 text-[#2d503b]">
                        {inf.icon}
                      </div>
                      <div>
                        <span className="text-[10.5px] text-[#c4683c] font-bold uppercase tracking-wider block leading-tight">
                          {inf.subtitle}
                        </span>
                        <h3 className="font-serif text-[15.5px] sm:text-[16.5px] text-[#1e3d2b] font-bold m-0 leading-snug">
                          {inf.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-[#55695c] text-[12.5px] sm:text-[13px] leading-relaxed mb-0 font-normal">
                      {inf.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
