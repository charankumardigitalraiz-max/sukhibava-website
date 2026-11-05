import React from 'react';
import { CropItem } from '../types';
import {
  FarmlandHero,
  FarmlandCrops,
  FarmlandInfrastructure,
  FarmlandRoadmap,
  FarmlandTourBanner
} from '../components/farmland';

interface ProjectsViewProps {
  onSelectCrop: (crop: CropItem) => void;
  onOpenSiteVisit: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onSelectCrop, onOpenSiteVisit }) => {
  return (
    <div className="bg-[#fcfaf6] min-h-screen">
      {/* 1. Hero Overview */}
      <FarmlandHero onOpenSiteVisit={onOpenSiteVisit} />

      {/* 2. Flagship Commercial Crops */}
      <FarmlandCrops onSelectCrop={onSelectCrop} />

      {/* 3. Enterprise Estate Infrastructure */}
      <FarmlandInfrastructure />

      {/* 4. Farmland Ownership Roadmap */}
      <FarmlandRoadmap />

      {/* 5. Weekend Farm Inspection Tour CTA Banner */}
      <FarmlandTourBanner onOpenSiteVisit={onOpenSiteVisit} />
    </div>
  );
};

export const FarmlandDevelopmentView = ProjectsView;

export default ProjectsView;
