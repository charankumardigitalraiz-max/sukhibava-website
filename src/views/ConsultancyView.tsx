import React, { useState } from 'react';
import { companyInfo } from '../data/websiteData';
import {
  ConsultancyHero,
  ConsultancyCrops,
  ConsultancyPillars,
  ConsultancyForm,
  ConsultancyTourBanner,
  ConsultancyFormData
} from '../components/consultancy';

interface ConsultancyViewProps {
  setActiveTab?: (tab: string) => void;
  onOpenSiteVisit?: () => void;
}

export const ConsultancyView: React.FC<ConsultancyViewProps> = ({ onOpenSiteVisit }) => {
  const [formData, setFormData] = useState<ConsultancyFormData>({
    name: '',
    phone: '',
    location: '',
    acres: '',
    helpType: 'Commercial Crop Planning (Macadamia, Figs, Geranium)'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }

    const message = `Hello Sukhibhava Agronomy Team, I would like to consult regarding my farmland:
👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
📍 Location: ${formData.location || 'Not Specified'}
🌱 Land Area: ${formData.acres || 'Not Specified'} Acres
🎯 Guidance Required: ${formData.helpType}

Please guide me on organic conversion, crop selection, and setup.`;

    window.open(
      `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
    setIsSubmitted(true);
  };

  const scrollToForm = (serviceTitle?: string) => {
    if (serviceTitle) {
      setFormData((prev) => ({ ...prev, helpType: serviceTitle }));
    }
    const formEl = document.getElementById('consultation-form-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#fcfaf6] min-h-screen">
      {/* 1. Hero Overview */}
      <ConsultancyHero onScrollToForm={() => scrollToForm()} />

      {/* 2. Flagship Commercial Crops */}
      <ConsultancyCrops onSelectCrop={(cropName) => scrollToForm(`Crop Planning for ${cropName}`)} />

      {/* 3. Four Advisory Pillars */}
      <ConsultancyPillars onSelectStage={(stageTitle) => scrollToForm(stageTitle)} />

      {/* 4. Why Landowners Partner with Sukhibhava */}
      {/* <ConsultancyAdvantages /> */}

      {/* 5. Direct Consultation Request Form */}
      <ConsultancyForm
        formData={formData}
        setFormData={setFormData}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        onSubmit={handleSubmit}
      />

      {/* 6. Weekend Inspection Tour CTA Banner */}
      <ConsultancyTourBanner onOpenSiteVisit={onOpenSiteVisit} />
    </di