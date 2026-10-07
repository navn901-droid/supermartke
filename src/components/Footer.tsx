import React from 'react';
import { STORE_INFO, CATEGORIES } from '../data/products';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId, categoryFilter?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Store Branding & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-bold text-lg">
                BP
              </div>
              <div>
                <span className="block text-xl font-extrabold text-white tracking-tight font-display">
                  BEST PRICE
                </span>
                <span className="block text-xs font-bold tracking-widest text-amber-400 uppercase">
                  SUPERMARKET
                </span>
              </div>
            </div>

            <p className="text-sm text-amber-300 font-semibold tracking-wide">
              SHOP MORE • SAVE MORE
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted everyday neighborhood supermarket for fresh groceries, staples, personal care, and household essentials in Racherla.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-900/60 text-emerald-300 border border-emerald-700/60">
                <span>📍</span>
                <span>Racherla, Prakasam District, AP</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('products')} 
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Browse Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('categories')} 
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Store Categories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('offers')} 
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Today's Offers</span>
                  <span className="px-1.5 py-0.2 text-[10px] font-bold bg-red-600 text-white rounded">Weekly Deals</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  About Our Store
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('store')} 
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Store Location & Hours
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Customer Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Aisles / Categories */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Aisles & Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('products', cat.slug)}
                    className="hover:text-emerald-400 transition-colors text-left flex items-center justify-between w-full pr-4"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-slate-500 font-mono">{cat.aisleNumber.split(' ')[0]}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="text-xs text-emerald-400 font-semibold hover:underline"
                >
                  View All 7 Sections →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 font-display">
              Store Timings & Contact
            </h4>
            <div className="text-xs space-y-1 text-slate-300">
              <p className="font-semibold text-white">Opening Hours:</p>
              <p>Mon – Sat: 7:00 AM – 10:00 PM</p>
              <p>Sunday & Holidays: 7:00 AM – 10:30 PM</p>
            </div>

            <div className="pt-2 space-y-2 text-sm">
              <a 
                href={`tel:${STORE_INFO.phone}`} 
                className="flex items-center gap-2 text-slate-200 hover:text-amber-300 transition-colors"
              >
                <span>📞</span>
                <span className="font-semibold">{STORE_INFO.displayPhone}</span>
              </a>
              <a 
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Hello Best Price Supermarket Racherla, I have an enquiry.')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>💬</span>
                <span className="font-semibold">WhatsApp Store Assistance</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
              {STORE_INFO.address.full}
            </p>
          </div>

        </div>

        {/* Mandatory Disclaimers & Notice Row */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 space-y-3">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-800/60 p-3.5 rounded-lg border border-slate-700/60">
            <div className="flex items-center gap-2 text-amber-300 font-medium">
              <span className="text-base">ℹ️</span>
              <span>Notice: Product prices and availability may change. Please confirm with the store during your visit or via call.</span>
            </div>
            <div className="text-slate-400 shrink-0 font-mono text-[11px]">
              V1 – Digital Product Catalogue
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-slate-500">
            <p>
              © {new Date().getFullYear()} Best Price Supermarket. All rights reserved. Racherla, Prakasam District, Andhra Pradesh.
            </p>
            <p className="text-[11px] text-slate-400">
              CLIENT DEMO — Sample products, prices and offers shown for demonstration. Final list and prices configured upon approval.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};
