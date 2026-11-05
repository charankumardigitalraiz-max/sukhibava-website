import React from 'react';
import {
  CheckCircle2,
  MessageSquare,
  User,
  Phone,
  MapPin,
  Layers,
  Sprout,
  ShieldCheck,
  Clock,
  ArrowRight
} from 'lucide-react';
import { companyInfo } from '../../data/websiteData';
import { ScrollReveal } from '../common';

export interface ConsultancyFormData {
  name: string;
  phone: string;
  location: string;
  acres: string;
  helpType: string;
}

export interface ConsultancyFormProps {
  formData: ConsultancyFormData;
  setFormData: React.Dispatch<React.SetStateAction<ConsultancyFormData>>;
  isSubmitted: boolean;
  setIsSubmitted: (val: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ConsultancyForm: React.FC<ConsultancyFormProps> = ({
  formData,
  setFormData,
  isSubmitted,
  setIsSubmitted,
  onSubmit
}) => {
  const baseOptions = [
    'Commercial Crop Planning (Macadamia, Figs, Geranium)',
    'Soil Health & Bio-Input Conversion',
    'Precision Drip Irrigation Setup',
    'Turnkey Organic Farm Development',
    'Organic Certification & Buyback Agreement',
    'Crop Planning for Macadamia Nut Orchards',
    'Crop Planning for Turkish Figs (Anjeer)',
    'Crop Planning for Aromatic Geranium',
    'Soil Profiling & Bio-Conversion',
    'Commercial Crop Blueprinting',
    'Precision Drip & Automation',
    'Guaranteed Offtake & Buybacks'
  ];

  // Guarantee whatever is passed from buttons is selectable
  const serviceOptions = Array.from(
    new Set([formData.helpType, ...baseOptions].filter(Boolean))
  );

  const quickPills = [
    { label: 'Macadamia Nuts', value: 'Crop Planning for Macadamia Nut Orchards' },
    { label: 'Turkish Figs', value: 'Crop Planning for Turkish Figs (Anjeer)' },
    { label: 'Aromatic Geranium', value: 'Crop Planning for Aromatic Geranium' },
    { label: 'Soil Health & Testing', value: 'Soil Health & Bio-Input Conversion' },
    { label: 'Precision Drip Setup', value: 'Precision Drip Irrigation Setup' }
  ];

  return (
    <section
      id="consultation-form-section"
      className="py-12 sm:py-16 md:py-20 border-b border-[#e8e4db] bg-[#fcfaf6]"
      aria-labelledby="form-heading"
    >
      <div className="w-full max-w-[820px] mx-auto px-6 sm:px-10">
        <ScrollReveal animation="fade-up">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e8e4db] p-6 sm:p-9 shadow-sm">
            {/* Form Header */}
            <div className="text-center mb-7 sm:mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-6 h-[1.5px] bg-[#c4683c]" />
                <span className="text-[10.5px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#c4683c]">
                  DIRECT AGRONOMIST CONNECT
                </span>
                <span className="w-6 h-[1.5px] bg-[#c4683c]" />
              </div>
              <h2
                id="form-heading"
                className="font-serif text-2xl sm:text-3xl font-normal text-[#1a2c22] leading-tight mb-2"
              >
                Request a Farmland Consultation
              </h2>
              <p className="text-[#55695c] text-xs sm:text-[13px] leading-relaxed max-w-[520px] mx-auto font-normal m-0">
                Share your land acreage &amp; location to discuss turnkey orchard development, Israeli drip setup, and guaranteed buybacks directly with our specialists.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#fcfaf6] border border-[#e8e4db] rounded-2xl p-7 text-center">
                <div className="w-12 h-12 rounded-full bg-[#f4f2ea] text-[#2d503b] flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <CheckCircle2 size={26} />
                </div>
                <h3 className="font-serif text-lg text-[#1a2c22] font-semibold mb-1.5">
                  Consultation Request Ready!
                </h3>
                <p className="text-[#55695c] text-xs sm:text-[13px] max-w-[460px] mx-auto mb-5 leading-relaxed font-normal">
                  Thank you. We have prepared your farmland inquiry details. If WhatsApp did not open automatically, click below to connect with our agronomist directly.
                </p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <a
                    href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20have%20submitted%20my%20farmland%20consultation%20request.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent btn-sm font-semibold"
                  >
                    <MessageSquare size={14} />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary btn-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                {/* Quick Topic Selection Pills */}
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#718274] mb-2">
                    Quick Select Advisory Topic:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {quickPills.map((p, i) => {
                      const isSelected = formData.helpType === p.value;
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, helpType: p.value }))}
                          className={`text-xs px-2.5 py-1 rounded-lg transition-all cursor-pointer font-medium ${isSelected
                              ? 'bg-[#2d503b] text-white shadow-2xs'
                              : 'bg-[#f4f2ea] text-[#2d503b] hover:bg-[#e8e4db]'
                            }`}
                        >
                          {p.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2x2 Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1a2c22] mb-1">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#718274]">
                        <User size={15} />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Reddy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-[13px] rounded-xl border border-[#d9d5cb] bg-white focus:border-[#2d503b] focus:ring-1 focus:ring-[#2d503b] outline-none transition-all placeholder:text-[#94a399]"
                      />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1a2c22] mb-1">
                      WhatsApp Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#718274]">
                        <Phone size={15} />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-[13px] rounded-xl border border-[#d9d5cb] bg-white focus:border-[#2d503b] focus:ring-1 focus:ring-[#2d503b] outline-none transition-all placeholder:text-[#94a399]"
                      />
                    </div>
                  </div>

                  {/* District / Mandal */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1a2c22] mb-1">
                      District / Mandal
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#718274]">
                        <MapPin size={15} />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. Prakasam / Guntur / Nellore"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-[13px] rounded-xl border border-[#d9d5cb] bg-white focus:border-[#2d503b] focus:ring-1 focus:ring-[#2d503b] outline-none transition-all placeholder:text-[#94a399]"
                      />
                    </div>
                  </div>

                  {/* Land Area */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1a2c22] mb-1">
                      Land Area (Acres)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#718274]">
                        <Layers size={15} />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. 5 Acres / 15 Acres"
                        value={formData.acres}
                        onChange={(e) => setFormData({ ...formData, acres: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-[13px] rounded-xl border border-[#d9d5cb] bg-white focus:border-[#2d503b] focus:ring-1 focus:ring-[#2d503b] outline-none transition-all placeholder:text-[#94a399]"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-[#1a2c22] mb-1">
                    Guidance Service Required
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#718274]">
                      <Sprout size={15} />
                    </div>
                    <select
                      value={formData.helpType}
                      onChange={(e) => setFormData({ ...formData, helpType: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-[13px] rounded-xl border border-[#d9d5cb] bg-white focus:border-[#2d503b] focus:ring-1 focus:ring-[#2d503b] outline-none transition-all cursor-pointer text-[#1a2c22]"
                    >
                      {serviceOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-accent shimmer-effect btn-full btn-lg font-bold shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <MessageSquare size={16} />
                    <span>Submit &amp; Chat on WhatsApp</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* 3 Reassurance Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-[#f4f2ea] text-center">
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#55695c]">
                    <Clock size={12} className="text-[#2d503b] shrink-0" />
                    <span>Quick WhatsApp Reply</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#55695c]">
                    <ShieldCheck size={12} className="text-[#2d503b] shrink-0" />
                    <span>100% Confidential Land Review</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#55695c]">
                    <Sprout size={12} className="text-[#2d503b] shrink-0" />
                    <span>Senior Agronomist Advice</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ConsultancyForm;
