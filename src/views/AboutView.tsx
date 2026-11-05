import React from 'react';
import {
  AboutHero,
  AboutVisionMission,
  AboutQualityStandards,
  AboutLeadership
} from '../components/about';

export interface AboutViewProps {
  onOpenSiteVisit: () => void;
  setActiveTab: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onOpenSiteVisit,
  setActiveTab
}) => {
  return (
    <div className="bg-[#fcfaf6] min-h-screen">
      {/* 1. Immersive Hero & Corporate Story Showcase */}
      <AboutHero onOpenSiteVisit={onOpenSiteVisit} setActiveTab={setActiveTab} />

      {/* 2. Vision & Mission: Strategic Principles */}
      <AboutVisionMission />

      {/* 3. Core Governance & Quality Standards */}
      <AboutQualityStandards />

      {/* 4. Executive Leadership & Advisory Profiles */}
      <AboutLeadership onOpenSiteVisit={onOpenSiteVisit} setActiveTab={setActiveTab} />
    </div>
  );
};

export default AboutView;
