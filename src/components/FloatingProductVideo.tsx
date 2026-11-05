import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Volume2,
  VolumeX,
  X,
  Minimize2,
  Play,
  Sparkles
} from 'lucide-react';

interface FloatingProductVideoProps {
  videoSrc?: string;
}

export const FloatingProductVideo: React.FC<FloatingProductVideoProps> = ({
  videoSrc = '/productspage/short.mp4'
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => { });
        setIsPlaying(true);
      }
    }
  };


  // Minimized Floating Pill Badge (Compact & Elegant)
  if (isMinimized) {
    return createPortal(
      <aside
        className="fixed bottom-5 left-5 z-50 animate-fade-in select-none"
        aria-label="Farm Harvest Video Reel"
      >
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="group flex items-center gap-2.5 bg-emerald-950/95 backdrop-blur-md px-3 py-2 rounded-full border border-emerald-400/50 shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.45)] hover:scale-105 transition-all cursor-pointer text-white"
          title="Expand farm harvest reel"
        >
          <div className="relative w-6.5 h-6.5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-35" />
            <Play size={11} className="ml-0.5 fill-white" />
          </div>
          <div className="text-left pr-1">
            <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-300 block leading-tight">
              Farm Reel
            </span>
            <span className="text-[11px] font-bold text-white leading-tight">
              Watch Video
            </span>
          </div>
        </button>
      </aside>,
      document.body
    );
  }

  // Expanded Floating Reel Card (Refined & Compact)
  return createPortal(
    <aside
      className="fixed bottom-5 left-5 z-50 w-32 sm:w-38 rounded-2xl overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.12)] border-1.5 border-emerald-400/50 hover:border-emerald-300 bg-slate-950 transition-all duration-300 group select-none"
      aria-label="Floating Farm Video Reel"
    >
      {/* Top Floating Control Bar */}
      <div className="absolute top-2 left-2 right-2 z-20 flex items-center justify-between pointer-events-auto">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-1 bg-black/65 backdrop-blur-md px-1.5 py-0.5 rounded-full text-[9px] font-bold text-white border border-white/20 shadow-xs">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="tracking-wide uppercase text-[8.5px]">Reel</span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1">
          {/* Mute Toggle */}
          <button
            type="button"
            onClick={toggleMute}
            className="w-5.5 h-5.5 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md text-white flex items-center justify-center cursor-pointer transition-transform hover:scale-110 border border-white/20 shadow-xs"
            title={isMuted ? 'Unmute sound' : 'Mute sound'}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={10} className="text-amber-300" /> : <Volume2 size={10} className="text-emerald-300" />}
          </button>

          {/* Minimize */}
          <button
            type="button"
            onClick={() => setIsMinimized(true)}
            className="w-5.5 h-5.5 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md text-white flex items-center justify-center cursor-pointer transition-transform hover:scale-110 border border-white/20 shadow-xs"
            title="Minimize video"
            aria-label="Minimize"
          >
            <Minimize2 size={9.5} />
          </button>

          {/* Close */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-5.5 h-5.5 rounded-full bg-black/65 hover:bg-red-950/85 backdrop-blur-md text-white hover:text-red-300 flex items-center justify-center cursor-pointer transition-transform hover:scale-110 border border-white/20 shadow-xs"
            title="Close video"
            aria-label="Close"
          >
            <X size={10} />
          </button>
        </div>
      </div>

      {/* Video Container (Click to pause/play) */}
      <div
        onClick={togglePlay}
        className="relative aspect-[9/16] w-full cursor-pointer bg-slate-950 overflow-hidden"
      >
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Center Mute Helper Badge if muted and playing */}
        {isMuted && isPlaying && (
          <div className="absolute top-9 inset-x-0 flex justify-center pointer-events-none">
            <button
              type="button"
              onClick={toggleMute}
              className="pointer-events-auto inline-flex items-center gap-1 bg-black/70 hover:bg-black/90 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-semibold text-white/95 border border-white/20 shadow-sm transition-transform hover:scale-105"
            >
              <VolumeX size={9.5} className="text-amber-300" />
              <span>Tap for sound</span>
            </button>
          </div>
        )}

        {/* Play State Indicator if paused */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center">
            <div className="w-9 h-9 rounded-full bg-white/95 text-emerald-950 flex items-center justify-center shadow-xl scale-100 hover:scale-110 transition-transform">
              <Play size={16} className="ml-0.5 fill-emerald-950" />
            </div>
          </div>
        )}

        {/* Bottom Floating Control & WhatsApp CTA */}
        <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 pt-7 bg-gradient-to-t from-black/95 via-black/65 to-transparent flex flex-col gap-1.5 z-10 pointer-events-auto">
          <div className="flex items-center gap-1 text-[9.5px] font-semibold text-emerald-300 drop-shadow-sm">
            <Sparkles size={9.5} className="text-amber-300" />
            <span className="truncate">Farm Harvest</span>
          </div>

          {/* <button
            type="button"
            onClick={handleWhatsAppInquiry}
            className="w-full py-1.5 px-1.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-[10px] rounded-lg shadow-md flex items-center justify-center gap-1 cursor-pointer transition-all hover:scale-[1.02] active:scale-98 border border-emerald-300/40"
          >
            <MessageSquare size={10} className="fill-white/20 shrink-0" />
            <span className="truncate">Inquire / Order</span>
          </button> */}
        </div>
      </div>
    </aside>,
    document.body
  );
};

export default FloatingProductVideo;
