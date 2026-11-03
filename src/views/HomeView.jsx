import React, { useState, useEffect, useRef } from 'react';
import {
  Sprout,
  ShieldCheck,
  Calendar,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Sparkles,
  Play,
  FileCheck,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Award,
  Layers,
  Leaf,
  Droplets,
  BadgeCheck,
  ShoppingBag,
  TrendingUp,
  Sun,
  Camera,
  Compass,
  Phone,
  MessageSquare,
  Wrench,
  HelpCircle,
  FileText,
  Clock,
  Landmark
} from 'lucide-react';
import { companyInfo, cropsData, kanigiriVenture, testimonials, legalDocs } from '../data/websiteData';

export const HomeView = ({ setActiveTab, onSelectCrop, onOpenSiteVisit }) => {
  const [hoveredReviewIdx, setHoveredReviewIdx] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sliderRef = useRef(null);

  // Safely scroll ONLY the horizontal track
  const scrollToSlide = (index) => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.children[0];
    const cardWidth = firstCard ? firstCard.offsetWidth : 340;
    const gap = 22;
    const targetScroll = index * (cardWidth + gap);
    sliderRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    setActiveSlide(index);
  };

  const handlePrev = () => {
    const nextIndex = activeSlide > 0 ? activeSlide - 1 : testimonials.length - 1;
    scrollToSlide(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = (activeSlide + 1) % testimonials.length;
    scrollToSlide(nextIndex);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const cardWidth = sliderRef.current.children[0]?.offsetWidth || 340;
    const gap = 22;
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    setActiveSlide(Math.min(Math.max(0, newIndex), testimonials.length - 1));
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(sliderRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || hoveredReviewIdx !== null || !isSectionVisible) return;
    const timer = setInterval(() => {
      if (!sliderRef.current) return;
      const nextIndex = (activeSlide + 1) % testimonials.length;
      scrollToSlide(nextIndex);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, hoveredReviewIdx, activeSlide, isSectionVisible]);

  // WhatsApp inquiry helper
  const handleWhatsAppInquiry = (subject, details) => {
    const message = `Hello Sukhibhava Agro Team, I am interested in your Managed Farmland in Kanigiri, AP:
🌱 Subject: ${subject}
📋 Details: ${details}

Please share available plot units, pricing, and weekend site tour details.`;
    window.open(
      `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  // 4 Core Infrastructure Pillars — With Dedicated Photos (Modeled after SPP / Sai Properties)
  const coreInfrastructure = [
    {
      id: 'dev',
      step: '01',
      title: 'Land Acquisition & Clear Titles',
      subtitle: '100% Freehold Ownership',
      desc: 'Meticulous 30-year legal vetting, encumbrance clearance, and direct spot registered sale deed with individual digital passbook at the local Sub-Registrar.',
      image: '/images/turnkey-plantation-setup.jpg',
      icon: <FileCheck size={20} style={{ color: 'var(--color-primary)' }} />,
      points: ['Direct Sub-Registrar spot registration', 'Assistance for digital Pattadar Passbook', 'Zero litigation or boundary disputes']
    },
    {
      id: 'solar',
      step: '02',
      title: 'Solar Power & Gated Security',
      subtitle: '24/7 Perimeter Protection',
      desc: 'All ventures are fortified with solar-powered electrified perimeter fencing, solar avenue street lighting, gated security checkpoints, and modern CCTV surveillance.',
      image: '/images/farm-cctv-monitoring.jpg',
      icon: <Sun size={20} style={{ color: 'var(--color-secondary)' }} />,
      points: ['Solar-powered electrified fencing', 'Eco-friendly solar avenue streetlights', '24/7 CCTV surveillance & manned entry']
    },
    {
      id: 'drip',
      step: '03',
      title: 'Israeli Drip Irrigation Grid',
      subtitle: 'Precision Water Conservation',
      desc: 'Automated pressure-compensating micro-drip networks connected to high-yield sweet water borewells, delivering liquid organic Jeevamrutham straight to tree root zones.',
      image: '/images/precision-drip-system.jpg',
      icon: <Droplets size={20} style={{ color: 'var(--color-primary)' }} />,
      points: ['Up to 60% water conservation', 'Automated Venturi liquid bio-fertilization', 'Individual root-zone micro emitters']
    },
    {
      id: 'care',
      step: '04',
      title: 'Turnkey Maintenance & Buybacks',
      subtitle: 'Lifelong Agronomy Care',
      desc: 'Complete turnkey care from planting mother saplings to pruning, fertilization, weeding, and post-harvest produce buybacks with transparent returns credited to investors.',
      image: '/images/agri-consultancy-expert.jpg',
      icon: <Wrench size={20} style={{ color: 'var(--color-secondary)' }} />,
      points: ['Dedicated on-site agronomists & labor', 'Regular photo & video growth updates', 'APEDA & organic buyback networks']
    }
  ];

  // Investment Units Breakdown — With Real Visual Photos (Modeled after redsandalspp.com)
  const investmentUnits = [
    {
      unit: '25 Cents Unit',
      label: 'Starter Agroforestry Plot',
      area: '1/4 Acre (10,890 Sq.Ft.)',
      badge: 'Popular for Professionals',
      image: '/gallery/geranium-field-standing.jpg',
      trees: '50 - 75 Managed Trees & Intercrops',
      features: [
        '100% Individual Registered Sale Deed',
        'Automated Israeli Drip Lines Connected',
        'Macadamia, Anjeer & Geranium Mix',
        '24/7 Turnkey Care & Harvest Buyback'
      ],
      idealFor: 'Doctors, IT Leaders & First-Time Farmland Investors',
      featured: false
    },
    {
      unit: '50 Cents Unit',
      label: 'Family Wealth Builder',
      area: '1/2 Acre (21,780 Sq.Ft.)',
      badge: 'Most Recommended',
      image: '/gallery/geranium-field-rows.jpg',
      trees: '120 - 150 Managed Trees & Intercrops',
      features: [
        'Direct Freehold Title & Passbook Assistance',
        'Dual-Crop Allocation (High Yield & Early Income)',
        'Compounding Seasonal Harvest Returns',
        'VIP Access to Farm Guesthouse & Tours'
      ],
      idealFor: 'Families Seeking Long-Term Passive Wealth & Weekend Retreat',
      featured: true
    },
    {
      unit: '1 Acre Estate',
      label: 'Commercial Agroforestry Estate',
      area: '100 Cents (43,560 Sq.Ft.)',
      badge: 'Maximum Yield & Legacy',
      image: '/images/luxury-farmland-aerial.jpg',
      trees: '250 - 300 Managed Trees & Intercrops',
      features: [
        'Full 1-Acre Registered Agroforestry Title',
        'Peak Annual Yield: ₹8,00,000 - ₹12,00,000/Acre',
        'Commercial Buyback Contract with Export Ties',
        'Exclusive Estate Demarcation & Avenue Frontage'
      ],
      idealFor: 'HNIs, NRIs & High-Yield Long-Term Asset Creators',
      featured: false
    }
  ];

  // 6-Step Visual Process
  const howItWorks = [
    {
      step: '01',
      title: 'Select Unit',
      desc: 'Choose between 25 Cents, 50 Cents, or 1 Acre based on your budget & wealth goals.'
    },
    {
      step: '02',
      title: 'Free Farm Tour',
      desc: 'Join our free weekend AC vehicle tour from Vijayawada, Guntur or Ongole.'
    },
    {
      step: '03',
      title: 'Legal Clearances',
      desc: 'Inspect 30-year Encumbrance Certificate (EC), digital revenue records & water reports.'
    },
    {
      step: '04',
      title: 'Spot Registration',
      desc: 'The land is directly registered in your name as an individual Sale Deed at Sub-Registrar.'
    },
    {
      step: '05',
      title: 'Planting & Drip',
      desc: 'Our agronomists install Israeli drip pipes and plant high-yield mother saplings.'
    },
    {
      step: '06',
      title: 'Lifelong Returns',
      desc: 'We care, prune, fertilize, harvest, and buy back produce with tax-free payouts.'
    }
  ];

  // Asset Comparison Matrix
  const assetComparison = [
    {
      asset: 'Sukhibhava Farmland',
      security: '100% Individual Registered Sale Deed',
      returns: 'Land Appreciation + Recurring Crop Income',
      tax: '100% Tax-Free (Sec 10(1) IT Act)',
      maintenance: 'Zero Hassle (Turnkey Drip & Farm Crew)',
      highlight: true
    },
    {
      asset: 'Urban Apartment / Flat',
      security: 'Undivided Land Share (UDS)',
      returns: 'Low Rental Yield (2% - 3%)',
      tax: 'Taxable under Income from House Property',
      maintenance: 'High Maintenance, Tenant Hassles',
      highlight: false
    },
    {
      asset: 'Fixed Deposit (Bank FD)',
      security: 'DICGC Insured up to ₹5 Lakhs',
      returns: '6.5% - 7% (Fails against real inflation)',
      tax: 'Fully Taxable as per Income Tax Slab',
      maintenance: 'No Growth; Purchasing Power Depreciates',
      highlight: false
    },
    {
      asset: 'Stock Market / Mutual Funds',
      security: 'High Volatility & Market Risk',
      returns: 'Unpredictable, Cyclical Market Swings',
      tax: 'Subject to STCG & LTCG Capital Gains Tax',
      maintenance: 'Requires Constant Market Monitoring',
      highlight: false
    }
  ];

  return (
    <div style={{ background: 'var(--color-bg-page)' }}>
      {/* ======================================================================
          1. TOP ANNOUNCEMENT MICRO-RIBBON (High Trust, Clean)
          ====================================================================== */}
      <div
        style={{
          background: 'linear-gradient(90deg, #113825 0%, #165333 50%, #18663e 100%)',
          color: '#ffffff',
          padding: '8px 16px',
          fontSize: '12px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(245, 158, 11, 0.3)',
          letterSpacing: '0.02em'
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Sparkles size={13} style={{ color: '#fde68a' }} />
          <span><strong>Kanigiri Farmland Park:</strong> 250+ Acres Managed Agroforestry</span>
          <span style={{ opacity: 0.6 }}>•</span>
          <span>100% Individual Spot Registered Sale Deed</span>
          <span style={{ opacity: 0.6 }}>•</span>
          <span style={{ color: '#fef08a', fontWeight: 600 }}>Complimentary Weekend AC Inspection Tours</span>
        </span>
      </div>

      {/* ======================================================================
          2. IMMERSIVE HERO SECTION: Layered Master-Planned Aerial Drone View
          ====================================================================== */}
      <section
        style={{
          position: 'relative',
          padding: '64px 0 56px',
          background: 'linear-gradient(135deg, rgba(14, 46, 31, 0.92) 0%, rgba(20, 83, 45, 0.84) 55%, rgba(180, 83, 9, 0.35) 100%), url("/images/luxury-farmland-aerial.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Bold Typography & Value Proposition */}
            <div>
              {/* Trust Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '5px 16px',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 0.14)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.28)',
                  marginBottom: '18px'
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#86efac',
                    boxShadow: '0 0 10px #86efac',
                    display: 'inline-block'
                  }}
                  className="pulse-glow"
                />
                <span style={{ color: '#dcfce7', fontSize: '13px', fontWeight: 600 }}>
                  250+ Acre Managed Farmland • Kanigiri Mandal, AP
                </span>
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontSize: 'clamp(32px, 4.2vw, 52px)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: '#ffffff',
                  marginBottom: '14px',
                  letterSpacing: '-0.025em',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                One-Time Farmland Investment, <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #fde68a 0%, #fbbf24 60%, #f59e0b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline'
                  }}
                >
                  Lifetime Generational Wealth.
                </span>
              </h1>

              {/* Tagline Motto */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                <Sparkles size={16} style={{ color: '#fde68a' }} />
                <span
                  className="font-serif"
                  style={{
                    fontSize: '15.5px',
                    color: '#fef3c7',
                    fontWeight: 600,
                    letterSpacing: '0.01em'
                  }}
                >
                  "Agriculture Is My Culture" — 20+ Years Field Agricultural Excellence
                </span>
              </div>

              {/* Persuasive Description */}
              <p
                style={{
                  fontSize: '15.5px',
                  color: '#e2f5ea',
                  lineHeight: 1.68,
                  marginBottom: '28px',
                  maxWidth: '580px',
                  opacity: 0.96
                }}
              >
                Sukhibhava Agro Projects Pvt. Ltd. unites 20+ years of senior organic agronomy expertise with high-yield commercial crops. 100% individual spot registered freehold ownership with automated Israeli drip irrigation, solar perimeter security, and complete turnkey harvest buybacks in Kanigiri, Andhra Pradesh.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <button
                  onClick={onOpenSiteVisit}
                  className="btn-amber shimmer-effect"
                  style={{ padding: '13px 26px', fontSize: '14.5px', borderRadius: '100px' }}
                >
                  <Calendar size={16} />
                  <span>Book Free Weekend Farm Tour</span>
                </button>

                <button
                  onClick={() => setActiveTab('projects')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '13px 24px',
                    fontSize: '14.5px',
                    borderRadius: '100px',
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(10px)',
                    color: '#ffffff',
                    border: '1.5px solid rgba(255, 255, 255, 0.4)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)';
                    e.currentTarget.style.borderColor = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  }}
                >
                  <span>Explore Farmlands</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* 3 Core Trust Badges */}
              <div
                style={{
                  display: 'flex',
                  gap: '22px',
                  flexWrap: 'wrap',
                  paddingTop: '18px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.18)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#dcfce7', fontWeight: 600 }}>
                  <CheckCircle2 size={16} style={{ color: '#86efac' }} />
                  <span>20+ Years Legacy</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#dcfce7', fontWeight: 600 }}>
                  <CheckCircle2 size={16} style={{ color: '#86efac' }} />
                  <span>100% Clear Freehold Titles</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#dcfce7', fontWeight: 600 }}>
                  <CheckCircle2 size={16} style={{ color: '#86efac' }} />
                  <span>Turnkey Israeli Drip Care</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Farmland Showcase Card with Real Photo */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '24px',
                  padding: '14px',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35)'
                }}
              >
                <div
                  style={{
                    borderRadius: '18px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                  className="img-zoom-wrapper"
                >
                  <img
                    src="/gallery/geranium-field-rows.jpg"
                    alt="Authentic Kanigiri Farmland - Field Plantation Rows"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '360px',
                      display: 'block',
                      objectFit: 'cover',
                      objectPosition: 'center 35%'
                    }}
                  />

                  {/* Top Floating Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(22, 66, 47, 0.92)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '100px',
                      padding: '5px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      border: '1px solid rgba(253, 230, 138, 0.4)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }}
                  >
                    <Sparkles size={13} style={{ color: '#fde68a' }} />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#fef08a' }}>
                      Real Field Photo • Kanigiri
                    </span>
                  </div>

                  {/* Bottom Strip */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      right: '12px',
                      background: 'rgba(255, 255, 255, 0.96)',
                      backdropFilter: 'blur(12px)',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: '1px solid rgba(22, 101, 59, 0.15)',
                      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MapPin size={16} style={{ color: '#16a34a' }} />
                      <div>
                        <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#16422f', display: 'block', lineHeight: 1.2 }}>
                          Kanigiri Agro Venture
                        </span>
                        <span style={{ fontSize: '11px', color: '#5b7367' }}>
                          Prakasam District, Andhra Pradesh
                        </span>
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#166534',
                        background: '#eaf8ef',
                        padding: '4px 10px',
                        borderRadius: '100px',
                        border: '1px solid #bcead0'
                      }}
                    >
                      Macadamia • Anjeer • Geranium
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar (Floating Over Bottom of Hero) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '14px',
              marginTop: '46px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(255, 255, 255, 0.18)'
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '14px',
                padding: '16px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '26px', fontWeight: 800, color: '#fef08a', lineHeight: 1.1 }}>250+</div>
              <div style={{ fontSize: '12px', color: '#dcfce7', marginTop: '4px', fontWeight: 600 }}>Acres Managed Farmland</div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '14px',
                padding: '16px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '26px', fontWeight: 800, color: '#fef08a', lineHeight: 1.1 }}>100%</div>
              <div style={{ fontSize: '12px', color: '#dcfce7', marginTop: '4px', fontWeight: 600 }}>Spot Registered Sale Deed</div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '14px',
                padding: '16px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '26px', fontWeight: 800, color: '#fef08a', lineHeight: 1.1 }}>3 Crops</div>
              <div style={{ fontSize: '12px', color: '#dcfce7', marginTop: '4px', fontWeight: 600 }}>Macadamia, Anjeer & Geranium</div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '14px',
                padding: '16px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '26px', fontWeight: 800, color: '#fef08a', lineHeight: 1.1 }}>20+ Yrs</div>
              <div style={{ fontSize: '12px', color: '#dcfce7', marginTop: '4px', fontWeight: 600 }}>Senior Agronomy Experience</div>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================================
          3. WHAT WE DO: THE 4 CORE INFRASTRUCTURE PILLARS (WITH PHOTO HEADERS)
          (SPP Style Visual Feature Cards — Images at top, clean text below)
          ====================================================================== */}
      <section style={{ padding: '64px 0 52px', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 38px' }}>
            <div className="badge-pill" style={{ marginBottom: '8px', fontSize: '12px', padding: '4px 14px' }}>
              <Layers size={13} style={{ color: 'var(--color-primary)' }} />
              <span>Full-Stack Development Infrastructure</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(26px, 3.4vw, 36px)',
                color: 'var(--color-primary-dark)',
                marginBottom: '10px',
                fontWeight: 800,
                letterSpacing: '-0.02em'
              }}
            >
              What We Do: Complete Farmland Infrastructure
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', margin: 0, lineHeight: 1.6 }}>
              At Sukhibhava Agro Projects Ltd, we follow an institutional engineering approach with real on-ground infrastructure ensuring security, precision irrigation, and high-yield returns.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            {coreInfrastructure.map((inf) => (
              <div
                key={inf.id}
                className="interactive-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1.5px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 24px -6px rgba(22, 66, 47, 0.08)'
                }}
              >
                <div>
                  {/* Photo Header (Visual First!) */}
                  <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }} className="img-zoom-wrapper">
                    <img
                      src={inf.image}
                      alt={inf.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        background: 'rgba(22, 66, 47, 0.92)',
                        backdropFilter: 'blur(6px)',
                        color: '#ffffff',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '100px'
                      }}
                    >
                      PILLAR {inf.step}
                    </div>

                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.18)'
                      }}
                    >
                      {inf.icon}
                    </div>
                  </div>

                  <div style={{ padding: '22px 20px 16px' }}>
                    <span style={{ fontSize: '11.5px', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>
                      {inf.subtitle}
                    </span>

                    <h3 style={{ fontSize: '18px', color: 'var(--color-primary-dark)', fontWeight: 700, marginBottom: '10px', lineHeight: 1.3 }}>
                      {inf.title}
                    </h3>

                    <p style={{ color: 'var(--color-text-muted)', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '16px' }}>
                      {inf.desc}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {inf.points.map((pt, ptIdx) => (
                        <li key={ptIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                          <CheckCircle2 size={14} style={{ color: '#16a34a', flexShrink: 0, marginTop: '2px' }} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          4. INVESTMENT UNITS & OWNERSHIP MODEL (VISUAL ESTATE CARDS)
          (SPP Style Unit Breakdown with Photo Covers)
          ====================================================================== */}
      <section style={{ padding: '60px 0', background: 'var(--color-bg-soft)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 38px' }}>
            <div className="badge-pill" style={{ marginBottom: '8px', fontSize: '12px', padding: '4px 14px' }}>
              <Landmark size={13} style={{ color: 'var(--color-secondary)' }} />
              <span>Tailored Farmland Portfolios</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(26px, 3.4vw, 36px)',
                color: 'var(--color-primary-dark)',
                marginBottom: '10px',
                fontWeight: 800,
                letterSpacing: '-0.02em'
              }}
            >
              Choose Your Farmland Investment Unit
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', margin: 0, lineHeight: 1.6 }}>
              Whether you are acquiring a starter 25 Cents plot or a full 1-Acre commercial agro-estate, every unit comes with direct spot registration and complete turnkey care.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '26px' }}>
            {investmentUnits.map((u, uIdx) => (
              <div
                key={uIdx}
                className="interactive-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  border: u.featured ? '2px solid var(--color-secondary)' : '1.5px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: u.featured ? '0 14px 38px -8px rgba(217, 119, 6, 0.18)' : '0 6px 20px -6px rgba(22, 66, 47, 0.05)',
                  position: 'relative'
                }}
              >
                {/* Unit Photo Header (Real Visual Cover!) */}
                <div style={{ position: 'relative', height: '175px', overflow: 'hidden' }} className="img-zoom-wrapper">
                  <img
                    src={u.image}
                    alt={u.unit}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />

                  {/* Top Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: u.featured ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'rgba(22, 66, 47, 0.92)',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '100px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                  >
                    {u.badge}
                  </div>

                  {/* Bottom Area Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: 'rgba(255, 255, 255, 0.96)',
                      backdropFilter: 'blur(6px)',
                      color: 'var(--color-primary-dark)',
                      fontSize: '12px',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '8px',
                      border: '1px solid var(--color-primary-border)'
                    }}
                  >
                    {u.area}
                  </div>
                </div>

                <div style={{ padding: '24px 22px 14px' }}>
                  <h3 style={{ fontSize: '22px', color: 'var(--color-primary-dark)', fontWeight: 800, margin: '0 0 4px' }}>
                    {u.unit}
                  </h3>

                  <span style={{ fontSize: '13px', color: 'var(--color-primary)', display: 'block', marginBottom: '16px', fontWeight: 600 }}>
                    {u.label}
                  </span>

                  {/* Plantation Spec Banner */}
                  <div
                    style={{
                      background: 'var(--color-bg-soft)',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1px solid var(--color-border)',
                      marginBottom: '18px'
                    }}
                  >
                    <span style={{ fontSize: '11.5px', color: 'var(--color-text-subtle)', display: 'block', marginBottom: '2px' }}>
                      Plantation Capacity:
                    </span>
                    <strong style={{ fontSize: '13.5px', color: 'var(--color-primary-dark)' }}>
                      🌱 {u.trees}
                    </strong>
                  </div>

                  {/* Features List */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {u.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                        <CheckCircle2 size={14} style={{ color: '#16a34a', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <p style={{ fontSize: '12px', color: 'var(--color-text-subtle)', lineHeight: 1.5, margin: 0, fontStyle: 'italic', borderTop: '1px solid var(--color-border)', paddingTop: '10px' }}>
                    Ideal For: {u.idealFor}
                  </p>
                </div>

                <div style={{ padding: '0 22px 22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <button
                    onClick={() => handleWhatsAppInquiry(`Inquiry for ${u.unit}`, `${u.area} with ${u.trees}`)}
                    className={u.featured ? 'btn-amber shimmer-effect' : 'btn-primary'}
                    style={{ width: '100%', justifyContent: 'center', padding: '11px 16px', fontSize: '13.5px', borderRadius: '100px' }}
                  >
                    <MessageSquare size={14} />
                    <span>Inquire Pricing on WhatsApp</span>
                  </button>

                  <button
                    onClick={onOpenSiteVisit}
                    className="btn-outline"
                    style={{ width: '100%', justifyContent: 'center', padding: '9px 16px', fontSize: '13px', borderRadius: '100px' }}
                  >
                    <Calendar size={14} />
                    <span>Book Inspection Visit</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          5. THE HIGH-IMPACT QUOTE BANNER
          ====================================================================== */}
      <section
        style={{
          padding: '60px 0',
          background: 'linear-gradient(135deg, #113825 0%, #165333 55%, #18663e 100%)',
          color: '#ffffff',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ maxWidth: '880px', position: 'relative', zIndex: 2 }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', color: '#fef08a' }}>
            <Quote size={24} />
          </div>

          <h2
            style={{
              fontSize: 'clamp(24px, 3.6vw, 42px)',
              fontWeight: 800,
              lineHeight: 1.25,
              color: '#ffffff',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-heading)'
            }}
          >
            "THERE IS NO BEST INVESTMENT ON EARTH <br />
            <span style={{ color: '#fef08a' }}>THAN INVESTING IN REAL EARTH."</span>
          </h2>

          <p style={{ color: '#dcfce7', fontSize: '16px', lineHeight: 1.7, margin: '0 auto 26px', maxWidth: '720px', opacity: 0.95 }}>
            While physical gold remains static and urban concrete depreciates, fertile managed farmland compounds perpetual value through natural tree girth growth, high-value export harvests, and capital land appreciation.
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '6px 20px',
              borderRadius: '100px',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(253, 230, 138, 0.4)',
              fontSize: '13px',
              color: '#fef3c7',
              fontWeight: 600
            }}
          >
            <ShieldCheck size={16} style={{ color: '#86efac' }} />
            <span>100% Tax-Free Agricultural Income • Section 10(1) of Indian Income Tax Act</span>
          </div>
        </div>
      </section>

      {/* ======================================================================
          6. HOW IS THE PROCESS — 6-STEP VISUAL PIPELINE
          ====================================================================== */}
      <section style={{ padding: '64px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 38px' }}>
            <div className="badge-pill" style={{ marginBottom: '8px', fontSize: '12px', padding: '4px 14px' }}>
              <Clock size={13} style={{ color: 'var(--color-primary)' }} />
              <span>Transparent 6-Step Roadmap</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', color: 'var(--color-primary-dark)', marginBottom: '10px', fontWeight: 800 }}>
              How Is the Ownership Process?
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', margin: 0, lineHeight: 1.6 }}>
              A seamless, legally transparent end-to-end investment journey from initial site tour to lifetime harvest buybacks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {howItWorks.map((st) => (
              <div
                key={st.step}
                className="interactive-card"
                style={{
                  background: 'var(--color-bg-soft)',
                  padding: '24px 20px',
                  borderRadius: '18px',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '13px',
                        fontWeight: 800,
                        color: 'var(--color-primary)',
                        background: 'var(--color-primary-subtle)',
                        padding: '4px 10px',
                        borderRadius: '6px'
                      }}
                    >
                      STEP {st.step}
                    </span>

                    <CheckCircle2 size={18} style={{ color: '#16a34a' }} />
                  </div>

                  <h3 style={{ fontSize: '18px', color: 'var(--color-primary-dark)', fontWeight: 700, marginBottom: '8px' }}>
                    {st.title}
                  </h3>

                  <p style={{ color: 'var(--color-text-muted)', fontSize: '13.5px', lineHeight: 1.55, margin: 0 }}>
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <button
              onClick={onOpenSiteVisit}
              className="btn-amber shimmer-effect"
              style={{ padding: '13px 28px', fontSize: '14.5px', borderRadius: '100px' }}
            >
              <Calendar size={16} />
              <span>Book Your Free Weekend Inspection Tour</span>
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================================
          7. FLAGSHIP COMMERCIAL CROPS: Macadamia, Anjeer & Geranium
          ====================================================================== */}
      <section style={{ padding: '60px 0', background: 'var(--color-bg-soft)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 36px' }}>
            <div className="badge-pill" style={{ marginBottom: '8px', fontSize: '12px', padding: '4px 14px' }}>
              <Sprout size={13} style={{ color: 'var(--color-primary)' }} />
              <span>Commercial Plantation Portfolio</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 34px)', color: 'var(--color-primary-dark)', marginBottom: '10px', fontWeight: 800 }}>
              Flagship Commercial Crops
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', margin: 0, lineHeight: 1.6 }}>
              Three scientifically curated high-value agroforestry assets engineered for multi-tiered income, high global demand, and perpetual yields.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '24px' }}>
            {cropsData.map((crop) => (
              <div
                key={crop.id}
                className="interactive-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 6px 20px -6px rgba(22, 66, 47, 0.06)'
                }}
              >
                <div>
                  <div style={{ position: 'relative', height: '190px' }} className="img-zoom-wrapper">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(6px)',
                        padding: '4px 12px',
                        borderRadius: '100px',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--color-primary-dark)',
                        border: '1px solid var(--color-primary-border)'
                      }}
                    >
                      {crop.badge}
                    </div>

                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        background: 'rgba(22, 66, 47, 0.92)',
                        color: '#fef08a',
                        fontSize: '11.5px',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '8px'
                      }}
                    >
                      {crop.roiHighlight}
                    </div>
                  </div>

                  <div style={{ padding: '20px 20px 14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                      <h3 style={{ fontSize: '20px', color: 'var(--color-primary-dark)', fontWeight: 700, margin: 0 }}>
                        {crop.name}
                      </h3>
                      <span style={{ fontSize: '11.5px', fontStyle: 'italic', color: 'var(--color-text-subtle)' }}>
                        {crop.scientificName}
                      </span>
                    </div>

                    <p style={{ color: 'var(--color-text-muted)', fontSize: '13.5px', lineHeight: 1.55, marginBottom: '14px' }}>
                      {crop.tagline}
                    </p>

                    {/* Gestation & Lifespan Mini Bar */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '8px',
                        background: 'var(--color-bg-soft)',
                        padding: '10px',
                        borderRadius: '10px',
                        border: '1px solid var(--color-border)',
                        marginBottom: '14px',
                        fontSize: '12px'
                      }}
                    >
                      <div>
                        <span style={{ color: 'var(--color-text-subtle)', display: 'block', fontSize: '11px' }}>Gestation:</span>
                        <strong style={{ color: 'var(--color-primary-dark)' }}>{crop.gestation}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--color-text-subtle)', display: 'block', fontSize: '11px' }}>Lifespan:</span>
                        <strong style={{ color: 'var(--color-primary-dark)' }}>{crop.lifespan}</strong>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-text-subtle)' }}>
                      <MapPin size={13} style={{ color: '#16a34a' }} />
                      <span>Kanigiri Mandal, Prakasam Dist, AP</span>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 20px 20px', display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => handleWhatsAppInquiry(`Inquiry for ${crop.name}`, `Kanigiri Farmland crop: ${crop.name}`)}
                    className="btn-amber shimmer-effect"
                    style={{ flex: 1, justifyContent: 'center', padding: '10px 14px', fontSize: '13px', borderRadius: '100px' }}
                  >
                    <MessageSquare size={14} />
                    <span>Inquire ROI</span>
                  </button>

                  <button
                    onClick={() => onSelectCrop(crop)}
                    className="btn-outline"
                    style={{ padding: '10px 14px', fontSize: '13px', borderRadius: '100px' }}
                  >
                    <span>Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <button
              onClick={() => setActiveTab('projects')}
              className="btn-primary"
              style={{ padding: '12px 28px', fontSize: '14.5px', borderRadius: '100px' }}
            >
              <span>Explore Complete 250+ Acre Project Plan</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================================
          8. SITE DEVELOPMENT & LIVE VIDEO PROOF (KANIGIRI 250 ACRES)
          ====================================================================== */}
      <section
        style={{
          padding: '64px 0',
          background: 'linear-gradient(135deg, #113825 0%, #165333 55%, #18663e 100%)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 32px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 14px',
                borderRadius: '100px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#dcfce7',
                fontSize: '12px',
                fontWeight: 600,
                marginBottom: '12px'
              }}
            >
              <Play size={13} style={{ color: '#86efac' }} />
              <span>Real Field Development Proof</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(26px, 3.4vw, 38px)',
                color: '#ffffff',
                marginBottom: '10px',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Site Development &amp; Live Video Proof
            </h2>

            <p style={{ color: '#dcfce7', fontSize: '15px', margin: 0, lineHeight: 1.6, opacity: 0.94 }}>
              Take an authentic look inside our 250-acre Kanigiri venture: fertile red loam soil, sweet water reservoirs, Israeli drip piping, and 30ft avenue roads.
            </p>
          </div>

          {/* Cinema Frame */}
          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto 30px',
              borderRadius: '22px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.45)',
              border: '2px solid rgba(255, 255, 255, 0.25)',
              background: '#0a1d13',
              position: 'relative'
            }}
          >
            <video
              src={kanigiriVenture.videoUrl}
              controls
              playsInline
              poster="/gallery/geranium-crop-examination.jpg"
              style={{
                width: '100%',
                maxHeight: '440px',
                display: 'block',
                background: '#0a1d13'
              }}
            />
          </div>

          {/* 4 Infrastructure Highlights Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '16px',
              maxWidth: '920px',
              margin: '0 auto'
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '14px 18px',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <CheckCircle2 size={18} style={{ color: '#86efac', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#ffffff', fontSize: '13.5px', display: 'block' }}>Red Loam Soil</strong>
                <span style={{ fontSize: '12px', color: '#dcfce7', opacity: 0.85 }}>Rich minerals &amp; deep aeration</span>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '14px 18px',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <CheckCircle2 size={18} style={{ color: '#86efac', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#ffffff', fontSize: '13.5px', display: 'block' }}>Israeli Drip Grid</strong>
                <span style={{ fontSize: '12px', color: '#dcfce7', opacity: 0.85 }}>Pressure-compensating fertigation</span>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '14px 18px',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <CheckCircle2 size={18} style={{ color: '#86efac', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#ffffff', fontSize: '13.5px', display: 'block' }}>30ft Avenue Roads</strong>
                <span style={{ fontSize: '12px', color: '#dcfce7', opacity: 0.85 }}>Direct heavy tractor &amp; truck access</span>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '14px 18px',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <CheckCircle2 size={18} style={{ color: '#86efac', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#ffffff', fontSize: '13.5px', display: 'block' }}>24/7 Solar Fencing</strong>
                <span style={{ fontSize: '12px', color: '#dcfce7', opacity: 0.85 }}>Electrified perimeter &amp; CCTV</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          9. THE 3 SYNERGISTIC PILLARS OF SUKHIBHAVA GROUP
          ====================================================================== */}
      <section style={{ padding: '64px 0 52px', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
            <div className="badge-pill" style={{ marginBottom: '10px', fontSize: '12px', padding: '4px 14px' }}>
              <Layers size={13} style={{ color: 'var(--color-primary)' }} />
              <span>Integrated Agricultural Ecosystem</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(26px, 3.4vw, 36px)',
                color: 'var(--color-primary-dark)',
                marginBottom: '10px',
                fontWeight: 800,
                letterSpacing: '-0.02em'
              }}
            >
              Three Synergistic Pillars of Agricultural Excellence
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', margin: 0, lineHeight: 1.6 }}>
              From high-yield managed agroforestry farmlands to direct selling of certified farm products and senior agronomy consultancy.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
            {/* Pillar 1: Managed Farmlands */}
            <div
              className="interactive-card"
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid var(--color-primary-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 24px -6px rgba(22, 66, 47, 0.08)'
              }}
            >
              <div>
                <div style={{ position: 'relative', height: '190px' }} className="img-zoom-wrapper">
                  <img
                    src="/images/turnkey-plantation-setup.jpg"
                    alt="Managed Agroforestry Farmland"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(22, 66, 47, 0.92)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '100px'
                    }}
                  >
                    Agroforestry Real Estate
                  </div>
                </div>

                <div style={{ padding: '22px 20px 14px' }}>
                  <h3 style={{ fontSize: '20px', color: 'var(--color-primary-dark)', fontWeight: 700, marginBottom: '8px' }}>
                    Managed Agroforestry Farmland
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '16px' }}>
                    250+ Acres in Kanigiri, AP. Freehold individual registered land planted with Macadamia Nuts, Anjeer, and Geranium with automated Israeli drip irrigation.
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                      <CheckCircle2 size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
                      <span>100% Spot Registered Freehold Deed</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                      <CheckCircle2 size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
                      <span>Automated Israeli Drip & Solar Fencing</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                      <CheckCircle2 size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
                      <span>Guaranteed Turnkey Farm Care & Buyback</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div style={{ padding: '0 20px 20px' }}>
                <button
                  onClick={() => setActiveTab('projects')}
                  className="btn-amber shimmer-effect"
                  style={{ width: '100%', justifyContent: 'center', padding: '11px 16px', fontSize: '14px', borderRadius: '100px' }}
                >
                  <span>Explore Farmlands</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Pillar 2: Organic Products */}
            <div
              className="interactive-card"
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid #cfe5d6',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 24px -6px rgba(22, 66, 47, 0.08)'
              }}
            >
              <div>
                <div style={{ position: 'relative', height: '190px' }} className="img-zoom-wrapper">
                  <img
                    src="/images/Geranium-beauty-and-wellness-products-1024x683.png"
                    alt="Organic Farm Products & Extracts"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(217, 119, 6, 0.92)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '100px'
                    }}
                  >
                    100% Pure Organic Extracts
                  </div>
                </div>

                <div style={{ padding: '22px 20px 14px' }}>
                  <h3 style={{ fontSize: '20px', color: 'var(--color-primary-dark)', fontWeight: 700, marginBottom: '8px' }}>
                    Organic Farm Products &amp; Oils
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '16px' }}>
                    Pure steam-distilled Geranium essential oils, cold-pressed wellness oils, and naturally sun-cured harvest goods directly from our chemical-free Kanigiri plantations.
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                      <CheckCircle2 size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
                      <span>Steam-Distilled Pure Geranium Oil</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                      <CheckCircle2 size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
                      <span>Zero Chemical Preservatives or Fragrances</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                      <CheckCircle2 size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
                      <span>Instant Direct-from-Farm WhatsApp Dispatch</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div style={{ padding: '0 20px 20px' }}>
                <button
                  onClick={() => setActiveTab('organic-products')}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '11px 16px', fontSize: '14px', borderRadius: '100px' }}
                >
                  <ShoppingBag size={15} />
                  <span>Browse Organic Store</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Pillar 3: Agri Consultancy */}
            <div
              className="interactive-card"
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid var(--color-secondary-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 24px -6px rgba(217, 119, 6, 0.08)'
              }}
            >
              <div>
                <div style={{ position: 'relative', height: '190px' }} className="img-zoom-wrapper">
                  <img
                    src="/images/agri-consultancy-expert.jpg"
                    alt="Agri Organic Consultancy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(22, 101, 52, 0.92)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '100px'
                    }}
                  >
                    20+ Yrs Field Agronomy
                  </div>
                </div>

                <div style={{ padding: '22px 20px 14px' }}>
                  <h3 style={{ fontSize: '20px', color: 'var(--color-primary-dark)', fontWeight: 700, marginBottom: '8px' }}>
                    Agri Organic Consultancy
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '16px' }}>
                    Guiding progressive farmers, NRI landowners, and commercial investors in soil biological testing, orchard blueprints, Israeli drip engineering, and harvest buyback networks.
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                      <CheckCircle2 size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
                      <span>Scientific Soil & Sweet Water Lab Testing</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                      <CheckCircle2 size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
                      <span>High-Value Orchard Spacing & Saplings</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                      <CheckCircle2 size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
                      <span>APEDA Compliance & Assured Buyback Setup</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div style={{ padding: '0 20px 20px' }}>
                <button
                  onClick={() => setActiveTab('consultancy')}
                  className="btn-outline"
                  style={{ width: '100%', justifyContent: 'center', padding: '11px 16px', fontSize: '14px', borderRadius: '100px' }}
                >
                  <Award size={15} />
                  <span>Consult With Agronomists</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          10. WHY FARMLAND VS TRADITIONAL ASSETS: Investor Comparison Matrix
          ====================================================================== */}
      <section style={{ padding: '60px 0', background: 'var(--color-bg-soft)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
            <div className="badge-pill" style={{ marginBottom: '8px', fontSize: '12px', padding: '4px 14px' }}>
              <TrendingUp size={13} style={{ color: 'var(--color-secondary)' }} />
              <span>Asset Intelligence</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 34px)', color: 'var(--color-primary-dark)', marginBottom: '10px', fontWeight: 800 }}>
              Why Managed Farmland Outperforms
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', margin: 0, lineHeight: 1.6 }}>
              Compare physical earth asset security and dual compounding income against volatile traditional options.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '18px', border: '1.5px solid var(--color-border)', background: '#ffffff', boxShadow: '0 8px 24px -6px rgba(22, 66, 47, 0.06)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px', fontSize: '13.5px' }}>
              <thead>
                <tr style={{ background: 'var(--color-bg-soft)', borderBottom: '1.5px solid var(--color-border)' }}>
                  <th style={{ padding: '16px 20px', color: 'var(--color-primary-dark)', fontWeight: 700 }}>Asset Class</th>
                  <th style={{ padding: '16px 20px', color: 'var(--color-primary-dark)', fontWeight: 700 }}>Ownership Security</th>
                  <th style={{ padding: '16px 20px', color: 'var(--color-primary-dark)', fontWeight: 700 }}>Income & Growth</th>
                  <th style={{ padding: '16px 20px', color: 'var(--color-primary-dark)', fontWeight: 700 }}>Tax Treatment</th>
                  <th style={{ padding: '16px 20px', color: 'var(--color-primary-dark)', fontWeight: 700 }}>Management</th>
                </tr>
              </thead>
              <tbody>
                {assetComparison.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid var(--color-border)',
                      background: row.highlight ? '#f0fdf4' : 'transparent',
                      fontWeight: row.highlight ? 600 : 400
                    }}
                  >
                    <td style={{ padding: '16px 20px', color: row.highlight ? 'var(--color-primary-dark)' : 'var(--color-heading)' }}>
                      {row.highlight && <Sparkles size={13} style={{ color: '#d97706', display: 'inline', marginRight: '6px' }} />}
                      <strong>{row.asset}</strong>
                    </td>
                    <td style={{ padding: '16px 20px', color: 'var(--color-text-main)' }}>{row.security}</td>
                    <td style={{ padding: '16px 20px', color: row.highlight ? 'var(--color-primary)' : 'var(--color-text-main)' }}>
                      <strong>{row.returns}</strong>
                    </td>
                    <td style={{ padding: '16px 20px', color: row.highlight ? '#166534' : 'var(--color-text-muted)' }}>
                      {row.tax}
                    </td>
                    <td style={{ padding: '16px 20px', color: 'var(--color-text-muted)' }}>{row.maintenance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ======================================================================
          11. CLIENT TESTIMONIALS: Clean, Modern Scrolling Showcase
          ====================================================================== */}
      <section
        style={{
          padding: '56px 0 44px',
          background: 'linear-gradient(180deg, #f7fbf8 0%, #ffffff 100%)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          position: 'relative'
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 30px' }}>
            <div className="badge-pill" style={{ marginBottom: '8px', fontSize: '12px', padding: '3px 12px' }}>
              <Star size={12} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
              <span>Investor Trust &amp; Reviews</span>
            </div>

            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 34px)', color: 'var(--color-primary-dark)', margin: '0 0 8px', fontWeight: 800 }}>
              What Our Investors Say
            </h2>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', margin: '0 auto', lineHeight: 1.55, maxWidth: '540px' }}>
              Genuine feedback from families, professionals, and doctors who invested in our Kanigiri managed farmlands.
            </p>
          </div>

          {/* Smooth Horizontal Carousel Viewport */}
          <div className="testimonial-scroll-viewport">
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="testimonial-track"
            >
              {testimonials.map((t, idx) => {
                const isHovered = hoveredReviewIdx === idx;
                const hasHover = hoveredReviewIdx !== null;

                return (
                  <div
                    key={t.id || idx}
                    className="testimonial-slide-card"
                    onMouseEnter={() => setHoveredReviewIdx(idx)}
                    onMouseLeave={() => setHoveredReviewIdx(null)}
                  >
                    <div
                      className="unique-testimonial-card"
                      style={{
                        transform: isHovered
                          ? 'translateY(-6px) scale(1.015)'
                          : hasHover
                            ? 'scale(0.985)'
                            : 'translateY(0) scale(1)',
                        opacity: hasHover && !isHovered ? 0.88 : 1,
                        boxShadow: isHovered
                          ? `0 18px 36px -8px rgba(22, 66, 47, 0.14), 0 0 0 1.5px ${t.glowBorder}`
                          : '0 4px 16px -4px rgba(22, 66, 47, 0.05)',
                        borderColor: isHovered ? t.glowBorder : '#dcece1'
                      }}
                    >
                      {/* Top Accent Line */}
                      <div
                        className="top-accent-line"
                        style={{
                          background: t.accentGradient,
                          width: isHovered ? '100%' : '44px'
                        }}
                      />

                      {/* Watermark Quote */}
                      <div className="quote-watermark">
                        <Quote size={46} />
                      </div>

                      <div>
                        {/* Rating Stars & Category Tag */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', position: 'relative', zIndex: 2 }}>
                          <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                            {[...Array(t.rating)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className="rating-star-icon"
                                style={{ color: '#f59e0b', fill: '#f59e0b' }}
                              />
                            ))}
                          </div>

                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 600,
                              color: t.badgeColor,
                              background: t.badgeBg,
                              padding: '3px 9px',
                              borderRadius: '100px',
                              border: `1px solid ${t.badgeBorder}`,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <span>{t.tag}</span>
                          </span>
                        </div>

                        {/* Quote Text */}
                        <p
                          className="quote-text"
                          style={{
                            color: '#1b4b35',
                            fontSize: '14px',
                            lineHeight: 1.6,
                            margin: '0 0 16px',
                            fontStyle: 'italic',
                            position: 'relative',
                            zIndex: 2,
                            minHeight: '76px'
                          }}
                        >
                          "{t.text}"
                        </p>
                      </div>

                      {/* Footer: Investor Details */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingTop: '12px',
                          borderTop: '1px solid #edf4ef',
                          position: 'relative',
                          zIndex: 2
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div
                            style={{
                              width: '38px',
                              height: '38px',
                              borderRadius: '50%',
                              background: t.avatarGradient,
                              color: '#ffffff',
                              fontWeight: 700,
                              fontSize: '13px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}
                          >
                            {t.name[0]}
                          </div>
                          <div>
                            <strong style={{ fontSize: '13.5px', color: 'var(--color-primary-dark)', display: 'block', lineHeight: 1.2 }}>
                              {t.name}
                            </strong>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                              <BadgeCheck size={12} style={{ color: '#16a34a', flexShrink: 0 }} />
                              <span style={{ fontSize: '11px', color: 'var(--color-text-subtle)' }}>
                                {t.location} • {t.plot}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Arrows */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginTop: '20px' }}>
            <button
              onClick={handlePrev}
              className="slider-control-btn"
              aria-label="Previous review"
              style={{ width: '38px', height: '38px' }}
            >
              <ChevronLeft size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => scrollToSlide(dotIdx)}
                  className={`slider-dot-btn ${activeSlide === dotIdx ? 'active' : ''}`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="slider-control-btn"
              aria-label="Next review"
              style={{ width: '38px', height: '38px' }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================================
          12. WEEKEND VIP FARM TOUR LOUNGE: Free Inspection AC Vehicle
          ====================================================================== */}
      <section style={{ padding: '64px 0', background: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(14, 46, 31, 0.94) 0%, rgba(20, 83, 45, 0.88) 55%, rgba(180, 83, 9, 0.45) 100%), url("/images/luxury-farm-clubhouse.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '26px',
              padding: '48px 36px',
              color: '#ffffff',
              boxShadow: '0 20px 50px -10px rgba(17, 56, 37, 0.35)',
              border: '2px solid rgba(253, 230, 138, 0.35)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.16)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 14px',
                  borderRadius: '100px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fef08a',
                  fontSize: '12px',
                  fontWeight: 700,
                  marginBottom: '16px'
                }}
              >
                <Calendar size={13} style={{ color: '#fef08a' }} />
                <span>Complimentary Weekend Farm Inspection Tour</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(26px, 3.6vw, 40px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '14px',
                  lineHeight: 1.2,
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Experience the Farmland in Person
              </h2>

              <p style={{ color: '#dcfce7', fontSize: '15.5px', lineHeight: 1.65, marginBottom: '28px', opacity: 0.95 }}>
                Join our agronomists this weekend for a personalized tour of our 250-acre Kanigiri venture. Complimentary AC vehicle pickup from Vijayawada, Guntur, and Ongole, farm-fresh lunch, and on-site soil and revenue verification.
              </p>

              {/* 3 Perks */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '24px',
                  flexWrap: 'wrap',
                  marginBottom: '32px',
                  fontSize: '13px',
                  color: '#fef3c7'
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} style={{ color: '#86efac' }} /> Free AC Vehicle Pickups
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} style={{ color: '#86efac' }} /> Farm-Fresh Lunch Included
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} style={{ color: '#86efac' }} /> On-Site Agronomist Walkthrough
                </span>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={onOpenSiteVisit}
                  className="btn-amber shimmer-effect"
                  style={{ padding: '13px 30px', fontSize: '15px', borderRadius: '100px' }}
                >
                  <Calendar size={16} />
                  <span>Reserve Your Free Seats</span>
                </button>

                <a
                  href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Sukhibhava%20Agro,%20I%20would%20like%20to%20book%20a%20free%20weekend%20farm%20tour%20to%20Kanigiri.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '13px 26px',
                    fontSize: '15px',
                    borderRadius: '100px',
                    background: '#25d366',
                    color: '#ffffff',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Farm Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
