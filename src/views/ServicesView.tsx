import React from 'react';
import {
  Layers,
  ShoppingBag,
  Sprout,
  CheckCircle2,
  Award,
  Phone,
  ArrowRight,
  Sparkles,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

interface ServicesViewProps {
  setActiveTab: (tab: string) => void;
  onOpenSiteVisit: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ setActiveTab, onOpenSiteVisit }) => {
  return (
    <div className="bg-surface-soft min-h-screen pb-16">
      {/* 1. IMMERSIVE HERO BANNER */}
      <section className="relative py-16 md:py-20 text-white text-center border-b border-slate-200 overflow-hidden">
        <img
          src="/images/turnkey-plantation-setup.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/90 to-amber-950/45 pointer-events-none" />
        <div className="w-full max-w-[860px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-emerald-100 text-xs font-semibold mb-4">
            <Sparkles size={13} className="text-emerald-300" />
            <span>Integrated Agricultural Ecosystem • Andhra Pradesh</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3.5 tracking-tight font-heading">
            Our 3 Core Agricultural Modules
          </h1>

          <p className="text-emerald-50 text-[15.5px] leading-relaxed max-w-[720px] mx-auto mb-6 opacity-95">
            Sukhibhava Agro Projects operates three synergistic business pillars: managed commercial agroforestry real estate, direct selling of pure organic farm harvests, and 20+ years of scientific on-ground agronomy consultancy.
          </p>

          <div className="inline-flex flex-wrap justify-center gap-4 text-xs md:text-sm text-amber-200 font-semibold">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-300" />
              <span>250+ Acre Managed Farmland</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-300" />
              <span>Pure Farm-Fresh Organic Extracts</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-300" />
              <span>20+ Yrs Field Agronomy Advisory</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. THE THREE CORE MODULES */}
      <div className="w-full max-w-[1240px] mx-auto px-6 mt-12">
        <div className="flex flex-col gap-10 mb-14">
          {/* MODULE 1: FARMLAND DEVELOPMENT */}
          <div className="bg-white rounded-3xl border border-primary-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-2">
            <div className="group relative min-h-[300px] md:min-h-[340px] overflow-hidden">
              <img
                src="/images/turnkey-plantation-setup.jpg"
                alt="Kanigiri Managed Farmland"
                className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-primary/95 backdrop-blur-md text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                Module 01: Farmland Development
              </span>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2 font-heading">
                  <Layers size={14} />
                  <span>250+ Acre Managed Agroforestry Venture</span>
                </div>

                <h2 className="text-2xl md:text-3xl text-primary-dark font-bold mb-3 leading-snug font-heading">
                  Kanigiri Managed Farmland Development
                </h2>

                <p className="text-muted text-[14.5px] leading-relaxed mb-5">
                  Our flagship managed farmland project in Kanigiri Mandal, Prakasam District, AP. We handle 100% turnkey cultivation and maintenance with Macadamia Nuts, Anjeer (Figs), and Geranium plantations while you hold individual registered legal title deeds and receive compounding tax-free returns.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="bg-surface-soft p-3.5 rounded-xl border border-border text-[13px]">
                    <strong className="text-primary-dark block mb-0.5 font-bold font-heading">Flagship Crops:</strong>
                    <span className="text-muted">Macadamia, Anjeer &amp; Geranium</span>
                  </div>
                  <div className="bg-surface-soft p-3.5 rounded-xl border border-border text-[13px]">
                    <strong className="text-primary-dark block mb-0.5 font-bold font-heading">Legal Security:</strong>
                    <span className="text-muted">100% Spot Registered Sale Deed</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => setActiveTab('projects')}
                  className="btn-primary px-6 py-3 text-sm rounded-full inline-flex items-center gap-2 font-bold cursor-pointer"
                >
                  <span>Explore Farmland Venture</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  type="button"
                  onClick={onOpenSiteVisit}
                  className="btn-amber shimmer-effect px-5 py-3 text-sm rounded-full inline-flex items-center gap-2 font-bold cursor-pointer"
                >
                  <Calendar size={15} />
                  <span>Book Weekend Farm Tour</span>
                </button>
              </div>
            </div>
          </div>

          {/* MODULE 2: ORGANIC PRODUCT SELLING */}
          <div className="bg-white rounded-3xl border border-secondary-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-2">
            <div className="group relative min-h-[300px] md:min-h-[340px] overflow-hidden">
              <img
                src="/images/Geranium-beauty-and-wellness-products-1024x683.png"
                alt="Organic Farm Products & Extracts"
                className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-amber-600/95 backdrop-blur-md text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                Module 02: Organic Product Selling
              </span>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-wider mb-2 font-heading">
                  <ShoppingBag size={14} />
                  <span>Farm-Direct Certified Harvests</span>
                </div>

                <h2 className="text-2xl md:text-3xl text-primary-dark font-bold mb-3 leading-snug font-heading">
                  Sukhibhava Organic Farm Products Store
                </h2>

                <p className="text-muted text-[14.5px] leading-relaxed mb-5">
                  Pure, certified organic produce grown in our orchards without synthetic urea, toxic pesticides, or chemical preservatives. Browse steam-distilled Geranium essential oils, cold-pressed wellness oils, raw forest honey, and naturally sun-cured harvest items.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="bg-surface-soft p-3.5 rounded-xl border border-border text-[13px]">
                    <strong className="text-primary-dark block mb-0.5 font-bold font-heading">Product Spectrum:</strong>
                    <span className="text-muted">Geranium Oil, Cold Oils, Honey</span>
                  </div>
                  <div className="bg-surface-soft p-3.5 rounded-xl border border-border text-[13px]">
                    <strong className="text-primary-dark block mb-0.5 font-bold font-heading">Direct Ordering:</strong>
                    <span className="text-muted">Instant WhatsApp Direct Dispatch</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => setActiveTab('organic-products')}
                  className="btn-primary px-6 py-3 text-sm rounded-full inline-flex items-center gap-2 font-bold cursor-pointer"
                >
                  <ShoppingBag size={15} />
                  <span>Enter Organic Products Store</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20would%20like%20to%20order%20organic%20farm%20products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-5 py-3 text-sm rounded-full inline-flex items-center gap-2 font-semibold cursor-pointer"
                >
                  <MessageSquare size={15} className="text-green-600" />
                  <span>WhatsApp Order Desk</span>
                </a>
              </div>
            </div>
          </div>

          {/* MODULE 3: AGRICULTURE ORGANIC CONSULTANCY */}
          <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-2">
            <div className="group relative min-h-[300px] md:min-h-[340px] overflow-hidden">
              <img
                src="/images/agri-consultancy-expert.jpg"
                alt="Organic Farming Consultancy"
                className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-primary-dark/95 backdrop-blur-md text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                Module 03: Agri Organic Consultancy
              </span>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2 font-heading">
                  <Sprout size={14} />
                  <span>Farmer &amp; Landowner Advisory Desk</span>
                </div>

                <h2 className="text-2xl md:text-3xl text-primary-dark font-bold mb-3 leading-snug font-heading">
                  Agriculture Organic Farming Consultancy
                </h2>

                <p className="text-muted text-[14.5px] leading-relaxed mb-5">
                  Professional guidance for progressive farmers, doctors, NRI landowners, and institutions seeking to establish commercial organic orchards. We provide complete blueprints for soil biological profiling, Israeli drip irrigation, Jeevamrutham bio-inputs, and harvest buyback linkages.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="bg-surface-soft p-3.5 rounded-xl border border-border text-[13px]">
                    <strong className="text-primary-dark block mb-0.5 font-bold font-heading">Core Services:</strong>
                    <span className="text-muted">Soil Profiling, Drip &amp; SOPs</span>
                  </div>
                  <div className="bg-surface-soft p-3.5 rounded-xl border border-border text-[13px]">
                    <strong className="text-primary-dark block mb-0.5 font-bold font-heading">Experience:</strong>
                    <span className="text-muted">20+ Years Field Proven</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => setActiveTab('consultancy')}
                  className="btn-primary px-6 py-3 text-sm rounded-full inline-flex items-center gap-2 font-bold cursor-pointer"
                >
                  <Sprout size={15} />
                  <span>View Consultancy Advisory</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href={`tel:${companyInfo.phone}`}
                  className="btn-outline px-5 py-3 text-sm rounded-full inline-flex items-center gap-2 font-semibold cursor-pointer"
                >
                  <Phone size={15} className="text-green-600" />
                  <span>Call Agronomist ({companyInfo.phone})</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. HOW OUR INTEGRATED ECOSYSTEM WORKS */}
        <div className="bg-gradient-to-br from-[#f7fbf8] to-white rounded-3xl border border-border p-8 md:p-11 text-center mb-10 shadow-xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-subtle text-primary border border-primary-border text-xs font-bold uppercase tracking-wider mb-2.5">
            <Award size={13} className="text-primary" />
            <span>Synergistic Agriculture Loop</span>
          </div>

          <h3 className="text-2xl md:text-3xl text-primary-dark font-bold mb-2.5 font-heading">
            How Our 3 Pillars Work Together
          </h3>

          <p className="text-muted text-[15px] max-w-[660px] mx-auto mb-9 leading-relaxed">
            From raw land development to pure value-added organic retail and knowledge sharing, Sukhibhava creates a self-sustaining cycle of agricultural prosperity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-primary-border shadow-xs">
              <span className="text-2xl font-bold text-primary block mb-2 font-heading">01</span>
              <strong className="text-base text-primary-dark block mb-2 font-bold font-heading">Farmland Development</strong>
              <p className="text-[13.5px] text-muted m-0 leading-relaxed">
                We convert fertile red loam lands into systematically planned, drip-irrigated commercial plantations with 100% legal individual ownership.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-secondary-border shadow-xs">
              <span className="text-2xl font-bold text-secondary block mb-2 font-heading">02</span>
              <strong className="text-base text-primary-dark block mb-2 font-bold font-heading">Organic Product Selling</strong>
              <p className="text-[13.5px] text-muted m-0 leading-relaxed">
                Harvests from our managed lands are processed naturally without chemicals and delivered directly to health-conscious consumers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-border shadow-xs">
              <span className="text-2xl font-bold text-primary-dark block mb-2 font-heading">03</span>
              <strong className="text-base text-primary-dark block mb-2 font-bold font-heading">Agri Consultancy</strong>
              <p className="text-[13.5px] text-muted m-0 leading-relaxed">
                We empower farmers and landowners across South India with the exact agronomy blueprints and market buyback channels that power our own success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesView;
