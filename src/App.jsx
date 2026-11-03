import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate
} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { SiteVisitModal } from './components/SiteVisitModal';
import { CropDetailModal } from './components/CropDetailModal';
import { LightboxModal } from './components/LightboxModal';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ProjectsView } from './views/ProjectsView';
import { LegalView } from './views/LegalView';
import { GalleryView } from './views/GalleryView';
import { TestimonialsView } from './views/TestimonialsView';
import { ContactView } from './views/ContactView';
import { ServicesView } from './views/ServicesView';
import { OrganicProductsView } from './views/OrganicProductsView';
import { ConsultancyView } from './views/ConsultancyView';
import { ManagementProfileView } from './views/ManagementProfileView';
import { MarketingProfileView } from './views/MarketingProfileView';

// Auto scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    image: null,
    index: 0,
    items: []
  });

  // Seamless navigation helper for components
  const changeTab = (tab) => {
    if (!tab || tab === 'home') {
      navigate('/');
    } else {
      const cleanPath = tab.startsWith('/') ? tab : `/${tab}`;
      navigate(cleanPath);
    }
  };

  const openLightbox = (image, index, items) => {
    setLightboxState({
      isOpen: true,
      image,
      index,
      items
    });
  };

  const closeLightbox = () => {
    setLightboxState({ ...lightboxState, isOpen: false, image: null });
  };

  const nextLightboxImage = () => {
    const nextIdx = lightboxState.index + 1;
    if (nextIdx < lightboxState.items.length) {
      setLightboxState({
        ...lightboxState,
        index: nextIdx,
        image: lightboxState.items[nextIdx]
      });
    }
  };

  const prevLightboxImage = () => {
    const prevIdx = lightboxState.index - 1;
    if (prevIdx >= 0) {
      setLightboxState({
        ...lightboxState,
        index: prevIdx,
        image: lightboxState.items[prevIdx]
      });
    }
  };

  // Derive activeTab from current pathname (e.g. '/about' -> 'about', '/' -> 'home')
  const currentPath = location.pathname.replace(/^\//, '');
  const activeTab = currentPath === '' ? 'home' : currentPath;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#fafbfc' }}>
      <ScrollToTop />

      {/* Top Sticky Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={changeTab}
        onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
      />

      {/* Main Content Area with React Router */}
      <main style={{ flex: 1, paddingTop: '114px' }}>
        <div key={location.pathname} className="page-transition">
          <Routes>
            <Route
              path="/"
              element={
                <HomeView
                  setActiveTab={changeTab}
                  onSelectCrop={(crop) => setSelectedCrop(crop)}
                  onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
                />
              }
            />
            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route
              path="/about"
              element={
                <AboutView
                  setActiveTab={changeTab}
                  onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
                />
              }
            />
            <Route
              path="/management-profile"
              element={
                <ManagementProfileView
                  setActiveTab={changeTab}
                  onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
                />
              }
            />
            <Route
              path="/marketing-profile"
              element={
                <MarketingProfileView
                  setActiveTab={changeTab}
                  onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
                />
              }
            />
            <Route path="/leadership" element={<Navigate to="/about" replace />} />
            <Route path="/marketing" element={<Navigate to="/about" replace />} />

            {/* Module 1: Farmland Development */}
            <Route
              path="/projects"
              element={
                <ProjectsView
                  onSelectCrop={(crop) => setSelectedCrop(crop)}
                  onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
                />
              }
            />
            <Route path="/farmlands" element={<Navigate to="/projects" replace />} />
            <Route path="/farmland-development" element={<Navigate to="/projects" replace />} />

            {/* Module 2: Organic Farm Products Selling (Dedicated Screen) */}
            <Route
              path="/organic-products"
              element={
                <OrganicProductsView
                  setActiveTab={changeTab}
                  onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
                />
              }
            />
            <Route path="/products" element={<Navigate to="/organic-products" replace />} />
            <Route path="/organic-farm-products" element={<Navigate to="/organic-products" replace />} />

            {/* Module 3: Agri Organic Consultancy (Dedicated Screen) */}
            <Route
              path="/consultancy"
              element={
                <ConsultancyView
                  setActiveTab={changeTab}
                  onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
                />
              }
            />
            <Route path="/consulting" element={<Navigate to="/consultancy" replace />} />
            <Route path="/agri-consultancy" element={<Navigate to="/consultancy" replace />} />
            <Route path="/organic-consultancy" element={<Navigate to="/consultancy" replace />} />

            {/* All 3 Modules Combined Services Overview */}
            <Route
              path="/services"
              element={
                <ServicesView
                  setActiveTab={changeTab}
                  onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
                />
              }
            />

            {/* Gallery, Legal, Testimonials, Contact */}
            <Route
              path="/gallery"
              element={
                <GalleryView
                  onSelectImage={openLightbox}
                  onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
                />
              }
            />
            <Route
              path="/legal"
              element={
                <LegalView
                  onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
                />
              }
            />
            <Route
              path="/testimonials"
              element={
                <TestimonialsView
                  onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactView
                  onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
                />
              }
            />

            {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      {/* Global Footer */}
      <Footer
        setActiveTab={changeTab}
        onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
      />

      {/* Floating Sticky WhatsApp Button */}
      <WhatsAppFloat />

      {/* Interactive Modals */}
      <SiteVisitModal
        isOpen={isSiteVisitOpen}
        onClose={() => setIsSiteVisitOpen(false)}
      />

      <CropDetailModal
        crop={selectedCrop}
        onClose={() => setSelectedCrop(null)}
        onOpenSiteVisit={() => {
          setSelectedCrop(null);
          setIsSiteVisitOpen(true);
        }}
      />

      <LightboxModal
        isOpen={lightboxState.isOpen}
        image={lightboxState.image}
        index={lightboxState.index}
        total={lightboxState.items.length}
        onClose={closeLightbox}
        onNext={nextLightboxImage}
        onPrev={prevLightboxImage}
      />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;