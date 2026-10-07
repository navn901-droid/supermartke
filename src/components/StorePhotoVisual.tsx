import React, { useState } from 'react';
import { STORE_PHOTOS } from '../data/products';

export type StorePhotoType = 
  | 'storefront_night'
  | 'storefront_day'
  | 'interior_shelves'
  | 'interior_wide'
  | 'aisle'
  | 'entrance'
  | 'checkout';

interface StorePhotoVisualProps {
  type: StorePhotoType;
  caption?: string;
  className?: string;
  aspect?: '16:9' | '4:3' | '3:2' | '1:1';
}

export const StorePhotoVisual: React.FC<StorePhotoVisualProps> = ({
  type,
  caption,
  className = '',
  aspect = '16:9'
}) => {
  const [imgError, setImgError] = useState(false);
  const photoUrl = STORE_PHOTOS[type];

  const aspectClass = 
    aspect === '16:9' ? 'aspect-video' :
    aspect === '4:3' ? 'aspect-4/3' :
    aspect === '3:2' ? 'aspect-3/2' : 'aspect-square';

  const renderScene = () => {
    switch (type) {
      // 1. Night Storefront
      case 'storefront_night':
        return (
          <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0B132B" />
                <stop offset="70%" stopColor="#1C2541" />
                <stop offset="100%" stopColor="#2A3950" />
              </linearGradient>
              <linearGradient id="signGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#166534" />
                <stop offset="100%" stopColor="#14532D" />
              </linearGradient>
              <linearGradient id="warmInteriorGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.75" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Night Sky Background */}
            <rect width="800" height="450" fill="url(#nightSky)" />

            {/* Ambient street lights & stars */}
            <circle cx="120" cy="50" r="1.5" fill="#FFFFFF" opacity="0.6" />
            <circle cx="280" cy="30" r="1.5" fill="#FFFFFF" opacity="0.8" />
            <circle cx="680" cy="45" r="2" fill="#FFFFFF" opacity="0.7" />
            <circle cx="740" cy="80" r="1" fill="#FFFFFF" opacity="0.5" />

            {/* Store Building Facade */}
            <rect x="60" y="80" width="680" height="320" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="2" />
            <rect x="70" y="90" width="660" height="40" fill="#0F172A" />

            {/* Top Glowing Signboard */}
            <rect x="100" y="105" width="600" height="78" rx="8" fill="url(#signGlow)" stroke="#22C55E" strokeWidth="2.5" filter="url(#glow)" />
            {/* Inner sign panel */}
            <rect x="106" y="111" width="588" height="66" rx="6" fill="#14532D" />

            {/* Neon White Branding */}
            <text x="400" y="146" textAnchor="middle" fill="#FFFFFF" fontSize="28" fontWeight="800" letterSpacing="0.08em" fontFamily="'Manrope', sans-serif">
              BEST PRICE SUPERMARKET
            </text>
            <text x="400" y="167" textAnchor="middle" fill="#FACC15" fontSize="13" fontWeight="700" letterSpacing="0.18em" fontFamily="'DM Sans', sans-serif">
              SHOP MORE • SAVE MORE
            </text>

            {/* Location Tag on Signboard */}
            <rect x="300" y="187" width="200" height="18" rx="9" fill="#166534" stroke="#4ADE80" strokeWidth="1" />
            <text x="400" y="200" textAnchor="middle" fill="#DCFCE7" fontSize="9.5" fontWeight="600">
              📍 RACHERLA, PRAKASAM DIST.
            </text>

            {/* Ground Glass Showroom Windows (Warm lit interior) */}
            <rect x="90" y="215" width="620" height="175" rx="4" fill="url(#warmInteriorGlow)" stroke="#64748B" strokeWidth="2" />

            {/* Interior Shelves visible through glass */}
            <g opacity="0.85">
              {/* Left aisle */}
              <rect x="120" y="235" width="130" height="145" fill="#E2E8F0" stroke="#94A3B8" />
              <line x1="120" y1="265" x2="250" y2="265" stroke="#64748B" strokeWidth="2" />
              <line x1="120" y1="295" x2="250" y2="295" stroke="#64748B" strokeWidth="2" />
              <line x1="120" y1="325" x2="250" y2="325" stroke="#64748B" strokeWidth="2" />
              <line x1="120" y1="355" x2="250" y2="355" stroke="#64748B" strokeWidth="2" />
              {/* Product stacks */}
              <rect x="130" y="245" width="22" height="18" rx="2" fill="#D97706" />
              <rect x="156" y="245" width="22" height="18" rx="2" fill="#2563EB" />
              <rect x="182" y="245" width="22" height="18" rx="2" fill="#DC2626" />
              <rect x="208" y="245" width="22" height="18" rx="2" fill="#16A34A" />

              <rect x="130" y="275" width="24" height="18" rx="2" fill="#0284C7" />
              <rect x="158" y="275" width="24" height="18" rx="2" fill="#CA8A04" />
              <rect x="186" y="275" width="24" height="18" rx="2" fill="#EA580C" />
              <rect x="214" y="275" width="24" height="18" rx="2" fill="#9333EA" />

              {/* Center Glass Sliding Entrance Doors */}
              <rect x="330" y="225" width="140" height="165" fill="#FFFFFF" fillOpacity="0.4" stroke="#38BDF8" strokeWidth="2" />
              <line x1="400" y1="225" x2="400" y2="390" stroke="#0284C7" strokeWidth="2.5" />
              <rect x="388" y="295" width="8" height="24" rx="2" fill="#0284C7" />
              <rect x="404" y="295" width="8" height="24" rx="2" fill="#0284C7" />
              <text x="400" y="250" textAnchor="middle" fill="#0369A1" fontSize="10" fontWeight="bold">AUTOMATIC ENTRANCE</text>

              {/* Right Aisle */}
              <rect x="550" y="235" width="130" height="145" fill="#E2E8F0" stroke="#94A3B8" />
              <line x1="550" y1="265" x2="680" y2="265" stroke="#64748B" strokeWidth="2" />
              <line x1="550" y1="295" x2="680" y2="295" stroke="#64748B" strokeWidth="2" />
              <line x1="550" y1="325" x2="680" y2="325" stroke="#64748B" strokeWidth="2" />
              <line x1="550" y1="355" x2="680" y2="355" stroke="#64748B" strokeWidth="2" />
              {/* Product stacks right */}
              <rect x="560" y="245" width="22" height="18" rx="2" fill="#EAB308" />
              <rect x="586" y="245" width="22" height="18" rx="2" fill="#15803D" />
              <rect x="612" y="245" width="22" height="18" rx="2" fill="#0284C7" />
              <rect x="638" y="245" width="22" height="18" rx="2" fill="#DC2626" />
            </g>

            {/* Pavement & Warm Light Spill */}
            <path d="M0 390 L800 390 L800 450 L0 450 Z" fill="#334155" />
            <polygon points="120,390 680,390 780,450 20,450" fill="#FEF08A" opacity="0.25" />

            {/* Welcoming Footpath tile grid */}
            <line x1="100" y1="410" x2="700" y2="410" stroke="#475569" strokeWidth="1.5" />
            <line x1="50" y1="430" x2="750" y2="430" stroke="#475569" strokeWidth="1.5" />
            
            {/* Open Badge in front */}
            <rect x="350" y="365" width="100" height="20" rx="4" fill="#15803D" />
            <text x="400" y="378" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">● OPEN DAILY TILL 10 PM</text>
          </svg>
        );

      // 2. Daytime Storefront
      case 'storefront_day':
        return (
          <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="daySky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="60%" stopColor="#BAE6FD" />
                <stop offset="100%" stopColor="#E0F2FE" />
              </linearGradient>
            </defs>

            {/* Bright Daytime Sky */}
            <rect width="800" height="450" fill="url(#daySky)" />

            {/* Clean Modern Building in Racherla */}
            <rect x="50" y="70" width="700" height="330" rx="6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
            
            {/* Deep Supermarket Green Fascia Canopy */}
            <rect x="50" y="70" width="700" height="110" fill="#166534" />
            <rect x="50" y="175" width="700" height="8" fill="#F59E0B" />

            {/* Main Storefront Title Banner */}
            <text x="400" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="32" fontWeight="800" letterSpacing="0.06em" fontFamily="'Manrope', sans-serif">
              BEST PRICE SUPERMARKET
            </text>
            <text x="400" y="155" textAnchor="middle" fill="#FEF08A" fontSize="14" fontWeight="700" letterSpacing="0.15em" fontFamily="'DM Sans', sans-serif">
              SHOP MORE • SAVE MORE
            </text>

            {/* Store Location Plaque */}
            <rect x="290" y="195" width="220" height="24" rx="12" fill="#14532D" />
            <text x="400" y="211" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600">
              📍 RACHERLA • ANDHRA PRADESH
            </text>

            {/* Clear Modern Glass Frontage */}
            <rect x="80" y="235" width="640" height="155" rx="4" fill="#F0F9FF" stroke="#94A3B8" strokeWidth="2" />

            {/* Store Entrance with Shopping Baskets */}
            <rect x="330" y="240" width="140" height="150" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" />
            <line x1="400" y1="240" x2="400" y2="390" stroke="#0284C7" strokeWidth="2" />
            <text x="400" y="260" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">WELCOME TO BEST PRICE</text>

            {/* Stack of Shopping Baskets by the Door */}
            <g transform="translate(485, 310)">
              <rect x="0" y="24" width="45" height="25" rx="4" fill="#DC2626" />
              <rect x="0" y="16" width="45" height="25" rx="4" fill="#166534" />
              <rect x="0" y="8" width="45" height="25" rx="4" fill="#DC2626" />
              <rect x="0" y="0" width="45" height="25" rx="4" fill="#166534" />
              <text x="22" y="42" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">BASKETS</text>
            </g>

            {/* Left Fresh Fruit display rack */}
            <g transform="translate(100, 265)">
              <rect x="0" y="0" width="180" height="110" rx="4" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.5" />
              <text x="90" y="22" textAnchor="middle" fill="#B45309" fontSize="11" fontWeight="bold">DAILY FRESH SECTION</text>
              {/* Crates */}
              <rect x="15" y="35" width="68" height="30" rx="3" fill="#FEF08A" stroke="#CA8A04" />
              <text x="49" y="54" textAnchor="middle" fill="#854D0E" fontSize="9" fontWeight="bold">Bananas ₹50</text>

              <rect x="95" y="35" width="70" height="30" rx="3" fill="#FED7AA" stroke="#EA580C" />
              <text x="130" y="54" textAnchor="middle" fill="#9A3412" fontSize="9" fontWeight="bold">Coconuts ₹35</text>

              <rect x="15" y="72" width="150" height="28" rx="3" fill="#DCFCE7" stroke="#16A34A" />
              <text x="90" y="90" textAnchor="middle" fill="#15803D" fontSize="9" fontWeight="bold">Heritage Milk & Dairy Fresh</text>
            </g>

            {/* Clean Tarmac / Parking Space */}
            <rect x="0" y="390" width="800" height="60" fill="#E2E8F0" />
            <line x1="0" y1="390" x2="800" y2="390" stroke="#94A3B8" strokeWidth="2" />
            {/* Parking bay lines */}
            <line x1="150" y1="395" x2="180" y2="450" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="10 5" />
            <line x1="300" y1="395" x2="330" y2="450" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="10 5" />
            <line x1="500" y1="395" x2="530" y2="450" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="10 5" />
            <line x1="650" y1="395" x2="680" y2="450" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="10 5" />
            
            <text x="400" y="425" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">
              FREE TWO-WHEELER & CAR PARKING IN FRONT
            </text>
          </svg>
        );

      // 3. Interior Shelves
      case 'interior_shelves':
        return (
          <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="450" fill="#F1F5F9" />
            {/* Metal Shelving Unit Top Header */}
            <rect x="40" y="30" width="720" height="40" rx="4" fill="#166534" />
            <text x="400" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold">
              AISLE 1: GRAINS, ATTA, OILS & FOOD STAPLES
            </text>

            {/* 3 Tier Deep Heavy Duty Grocery Shelves */}
            {/* Tier 1 - Atta & Rice */}
            <rect x="40" y="80" width="720" height="100" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <line x1="40" y1="180" x2="760" y2="180" stroke="#94A3B8" strokeWidth="6" />
            <text x="60" y="100" fill="#64748B" fontSize="11" fontWeight="bold">SHELF 1 • WHOLE WHEAT ATTA & BASMATI RICE</text>
            
            {/* Shelf items 1 */}
            <g transform="translate(80, 105)">
              <rect x="0" y="0" width="50" height="65" rx="3" fill="#D97706" />
              <text x="25" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">Aashirvaad</text>
              <text x="25" y="47" textAnchor="middle" fill="#FEF3C7" fontSize="7">5 kg</text>
              <rect x="0" y="55" width="50" height="15" fill="#FEF08A" />
              <text x="25" y="66" textAnchor="middle" fill="#78350F" fontSize="8" fontWeight="bold">₹320</text>
            </g>
            <g transform="translate(145, 105)">
              <rect x="0" y="0" width="50" height="65" rx="3" fill="#D97706" />
              <text x="25" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">Aashirvaad</text>
              <rect x="0" y="55" width="50" height="15" fill="#FEF08A" />
              <text x="25" y="66" textAnchor="middle" fill="#78350F" fontSize="8" fontWeight="bold">₹320</text>
            </g>
            <g transform="translate(230, 105)">
              <rect x="0" y="0" width="55" height="65" rx="3" fill="#1E3A8A" />
              <text x="27" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">India Gate</text>
              <text x="27" y="47" textAnchor="middle" fill="#93C5FD" fontSize="7">Basmati 5kg</text>
              <rect x="0" y="55" width="55" height="15" fill="#FEF08A" />
              <text x="27" y="66" textAnchor="middle" fill="#1E3A8A" fontSize="8" fontWeight="bold">₹650</text>
            </g>
            <g transform="translate(300, 105)">
              <rect x="0" y="0" width="55" height="65" rx="3" fill="#1E3A8A" />
              <text x="27" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">India Gate</text>
              <rect x="0" y="55" width="55" height="15" fill="#FEF08A" />
              <text x="27" y="66" textAnchor="middle" fill="#1E3A8A" fontSize="8" fontWeight="bold">₹650</text>
            </g>
            <g transform="translate(385, 105)">
              <rect x="0" y="0" width="48" height="65" rx="3" fill="#FACC15" />
              <text x="24" y="35" textAnchor="middle" fill="#78350F" fontSize="8" fontWeight="bold">Toor Dal</text>
              <text x="24" y="47" textAnchor="middle" fill="#78350F" fontSize="7">1 kg</text>
              <rect x="0" y="55" width="48" height="15" fill="#DC2626" />
              <text x="24" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">OFFER ₹165</text>
            </g>
            <g transform="translate(445, 105)">
              <rect x="0" y="0" width="48" height="65" rx="3" fill="#FACC15" />
              <text x="24" y="35" textAnchor="middle" fill="#78350F" fontSize="8" fontWeight="bold">Toor Dal</text>
              <rect x="0" y="55" width="48" height="15" fill="#DC2626" />
              <text x="24" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">OFFER ₹165</text>
            </g>
            <g transform="translate(520, 105)">
              <rect x="0" y="0" width="45" height="65" rx="3" fill="#EA580C" />
              <text x="22" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">Tata Salt</text>
              <rect x="0" y="55" width="45" height="15" fill="#FEF08A" />
              <text x="22" y="66" textAnchor="middle" fill="#78350F" fontSize="8" fontWeight="bold">₹28</text>
            </g>
            <g transform="translate(580, 105)">
              <rect x="0" y="0" width="45" height="65" rx="3" fill="#EA580C" />
              <text x="22" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">Tata Salt</text>
              <rect x="0" y="55" width="45" height="15" fill="#FEF08A" />
              <text x="22" y="66" textAnchor="middle" fill="#78350F" fontSize="8" fontWeight="bold">₹28</text>
            </g>
            <g transform="translate(645, 105)">
              <rect x="0" y="0" width="45" height="65" rx="3" fill="#94A3B8" />
              <text x="22" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">Sugar</text>
              <rect x="0" y="55" width="45" height="15" fill="#FEF08A" />
              <text x="22" y="66" textAnchor="middle" fill="#78350F" fontSize="8" fontWeight="bold">₹48</text>
            </g>

            {/* Tier 2 - Cooking Oils */}
            <rect x="40" y="195" width="720" height="100" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <line x1="40" y1="295" x2="760" y2="295" stroke="#94A3B8" strokeWidth="6" />
            <text x="60" y="215" fill="#64748B" fontSize="11" fontWeight="bold">SHELF 2 • COOKING OILS & GHEE</text>
            {/* Shelf items 2 */}
            <g transform="translate(80, 220)">
              <rect x="0" y="0" width="38" height="65" rx="3" fill="#FEF08A" stroke="#CA8A04" />
              <text x="19" y="35" textAnchor="middle" fill="#B45309" fontSize="7" fontWeight="bold">Fortune</text>
              <rect x="0" y="55" width="38" height="15" fill="#DC2626" />
              <text x="19" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">₹135</text>
            </g>
            <g transform="translate(130, 220)">
              <rect x="0" y="0" width="38" height="65" rx="3" fill="#FEF08A" stroke="#CA8A04" />
              <text x="19" y="35" textAnchor="middle" fill="#B45309" fontSize="7" fontWeight="bold">Fortune</text>
              <rect x="0" y="55" width="38" height="15" fill="#DC2626" />
              <text x="19" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">₹135</text>
            </g>
            <g transform="translate(180, 220)">
              <rect x="0" y="0" width="38" height="65" rx="3" fill="#FEF08A" stroke="#CA8A04" />
              <text x="19" y="35" textAnchor="middle" fill="#B45309" fontSize="7" fontWeight="bold">Fortune</text>
              <rect x="0" y="55" width="38" height="15" fill="#DC2626" />
              <text x="19" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">₹135</text>
            </g>
            <g transform="translate(245, 220)">
              <rect x="0" y="0" width="42" height="65" rx="3" fill="#1D4ED8" />
              <text x="21" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">Parachute</text>
              <rect x="0" y="55" width="42" height="15" fill="#DC2626" />
              <text x="21" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="bold">₹99</text>
            </g>
            <g transform="translate(300, 220)">
              <rect x="0" y="0" width="42" height="65" rx="3" fill="#1D4ED8" />
              <text x="21" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">Parachute</text>
              <rect x="0" y="55" width="42" height="15" fill="#DC2626" />
              <text x="21" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="bold">₹99</text>
            </g>
            <g transform="translate(370, 220)">
              <rect x="0" y="0" width="55" height="65" rx="3" fill="#047857" />
              <text x="27" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="bold">Surf Excel</text>
              <rect x="0" y="55" width="55" height="15" fill="#FEF08A" />
              <text x="27" y="66" textAnchor="middle" fill="#065F46" fontSize="8" fontWeight="bold">₹150</text>
            </g>
            <g transform="translate(440, 220)">
              <rect x="0" y="0" width="40" height="65" rx="3" fill="#65A30D" />
              <text x="20" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="bold">Vim Gel</text>
              <rect x="0" y="55" width="40" height="15" fill="#FEF08A" />
              <text x="20" y="66" textAnchor="middle" fill="#4D7C0F" fontSize="8" fontWeight="bold">₹110</text>
            </g>
            <g transform="translate(500, 220)">
              <rect x="0" y="0" width="40" height="65" rx="3" fill="#1E40AF" />
              <text x="20" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="bold">Harpic</text>
              <rect x="0" y="55" width="40" height="15" fill="#FEF08A" />
              <text x="20" y="66" textAnchor="middle" fill="#1E3A8A" fontSize="8" fontWeight="bold">₹105</text>
            </g>
            <g transform="translate(565, 220)">
              <rect x="0" y="0" width="55" height="65" rx="3" fill="#FEF08A" stroke="#CA8A04" />
              <text x="27" y="35" textAnchor="middle" fill="#DC2626" fontSize="8" fontWeight="bold">Parle-G</text>
              <rect x="0" y="55" width="55" height="15" fill="#FEF08A" />
              <text x="27" y="66" textAnchor="middle" fill="#78350F" fontSize="8" fontWeight="bold">₹70</text>
            </g>
            <g transform="translate(635, 220)">
              <rect x="0" y="0" width="55" height="65" rx="3" fill="#15803D" />
              <text x="27" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">Tata Tea</text>
              <rect x="0" y="55" width="55" height="15" fill="#FEF08A" />
              <text x="27" y="66" textAnchor="middle" fill="#14532D" fontSize="8" fontWeight="bold">₹130</text>
            </g>

            {/* Bottom Aisle Flooring */}
            <rect x="40" y="310" width="720" height="110" fill="#E2E8F0" />
            <line x1="40" y1="365" x2="760" y2="365" stroke="#CBD5E1" strokeWidth="1.5" />
            <text x="400" y="380" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="600">
              BEST PRICE SUPERMARKET • ALL PRODUCTS DISPLAY CLEAR SHELF PRICES
            </text>
          </svg>
        );

      // 4. Wide Interior
      case 'interior_wide':
        return (
          <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="interiorCeiling" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#F1F5F9" />
              </linearGradient>
            </defs>
            {/* Ceiling with LED light panels */}
            <rect width="800" height="120" fill="url(#interiorCeiling)" />
            <rect x="80" y="20" width="180" height="14" rx="2" fill="#FFFFFF" stroke="#94A3B8" />
            <rect x="310" y="20" width="180" height="14" rx="2" fill="#FFFFFF" stroke="#94A3B8" />
            <rect x="540" y="20" width="180" height="14" rx="2" fill="#FFFFFF" stroke="#94A3B8" />

            {/* Overhead Aisle Category Signs */}
            <rect x="90" y="60" width="160" height="35" rx="4" fill="#166534" />
            <text x="170" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">AISLE 1: GROCERY</text>

            <rect x="320" y="60" width="160" height="35" rx="4" fill="#0284C7" />
            <text x="400" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">CHILLER: DAIRY</text>

            <rect x="550" y="60" width="160" height="35" rx="4" fill="#7C3AED" />
            <text x="630" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">AISLE 3: PERSONAL CARE</text>

            {/* Left perspective shelf */}
            <polygon points="0,110 240,140 240,400 0,450" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <line x1="0" y1="180" x2="240" y2="200" stroke="#64748B" strokeWidth="3" />
            <line x1="0" y1="260" x2="240" y2="270" stroke="#64748B" strokeWidth="3" />
            <line x1="0" y1="340" x2="240" y2="340" stroke="#64748B" strokeWidth="3" />

            {/* Center Main Walking Aisle */}
            <polygon points="240,140 560,140 680,450 120,450" fill="#F8FAFC" />
            {/* Tile grid lines */}
            <line x1="400" y1="140" x2="400" y2="450" stroke="#E2E8F0" strokeWidth="2" />
            <line x1="280" y1="210" x2="520" y2="210" stroke="#E2E8F0" strokeWidth="1.5" />
            <line x1="230" y1="280" x2="570" y2="280" stroke="#E2E8F0" strokeWidth="1.5" />
            <line x1="180" y1="360" x2="620" y2="360" stroke="#E2E8F0" strokeWidth="1.5" />

            {/* Right perspective shelf */}
            <polygon points="800,110 560,140 560,400 800,450" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <line x1="800" y1="180" x2="560" y2="200" stroke="#64748B" strokeWidth="3" />
            <line x1="800" y1="260" x2="560" y2="270" stroke="#64748B" strokeWidth="3" />
            <line x1="800" y1="340" x2="560" y2="340" stroke="#64748B" strokeWidth="3" />

            {/* Shopping Cart in aisle */}
            <g transform="translate(360, 260)">
              <rect x="10" y="20" width="60" height="40" rx="3" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
              <line x1="20" y1="20" x2="20" y2="60" stroke="#93C5FD" strokeWidth="1.5" />
              <line x1="35" y1="20" x2="35" y2="60" stroke="#93C5FD" strokeWidth="1.5" />
              <line x1="50" y1="20" x2="50" y2="60" stroke="#93C5FD" strokeWidth="1.5" />
              {/* Handle */}
              <path d="M70 20 L80 10 L80 5" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
              {/* Wheels */}
              <circle cx="20" cy="65" r="5" fill="#475569" />
              <circle cx="60" cy="65" r="5" fill="#475569" />
              {/* Groceries inside */}
              <rect x="22" y="10" width="18" height="20" rx="2" fill="#D97706" />
              <rect x="42" y="12" width="14" height="18" rx="2" fill="#15803D" />
            </g>

            {/* Bottom reassurance banner */}
            <rect x="220" y="405" width="360" height="30" rx="15" fill="#166534" />
            <text x="400" y="425" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
              SPACIOUS, HYGIENIC & AIR-COOLED STORE IN RACHERLA
            </text>
          </svg>
        );

      // 5. Long Aisle
      case 'aisle':
        return (
          <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="450" fill="#F8FAFC" />
            {/* Deep perspective grocery aisle */}
            <polygon points="0,0 350,150 450,150 800,0" fill="#E2E8F0" />
            <polygon points="350,150 450,150 450,300 350,300" fill="#94A3B8" />
            
            {/* Left shelf wall */}
            <polygon points="0,0 350,150 350,300 0,450" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
            {/* Left shelf bands */}
            <line x1="0" y1="120" x2="350" y2="190" stroke="#059669" strokeWidth="4" />
            <line x1="0" y1="230" x2="350" y2="230" stroke="#D97706" strokeWidth="4" />
            <line x1="0" y1="340" x2="350" y2="270" stroke="#0284C7" strokeWidth="4" />

            {/* Right shelf wall */}
            <polygon points="800,0 450,150 450,300 800,450" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
            {/* Right shelf bands */}
            <line x1="800" y1="120" x2="450" y2="190" stroke="#DC2626" strokeWidth="4" />
            <line x1="800" y1="230" x2="450" y2="230" stroke="#7C3AED" strokeWidth="4" />
            <line x1="800" y1="340" x2="450" y2="270" stroke="#CA8A04" strokeWidth="4" />

            {/* Floor tiles converging to center */}
            <polygon points="350,300 450,300 800,450 0,450" fill="#FFFFFF" />
            <line x1="400" y1="300" x2="400" y2="450" stroke="#E2E8F0" strokeWidth="2" />
            <line x1="380" y1="300" x2="200" y2="450" stroke="#E2E8F0" strokeWidth="1.5" />
            <line x1="420" y1="300" x2="600" y2="450" stroke="#E2E8F0" strokeWidth="1.5" />

            {/* Hanging Signage */}
            <rect x="360" y="80" width="80" height="40" rx="3" fill="#14532D" />
            <text x="400" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">AISLE 2</text>
            <text x="400" y="110" textAnchor="middle" fill="#FACC15" fontSize="7" fontWeight="bold">DAILY NEEDS</text>

            <rect x="250" y="380" width="300" height="35" rx="6" fill="#166534" />
            <text x="400" y="402" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">
              WELL-STOCKED AISLES • DAILY RESTOCKING
            </text>
          </svg>
        );

      // 6. Entrance with Customers & Baskets
      case 'entrance':
        return (
          <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="450" fill="#F8FAFC" />
            {/* Entrance portal */}
            <rect x="60" y="30" width="680" height="390" rx="8" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="2" />
            
            {/* Best Price Header */}
            <rect x="60" y="30" width="680" height="65" fill="#166534" />
            <text x="400" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="800" letterSpacing="0.05em">
              BEST PRICE SUPERMARKET ENTRANCE
            </text>
            <text x="400" y="83" textAnchor="middle" fill="#FEF08A" fontSize="11" fontWeight="600">
              FRESH STOCK EVERY DAY • CONVENIENT LOCAL SHOPPING
            </text>

            {/* Shopping baskets station */}
            <g transform="translate(100, 140)">
              <rect x="0" y="0" width="160" height="220" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
              <text x="80" y="30" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">PICK A BASKET</text>
              <rect x="25" y="55" width="110" height="35" rx="4" fill="#DC2626" />
              <rect x="25" y="95" width="110" height="35" rx="4" fill="#166534" />
              <rect x="25" y="135" width="110" height="35" rx="4" fill="#DC2626" />
              <rect x="25" y="175" width="110" height="35" rx="4" fill="#166534" />
              <text x="80" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">CLEAN & SANITIZED</text>
            </g>

            {/* Welcome banner & Entry gates */}
            <g transform="translate(300, 120)">
              <rect x="0" y="0" width="200" height="240" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
              <text x="100" y="35" textAnchor="middle" fill="#0284C7" fontSize="14" fontWeight="bold">CUSTOMER ENTRY</text>
              {/* Glass Door Graphic */}
              <rect x="20" y="50" width="75" height="175" fill="#BAE6FD" opacity="0.4" stroke="#0284C7" strokeWidth="1" />
              <rect x="105" y="50" width="75" height="175" fill="#BAE6FD" opacity="0.4" stroke="#0284C7" strokeWidth="1" />
              <circle cx="100" cy="130" r="14" fill="#166534" />
              <path d="M95 130 L105 130 M100 125 L105 130 L100 135" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Customer Information & Sanitizer station */}
            <g transform="translate(540, 140)">
              <rect x="0" y="0" width="160" height="220" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
              <text x="80" y="30" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">STORE HIGHLIGHTS</text>
              <text x="80" y="65" textAnchor="middle" fill="#475569" fontSize="10">✓ 7 Days Open</text>
              <text x="80" y="95" textAnchor="middle" fill="#475569" fontSize="10">✓ 7 AM to 10 PM</text>
              <text x="80" y="125" textAnchor="middle" fill="#475569" fontSize="10">✓ UPI Accepted</text>
              <text x="80" y="155" textAnchor="middle" fill="#475569" fontSize="10">✓ Weekly Offers</text>
              <rect x="25" y="175" width="110" height="30" rx="4" fill="#F59E0B" />
              <text x="80" y="195" textAnchor="middle" fill="#78350F" fontSize="10" fontWeight="bold">SAVINGS INSIDE</text>
            </g>
          </svg>
        );

      // 7. Checkout / Billing Counter
      case 'checkout':
        return (
          <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="450" fill="#F8FAFC" />
            {/* Checkout Header */}
            <rect x="50" y="30" width="700" height="50" rx="4" fill="#14532D" />
            <text x="400" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold">
              SPEEDY BILLING COUNTERS • FAST CHECKOUT IN RACHERLA
            </text>

            {/* Billing Desks */}
            <g transform="translate(80, 100)">
              {/* Counter 1 */}
              <rect x="0" y="0" width="300" height="250" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
              {/* Counter Header */}
              <rect x="0" y="0" width="300" height="45" rx="8" fill="#166534" />
              <text x="150" y="28" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">COUNTER 1 • EXPRESS BILLING</text>
              
              {/* POS Monitor Screen */}
              <rect x="40" y="65" width="80" height="60" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="2" />
              <rect x="45" y="70" width="70" height="50" rx="2" fill="#0284C7" />
              <text x="80" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">TOTAL: ₹899</text>
              <text x="80" y="105" textAnchor="middle" fill="#FEF08A" fontSize="7">ITEM COUNT: 3</text>
              {/* POS Stand */}
              <rect x="75" y="125" width="10" height="15" fill="#334155" />
              <rect x="60" y="140" width="40" height="6" rx="2" fill="#334155" />

              {/* Barcode Scanner Gun */}
              <rect x="145" y="80" width="35" height="18" rx="3" fill="#DC2626" />
              <line x1="180" y1="89" x2="220" y2="89" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 2" />
              <text x="162" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">SCAN</text>

              {/* UPI QR Payment Standee */}
              <rect x="200" y="70" width="65" height="75" rx="4" fill="#F8FAFC" stroke="#6366F1" strokeWidth="1.5" />
              <rect x="215" y="80" width="35" height="35" fill="#1E1B4B" />
              <text x="232" y="128" textAnchor="middle" fill="#4338CA" fontSize="7" fontWeight="bold">GPay / PhonePe</text>
              <text x="232" y="138" textAnchor="middle" fill="#166534" fontSize="6.5" fontWeight="bold">UPI ACCEPTED</text>

              {/* Conveyor Belt / Grocery Items */}
              <rect x="20" y="160" width="260" height="45" rx="4" fill="#334155" />
              <rect x="35" y="170" width="30" height="25" rx="2" fill="#D97706" />
              <rect x="75" y="165" width="25" height="30" rx="2" fill="#1E3A8A" />
              <rect x="110" y="168" width="24" height="27" rx="2" fill="#CA8A04" />
              <text x="200" y="186" fill="#94A3B8" fontSize="9" fontWeight="bold">CONVEYOR</text>

              {/* Shopping Bags */}
              <rect x="20" y="215" width="260" height="25" fill="#FEF3C7" />
              <text x="150" y="232" textAnchor="middle" fill="#92400E" fontSize="9" fontWeight="bold">CLOTH & ECO CARRY BAGS AVAILABLE</text>
            </g>

            {/* Counter 2 */}
            <g transform="translate(420, 100)">
              <rect x="0" y="0" width="300" height="250" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
              <rect x="0" y="0" width="300" height="45" rx="8" fill="#166534" />
              <text x="150" y="28" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">COUNTER 2 • FAST BILLING</text>

              <rect x="40" y="65" width="80" height="60" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="2" />
              <rect x="45" y="70" width="70" height="50" rx="2" fill="#0284C7" />
              <text x="80" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">BILL READY</text>
              <text x="80" y="105" textAnchor="middle" fill="#FEF08A" fontSize="7">CASH / UPI</text>

              {/* Friendly Staff Avatar */}
              <circle cx="160" cy="95" r="22" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
              <text x="160" y="101" textAnchor="middle" fontSize="16">😊</text>
              <text x="160" y="130" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">HELPER STAFF</text>

              <rect x="200" y="70" width="65" height="75" rx="4" fill="#F8FAFC" stroke="#15803D" strokeWidth="1.5" />
              <text x="232" y="95" textAnchor="middle" fill="#15803D" fontSize="8" fontWeight="bold">PRINTED</text>
              <text x="232" y="110" textAnchor="middle" fill="#15803D" fontSize="8" fontWeight="bold">RECEIPT</text>
              <text x="232" y="130" textAnchor="middle" fill="#64748B" fontSize="6.5">ITEMIZED</text>

              <rect x="20" y="160" width="260" height="45" rx="4" fill="#334155" />
              <text x="150" y="186" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontWeight="bold">PACKING ASSISTANCE PROVIDED</text>

              <rect x="20" y="215" width="260" height="25" fill="#DCFCE7" />
              <text x="150" y="232" textAnchor="middle" fill="#14532D" fontSize="9" fontWeight="bold">THANK YOU • VISIT AGAIN!</text>
            </g>

            {/* Bottom Help Notice */}
            <rect x="180" y="375" width="440" height="35" rx="6" fill="#166534" />
            <text x="400" y="398" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">
              NEED HELP TO LOAD IN VEHICLE? OUR LOCAL STAFF IS READY TO ASSIST
            </text>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <figure className={`overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm ${className}`}>
      <div className={`w-full overflow-hidden relative ${aspectClass}`}>
        {!imgError && photoUrl ? (
          <img
            src={photoUrl}
            alt={caption || 'Best Price Supermarket'}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
          />
        ) : (
          renderScene()
        )}
      </div>
      {caption && (
        <figcaption className="p-3 text-xs text-slate-600 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span>{caption}</span>
          <span className="text-emerald-700 font-semibold">Best Price Supermarket</span>
        </figcaption>
      )}
    </figure>
  );
};
