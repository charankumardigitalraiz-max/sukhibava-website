import React, { useState } from 'react';
import { X, Calendar, MapPin, Phone, User, CheckCircle, Sparkles } from 'lucide-react';

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupCity: 'Vijayawada',
    preferredDate: '',
    attendees: '2',
    interestCrop: 'All Crops (Tri-Crop Model)'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={resetAndClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-200"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50/60 p-6 sm:p-7 border-b border-emerald-100 relative">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 w-8.5 h-8.5 rounded-full bg-white border border-emerald-200 text-slate-700 flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <span className="badge-gold inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full mb-2">
            <Sparkles size={12} className="text-amber-600" /> Complimentary Tour
          </span>

          <h3 className="text-xl sm:text-2xl text-emerald-950 font-semibold mt-1.5 mb-1 font-heading">
            Book Your Kanigiri Farm Site Visit
          </h3>

          <p className="text-emerald-800 text-xs sm:text-sm m-0 font-medium leading-relaxed">
            Includes AC Vehicle Pick-up, Guided Orchard Walk &amp; Soil Inspection
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={36} />
              </div>

              <h4 className="text-xl text-emerald-950 font-bold mb-2 font-heading">
                Tour Booking Requested!
              </h4>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-md mx-auto">
                Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our logistics executive will call you at <strong className="text-slate-800">{formData.phone}</strong> to confirm your vehicle pickup slot and weekend travel itinerary.
              </p>

              <button
                onClick={resetAndClose}
                className="btn-amber shimmer-effect px-6 py-2.5 text-sm font-bold rounded-md"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-emerald-950 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-emerald-950 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-emerald-950 mb-1.5">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    <select
                      value={formData.pickupCity}
                      onChange={(e) => setFormData({ ...formData, pickupCity: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all bg-white cursor-pointer"
                    >
                      <option value="Vijayawada">Vijayawada (HQ Pickup)</option>
                      <option value="Ongole">Ongole</option>
                      <option value="Guntur">Guntur</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Self Drive">Self Vehicle to Kanigiri</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-emerald-950 mb-1.5">
                    Preferred Weekend
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-emerald-950 mb-1.5">
                    No. of Attendees
                  </label>
                  <select
                    value={formData.attendees}
                    onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all bg-white cursor-pointer"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons (Couple/Friends)</option>
                    <option value="3-4">3 - 4 Persons (Family)</option>
                    <option value="5+">5+ Persons (Investor Group)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center mt-1">
                <button
                  type="submit"
                  className="btn-accent shimmer-effect btn-md rounded-md font-bold"
                >
                  <Calendar size={17} />
                  <span>Confirm Free Weekend Tour</span>
                </button>
              </div>
              {/* 
              <div className="text-center mt-1">
                <span className="text-xs text-slate-500">
                  Air-conditioned vehicle • No obligation to purchase
                </span>
              </div> */}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
