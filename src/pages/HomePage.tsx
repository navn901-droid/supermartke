import React from 'react';
import { PRODUCTS, SPECIAL_OFFERS, CATEGORIES, STORE_INFO, Product } from '../data/products';
import { ProductVisual } from '../components/ProductVisual';
import { StorePhotoVisual } from '../components/StorePhotoVisual';
import { PageId } from '../components/Navbar';

interface HomePageProps {
  onNavigate: (page: PageId, categoryFilter?: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProduct }) => {
  // Select 6 popular everyday essentials for the home showcase
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="space-y-16 pb-12">
      
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="relative bg-gradient-to-b from-emerald-900 via-emerald-950 to-slate-900 text-white overflow-hidden">
        {/* Subtle decorative grid backdrop */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust & Location Indicator Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/60 text-xs font-semibold text-emerald-200">
                <span className="text-amber-400">📍</span>
                <span>Racherla, Prakasam District, Andhra Pradesh</span>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.15]">
                  BEST PRICE <br />
                  <span className="text-emerald-400">SUPERMARKET</span>
                </h1>
                <p className="text-lg sm:text-xl font-bold tracking-widest text-amber-400 mt-2 font-display uppercase">
                  SHOP MORE • SAVE MORE
                </p>
              </div>

              {/* Tagline Description */}
              <p className="text-base sm:text-lg text-emerald-100/90 max-w-xl font-sans leading-relaxed">
                Your everyday neighborhood supermarket for groceries, beverages, personal care and household essentials.
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-extrabold text-sm rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
                >
                  Browse Products →
                </button>

                <button
                  onClick={() => onNavigate('offers')}
                  className="px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <span>🔥</span>
                  <span>Today's Offers</span>
                </button>

                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="px-4 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-xl border border-white/20 transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>📞</span>
                  <span>Call Store</span>
                </a>

                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Hello Best Price Supermarket Racherla, I want to check grocery prices and offers.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl border border-emerald-600 transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-emerald-800/80 max-w-lg text-xs text-emerald-200/80">
                <div>
                  <span className="block font-bold text-white text-sm">7 AM – 10 PM</span>
                  <span>Open 7 Days a Week</span>
                </div>
                <div>
                  <span className="block font-bold text-white text-sm">100% Genuine</span>
                  <span>Trusted Packaged Brands</span>
                </div>
                <div>
                  <span className="block font-bold text-white text-sm">Best Local Rates</span>
                  <span>Everyday Low Prices</span>
                </div>
              </div>

            </div>

            {/* Right Column: Real Store Night Facade Visual */}
            <div className="lg:col-span-5">
              <div className="relative group">
                {/* Glow aura */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-600/60 shadow-2xl bg-slate-900">
                  <StorePhotoVisual 
                    type="storefront_night" 
                    caption="Best Price Supermarket Storefront in Racherla, Prakasam District" 
                    aspect="16:9" 
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          QUICK ACCESS SECTION (4 Attractive Cards)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Quick Store Access
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Everything you need to plan your daily grocery shopping in Racherla
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: Browse Products */}
          <div 
            onClick={() => onNavigate('products')}
            className="group p-6 bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-500 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                🛒
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-emerald-800 transition-colors">
                Browse Products
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                See available products, packs & shelf prices across all grocery aisles.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
              <span>Explore 24+ Items</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 2: Today's Offers */}
          <div 
            onClick={() => onNavigate('offers')}
            className="group p-6 bg-white rounded-2xl border border-red-200 hover:border-red-500 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-red-500/10 rounded-full blur-xs"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                🔥
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-red-700 transition-colors">
                Today's Offers
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                Find current promotions, weekly discounts and grocery combo packs.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-red-600">
              <span>View Weekly Deals</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 3: Store Information */}
          <div 
            onClick={() => onNavigate('about')}
            className="group p-6 bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-500 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                📋
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-emerald-800 transition-colors">
                Store Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                Location, hours & contact info, customer service, and accepted payment modes.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
              <span>About Best Price</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 4: Visit Store */}
          <div 
            onClick={() => onNavigate('store')}
            className="group p-6 bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-500 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                📍
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-emerald-800 transition-colors">
                Visit Store
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                Find us in Racherla, Prakasam Dist. Get directions, maps and parking details.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
              <span>Directions & Map</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          THIS WEEK'S HIGHLIGHT OFFERS PREVIEW
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-200 shadow-sm">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wider bg-red-600 text-white rounded">
                  SPECIAL OFFERS
                </span>
                <span className="text-xs font-bold text-amber-800">
                  {SPECIAL_OFFERS[0].validity}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-1">
                Save More On Everyday Essentials
              </h2>
            </div>
            <button
              onClick={() => onNavigate('offers')}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
            >
              View All 6 Offers →
            </button>
          </div>

          {/* 3 Key Offer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Offer 1: Fortune Sunflower Oil */}
            <div className="bg-white rounded-xl p-4 border border-amber-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-600">🔥 10% OFF</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-900 rounded">SAVE ₹15</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mt-2 font-display">
                  Fortune Sunflower Oil (1L)
                </h4>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl font-extrabold text-emerald-900 font-display">₹135</span>
                  <span className="text-xs text-slate-400 line-through">₹150</span>
                </div>
              </div>
              <button
                onClick={() => {
                  const prod = PRODUCTS.find(p => p.id === 'prod-5');
                  if (prod) onSelectProduct(prod);
                }}
                className="mt-4 w-full py-2 bg-slate-50 hover:bg-emerald-50 text-emerald-900 border border-slate-200 font-bold text-xs rounded-lg transition-colors"
              >
                View Product Details →
              </button>
            </div>

            {/* Offer 2: Toor Dal */}
            <div className="bg-white rounded-xl p-4 border border-amber-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-600">🔥 FRESH HARVEST</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-900 rounded">SAVE ₹15</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mt-2 font-display">
                  Toor Dal Unpolished (1 kg)
                </h4>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl font-extrabold text-emerald-900 font-display">₹165</span>
                  <span className="text-xs text-slate-400 line-through">₹180</span>
                </div>
              </div>
              <button
                onClick={() => {
                  const prod = PRODUCTS.find(p => p.id === 'prod-3');
                  if (prod) onSelectProduct(prod);
                }}
                className="mt-4 w-full py-2 bg-slate-50 hover:bg-emerald-50 text-emerald-900 border border-slate-200 font-bold text-xs rounded-lg transition-colors"
              >
                View Product Details →
              </button>
            </div>

            {/* Offer 3: Family Combo */}
            <div className="bg-white rounded-xl p-4 border border-amber-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-600">🎁 FAMILY COMBO</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-green-100 text-green-900 rounded">SAVE ₹81</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mt-2 font-display">
                  Rice (5kg) + Toor Dal + Oil
                </h4>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl font-extrabold text-emerald-900 font-display">₹899</span>
                  <span className="text-xs text-slate-400 line-through">₹980</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('offers')}
                className="mt-4 w-full py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-lg transition-colors shadow-2xs"
              >
                See Combo Details →
              </button>
            </div>

          </div>

          <p className="mt-4 text-center text-xs text-amber-900/80">
            *Special offers can be updated every week. Visit the store or WhatsApp us to verify current stock.
          </p>
        </div>
      </section>

      {/* ========================================================
          BROWSE BY CATEGORIES
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase">
              Store Layout
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-0.5">
              Shop by Department
            </h2>
          </div>
          <button
            onClick={() => onNavigate('categories')}
            className="text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-900 hover:underline"
          >
            All Categories →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => onNavigate('products', category.slug)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-emerald-600 hover:shadow-md transition-all text-center cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-1.5">
                  <span className="text-white text-[10px] font-bold tracking-wider">
                    {category.aisleNumber.split(' ')[0]}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 leading-tight">
                  {category.name}
                </h3>
                <div className="mt-1 text-[10px] text-slate-500 font-medium">
                  {category.itemCount} Items
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          FEATURED EVERYDAY ESSENTIALS (Product Cards)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase">
              Popular Items
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-0.5">
              Everyday Essentials
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Sample products and prices available at Best Price Supermarket in Racherla
            </p>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-900 hover:underline"
          >
            View Full Catalogue ({PRODUCTS.length}) →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-3.5 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Visual */}
                <div className="bg-slate-50 rounded-xl mb-3 flex items-center justify-center">
                  <ProductVisual product={product} size="sm" />
                </div>

                {/* Brand & Name */}
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                  {product.brand}
                </span>
                <h4 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-emerald-800 transition-colors">
                  {product.name}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pack: <span className="font-semibold text-slate-700">{product.packSize}</span>
                </p>

                {/* Price Display */}
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-lg font-extrabold text-slate-900 font-display tabular-nums">
                    ₹{product.price}
                  </span>
                  {product.regularPrice && (
                    <span className="text-xs text-slate-400 line-through tabular-nums">
                      ₹{product.regularPrice}
                    </span>
                  )}
                </div>

                {/* Availability Badge */}
                <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                  <span>{product.availability}</span>
                </div>
              </div>

              {/* View Details Button (No Cart / No Buy Now!) */}
              <button
                onClick={() => onSelectProduct(product)}
                className="mt-4 w-full py-2 bg-emerald-50 hover:bg-emerald-800 hover:text-white text-emerald-900 font-bold text-xs rounded-lg transition-colors border border-emerald-200/80 hover:border-transparent flex items-center justify-center gap-1"
              >
                <span>View Details</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          STORE EXPERIENCE & LOCAL CUSTOMER PHOTO SECTION
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase">
              Local Customer Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-0.5">
              A Real Neighborhood Supermarket Built for Racherla Families
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              We provide clean, organized shopping with everyday fair prices. Visit us directly or get in touch for stock enquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Image 1: Daytime Storefront */}
            <div>
              <StorePhotoVisual 
                type="storefront_day" 
                caption="Store exterior and front parking in Racherla" 
                aspect="4:3" 
              />
              <h4 className="font-bold text-sm text-slate-900 mt-2">Convenient Town Location</h4>
              <p className="text-xs text-slate-500 mt-0.5">Located on Main Bazaar Road with ample scooter and vehicle parking.</p>
            </div>

            {/* Image 2: Interior Shelves */}
            <div>
              <StorePhotoVisual 
                type="interior_shelves" 
                caption="Organized aisles & transparent shelf pricing" 
                aspect="4:3" 
              />
              <h4 className="font-bold text-sm text-slate-900 mt-2">Fresh & Organised Stock</h4>
              <p className="text-xs text-slate-500 mt-0.5">Neatly labeled shelves with clear prices, expiry verification, and genuine brands.</p>
            </div>

            {/* Image 3: Checkout Counters */}
            <div>
              <StorePhotoVisual 
                type="checkout" 
                caption="Quick barcode billing & UPI payment assistance" 
                aspect="4:3" 
              />
              <h4 className="font-bold text-sm text-slate-900 mt-2">Fast, Friendly Checkout</h4>
              <p className="text-xs text-slate-500 mt-0.5">Dual billing counters with cash & UPI payment options (GPay, PhonePe, Paytm).</p>
            </div>

          </div>

          {/* Contact Banner */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="font-bold text-sm text-slate-900">Have a question or looking for a specific product?</span>
              <p className="text-xs text-slate-500">Call our store team directly or drop a quick WhatsApp message.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors"
              >
                📞 Call {STORE_INFO.displayPhone}
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Send Online Enquiry →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Demo Disclaimer notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-center text-xs text-amber-900">
          <strong>Client Demo Notice:</strong> Sample products and prices shown for demonstration. Final product list, prices and availability will be configured after approval.
        </div>
      </section>

    </div>
  );
};
