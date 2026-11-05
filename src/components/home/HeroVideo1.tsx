import React, { useEffect, useRef } from 'react';
import { kanigiriVenture } from '../../data/websiteData';

export const HeroVideo: React.FC = () => {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);

  // Auto-play the video immediately on page load (muted for browser autoplay policy)
  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = true;
      heroVideoRef.current.defaultMuted = true;
      heroVideoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      className="hero-fullscreen-video-section relative w-full h-screen overflow-hidden"
      aria-label="Sukhibhava Farmland Video"
    >
      <video
        ref={heroVideoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        tabIndex={-1}
        onContextMenu={(e) => e.preventDefault()}
        poster="/images/hero-agro-showcase.jpg"
        className="hero-fullscreen-video-element w-full h-full object-cover"
      >
        <source src={kanigiriVenture.videoUrl} type="video/mp4" />
        <source src={kanigiriVenture.fallbackVideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

