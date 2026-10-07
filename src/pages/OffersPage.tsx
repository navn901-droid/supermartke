import React from 'react';
import { SPECIAL_OFFERS, PRODUCTS, Product, STORE_INFO } from '../data/products';
import { ProductVisual } from '../components/ProductVisual';

interface OffersPageProps {
  onSelectProduct: (product: Product) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({ onSelectProduct }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-orange-600 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-lg">
        {/* Decorative background shapes */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-2xl transform translate-x-32 -translate-y-32"></div>

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-extrabold uppercase tracking-wider text-amber-200">
            <span>🔥 THIS WEEK'S OFFERS</span>
            <span>·</span>
            <span>Valid: 04 Oct – 10 Oct</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            TODAY'S OFFERS
          </h1>

          <p className="text-base sm:text-lg text-red-100 font-sans leading-relaxed">
            Save more on your everyday essentials. Check our latest in-store discounts, weekly grocery combos, and volume savings available at Best Price Supermarket in Racherla.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-red-100 font-semibold">
            <span>✓ Genuine Brands</span>
            <span>·</span>
            <span>✓ Instant Counter Billing Discount</span>
            <span>·</span>
            <span>✓ Fresh Stock Guaranteed</span>
          </div>
        </div>
      </div>

      {/* Visual Explanation: How Weekly Offers Work for Store Owner */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl mt-0.5">ℹ️</span>
          <div>
            <h4 className="text-sm font-bold text-amber-950 font-display">
              How Offers Work (Demonstration Note)
            </h4>
            <p className="text-xs text-amber-800 mt-0.5 leading-relaxed">
              Special offers are refreshed every week (e.g. 04 Oct – 10 Oct). In the live WordPress website, the Best Price Supermarket owner can easily edit, add festival deals (Ugadi, Sankranti, Diwali), or flash discounts from a simple admin screen.
            </p>
          </div>
        </div>
        <a
          href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Hello Best Price Supermarket Racherla! Are the weekly offers valid today in store?')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow-xs transition-colors whitespace-nowrap"
        >
          💬 Ask Store via WhatsApp
        </a>
      </div>

      {/* Offers Grid: 6 Specific Supermarket Deals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Offer 1: Fortune Sunflower Oil */}
        <div className="bg-white rounded-3xl border-2 border-red-200 p-6 hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider bg-red-600 text-white rounded-lg shadow-xs">
              10% OFF
            </span>
          </div>

          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
              Cooking Oil Deal
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 font-display mt-1 flex items-center gap-1.5">
              <span>🔥</span>
              <span>Fortune Sunflower Oil</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">Pack Size: 1 Litre Bottle</p>

            {/* Visual Packaging */}
            <div className="bg-amber-50/70 rounded-2xl p-4 my-4 flex items-center justify-center border border-amber-100">
              {PRODUCTS.find(p => p.id === 'prod-5') && (
                <ProductVisual product={PRODUCTS.find(p => p.id === 'prod-5')!} size="md" className="h-40" />
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-1.5 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Regular Price:</span>
                <span className="line-through font-mono">₹150</span>
              </div>
              <div className="flex items-center justify-between text-base font-extrabold text-emerald-900 font-display">
                <span>Offer Price:</span>
                <span className="text-2xl font-mono text-emerald-800">₹135</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-red-600 pt-1 border-t border-slate-200/80">
                <span>Total Customer Savings:</span>
                <span>SAVE ₹15</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              const prod = PRODUCTS.find(p => p.id === 'prod-5');
              if (prod) onSelectProduct(prod);
            }}
            className="mt-6 w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>View Product Details</span>
            <span>→</span>
          </button>
        </div>

        {/* Offer 2: Toor Dal */}
        <div className="bg-white rounded-3xl border-2 border-red-200 p-6 hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider bg-amber-500 text-white rounded-lg shadow-xs">
              FRESH STOCK
            </span>
          </div>

          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
              Staple Pulse Offer
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 font-display mt-1 flex items-center gap-1.5">
              <span>🔥</span>
              <span>Premium Toor Dal</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">Pack Size: 1 kg (Unpolished)</p>

            {/* Visual Packaging */}
            <div className="bg-yellow-50/70 rounded-2xl p-4 my-4 flex items-center justify-center border border-yellow-100">
              {PRODUCTS.find(p => p.id === 'prod-3') && (
                <ProductVisual product={PRODUCTS.find(p => p.id === 'prod-3')!} size="md" className="h-40" />
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-1.5 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Regular Price:</span>
                <span className="line-through font-mono">₹180</span>
              </div>
              <div className="flex items-center justify-between text-base font-extrabold text-emerald-900 font-display">
                <span>Offer Price:</span>
                <span className="text-2xl font-mono text-emerald-800">₹165</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-red-600 pt-1 border-t border-slate-200/80">
                <span>Total Customer Savings:</span>
                <span>SAVE ₹15</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              const prod = PRODUCTS.find(p => p.id === 'prod-3');
              if (prod) onSelectProduct(prod);
            }}
            className="mt-6 w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>View Product Details</span>
            <span>→</span>
          </button>
        </div>

        {/* Offer 3: Clinic Plus Shampoo */}
        <div className="bg-white rounded-3xl border-2 border-red-200 p-6 hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider bg-blue-600 text-white rounded-lg shadow-xs">
              SAVE ₹21
            </span>
          </div>

          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
              Personal Care Special
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 font-display mt-1 flex items-center gap-1.5">
              <span>🧴</span>
              <span>Clinic Plus Shampoo</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">Pack Size: 180 ml Bottle</p>

            {/* Visual Packaging */}
            <div className="bg-blue-50/70 rounded-2xl p-4 my-4 flex items-center justify-center border border-blue-100">
              {PRODUCTS.find(p => p.id === 'prod-10') && (
                <ProductVisual product={PRODUCTS.find(p => p.id === 'prod-10')!} size="md" className="h-40" />
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-1.5 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Regular Price:</span>
                <span className="line-through font-mono">₹150</span>
              </div>
              <div className="flex items-center justify-between text-base font-extrabold text-emerald-900 font-display">
                <span>Offer Price:</span>
                <span className="text-2xl font-mono text-emerald-800">₹129</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-red-600 pt-1 border-t border-slate-200/80">
                <span>Total Customer Savings:</span>
                <span>SAVE ₹21</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              const prod = PRODUCTS.find(p => p.id === 'prod-10');
              if (prod) onSelectProduct(prod);
            }}
            className="mt-6 w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>View Product Details</span>
            <span>→</span>
          </button>
        </div>

        {/* Offer 4: Parachute Coconut Oil */}
        <div className="bg-white rounded-3xl border-2 border-red-200 p-6 hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider bg-emerald-600 text-white rounded-lg shadow-xs">
              UNDER ₹100
            </span>
          </div>

          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
              Pure Coconut Oil
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 font-display mt-1 flex items-center gap-1.5">
              <span>🥥</span>
              <span>Parachute Coconut Oil</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">Pack Size: 200 ml Bottle</p>

            {/* Visual Packaging */}
            <div className="bg-emerald-50/70 rounded-2xl p-4 my-4 flex items-center justify-center border border-emerald-100">
              {PRODUCTS.find(p => p.id === 'prod-13') && (
                <ProductVisual product={PRODUCTS.find(p => p.id === 'prod-13')!} size="md" className="h-40" />
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-1.5 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Regular Price:</span>
                <span className="line-through font-mono">₹110</span>
              </div>
              <div className="flex items-center justify-between text-base font-extrabold text-emerald-900 font-display">
                <span>Offer Price:</span>
                <span className="text-2xl font-mono text-emerald-800">₹99</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-red-600 pt-1 border-t border-slate-200/80">
                <span>Total Customer Savings:</span>
                <span>SAVE ₹11</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              const prod = PRODUCTS.find(p => p.id === 'prod-13');
              if (prod) onSelectProduct(prod);
            }}
            className="mt-6 w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>View Product Details</span>
            <span>→</span>
          </button>
        </div>

        {/* Offer 5: FAMILY GROCERY COMBO */}
        <div className="bg-gradient-to-b from-emerald-50 to-white rounded-3xl border-2 border-emerald-500 p-6 hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider bg-red-600 text-white rounded-lg shadow-xs">
              BIG SAVINGS
            </span>
          </div>

          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
              Monthly Essentials Trio
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 font-display mt-1 flex items-center gap-1.5">
              <span>🎁</span>
              <span>FAMILY GROCERY COMBO</span>
            </h3>
            <p className="text-xs font-semibold text-emerald-800 mt-1">
              Rice (5 kg) + Toor Dal (1 kg) + Oil (1 L)
            </p>

            {/* Visual Representation of Combo */}
            <div className="relative rounded-2xl overflow-hidden my-4 border border-emerald-200 h-40 bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80" 
                alt="Family Grocery Combo Pack"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/30 to-transparent flex items-end p-3">
                <div className="text-white text-xs font-bold flex items-center justify-between w-full">
                  <span>🍚 Basmati 5kg + 🥣 Toor Dal 1kg + 🌻 Oil 1L</span>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-1.5 bg-white p-4 rounded-xl border border-emerald-100 shadow-2xs">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Regular Total:</span>
                <span className="line-through font-mono">₹980</span>
              </div>
              <div className="flex items-center justify-between text-base font-extrabold text-emerald-900 font-display">
                <span>Combo Offer:</span>
                <span className="text-2xl font-mono text-emerald-800">₹899</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-red-600 pt-1 border-t border-emerald-100">
                <span>Instant Bundle Savings:</span>
                <span>SAVE ₹81</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-3 bg-emerald-100/70 rounded-xl text-center text-xs font-bold text-emerald-950">
            Ask for "Family Grocery Combo" at the billing counter!
          </div>
        </div>

        {/* Offer 6: BUY MORE, SAVE MORE (Parle-G) */}
        <div className="bg-gradient-to-b from-amber-50 to-white rounded-3xl border-2 border-amber-400 p-6 hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider bg-amber-600 text-white rounded-lg shadow-xs">
              TIER VALUE
            </span>
          </div>

          <div>
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
              Snack Multipack
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 font-display mt-1 flex items-center gap-1.5">
              <span>🛒</span>
              <span>BUY MORE, SAVE MORE</span>
            </h3>
            <p className="text-xs font-bold text-amber-900 mt-1">
              Parle-G Glucose Biscuits (Value Packs)
            </p>

            {/* Visual Packaging */}
            <div className="bg-white rounded-2xl p-4 my-4 flex items-center justify-center border border-amber-200">
              {PRODUCTS.find(p => p.id === 'prod-17') && (
                <ProductVisual product={PRODUCTS.find(p => p.id === 'prod-17')!} size="md" className="h-40" />
              )}
            </div>

            {/* Multi-Tier Table */}
            <div className="space-y-2 bg-white p-4 rounded-xl border border-amber-200 shadow-2xs">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span>Buy 2 Packs:</span>
                <span className="font-mono text-sm text-emerald-800">₹40 only</span>
              </div>
              <div className="flex items-center justify-between text-xs font-extrabold text-slate-900 pt-1 border-t border-slate-100">
                <span>Buy 4 Packs (Best Value):</span>
                <span className="font-mono text-base text-red-600">₹70 only</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Stock up for festive evenings, tea-time with neighbors, and children snacks.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const prod = PRODUCTS.find(p => p.id === 'prod-17');
              if (prod) onSelectProduct(prod);
            }}
            className="mt-6 w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>View Parle-G Details</span>
            <span>→</span>
          </button>
        </div>

      </div>

      {/* Reassurance Footer Banner */}
      <div className="bg-slate-100 rounded-2xl p-6 text-center text-xs text-slate-600 max-w-3xl mx-auto space-y-1">
        <p className="font-bold text-slate-800">
          *Important Demo Notice: All offers, dates, and prices shown are sample data for catalogue demonstration.
        </p>
        <p>
          Final offer rules, discount percentages, and validity schedules will be set according to the supermarket's weekly inventory plan.
        </p>
      </div>

    </div>
  );
};
