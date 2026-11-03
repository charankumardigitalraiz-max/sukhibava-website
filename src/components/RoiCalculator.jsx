import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Check, Calendar, Coins } from 'lucide-react';

export const RoiCalculator = ({ onOpenSiteVisit }) => {
  const [acres, setAcres] = useState(1);
  const [cropType, setCropType] = useState('tri-crop');
  const [durationYears, setDurationYears] = useState(10);

  const calculateReturns = () => {
    const baseLandCostPerAcre = 1500000;
    const initialInvestment = acres * baseLandCostPerAcre;

    const appreciatedLandValue = Math.round(initialInvestment * Math.pow(1.12, durationYears));
    const landGain = appreciatedLandValue - initialInvestment;

    let annualYieldPerAcre = 0;
    if (cropType === 'macadamia') {
      annualYieldPerAcre = 850000;
    } else if (cropType === 'anjeer') {
      annualYieldPerAcre = 450000;
    } else if (cropType === 'geranium') {
      annualYieldPerAcre = 320000;
    } else {
      annualYieldPerAcre = 950000;
    }

    const effectiveProductiveYears = Math.max(1, durationYears - 2);
    const totalCropIncome = acres * annualYieldPerAcre * effectiveProductiveYears;

    const totalProjectedWealth = appreciatedLandValue + totalCropIncome;
    const totalReturnMultiplier = (totalProjectedWealth / initialInvestment).toFixed(1);

    return {
      initialInvestment,
      appreciatedLandValue,
      landGain,
      annualYieldAvg: acres * annualYieldPerAcre,
      totalCropIncome,
      totalProjectedWealth,
      totalReturnMultiplier
    };
  };

  const results = calculateReturns();

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div 
      className="interactive-card"
      style={{
        background: '#ffffff',
        borderRadius: '24px',
        border: '1.5px solid #dcece1',
        padding: '38px',
        boxShadow: '0 16px 40px -10px rgba(22, 66, 47, 0.08)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
        <div>
          <div className="badge-pill" style={{ marginBottom: '8px' }}>
            <Calculator size={14} style={{ color: '#168852' }} />
            <span>Interactive Yield Simulator</span>
          </div>
          <h3 style={{ fontSize: '28px', color: '#16422f', fontWeight: 700, margin: '4px 0 6px' }}>
            Farmland ROI &amp; Wealth Projection
          </h3>
          <p style={{ color: '#5b7367', fontSize: '15px', margin: 0 }}>
            Simulate your dual returns: Passive Commercial Crop Harvests + Kanigiri Land Capital Growth
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f6faf7', padding: '8px 16px', borderRadius: '100px', border: '1px solid #dcece1', fontSize: '13px', color: '#166534', fontWeight: 600 }}>
          <ShieldCheck size={16} style={{ color: '#16a34a' }} />
          <span>Managed by Professional Agronomists</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '36px' }}>
        
        {/* Controls Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Land Size Control */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: '#16422f' }}>
                Farmland Size (Acres)
              </label>
              <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#166534' }}>
                {acres} {acres === 1 ? 'Acre' : 'Acres'} ({acres * 43560} sq.ft)
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              {[0.5, 1, 2, 5].map((val) => (
                <button
                  key={val}
                  onClick={() => setAcres(val)}
                  style={{
                    padding: '10px 0',
                    borderRadius: '12px',
                    border: acres === val ? '2px solid #16a34a' : '1px solid #dcece1',
                    background: acres === val ? '#eaf8ef' : '#ffffff',
                    color: acres === val ? '#16422f' : '#475a50',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {val} Acre
                </button>
              ))}
            </div>
          </div>

          {/* Crop Model Selection */}
          <div>
            <label style={{ fontSize: '14px', fontWeight: 600, color: '#16422f', display: 'block', marginBottom: '8px' }}>
              Select Plantation Portfolio
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { id: 'tri-crop', label: '🌾 Tri-Crop Synergy (Recommended)', desc: 'Macadamia + Anjeer + Geranium Intercrop' },
                { id: 'macadamia', label: '👑 Macadamia Nut Solo Orchard', desc: 'Longest lifespan (60+ yrs) & highest global export price' },
                { id: 'anjeer', label: '🍯 Commercial Anjeer (Fig) Orchard', desc: 'Quick recurring cashflow starting from Year 2' },
                { id: 'geranium', label: '🌸 Geranium Essential Oil Farm', desc: '3-4 annual cash harvests from aromatic leaf distillation' }
              ].map((crop) => (
                <div
                  key={crop.id}
                  onClick={() => setCropType(crop.id)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: cropType === crop.id ? '2px solid #16a34a' : '1px solid #e2ebe4',
                    background: cropType === crop.id ? '#eaf8ef' : '#fcfdfc',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: cropType === crop.id ? '#166534' : '#16422f' }}>
                      {crop.label}
                    </span>
                    {cropType === crop.id && <Check size={16} style={{ color: '#16a34a' }} />}
                  </div>
                  <span style={{ fontSize: '12px', color: '#688577', display: 'block', marginTop: '2px' }}>
                    {crop.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Holding Duration */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: '#16422f' }}>
                Investment Horizon
              </label>
              <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#166534' }}>
                {durationYears} Years
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              {[5, 10, 15, 20].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setDurationYears(yr)}
                  style={{
                    padding: '10px 0',
                    borderRadius: '12px',
                    border: durationYears === yr ? '2px solid #16a34a' : '1px solid #dcece1',
                    background: durationYears === yr ? '#eaf8ef' : '#ffffff',
                    color: durationYears === yr ? '#16422f' : '#475a50',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {yr} Yrs
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Dynamic Results Display Card (Strictly Light Themed, NO Dark Background) */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #eaf8ef 0%, #f6fcf8 50%, #fefcf3 100%)',
            borderRadius: '20px',
            padding: '32px 28px',
            border: '2px solid #bcead0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 30px -8px rgba(22, 66, 47, 0.1)'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '13px', background: '#ffffff', padding: '4px 12px', borderRadius: '100px', color: '#166534', fontWeight: 600, border: '1px solid #bcead0' }}>
                {durationYears}-Year Projected Outlook
              </span>
              <span className="badge-gold">
                🚀 ~{results.totalReturnMultiplier}x Multiplier
              </span>
            </div>

            {/* Total Wealth Counter */}
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '12.5px', color: '#5b7367', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                Total Projected Capital &amp; Yield Value
              </span>
              <div style={{ fontSize: 'clamp(28px, 3.2vw, 36px)', fontWeight: 800, color: '#16422f', marginTop: '4px', letterSpacing: '-0.02em' }}>
                {formatCurrency(results.totalProjectedWealth)}
              </div>
            </div>

            {/* Breakdown Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              <div style={{ background: '#ffffff', borderRadius: '14px', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #dcece1' }}>
                <div>
                  <span style={{ fontSize: '12px', color: '#688577', display: 'block' }}>Peak Annual Crop Harvest Income</span>
                  <span style={{ fontSize: '16.5px', fontWeight: 700, color: '#166534' }}>
                    {formatCurrency(results.annualYieldAvg)} / year
                  </span>
                </div>
                <Coins size={22} style={{ color: '#16a34a' }} />
              </div>

              <div style={{ background: '#ffffff', borderRadius: '14px', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #dcece1' }}>
                <div>
                  <span style={{ fontSize: '12px', color: '#688577', display: 'block' }}>Cumulative Crop Harvest Sales ({durationYears} yrs)</span>
                  <span style={{ fontSize: '16.5px', fontWeight: 700, color: '#16422f' }}>
                    {formatCurrency(results.totalCropIncome)}
                  </span>
                </div>
                <TrendingUp size={22} style={{ color: '#d97706' }} />
              </div>

              <div style={{ background: '#ffffff', borderRadius: '14px', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #dcece1' }}>
                <div>
                  <span style={{ fontSize: '12px', color: '#688577', display: 'block' }}>Projected Appreciated Land Value</span>
                  <span style={{ fontSize: '16.5px', fontWeight: 700, color: '#16422f' }}>
                    {formatCurrency(results.appreciatedLandValue)}
                  </span>
                </div>
                <ShieldCheck size={22} style={{ color: '#16a34a' }} />
              </div>

            </div>
          </div>

          <div style={{ marginTop: '28px' }}>
            <button
              onClick={onOpenSiteVisit}
              className="btn-amber shimmer-effect"
              style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '15px' }}
            >
              <Calendar size={17} />
              <span>Book Farm Tour &amp; Verify ROI</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
