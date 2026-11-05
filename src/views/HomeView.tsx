import React from 'react';
import {
  HeroVideo,
  ConnectedEcosystem,
  FeaturedProjects,
  HomeProductsShowcase,
  HomeTestimonials
} from '../components/home';
import { HomeViewProps } from '../types';

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  onSelectCrop: _onSelectCrop,
  onOpenSiteVisit
}) => {
  return (
    <div className="bg-[#fcfaf6] min-h-screen">
      {/* 1. Farmland Estate Hero Showcase */}
      <HeroVideo setActiveTab={setActiveTab} onOpenSiteVisit={onOpenSiteVisit} />

      {/* 2. Connected Ecosystem: 3 Pillars (Farmland Dev, Organic Products, Agri Consultancy) */}
      <ConnectedEcosystem setActiveTab={setActiveTab} />

      {/* 3. Featured Farm Projects: Green Valley, Sunrise Orchards, Riverbend Farms */}
      <FeaturedProjects setActiveTab={setActiveTab} onOpenSiteVisit={onOpenSiteVisit} />

      {/* 4. From the Farm: Organic Products Showcase (Oil, Wellness, Honey, Grains) */}
      <HomeProductsShowcase setActiveTab={setActiveTab} />

      {/* 5. Client Testimonials: Investor Trust & Reviews Showcase */}
      <HomeTestimonials />
    </div>
  );
};

export default HomeView;
