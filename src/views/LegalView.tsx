import React from 'react';
import {
  FileCheck,
  ShieldCheck,
  Download,
  CheckCircle2,
  Phone,
  Eye,
  FileText
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

interface LegalViewProps {
  onOpenSiteVisit: () => void;
}

export const LegalView: React.FC<LegalViewProps> = ({ onOpenSiteVisit }) => {
  return (
    <div className="bg-surface-soft min-h-screen pb-16">
      {/* 1. Header Banner */}
      <section className="relative py-16 md:py-20 text-white text-center border-b border-slate-200 overflow-hidden">
        <img
          src="/images/luxury-farmland-aerial.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/90 to-amber-950/45 pointer-events-none" />
        <div className="w-full max-w-[780px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-emerald-100 text-xs font-semibold mb-4">
            <ShieldCheck size={13} className="text-emerald-300" />
            <span>100% Freehold Legal Sanity &amp; Clear Titles • Kanigiri, AP</span>
          </div>

          <h1 className="text-3xl md:text-5xl text-white font-bold mb-3 tracking-tight font-heading">
            Legal Documentation &amp; Due Diligence
          </h1>

          <p className="text-emerald-50 text-[15px] leading-relaxed m-0 opacity-95">
            Every square yard in our Kanigiri Agro Venture comes with clear litigation-free titles, individual spot registration, and statutory government clearances.
          </p>
        </div>
      </section>

      {/* 2. THREE CORE LEGAL PILLARS */}
      <section className="py-12 md:py-14 bg-white border-b border-border">
        <div className="w-full max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-11">
            {/* 1. Sale Deed */}
            <div className="bg-white rounded-2xl p-6 md:p-7 border border-[#dcece1] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-primary-subtle flex items-center justify-center text-green-600 mb-4">
                  <FileText size={22} />
                </div>

                <div className="inline-flex items-center gap-1 mb-2 px-2.5 py-0.5 rounded-full bg-primary-subtle border border-primary-border text-[11px] font-bold text-primary uppercase tracking-wider">
                  Freehold Ownership
                </div>

                <h3 className="text-xl text-primary-dark font-bold mb-1.5 font-heading">
                  Sale Deed
                </h3>

                <p className="text-primary text-[13.5px] font-semibold mb-2">
                  Legal ownership document of the property
                </p>

                <p className="text-muted text-[13px] leading-relaxed mb-4">
                  Executed directly in the investor's name at the Sub-Registrar office with clear survey subdivisions and revenue registry entries.
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#eef5f0]">
                <span className="text-xs text-primary font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-green-600 shrink-0" />
                  <span>Spot Registration Guaranteed</span>
                </span>
              </div>
            </div>

            {/* 2. Title Clearance */}
            <div className="bg-white rounded-2xl p-6 md:p-7 border border-[#dcece1] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-secondary-subtle flex items-center justify-center text-secondary mb-4">
                  <ShieldCheck size={22} />
                </div>

                <div className="inline-flex items-center gap-1 mb-2 px-2.5 py-0.5 rounded-full bg-secondary-subtle border border-secondary-border text-[11px] font-bold text-secondary-dark uppercase tracking-wider">
                  Litigation-Free
                </div>

                <h3 className="text-xl text-primary-dark font-bold mb-1.5 font-heading">
                  Title Clearance
                </h3>

                <p className="text-secondary-dark text-[13.5px] font-semibold mb-2">
                  Verified legal ownership status
                </p>

                <p className="text-muted text-[13px] leading-relaxed mb-4">
                  Vetted by experienced high-court legal counsels with unbroken 30+ year link lineage and complete search reports.
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#eef5f0]">
                <span className="text-xs text-primary font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-green-600 shrink-0" />
                  <span>Zero Encumbrance &amp; Clear Lineage</span>
                </span>
              </div>
            </div>

            {/* 3. NA/NOC */}
            <div className="bg-white rounded-2xl p-6 md:p-7 border border-[#dcece1] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-primary-subtle flex items-center justify-center text-green-600 mb-4">
                  <FileCheck size={22} />
                </div>

                <div className="inline-flex items-center gap-1 mb-2 px-2.5 py-0.5 rounded-full bg-primary-subtle border border-primary-border text-[11px] font-bold text-primary uppercase tracking-wider">
                  Govt Compliant
                </div>

                <h3 className="text-xl text-primary-dark font-bold mb-1.5 font-heading">
                  NA/NOC
                </h3>

                <p className="text-primary text-[13.5px] font-semibold mb-2">
                  Land conversion approvals
                </p>

                <p className="text-muted text-[13px] leading-relaxed mb-4">
                  Statutory forest department NOCs, environmental compliances, and zonal clearances adhering to Andhra Pradesh state administration norms.
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#eef5f0]">
                <span className="text-xs text-primary font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-green-600 shrink-0" />
                  <span>100% Statutory Adherence</span>
                </span>
              </div>
            </div>
          </div>

          {/* Action CTA Box */}
          <div className="bg-gradient-to-br from-[#f6faf7] to-white border border-primary-border rounded-2xl p-7 md:p-8 text-center max-w-[740px] mx-auto shadow-xs">
            <h3 className="text-xl md:text-2xl text-primary-dark font-bold mb-2 font-heading">
              Verify Legal Documents with Our Legal Team
            </h3>

            <p className="text-[#475a50] text-sm max-w-[560px] mx-auto mb-5 leading-relaxed">
              We welcome prospective investors to inspect physical copy files, link documents, and passbooks during our office visits or scheduled weekend farm tours.
            </p>

            <div className="flex justify-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={onOpenSiteVisit}
                className="btn-accent shimmer-effect btn-md font-bold"
              >
                <Download size={15} />
                <span>Download Brochure</span>
              </button>

              <button
                type="button"
                onClick={onOpenSiteVisit}
                className="btn-secondary btn-md font-semibold"
              >
                <Eye size={15} />
                <span>View Documents</span>
              </button>

              <a
                href={`tel:${companyInfo.phone}`}
                className="btn-outline px-5 py-2.5 text-[13.5px] rounded-full inline-flex items-center gap-1.5 font-semibold cursor-pointer"
              >
                <Phone size={15} />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalView;
