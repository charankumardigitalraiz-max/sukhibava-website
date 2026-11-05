import React from 'react';
import {
  TrendingUp,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { leadershipData } from '../data/websiteData';

interface MarketingProfileViewProps {
  setActiveTab: (tab: string) => void;
  onOpenSiteVisit: () => void;
}

export const MarketingProfileView: React.FC<MarketingProfileViewProps> = ({
  setActiveTab,
  onOpenSiteVisit
}) => {
  const marketingExec = leadershipData[1];

  return (
    <div className="bg-white min-h-[85vh] py-9 pb-14">
      <div className="w-full max-w-[1240px] mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-3.5 text-xs md:text-[13px]">
          <button
            type="button"
            onClick={() => setActiveTab('home')}
            className="text-primary hover:text-primary-hover font-semibold cursor-pointer"
          >
            Home
          </button>
          <span className="text-slate-400">/</span>
          <span className="text-muted">Profile</span>
          <span className="text-slate-400">/</span>
          <span className="text-primary-dark font-semibold">Marketing Profile</span>
        </div>

        {/* Header Section */}
        <div className="max-w-[720px] mb-7">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-subtle text-primary border border-primary-border text-xs font-bold uppercase tracking-wider mb-2.5">
            <TrendingUp size={13} className="text-primary" />
            <span>Investor Relations &amp; Sales Advisory</span>
          </div>

          <h1 className="text-2xl md:text-4xl text-primary-dark font-bold mb-2 font-heading">
            Marketing Profile
          </h1>

          <p className="text-[14.5px] text-[#475a50] leading-relaxed m-0">
            Sukhibhava Agro Projects offers premium agricultural investment opportunities with a focus on sustainable farming and long-term returns in Kanigiri Mandal.
          </p>
        </div>

        {/* Main Executive Showcase Card */}
        <div className="bg-white rounded-2xl overflow-hidden border border-[#d1e5d8] shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-2 mb-8">
          {/* Executive Photo */}
          <div className="bg-gradient-to-br from-[#eef7f1] to-[#f7fbf8] p-7 flex flex-col items-center justify-center">
            <div className="group w-full max-w-[280px] rounded-2xl overflow-hidden shadow-md border-4 border-white">
              <img
                src={marketingExec.image}
                alt={`${marketingExec.name} - ${marketingExec.role}`}
                className="w-full h-auto max-h-[360px] object-cover block group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mt-3.5 inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-primary-border shadow-xs">
              <Sparkles size={14} className="text-amber-600" />
              <span className="text-xs font-semibold text-green-800">
                Dedicated Investor Advisory
              </span>
            </div>
          </div>

          {/* Contact Details & Value Proposition */}
          <div className="p-7 md:p-8 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 self-start mb-2 px-2.5 py-1 rounded-full bg-secondary-subtle border border-secondary-border text-[11px] font-bold text-secondary-dark uppercase tracking-wider">
              <TrendingUp size={12} className="text-secondary" />
              <span>Sales Executive</span>
            </div>

            <h2 className="text-2xl text-primary-dark font-bold mb-1 font-heading">
              {marketingExec.name}
            </h2>

            <span className="text-[13.5px] text-primary font-semibold mb-3.5 block">
              Sales &amp; Investor Consultation Lead
            </span>

            <p className="text-[#475a50] text-sm leading-relaxed mb-5">
              {marketingExec.description}
            </p>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-2.5 mb-6">
              {/* Phone */}
              <a
                href={`tel:${marketingExec.phone}`}
                className="flex items-center gap-3 bg-[#f6faf7] border border-[#dcece1] rounded-xl p-2.5 px-3.5 hover:border-primary/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-subtle flex items-center justify-center text-green-600 shrink-0">
                  <Phone size={17} />
                </div>
                <div>
                  <span className="text-[11px] text-[#6e897c] block">Direct Call</span>
                  <strong className="text-[14.5px] text-primary-dark font-bold font-heading">{marketingExec.phone}</strong>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${marketingExec.email}`}
                className="flex items-center gap-3 bg-[#f6faf7] border border-[#dcece1] rounded-xl p-2.5 px-3.5 hover:border-primary/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-subtle flex items-center justify-center text-green-600 shrink-0">
                  <Mail size={17} />
                </div>
                <div>
                  <span className="text-[11px] text-[#6e897c] block">Direct Email</span>
                  <strong className="text-sm text-primary-dark font-semibold">{marketingExec.email}</strong>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${marketingExec.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#f6faf7] border border-[#dcece1] rounded-xl p-2.5 px-3.5 hover:border-primary/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-subtle flex items-center justify-center text-green-600 shrink-0">
                  <MessageSquare size={17} />
                </div>
                <div>
                  <span className="text-[11px] text-[#6e897c] block">WhatsApp Chat</span>
                  <strong className="text-sm text-green-800 font-semibold">Message Kanka Prasad</strong>
                </div>
              </a>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2.5 flex-wrap">
              <button
                type="button"
                onClick={onOpenSiteVisit}
                className="btn-accent shimmer-effect btn-md font-bold"
              >
                <Calendar size={15} />
                <span>Book Farm Visit with Kanka Prasad</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('projects')}
                className="btn-secondary btn-md font-semibold group"
              >
                <span>View Projects</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingProfileView;
