import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { companyInfo, faqs } from '../data/websiteData';

interface ContactViewProps {
  onOpenSiteVisit?: () => void;
}

export const ContactView: React.FC<ContactViewProps> = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="bg-surface-soft min-h-screen pb-16">
      {/* 1. Header Banner */}
      <section className="relative py-16 md:py-20 text-white text-center border-b border-slate-200 overflow-hidden">
        <img
          src="/images/luxury-farm-clubhouse.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/90 to-amber-950/45 pointer-events-none" />
        <div className="w-full max-w-[780px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-emerald-100 text-xs font-semibold mb-4">
            <Phone size={13} className="text-emerald-300" />
            <span>Vijayawada HQ • Kanigiri Farmland Site • Prakasam Dist</span>
          </div>

          <h1 className="text-3xl md:text-5xl text-white font-bold mb-3 tracking-tight font-heading">
            Contact Sukhibhava Agro
          </h1>

          <p className="text-emerald-50 text-[15px] leading-relaxed m-0 opacity-95">
            Have questions regarding plot availability, title verification, or crop yield projections? Our advisory desk in Vijayawada is ready to assist you.
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Inquiry Form Grid */}
      <section className="py-12 md:py-14 bg-white border-b border-border">
        <div className="w-full max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-start">
            {/* Left Column: Direct Contacts */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-subtle border border-secondary-border text-[11.5px] font-bold text-secondary-dark uppercase tracking-wider mb-2.5">
                <Sparkles size={12} className="text-secondary" />
                <span>Direct Communications</span>
              </div>

              <h2 className="text-2xl md:text-3xl text-primary-dark font-bold mb-2.5 font-heading">
                We're Here to Assist Your Farmland Journey
              </h2>

              <p className="text-[#475a50] text-sm leading-relaxed mb-6">
                Visit our corporate office in Vijayawada or book an accompanied weekend inspection directly to our Kanigiri Agro Park in Prakasam District.
              </p>

              <div className="flex flex-col gap-3.5">
                {/* Location */}
                <div className="flex gap-3.5 bg-white p-4 rounded-xl border border-[#dcece1] shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-primary-subtle text-green-600 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong className="text-[14.5px] text-primary-dark block mb-0.5 font-bold font-heading">
                      Corporate Headquarters
                    </strong>
                    <span className="text-[13px] text-[#475a50] block leading-snug">
                      Location: {companyInfo.location}
                    </span>
                    <span className="text-xs text-[#688577] mt-0.5 block">
                      Farmland Site: {companyInfo.ventureLocation}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3.5 bg-white p-4 rounded-xl border border-[#dcece1] shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-primary-subtle text-green-600 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <strong className="text-[14.5px] text-primary-dark block mb-0.5 font-bold font-heading">
                      Phone &amp; Call Desk
                    </strong>
                    <div className="text-[13.5px]">
                      <a href={`tel:${companyInfo.phone}`} className="text-primary font-bold hover:underline">
                        {companyInfo.phone}
                      </a>
                    </div>
                    <div className="text-xs text-muted mt-0.5">
                      Sales &amp; Advisory:{' '}
                      <a href={`tel:${companyInfo.secondaryPhone}`} className="text-primary font-semibold hover:underline">
                        {companyInfo.secondaryPhone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3.5 bg-white p-4 rounded-xl border border-[#dcece1] shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-primary-subtle text-green-600 flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <strong className="text-[14.5px] text-primary-dark block mb-0.5 font-bold font-heading">
                      Official Email
                    </strong>
                    <a href={`mailto:${companyInfo.email}`} className="text-primary font-semibold text-[13.5px] hover:underline">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#dcece1] shadow-sm">
              <h3 className="text-xl text-primary-dark font-bold mb-1.5 font-heading">
                Send Us a Message
              </h3>
              <p className="text-muted text-[13px] mb-5">
                Fill out the quick form and our client advisory desk will get in touch.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 p-6 rounded-xl text-center border border-emerald-200">
                  <CheckCircle2 size={32} className="text-green-600 mx-auto mb-2" />
                  <h4 className="text-primary-dark text-base font-bold mb-1 font-heading">Inquiry Received!</h4>
                  <p className="text-[#475a50] text-xs m-0">
                    Thank you for reaching out. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-primary-dark mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="First"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-3 py-2 text-[13.5px] rounded-lg border border-border bg-surface-soft focus:bg-white focus:border-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-primary-dark mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-3 py-2 text-[13.5px] rounded-lg border border-border bg-surface-soft focus:bg-white focus:border-primary outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-primary-dark mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-[13.5px] rounded-lg border border-border bg-surface-soft focus:bg-white focus:border-primary outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-primary-dark mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 92816 22977"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-[13.5px] rounded-lg border border-border bg-surface-soft focus:bg-white focus:border-primary outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-primary-dark mb-1">
                      Comment or Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your farmland requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-[13.5px] rounded-lg border border-border bg-surface-soft focus:bg-white focus:border-primary outline-none transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-accent shimmer-effect btn-full btn-md font-bold mt-1"
                  >
                    <Send size={15} />
                    <span>Submit</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions Accordion */}
      <section className="py-12 md:py-14 bg-surface-soft">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <div className="text-center mb-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-subtle text-primary border border-primary-border text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle size={13} className="text-primary" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-2xl md:text-3xl text-primary-dark font-bold mb-1.5 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-muted text-[13.5px] m-0">
              Everything you need to know about ownership, legal titles, and farm management.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            {faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-xl overflow-hidden border transition-all duration-200 ${isOpen ? 'border-primary shadow-xs' : 'border-[#dcece1]'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    className="w-full p-4 px-4.5 flex items-center justify-between text-left gap-3 cursor-pointer bg-white"
                  >
                    <strong className="text-[14.5px] text-primary-dark font-semibold font-heading">
                      {faq.q}
                    </strong>
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : ''
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 pt-0 px-4.5 text-[#475a50] text-[13.5px] leading-relaxed border-t border-emerald-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactView;
