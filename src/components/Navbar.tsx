import React, { useState } from 'react';
import { STORE_INFO } from '../data/products';

export type PageId = 'home' | 'products' | 'categories' | 'offers' | 'about' | 'store' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, categoryFilter?: string) => void;
  selectedCategory?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'categories', label: 'Categories' },
    { id: 'offers', label: 'Today\'s Offers', badge: 'Deals' },
    { id: 'about', label: 'About Us' },
    { id: 'store', label: 'Our Store' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Notice: Client Demo indicator & Location badge */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-1.5 px-4 border-b border-emerald-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium tracking-wide">📍 Main Bazaar, Racherla, Prakasam Dist. • Open Daily 7:00 AM – 10:00 PM</span>
          </div>
          <div className="flex items-center gap-3 text-emerald-300">
            <span className="hidden sm:inline">Store Enquiry Hotline:</span>
            <a 
              href={`tel:${STORE_INFO.phone}`} 
              className="font-semibold text-amber-300 hover:text-white transition-colors flex items-center gap-1"
            >
              📞 {STORE_INFO.displayPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header adhering to the Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            
            {/* ZONE 1: Brand Wordmark (Structured cleanly for easy logo image replacement) */}
            <div className="flex items-center">
              <button 
                onClick={() => handleNavClick('home')}
                className="group text-left flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-md p-1"
                aria-label="Best Price Supermarket Home"
              >
                {/* Clean Supermarket Emblem / Logo placeholder */}
                <div className="w-10 h-10 rounded-lg bg-emerald-800 flex items-center justify-center text-white font-bold text-xl shadow-xs group-hover:bg-emerald-900 transition-colors">
                  <span className="tracking-tighter">BP</span>
                </div>
                <div>
                  <span className="block text-lg sm:text-xl font-extrabold tracking-tight text-emerald-900 font-display leading-tight group-hover:text-emerald-800 transition-colors">
                    BEST PRICE
                  </span>
                  <span className="block text-[10px] sm:text-xs font-bold tracking-widest text-amber-600 uppercase font-sans">
                    SUPERMARKET • RACHERLA
                  </span>
                </div>
              </button>
            </div>

            {/* ZONE 2: Clean Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3.5 py-2 text-sm font-semibold rounded-md transition-all whitespace-nowrap ${
                      isActive
                        ? 'text-emerald-900 bg-emerald-50/80 font-bold'
                        : 'text-slate-700 hover:text-emerald-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white rounded">
                        {item.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-700 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* ZONE 3: Contact Actions (Call Now & WhatsApp) */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors whitespace-nowrap shadow-2xs"
                title="Call store directly"
              >
                <span>📞</span>
                <span>Call Store</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Hello Best Price Supermarket Racherla, I have an enquiry regarding grocery products and prices.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors whitespace-nowrap shadow-xs"
                title="Chat on WhatsApp"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="sm:hidden p-2 text-emerald-800 bg-emerald-50 rounded-lg border border-emerald-200"
                aria-label="Call Supermarket"
              >
                📞
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-emerald-900 hover:bg-slate-100 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <div className="space-y-1 mb-4">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-emerald-800 text-white font-bold'
                        : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                        isActive ? 'bg-red-500 text-white' : 'bg-red-100 text-red-700'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-50 text-emerald-900 border border-emerald-300 font-bold rounded-lg text-sm"
              >
                <span>📞 Call Supermarket: {STORE_INFO.displayPhone}</span>
              </a>
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Hello Best Price Supermarket Racherla, I have an enquiry regarding grocery products and prices.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-800 text-white font-bold rounded-lg text-sm shadow-xs"
              >
                <span>💬 WhatsApp Us Directly</span>
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-center text-xs text-slate-500">
              📍 Main Bazaar Road, Racherla, Prakasam District, AP
            </div>
          </div>
        )}
      </header>

      {/* Floating Bottom Quick Contact Bar on Mobile */}
      <aside aria-label="Quick contact" className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 shadow-lg flex gap-2">
        <a
          href={`tel:${STORE_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-emerald-50 text-emerald-900 font-bold text-xs rounded-lg border border-emerald-300"
        >
          <span>📞 Call Store</span>
        </a>
        <a
          href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Hello Best Price Supermarket Racherla, I would like to check product availability.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-emerald-800 text-white font-bold text-xs rounded-lg shadow-xs"
        >
          <span>💬 WhatsApp</span>
        </a>
      </aside>
    </>
  );
};
