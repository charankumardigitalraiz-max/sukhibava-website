import React from 'react';
import {
  UserCheck,
  Award,
  ShieldCheck,
  Sprout,
  Calendar,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { leadershipData } from '../data/websiteData';

interface ManagementProfileViewProps {
  setActiveTab: (tab: string) => void;
  onOpenSiteVisit: () => void;
}

export const ManagementProfileView: React.FC<ManagementProfileViewProps> = ({
  setActiveTab,
  onOpenSiteVisit
}) => {
  const md = leadershipData[0];

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
          <span className="text-primary-dark font-semibold">Management Profile</span>
        </div>

        {/* Section Header */}
        <div className="max-w-[720px] mb-7">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-subtle text-primary border border-primary-border text-xs font-bold uppercase tracking-wider mb-2.5">
            <UserCheck size={13} className="text-primary" />
            <span>Executive Board &amp; Farm Leadership</span>
          </div>

          <h1 className="text-2xl md:text-4xl text-primary-dark font-bold mb-2 font-heading">
            Management Profile
          </h1>

          <p className="text-[14.5px] text-[#475a50] leading-relaxed m-0">
            Our management team brings extensive experience in agriculture, land development, and farm management. Ensuring every project is executed with precision and professionalism.
          </p>
        </div>

        {/* Managing Director Profile Showcase Card */}
        <div className="bg-white rounded-2xl overflow-hidden border border-[#d1e5d8] shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-2 mb-8">
          {/* Left: MD Photo */}
          <div className="bg-gradient-to-br from-[#eef7f1] to-[#f7fbf8] p-7 flex flex-col items-center justify-center">
            <div className="group w-full max-w-[280px] rounded-2xl overflow-hidden shadow-md border-4 border-white">
              <img
                src={md.image}
                alt="Managing Director - Sukhibhava Agro Projects"
                className="w-full h-auto max-h-[360px] object-cover block group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mt-3.5 inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-primary-border shadow-xs">
              <Award size={14} className="text-green-600" />
              <span className="text-xs font-semibold text-green-800">
                20+ Years Agricultural Leadership
              </span>
            </div>
          </div>

          {/* Right: Detailed Biography & Pillars */}
          <div className="p-7 md:p-8 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 self-start mb-2 px-2.5 py-1 rounded-full bg-secondary-subtle border border-secondary-border text-[11px] font-bold text-secondary-dark uppercase tracking-wider">
              <Sparkles size={12} className="text-secondary" />
              <span>Managing Director</span>
            </div>

            <h2 className="text-2xl text-primary-dark font-bold mb-2.5 font-heading">
              Leadership Dedicated to Agricultural Excellence
            </h2>

            <p className="text-[#475a50] text-sm leading-relaxed mb-5">
              {md.description}
            </p>

            {/* Key Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="bg-[#f6faf7] p-3 rounded-xl border border-[#e2ece5]">
                <div className="flex items-center gap-1.5 text-primary font-bold mb-1 text-[13px] font-heading">
                  <ShieldCheck size={16} className="text-green-600 shrink-0" />
                  <span>100% Transparency</span>
                </div>
                <p className="m-0 text-xs text-muted leading-relaxed">
                  Direct land mutations, individual spot registration, and open-book farm management.
                </p>
              </div>

              <div className="bg-[#f6faf7] p-3 rounded-xl border border-[#e2ece5]">
                <div className="flex items-center gap-1.5 text-primary font-bold mb-1 text-[13px] font-heading">
                  <Sprout size={16} className="text-green-600 shrink-0" />
                  <span>Scientific Farming</span>
                </div>
                <p className="m-0 text-xs text-muted leading-relaxed">
                  Horticulture expert oversight, Israeli drip irrigation, and high-value export crop yields.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 flex-wrap">
              <button
                type="button"
                onClick={onOpenSiteVisit}
                className="btn-accent shimmer-effect btn-md font-bold"
              >
                <Calendar size={15} />
                <span>Schedule a Farm Visit</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('contact')}
                className="btn-secondary btn-md font-semibold group"
              >
                <span>Contact Leadership</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementProfileView;
