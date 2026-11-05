import React from 'react';

export interface InfrastructureItem {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  icon: React.ReactNode;
  points: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface CropItem {
  id: string;
  name: string;
  scientific?: string;
  badge: string;
  image: string;
  tagline: string;
  gestation: string;
  lifespan: string;
  overview?: string;
  demandDriver?: string;
  features?: string[];
  careHighlights?: string[];
  irrigationType?: string;
  soilSuitability?: string;
}

export interface TestimonialItem {
  id?: string | number;
  name: string;
  location: string;
  plot: string;
  rating: number;
  tag: string;
  text: string;
  badgeColor: string;
  badgeBg: string;
  badgeBorder: string;
  avatarGradient: string;
  accentGradient: string;
  glowBorder: string;
}

export interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  onSelectCrop: (crop: CropItem) => void;
  onOpenSiteVisit: () => void;
}

