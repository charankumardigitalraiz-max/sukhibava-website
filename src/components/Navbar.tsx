import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Calendar,
  ChevronDown,
  ChevronRight,
  ShoppingBag,
  Sprout,
  Leaf,
  ArrowRight
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSiteVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenSiteVisit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesMenuOpen(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesMenuOpen(false);
    }, 180);
  };

  const handleNavClick = (tabId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* 1. Luminous Light Micro-Bar */}
      {/* <div
        className={`w-full transition-all duration-300 overflow-hidden bg-[#f9faf7] ${isScrolled
          ? 'max-h-0 opacity-0 border-none'
          : 'max-h-10 opacity-100 border-b border-[#e1eee5]'
          }`}
      >
        <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 h-9 flex items-center justify-between text-xs text-slate-600">

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-700">
              <MapPin size={13} className="text-emerald-600 shrink-0" />
              <span>Vijayawada HQ • Kanigiri Farmland Venture</span>
            </span>

            <span className="inline-flex md:hidden items-center gap-1.5 text-slate-700">
              <MapPin size={13} className="text-emerald-600 shrink-0" />
              <span>Kanigiri, AP</span>
            </span>

            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center gap-1 text-slate-700 hover:text-emerald-700 font-medium transition-colors no-underline"
              title="Call Sukhibhava Agro Projects"
            >
              <Phone size={12} className="text-emerald-600 shrink-0" />
              <span>{companyInfo.phone}</span>
            </a>
          </div>


          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-600">
              <Sparkles size={13} className="text-amber-500 shrink-0" />
              <span>20+ Yrs Organic Agriculture Excellence</span>
            </span>

            <a
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20am%20interested%20in%20your%20farmland%20ventures.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold transition-colors no-underline"
              title="Chat with Sukhibhava Agro on WhatsApp"
            >
              <MessageSquare size={12} className="text-emerald-600 shrink-0" />
              <span className="hidden sm:inline">WhatsApp Support →</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </div> */}

      {/* 2. Main Navigation Bar with Frosted Glass / Emerald Gradient on Scroll */}
      <nav
        className={`w-full transition-all duration-300 flex items-center backdrop-blur-md ${isScrolled
          ? 'nav-scrolled h-16.5 bg-gradient-to-r from-[#113825] via-[#165333] to-[#18663e] shadow-lg border-b border-amber-500/30'
          : 'h-18.5 bg-[#fcfaf6] '
          }`}
      >
        <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer select-none shrink-0"
          >
            {/* Logo Emblem (Free-standing, no surrounding circle) */}
            <div className="flex items-center justify-center shrink-0">
              <img
                src={companyInfo.logoImage}
                alt="Sukhibhava Agro Projects"
                className={`object-contain transition-all duration-200 ${isScrolled ? 'h-11 sm:h-12 w-auto' : 'h-13 sm:h-14 w-auto'
                  }`}
              />
            </div>

            {/* Brand Title */}
            <div className="flex flex-col justify-center">
              <span
                className={`font-heading font-bold tracking-tight leading-tight transition-colors duration-200 ${isScrolled ? 'text-white text-base sm:text-lg' : 'text-[#143e2b] text-base sm:text-lg'
                  }`}
              >
                SUKHIBHAVA AGRO
              </span>
              <span
                className={`text-[9.5px] font-semibold tracking-widest uppercase font-display leading-tight transition-colors duration-200 ${isScrolled ? 'text-emerald-300' : 'text-emerald-700'
                  }`}
              >
                Projects Pvt. Ltd.
              </span>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center gap-6.5">
            {/* 1. Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            >
              Home
            </button>

            {/* 2. About */}
            <button
              onClick={() => handleNavClick('about')}
              className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
            >
              About
            </button>

            {/* 3. Services Dropdown */}
            <div
              className="relative flex items-center"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`nav-link inline-flex items-center gap-1 ${activeTab === 'services' || activeTab === 'organic-products' || activeTab === 'consultancy'
                  ? 'active'
                  : ''
                  }`}
              >
                <span>Services</span>
                <ChevronDown
                  size={13}
                  className={`opacity-80 transition-transform duration-200 ${servicesMenuOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                />
              </button>

              {/* Seamless Dropdown */}
              <div
                className={`absolute top-full left-0 pt-2 z-50 transition-all duration-200 ${servicesMenuOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 translate-y-1.5 pointer-events-none'
                  }`}
              >
                <div className="w-76 bg-white/98 backdrop-blur-xl rounded-2xl p-2 border border-slate-200/80 shadow-[0_16px_36px_-6px_rgba(15,46,31,0.14),0_0_0_1px_rgba(0,0,0,0.03)] flex flex-col gap-1">
                  {/* Item 1: Organic Farm Products */}
                  <button
                    onClick={() => handleNavClick('organic-products')}
                    className={`group flex items-start gap-3 w-full p-2.5 rounded-xl text-left transition-all duration-150 ${activeTab === 'organic-products'
                      ? 'bg-emerald-50 text-emerald-950 font-semibold'
                      : 'hover:bg-slate-50 text-slate-700 hover:text-emerald-950'
                      }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${activeTab === 'organic-products'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100'
                        }`}
                    >
                      <ShoppingBag size={15} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-slate-800 group-hover:text-emerald-900 leading-snug">
                          Organic Farm Products
                        </span>
                        <ArrowRight
                          size={12}
                          className="opacity-0 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0 transition-all text-emerald-700 shrink-0"
                        />
                      </div>
                      <p className="text-[11.5px] text-slate-500 m-0 leading-tight mt-0.5 font-normal">
                        Pure organic harvests &amp; farm products
                      </p>
                    </div>
                  </button>

                  {/* Item 2: Agri Organic Consultancy */}
                  <button
                    onClick={() => handleNavClick('consultancy')}
                    className={`group flex items-start gap-3 w-full p-2.5 rounded-xl text-left transition-all duration-150 ${activeTab === 'consultancy'
                      ? 'bg-amber-50 text-amber-950 font-semibold'
                      : 'hover:bg-slate-50 text-slate-700 hover:text-amber-950'
                      }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${activeTab === 'consultancy'
                        ? 'bg-amber-600 text-white'
                        : 'bg-amber-50 text-amber-700 group-hover:bg-amber-100'
                        }`}
                    >
                      <Sprout size={15} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-slate-800 group-hover:text-amber-900 leading-snug">
                          Agri Organic Consultancy
                        </span>
                        <ArrowRight
                          size={12}
                          className="opacity-0 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0 transition-all text-amber-700 shrink-0"
                        />
                      </div>
                      <p className="text-[11.5px] text-slate-500 m-0 leading-tight mt-0.5 font-normal">
                        20+ years agronomy &amp; Israeli drip expertise
                      </p>
                    </div>
                  </button>

                  {/* Item 3: Farmland Development */}
                  <button
                    onClick={() => handleNavClick('projects')}
                    className={`group flex items-start gap-3 w-full p-2.5 rounded-xl text-left transition-all duration-150 ${activeTab === 'projects'
                      ? 'bg-emerald-50 text-emerald-950 font-semibold'
                      : 'hover:bg-slate-50 text-slate-700 hover:text-emerald-950'
                      }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${activeTab === 'projects'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100'
                        }`}
                    >
                      <Leaf size={15} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-slate-800 group-hover:text-emerald-900 leading-snug">
                          Farmland Development
                        </span>
                        <ArrowRight
                          size={12}
                          className="opacity-0 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0 transition-all text-emerald-700 shrink-0"
                        />
                      </div>
                      <p className="text-[11.5px] text-slate-500 m-0 leading-tight mt-0.5 font-normal">
                        250+ acre managed commercial farmlands
                      </p>
                    </div>
                  </button>

                  {/* Overview Footer */}
                  {/* <div className="border-t border-slate-100 mt-1 pt-1">
                    <button
                      onClick={() => handleNavClick('services')}
                      className="group flex items-center justify-between w-full px-3 py-2 rounded-lg text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50/70 transition-colors"
                    >
                      <span>All 3 Modules Overview</span>
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            {/* 4. Projects */}
            <button
              onClick={() => handleNavClick('projects')}
              className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
            >
              Projects
            </button>

            {/* 5. Gallery */}
            <button
              onClick={() => handleNavClick('gallery')}
              className={`nav-link ${activeTab === 'gallery' ? 'active' : ''}`}
            >
              Gallery
            </button>

            {/* 6. Legal Docs */}
            {/* <button
              onClick={() => handleNavClick('legal')}
              className={`nav-link ${activeTab === 'legal' ? 'active' : ''}`}
            >
              Legal Docs
            </button> */}

            {/* 7. Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            >
              Contact
            </button>

            {/* CTA Button */}
            <div className="ml-3">
              <button
                onClick={onOpenSiteVisit}
                className="btn-accent shimmer-effect btn-sm font-bold"
              >
                <Calendar size={14} />
                <span>Book Site Tour</span>
              </button>
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg cursor-pointer transition-colors ${isScrolled
              ? 'bg-white/15 text-white border border-white/25 hover:bg-white/20'
              : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
              }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto px-6 py-6 flex flex-col gap-2 shadow-2xl backdrop-blur-xl border-b-2 transition-all ${isScrolled
            ? 'nav-scrolled bg-[#113825]/95 text-white border-emerald-500'
            : 'bg-white/98 text-slate-800 border-emerald-200'
            }`}
        >
          <button
            onClick={() => handleNavClick('home')}
            className={`nav-link w-full justify-start text-left ${activeTab === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`nav-link w-full justify-start text-left ${activeTab === 'about' ? 'active' : ''}`}
          >
            About
          </button>

          {/* Mobile Services Box / Core Verticals Card */}
          <div
            className={`rounded-2xl p-3 border my-1.5 transition-all ${isScrolled
              ? 'bg-white/[0.08] border-white/15 text-white'
              : 'bg-[#faf8f5] border-[#e8e4db] text-slate-800 shadow-xs'
              }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-current/10">
              <div className="flex items-center gap-2">
                <span
                  className={`w-1.5 h-3.5 rounded-full ${isScrolled ? 'bg-amber-400' : 'bg-emerald-700'
                    }`}
                />
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider ${isScrolled ? 'text-emerald-200' : 'text-emerald-900'
                    }`}
                >
                  Core Verticals
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleNavClick('services')}
                className={`text-[11px] font-semibold inline-flex items-center gap-0.5 cursor-pointer bg-transparent border-none p-0 transition-colors ${isScrolled
                  ? 'text-amber-300 hover:text-white'
                  : 'text-[#d97706] hover:text-emerald-950'
                  }`}
              >
                <span>Overview</span>
                <ChevronRight size={13} />
              </button>
            </div>

            {/* 3 Verticals */}
            <div className="flex flex-col gap-1.5">
              {/* Vertical 1: Organic Farm Products */}
              <button
                type="button"
                onClick={() => handleNavClick('organic-products')}
                className={`group flex items-center justify-between w-full p-2 rounded-xl text-left transition-all cursor-pointer border-none ${activeTab === 'organic-products'
                  ? isScrolled
                    ? 'bg-white/20 text-white'
                    : 'bg-white text-emerald-950 shadow-xs ring-1 ring-emerald-600/25'
                  : isScrolled
                    ? 'bg-transparent text-emerald-100 hover:bg-white/10'
                    : 'bg-white/70 hover:bg-white text-slate-800 hover:shadow-xs'
                  }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isScrolled
                      ? 'bg-emerald-400/20 text-emerald-200'
                      : 'bg-emerald-100/90 text-emerald-800'
                      }`}
                  >
                    <ShoppingBag size={15} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12.5px] font-semibold leading-tight truncate">
                      Organic Farm Products
                    </div>
                    <div
                      className={`text-[10.5px] leading-tight truncate mt-0.5 font-normal ${isScrolled ? 'text-emerald-300/80' : 'text-slate-500'
                        }`}
                    >
                      Pantry harvests &amp; cold-pressed oils
                    </div>
                  </div>
                </div>
                <ChevronRight
                  size={14}
                  className={`shrink-0 ml-2 transition-transform group-hover:translate-x-0.5 ${isScrolled ? 'text-emerald-300/60' : 'text-slate-400'
                    }`}
                />
              </button>

              {/* Vertical 2: Agri Organic Consultancy */}
              <button
                type="button"
                onClick={() => handleNavClick('consultancy')}
                className={`group flex items-center justify-between w-full p-2 rounded-xl text-left transition-all cursor-pointer border-none ${activeTab === 'consultancy'
                  ? isScrolled
                    ? 'bg-white/20 text-white'
                    : 'bg-white text-amber-950 shadow-xs ring-1 ring-amber-600/25'
                  : isScrolled
                    ? 'bg-transparent text-emerald-100 hover:bg-white/10'
                    : 'bg-white/70 hover:bg-white text-slate-800 hover:shadow-xs'
                  }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isScrolled
                      ? 'bg-amber-400/25 text-amber-200'
                      : 'bg-amber-100/90 text-amber-800'
                      }`}
                  >
                    <Sprout size={15} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12.5px] font-semibold leading-tight truncate">
                      Agri Organic Consultancy
                    </div>
                    <div
                      className={`text-[10.5px] leading-tight truncate mt-0.5 font-normal ${isScrolled ? 'text-emerald-300/80' : 'text-slate-500'
                        }`}
                    >
                      Agronomy &amp; Israel drip advisory
                    </div>
                  </div>
                </div>
                <ChevronRight
                  size={14}
                  className={`shrink-0 ml-2 transition-transform group-hover:translate-x-0.5 ${isScrolled ? 'text-emerald-300/60' : 'text-slate-400'
                    }`}
                />
              </button>

              {/* Vertical 3: Farmland Development */}
              <button
                type="button"
                onClick={() => handleNavClick('projects')}
                className={`group flex items-center justify-between w-full p-2 rounded-xl text-left transition-all cursor-pointer border-none ${activeTab === 'projects'
                  ? isScrolled
                    ? 'bg-white/20 text-white'
                    : 'bg-white text-emerald-950 shadow-xs ring-1 ring-emerald-600/25'
                  : isScrolled
                    ? 'bg-transparent text-emerald-100 hover:bg-white/10'
                    : 'bg-white/70 hover:bg-white text-slate-800 hover:shadow-xs'
                  }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isScrolled
                      ? 'bg-emerald-400/20 text-emerald-200'
                      : 'bg-emerald-100/90 text-emerald-800'
                      }`}
                  >
                    <Leaf size={15} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12.5px] font-semibold leading-tight truncate">
                      Farmland Development
                    </div>
                    <div
                      className={`text-[10.5px] leading-tight truncate mt-0.5 font-normal ${isScrolled ? 'text-emerald-300/80' : 'text-slate-500'
                        }`}
                    >
                      Managed commercial eco-farmlands
                    </div>
                  </div>
                </div>
                <ChevronRight
                  size={14}
                  className={`shrink-0 ml-2 transition-transform group-hover:translate-x-0.5 ${isScrolled ? 'text-emerald-300/60' : 'text-slate-400'
                    }`}
                />
              </button>
            </div>
          </div>

          <button
            onClick={() => handleNavClick('projects')}
            className={`nav-link w-full justify-start text-left ${activeTab === 'projects' ? 'active' : ''}`}
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className={`nav-link w-full justify-start text-left ${activeTab === 'gallery' ? 'active' : ''}`}
          >
            Gallery
          </button>
          {/* <button
            onClick={() => handleNavClick('legal')}
            className={`nav-link w-full justify-start text-left ${activeTab === 'legal' ? 'active' : ''}`}
          >
            Legal Docs
          </button> */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`nav-link w-full justify-start text-left ${activeTab === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>

          <div className="mt-3 pt-2 border-t border-emerald-900/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSiteVisit();
              }}
              className="btn-accent shimmer-effect btn-full btn-sm font-bold"
            >
              <Calendar size={15} /> Book Weekend Farm Tour
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
