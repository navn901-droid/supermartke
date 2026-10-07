import React from 'react';
import { STORE_INFO } from '../data/products';
import { StorePhotoVisual } from '../components/StorePhotoVisual';
import { PageId } from '../components/Navbar';

interface AboutUsPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Hero / About Banner */}
      <div className="bg-emerald-900 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            About Best Price Supermarket
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Serving Families Across Racherla
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 font-sans leading-relaxed">
            Best Price Supermarket is a local, customer-first supermarket established in Racherla, Prakasam District, Andhra Pradesh. We provide the convenience of modern organized retail with the warmth and personal care of your trusted neighborhood grocer.
          </p>
        </div>
      </div>

      {/* 7 Core Pillars */}
      <div className="space-y-4">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
            Why Racherla Shops With Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-0.5">
            Our 7 Commitments to Every Customer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
            <span className="text-3xl">🌾</span>
            <h3 className="text-lg font-bold text-slate-900 font-display">1. Everyday Essentials</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              From fresh morning milk packets to chakki atta, basmati rice, pulses, cooking oils, and daily fruits (bananas & pooja coconuts). Note: Our store focuses on packaged groceries and daily dairy, and does not carry raw vegetables.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
            <span className="text-3xl">🥫</span>
            <h3 className="text-lg font-bold text-slate-900 font-display">2. Genuine Grocery Brands</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We stock verified, sealed products from India's most trusted manufacturers like Aashirvaad, Tata, Fortune, Heritage, and Amul.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
            <span className="text-3xl">🧼</span>
            <h3 className="text-lg font-bold text-slate-900 font-display">3. Household Hygiene Needs</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Complete laundry powders, dishwashing gels, toilet cleaners, and surface sanitizers to keep every home safe and clean.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
            <span className="text-3xl">🧴</span>
            <h3 className="text-lg font-bold text-slate-900 font-display">4. Personal & Baby Care</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Shampoos, beauty soaps, oral care, pure coconut hair oils, and dermatologically approved baby care products on dedicated shelves.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
            <span className="text-3xl">🛒</span>
            <h3 className="text-lg font-bold text-slate-900 font-display">5. Convenient Shopping</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Spacious aisles, clean hand baskets, clear price tags on all items, and quick checkout so you never waste time waiting in long queues.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
            <span className="text-3xl">🤝</span>
            <h3 className="text-lg font-bold text-slate-900 font-display">6. Friendly Local Service</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our staff speaks Telugu and English, knows our regular patrons personally, and happily assists with packing and loading heavy sacks into your vehicle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-300 shadow-2xs space-y-2 sm:col-span-2 lg:col-span-3 bg-emerald-50/50">
            <div className="flex items-center gap-3">
              <span className="text-3xl">💰</span>
              <div>
                <h3 className="text-lg font-bold text-emerald-950 font-display">7. Genuine Value For Money</h3>
                <p className="text-xs sm:text-sm text-emerald-900/80 leading-relaxed">
                  Our motto is <strong>SHOP MORE • SAVE MORE</strong>. We keep our profit margins reasonable and pass bulk savings directly to local residents, students, and working families in Racherla.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Real Store Experience Gallery */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
            Real Store Photographs
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-0.5">
            A Glimpse Inside Best Price Supermarket
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            See our welcoming entrance, clean wide aisles, and organized checkout environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <StorePhotoVisual 
              type="entrance" 
              caption="Customer entrance with sanitized shopping baskets" 
              aspect="16:9" 
            />
            <h4 className="font-bold text-base text-slate-900 mt-2 font-display">Welcoming Customer Entrance</h4>
            <p className="text-xs text-slate-600 mt-1">
              Convenient sliding doors, fresh produce bay right at the front, and easy hand baskets for quick morning and evening shopping runs.
            </p>
          </div>

          <div>
            <StorePhotoVisual 
              type="aisle" 
              caption="Spacious, well-marked grocery aisles" 
              aspect="16:9" 
            />
            <h4 className="font-bold text-base text-slate-900 mt-2 font-display">Wide Organised Aisles</h4>
            <p className="text-xs text-slate-600 mt-1">
              Ample space between racks so two families can browse comfortably without bumping carts, with bright energy-efficient overhead lighting.
            </p>
          </div>

          <div>
            <StorePhotoVisual 
              type="interior_wide" 
              caption="Wide angle view of our supermarket floor" 
              aspect="16:9" 
            />
            <h4 className="font-bold text-base text-slate-900 mt-2 font-display">Modern Supermarket Comfort</h4>
            <p className="text-xs text-slate-600 mt-1">
              Polished tiled floors, clear section overhead signs, and air cooling during hot Andhra Pradesh summer afternoons.
            </p>
          </div>

          <div>
            <StorePhotoVisual 
              type="checkout" 
              caption="Dual billing counters with barcode scanners and UPI QR" 
              aspect="16:9" 
            />
            <h4 className="font-bold text-base text-slate-900 mt-2 font-display">Fast Counter Checkout</h4>
            <p className="text-xs text-slate-600 mt-1">
              Automated computer billing with printed receipts. We accept cash and instant UPI payments (PhonePe, Google Pay, Paytm).
            </p>
          </div>
        </div>
      </div>

      {/* Community Message */}
      <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 text-center max-w-2xl mx-auto space-y-4">
        <h3 className="text-xl font-bold text-slate-900 font-display">
          Visit Us Today in Racherla
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Whether you need a single milk packet in the morning or a full month of family staples, Best Price Supermarket is open daily from 7:00 AM to 10:00 PM.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('products')}
            className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
          >
            Explore Catalogue →
          </button>
          <button
            onClick={() => onNavigate('store')}
            className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs rounded-xl transition-colors"
          >
            Get Store Directions →
          </button>
        </div>
      </div>

    </div>
  );
};
