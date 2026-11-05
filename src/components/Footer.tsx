import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Map,
  MessageSquare,
  CheckCircle2,
  Layers,
  ShoppingBag,
  Sprout,
  Droplets,
  Calendar,
  Users,
  Compass,
  ShieldCheck,
  Star,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenSiteVisit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenSiteVisit }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNav = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="w-full overflow-hidden bg-[#faf8f4] text-[#1a2c22] border-t border-[#e8e4db] relative">
      {/* ─────────────────────────────────────────────────────────────
          1. TOP PRE-FOOTER BANNER (STAY CONNECTED)
      ────────────────────────────────────────────────────────────── */}
      <div className="relative w-full bg-[#173f34] py-12 sm:py-14 px-6 overflow-hidden">
        {/* Botanical Foliage Corner Overlays from Image Mockup */}
        <img
          src="/images/home/footer-foliage-tl-alpha.png"
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 h-full max-h-[220px] w-auto object-contain pointer-events-none select-none opacity-85"
        />
        <img
          src="/images/home/footer-foliage-tr-alpha.png"
          alt=""
          aria-hidden="true"
          className="absolute top-0 right-0 h-full max-h-[220px] w-auto object-contain pointer-events-none select-none opacity-85"
        />

        <div className="relative z-10 w-full max-w-[760px] mx-auto text-center">
          {/* Symmetrical Gold Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-10 sm:w-16 h-[1px] bg-[#ccae65]/70" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#ccae65]">
              STAY CONNECTED
            </span>
            <span className="w-10 sm:w-16 h-[1px] bg-[#ccae65]/70" />
          </div>

          {/* Headline in Elegant White Serif Typography */}
          <h2 className="font-serif font-normal text-2xl sm:text-3xl lg:text-[36px] text-white leading-tight mb-6 tracking-[-0.01em]">
            Land that gives your future room to grow
          </h2>

          {/* Email Subscription Form */}
          <form
            onSubmit={handleSubscribe}
            className="w-full max-w-[500px] mx-auto bg-white rounded-full p-1.5 pl-4 sm:pl-5 flex items-center shadow-lg border border-white/20"
          >
            <Mail size={16} className="text-[#86978a] shrink-0 mr-3" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-transparent border-none outline-none text-xs sm:text-sm text-slate-800 placeholder-[#86978a]"
            />
            <button
              type="submit"
              className="bg-[#ccae65] hover:bg-[#b89b52] text-[#143e2b] font-bold text-xs sm:text-[13px] px-6 sm:px-7 py-2.5 rounded-full transition-all cursor-pointer shrink-0 shadow-xs active:scale-98"
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>

          {subscribed && (
            <p className="text-emerald-300 text-xs mt-2.5 font-medium inline-flex items-center gap-1.5 animate-fadeIn">
              <CheckCircle2 size={13} />
              <span>Thank you for subscribing to Sukhibhava farm updates.</span>
            </p>
          )}

          {/* Symmetrical Lotus Motif Divider */}
          <div className="flex items-center justify-center gap-3 mt-6 sm:mt-7">
            <span className="w-16 sm:w-28 h-[1px] bg-[#ccae65]/50" />
            <svg
              className="w-4.5 h-4.5 text-[#ccae65]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 3C12 3 8.5 8.5 8.5 13C8.5 15.5 10 17.5 12 17.5C14 17.5 15.5 15.5 15.5 13C15.5 8.5 12 3 12 3Z" />
              <path d="M7.5 10.5C7.5 10.5 3.5 13.5 3.5 16.5C3.5 18.5 5.5 20.5 7.5 20.5C9.5 20.5 11 18.5 11 16.5C11 13.5 7.5 10.5 7.5 10.5Z" opacity="0.85" />
              <path d="M16.5 10.5C16.5 10.5 20.5 13.5 20.5 16.5C20.5 18.5 18.5 20.5 16.5 20.5C14.5 20.5 13 18.5 13 16.5C13 13.5 16.5 10.5 16.5 10.5Z" opacity="0.85" />
            </svg>
            <span className="w-16 sm:w-28 h-[1px] bg-[#ccae65]/50" />
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN 4-COLUMN FOOTER BODY
      ────────────────────────────────────────────────────────────── */}
      <div className="relative w-full py-12 sm:py-14 overflow-hidden">
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0 lg:divide-x divide-[#e8e4db] items-start">
            {/* Column 1: Brand Emblem & Overview */}
            <div className="lg:col-span-3 lg:pr-8 text-center sm:text-left flex flex-col items-center sm:items-start">
              <div
                onClick={() => handleNav('home')}
                className="cursor-pointer mb-2.5 transition-transform hover:scale-102 flex flex-col items-center sm:items-start"
              >
                <img
                  src={companyInfo.logoImage}
                  alt="Sukhibhava Agro Projects"
                  className="h-20 sm:h-22 w-auto object-contain mb-2"
                />
                <h3 className="text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#1a2c22] font-heading m-0">
                  SUKHIBHAVA AGRO PROJECTS
                </h3>
              </div>

              {/* Tagline with Terracotta Flanking Lines */}
              <div className="flex items-center justify-center sm:justify-start gap-2 my-1.5 w-full">
                <span className="w-5 sm:w-6 h-[1px] bg-[#c4683c]" />
                <span className="text-[11px] sm:text-xs font-serif italic text-[#c4683c] tracking-wide whitespace-nowrap">
                  From good soil to honest living
                </span>
                <span className="w-5 sm:w-6 h-[1px] bg-[#c4683c]" />
              </div>

              <p className="text-[11.5px] sm:text-xs text-[#55695c] leading-relaxed mt-1 max-w-[250px] font-normal text-center sm:text-left">
                250+ acres of managed commercial farmlands in Andhra Pradesh.
              </p>
            </div>

            {/* Column 2: CORE VERTICALS */}
            <div className="lg:col-span-3 lg:px-8">
              <h4 className="text-[11.5px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#1a2c22] mb-1 font-heading">
                CORE VERTICALS
              </h4>
              <span className="w-8 h-[1.5px] bg-[#c4683c] block mb-4" />

              <ul className="list-none p-0 m-0 flex flex-col gap-2.5 text-[12.5px] sm:text-[13px]">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('projects')}
                    className="group inline-flex items-center gap-2.5 text-[#283d2f] hover:text-[#0f2e1e] hover:translate-x-1.5 transition-all duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-semibold py-0.5"
                  >
                    <span className="w-5.5 h-5.5 rounded-md bg-[#eee9dc] group-hover:bg-[#c4683c]/15 text-[#c4683c] flex items-center justify-center shrink-0 transition-colors">
                      <Layers size={13} className="group-hover:scale-110 transition-transform" />
                    </span>
                    <span className="transition-colors group-hover:font-bold">Farmland Development</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('organic-products')}
                    className="group inline-flex items-center gap-2.5 text-[#283d2f] hover:text-[#0f2e1e] hover:translate-x-1.5 transition-all duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-semibold py-0.5"
                  >
                    <span className="w-5.5 h-5.5 rounded-md bg-[#eee9dc] group-hover:bg-[#c4683c]/15 text-[#c4683c] flex items-center justify-center shrink-0 transition-colors">
                      <ShoppingBag size={13} className="group-hover:scale-110 transition-transform" />
                    </span>
                    <span className="transition-colors group-hover:font-bold">Organic Farm Products Store</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('consultancy')}
                    className="group inline-flex items-center gap-2.5 text-[#283d2f] hover:text-[#0f2e1e] hover:translate-x-1.5 transition-all duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-semibold py-0.5"
                  >
                    <span className="w-5.5 h-5.5 rounded-md bg-[#eee9dc] group-hover:bg-[#c4683c]/15 text-[#c4683c] flex items-center justify-center shrink-0 transition-colors">
                      <Sprout size={13} className="group-hover:scale-110 transition-transform" />
                    </span>
                    <span className="transition-colors group-hover:font-bold">Agri Organic Consultancy</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('services')}
                    className="group inline-flex items-center gap-2.5 text-[#283d2f] hover:text-[#0f2e1e] hover:translate-x-1.5 transition-all duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-semibold py-0.5"
                  >
                    <span className="w-5.5 h-5.5 rounded-md bg-[#eee9dc] group-hover:bg-[#c4683c]/15 text-[#c4683c] flex items-center justify-center shrink-0 transition-colors">
                      <Droplets size={13} className="group-hover:scale-110 transition-transform" />
                    </span>
                    <span className="transition-colors group-hover:font-bold">Turnkey Israeli Drip Care</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenSiteVisit}
                    className="group inline-flex items-center gap-2.5 text-[#283d2f] hover:text-[#0f2e1e] hover:translate-x-1.5 transition-all duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-semibold py-0.5"
                  >
                    <span className="w-5.5 h-5.5 rounded-md bg-[#eee9dc] group-hover:bg-[#c4683c]/15 text-[#c4683c] flex items-center justify-center shrink-0 transition-colors">
                      <Calendar size={13} className="group-hover:scale-110 transition-transform" />
                    </span>
                    <span className="transition-colors group-hover:font-bold">Book Weekend Farm Tour</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: COMPANY & TRUST */}
            <div className="lg:col-span-3 lg:px-8">
              <h4 className="text-[11.5px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#1a2c22] mb-1 font-heading">
                COMPANY &amp; TRUST
              </h4>
              <span className="w-8 h-[1.5px] bg-[#c4683c] block mb-4" />

              <ul className="list-none p-0 m-0 flex flex-col gap-2.5 text-[12.5px] sm:text-[13px]">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('about')}
                    className="group inline-flex items-center gap-2.5 text-[#283d2f] hover:text-[#0f2e1e] hover:translate-x-1.5 transition-all duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-semibold py-0.5"
                  >
                    <span className="w-5.5 h-5.5 rounded-md bg-[#eee9dc] group-hover:bg-[#c4683c]/15 text-[#c4683c] flex items-center justify-center shrink-0 transition-colors">
                      <Users size={13} className="group-hover:scale-110 transition-transform" />
                    </span>
                    <span className="transition-colors group-hover:font-bold">About &amp; Agronomy Leadership</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('projects')}
                    className="group inline-flex items-center gap-2.5 text-[#283d2f] hover:text-[#0f2e1e] hover:translate-x-1.5 transition-all duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-semibold py-0.5"
                  >
                    <span className="w-5.5 h-5.5 rounded-md bg-[#eee9dc] group-hover:bg-[#c4683c]/15 text-[#c4683c] flex items-center justify-center shrink-0 transition-colors">
                      <Compass size={13} className="group-hover:scale-110 transition-transform" />
                    </span>
                    <span className="transition-colors group-hover:font-bold">Kanigiri Estate Master Plan</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('legal')}
                    className="group inline-flex items-center gap-2.5 text-[#283d2f] hover:text-[#0f2e1e] hover:translate-x-1.5 transition-all duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-semibold py-0.5"
                  >
                    <span className="w-5.5 h-5.5 rounded-md bg-[#eee9dc] group-hover:bg-[#c4683c]/15 text-[#c4683c] flex items-center justify-center shrink-0 transition-colors">
                      <ShieldCheck size={13} className="group-hover:scale-110 transition-transform" />
                    </span>
                    <span className="transition-colors group-hover:font-bold">100% Freehold Legal Clearances</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('testimonials')}
                    className="group inline-flex items-center gap-2.5 text-[#283d2f] hover:text-[#0f2e1e] hover:translate-x-1.5 transition-all duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-semibold py-0.5"
                  >
                    <span className="w-5.5 h-5.5 rounded-md bg-[#eee9dc] group-hover:bg-[#c4683c]/15 text-[#c4683c] flex items-center justify-center shrink-0 transition-colors">
                      <Star size={13} className="group-hover:scale-110 transition-transform" />
                    </span>
                    <span className="transition-colors group-hover:font-bold">Investor Reviews</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('services')}
                    className="group inline-flex items-center gap-2.5 text-[#283d2f] hover:text-[#0f2e1e] hover:translate-x-1.5 transition-all duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-semibold py-0.5"
                  >
                    <span className="w-5.5 h-5.5 rounded-md bg-[#eee9dc] group-hover:bg-[#c4683c]/15 text-[#c4683c] flex items-center justify-center shrink-0 transition-colors">
                      <Sparkles size={13} className="group-hover:scale-110 transition-transform" />
                    </span>
                    <span className="transition-colors group-hover:font-bold">Sustainability</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: CONNECT */}
            <div className="lg:col-span-3 lg:pl-8">
              <h4 className="text-[11.5px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#1a2c22] mb-1 font-heading">
                CONNECT
              </h4>
              <span className="w-8 h-[1.5px] bg-[#c4683c] block mb-4" />

              <div className="flex flex-col gap-2.5 text-[12.5px] sm:text-[13px]">
                {/* 1. HQ Location */}
                <div className="group flex items-center gap-2.5 text-[#283d2f] py-0.5 font-semibold transition-all">
                  <span className="w-5.5 h-5.5 rounded-md bg-[#eee9dc] text-[#c4683c] flex items-center justify-center shrink-0">
                    <MapPin size={13} />
                  </span>
                  <span>Vijayawada HQ</span>
                </div>

                {/* 2. Estate Location */}
                <div className="group flex items-center gap-2.5 text-[#283d2f] py-0.5 font-semibold transition-all">
                  <span className="w-5.5 h-5.5 rounded-md bg-[#eee9dc] text-[#c4683c] flex items-center justify-center shrink-0">
                    <Map size={13} />
                  </span>
                  <span>Kanigiri Estate, Andhra Pradesh</span>
                </div>

                {/* 3. Phone */}
                <div>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="group inline-flex items-center gap-2.5 text-[#283d2f] hover:text-[#0f2e1e] hover:translate-x-1.5 transition-all duration-200 no-underline font-semibold py-0.5"
                  >
                    <span className="w-5.5 h-5.5 rounded-md bg-[#eee9dc] group-hover:bg-[#c4683c]/15 text-[#c4683c] flex items-center justify-center shrink-0 transition-colors">
                      <Phone size={13} className="group-hover:scale-110 transition-transform" />
                    </span>
                    <span className="transition-colors group-hover:font-bold">+91 9281622977</span>
                  </a>
                </div>

                {/* 4. Email */}
                <div>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="group inline-flex items-center gap-2.5 text-[#283d2f] hover:text-[#0f2e1e] hover:translate-x-1.5 transition-all duration-200 no-underline font-semibold break-all py-0.5"
                  >
                    <span className="w-5.5 h-5.5 rounded-md bg-[#eee9dc] group-hover:bg-[#c4683c]/15 text-[#c4683c] flex items-center justify-center shrink-0 transition-colors">
                      <Mail size={13} className="group-hover:scale-110 transition-transform" />
                    </span>
                    <span className="transition-colors group-hover:font-bold">hello@sukhibhava.com</span>
                  </a>
                </div>

                {/* 5. WhatsApp Green Pill Button */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20have%20an%20inquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#173f34] hover:bg-[#113128] text-white text-xs font-bold tracking-wide no-underline shadow-xs hover:shadow-md hover:scale-102 active:scale-98 transition-all cursor-pointer w-fit"
                  >
                    <MessageSquare size={13} className="text-white" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. BOTTOM COPYRIGHT & COMPLIANCE BAR
      ────────────────────────────────────────────────────────────── */}
      <div className="border-t border-[#e8e4db] py-4.5 px-6 sm:px-10 relative z-10 bg-[#faf8f4]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#78887b]">
          <div>
            &copy; {new Date().getFullYear()} Sukhibhava Agro Projects Pvt. Ltd.
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-normal text-[#55695c]">
              100% Freehold Registered Titles • APEDA Compliant
            </span>

            <button
              onClick={scrollToTop}
              title="Back to top"
              className="bg-transparent border-none text-[#1a2c22] hover:text-[#c4683c] text-xs font-semibold cursor-pointer inline-flex items-center gap-1 p-0 transition-colors ml-2"
            >
              <span>Back to top</span>
              <ArrowUp size={12} className="text-[#c4683c]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
