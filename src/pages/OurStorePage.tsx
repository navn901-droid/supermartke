import React from 'react';
import { STORE_INFO } from '../data/products';
import { StorePhotoVisual } from '../components/StorePhotoVisual';

export const OurStorePage: React.FC = () => {
  const handleGetDirections = () => {
    // Open Google Maps query for Racherla Prakasam District
    const query = encodeURIComponent('Best Price Supermarket, Main Bazaar Road, Racherla, Prakasam District, Andhra Pradesh');
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
          Store Information & Location
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 font-display mt-0.5">
          Our Physical Store in Racherla
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-xl">
          Visit Best Price Supermarket in person. Conveniently located on Main Bazaar Road, Racherla with easy vehicle access and dedicated parking.
        </p>
      </div>

      {/* Main Grid: Store Details & Interactive Map Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Contact, Address & Hours Card */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Address Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-3xl mt-0.5">📍</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Best Price Supermarket
                </h3>
                <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Racherla • Prakasam District • Andhra Pradesh
                </p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {STORE_INFO.address.street}, <br />
                  Near Bus Stand & Clock Tower Circle, <br />
                  Racherla, Prakasam District, <br />
                  Andhra Pradesh – 523368
                </p>
              </div>
            </div>

            {/* Get Directions CTA Button */}
            <button
              onClick={handleGetDirections}
              className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>🗺️</span>
              <span>Get Directions on Google Maps</span>
              <span>↗</span>
            </button>
          </div>

          {/* Opening Hours Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">⏰</span>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Store Operating Hours
              </h3>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                <span className="font-semibold text-slate-700">Monday – Saturday</span>
                <span className="font-mono font-bold text-emerald-800">7:00 AM – 10:00 PM</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-emerald-50 rounded-lg border border-emerald-100">
                <span className="font-semibold text-emerald-950">Sunday & Holidays</span>
                <span className="font-mono font-bold text-emerald-800">7:00 AM – 10:30 PM</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 italic">
              *Daily morning fresh milk & dairy arrives at 6:30 AM.
            </p>
          </div>

          {/* Quick Contact Box */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-3">
            <h4 className="text-sm font-bold text-slate-900 font-display">
              Direct Store Channels
            </h4>

            <a
              href={`tel:${STORE_INFO.phone}`}
              className="flex items-center justify-between p-3 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-xl transition-colors group"
            >
              <div className="flex items-center gap-2 text-sm text-slate-800">
                <span>📞</span>
                <span className="font-semibold">Phone Helpline:</span>
              </div>
              <span className="font-bold text-emerald-800 text-sm group-hover:underline">
                {STORE_INFO.displayPhone}
              </span>
            </a>

            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Hello Best Price Supermarket Racherla! I want to enquire about grocery stock and directions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-emerald-50/70 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors group"
            >
              <div className="flex items-center gap-2 text-sm text-emerald-950">
                <span>💬</span>
                <span className="font-semibold">WhatsApp Enquiry:</span>
              </div>
              <span className="font-bold text-emerald-800 text-sm group-hover:underline">
                Instant Chat ↗
              </span>
            </a>
          </div>

          {/* Store Facilities */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 font-display">
              In-Store Amenities
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-emerald-700">✓</span>
                <span>Spacious two-wheeler & car parking in front of the building</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-700">✓</span>
                <span>Sanitized shopping hand baskets for quick browsing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-700">✓</span>
                <span>UPI (PhonePe, Google Pay, Paytm) & Cash accepted</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-700">✓</span>
                <span>Vehicle loading assistance for heavy sacks (atta, rice)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column: Interactive Google Maps Placeholder & Daytime Photo */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Interactive Google Maps Placeholder Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs">
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Store Location Map • Racherla, AP
                </span>
              </div>
              <button
                onClick={handleGetDirections}
                className="text-xs font-bold text-emerald-800 hover:text-emerald-900 hover:underline flex items-center gap-1"
              >
                <span>Open Google Maps</span>
                <span>↗</span>
              </button>
            </div>

            {/* Stylized Local Map Canvas */}
            <div className="relative aspect-video w-full bg-slate-100 overflow-hidden flex items-center justify-center">
              {/* Map stylized SVG representation */}
              <svg viewBox="0 0 700 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background terrain */}
                <rect width="700" height="400" fill="#F1F5F9" />
                
                {/* Green landscape zones */}
                <path d="M0 0 L250 0 L200 150 L0 180 Z" fill="#DCFCE7" opacity="0.6" />
                <path d="M500 0 L700 0 L700 200 L550 160 Z" fill="#DCFCE7" opacity="0.6" />
                <path d="M0 300 L250 250 L200 400 L0 400 Z" fill="#DCFCE7" opacity="0.6" />
                <path d="M550 320 L700 280 L700 400 L500 400 Z" fill="#DCFCE7" opacity="0.6" />

                {/* Secondary town roads */}
                <path d="M120 0 L120 400" stroke="#CBD5E1" strokeWidth="12" />
                <path d="M580 0 L580 400" stroke="#CBD5E1" strokeWidth="12" />
                <path d="M0 100 L700 100" stroke="#CBD5E1" strokeWidth="12" />
                <path d="M0 320 L700 320" stroke="#CBD5E1" strokeWidth="12" />

                {/* Main Highway / Main Bazaar Road Racherla */}
                <path d="M0 200 L700 200" stroke="#FDE68A" strokeWidth="26" />
                <path d="M0 200 L700 200" stroke="#F59E0B" strokeWidth="3" strokeDasharray="16 12" />
                <text x="160" y="190" fill="#92400E" fontSize="11" fontWeight="bold">MAIN BAZAAR ROAD (TOWN CENTER)</text>

                {/* Road Junction to Bus Stand */}
                <path d="M350 200 L350 400" stroke="#FDE68A" strokeWidth="20" />
                <text x="365" y="360" fill="#92400E" fontSize="10" fontWeight="bold" transform="rotate(90 365 360)">TO BUS STAND</text>

                {/* Town Landmarks */}
                <rect x="230" y="270" width="80" height="40" rx="4" fill="#E2E8F0" stroke="#94A3B8" />
                <text x="270" y="295" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="bold">RTC Bus Stand</text>

                <rect x="420" y="120" width="85" height="35" rx="4" fill="#E2E8F0" stroke="#94A3B8" />
                <text x="462" y="142" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="bold">Racherla Junction</text>

                {/* Pin for Best Price Supermarket */}
                <g transform="translate(350, 185)">
                  {/* Pin shadow */}
                  <ellipse cx="0" cy="15" rx="14" ry="5" fill="#0F172A" opacity="0.3" />
                  {/* Animated radar rings */}
                  <circle cx="0" cy="0" r="32" stroke="#166534" strokeWidth="2" opacity="0.4" />
                  <circle cx="0" cy="0" r="24" stroke="#166534" strokeWidth="2" opacity="0.7" />
                  {/* Pin graphic */}
                  <path d="M0 -36 C-14 -36 -24 -24 -24 -10 C-24 10 0 32 0 32 C0 32 24 10 24 -10 C24 -24 14 -36 0 -36 Z" fill="#166534" stroke="#FFFFFF" strokeWidth="2.5" />
                  <circle cx="0" cy="-12" r="9" fill="#FFFFFF" />
                  <text x="0" y="-8" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">BP</text>
                </g>

                {/* Map Floating Marker Box */}
                <rect x="250" y="60" width="200" height="60" rx="8" fill="#14532D" stroke="#22C55E" strokeWidth="1.5" />
                <text x="350" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">BEST PRICE SUPERMARKET</text>
                <text x="350" y="97" textAnchor="middle" fill="#FEF08A" fontSize="9" fontWeight="semibold">Main Bazaar Road, Racherla</text>
                <text x="350" y="110" textAnchor="middle" fill="#A7F3D0" fontSize="8">Open Now • 7 AM – 10 PM</text>
              </svg>

              {/* Overlay button */}
              <div className="absolute bottom-4 right-4">
                <button
                  onClick={handleGetDirections}
                  className="px-4 py-2 bg-white text-slate-900 font-bold text-xs rounded-lg shadow-md hover:bg-slate-50 transition-colors border border-slate-200 flex items-center gap-1.5"
                >
                  <span>📍 View on Google Maps</span>
                  <span>↗</span>
                </button>
              </div>
            </div>

            <div className="p-4 bg-slate-50 text-xs text-slate-600 border-t border-slate-100 flex items-center justify-between">
              <span>Coordinates: Racherla, Prakasam Dist. (Andhra Pradesh)</span>
              <span className="font-semibold text-emerald-800">Pin Code: 523368</span>
            </div>
          </div>

          {/* Store Exterior Visual */}
          <div>
            <StorePhotoVisual 
              type="storefront_day" 
              caption="Daytime view of Best Price Supermarket building exterior in Racherla" 
              aspect="16:9" 
            />
          </div>

        </div>

      </div>

      {/* Store Photos Gallery Section */}
      <div className="pt-6 border-t border-slate-200 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Store Gallery
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 font-display mt-0.5">
            Photographs of Best Price Supermarket
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StorePhotoVisual 
            type="storefront_night" 
            caption="Night illuminated storefront sign" 
            aspect="4:3" 
          />
          <StorePhotoVisual 
            type="interior_shelves" 
            caption="Clean food staples and pulses shelves" 
            aspect="4:3" 
          />
          <StorePhotoVisual 
            type="interior_wide" 
            caption="Spacious walking aisles and shopping carts" 
            aspect="4:3" 
          />
        </div>
      </div>

    </div>
  );
};
