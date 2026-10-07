import React from 'react';
import { CATEGORIES, PRODUCTS, Product } from '../data/products';
import { PageId } from '../components/Navbar';
import { ProductVisual } from '../components/ProductVisual';

interface CategoriesPageProps {
  onNavigate: (page: PageId, categoryFilter?: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  onNavigate,
  onSelectProduct
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
          Supermarket Floorplan
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 font-display mt-0.5">
          Store Departments & Aisles
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
          Explore all 7 sections of Best Price Supermarket in Racherla. Everything is neatly categorized with clear aisle markings so you find your daily essentials in minutes.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="space-y-12">
        {CATEGORIES.map((cat, index) => {
          const categoryProducts = PRODUCTS.filter(p => p.categorySlug === cat.slug);

          return (
            <div 
              key={cat.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-emerald-600 transition-colors"
            >
              {/* Rich Photographic Department Banner */}
              <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden bg-slate-900">
                <img 
                  src={cat.imageUrl} 
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                />
                {/* Measured Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
                      Department 0{index + 1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-500 text-emerald-950">
                      📍 {cat.aisleNumber}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400 text-amber-950">
                      {categoryProducts.length} Items Available
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {cat.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-emerald-200 font-medium mt-1">
                    {cat.bannerTagline}
                  </p>
                </div>
              </div>

              {/* Department Details Content */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Description & Subcategories Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-6 border-b border-slate-100">
                  <div className="lg:col-span-7 space-y-3">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Subcategories tags */}
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        Sections in this Aisle:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.subcategories.map(sub => (
                          <span 
                            key={sub} 
                            className="px-2.5 py-1 bg-slate-100 rounded-md text-xs font-semibold text-slate-700 border border-slate-200"
                          >
                            ✓ {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Trusted Brands Column */}
                  <div className="lg:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                    <span className="font-bold text-xs text-slate-800 block">
                      Trusted In-Store Brands:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.popularBrands.map(brand => (
                        <span key={brand} className="bg-white px-2.5 py-1 rounded-md border border-slate-200 text-xs font-bold text-emerald-800">
                          {brand}
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-slate-500 pt-1">
                      Always 100% genuine sealed packs received directly from certified distributor channels.
                    </p>
                  </div>
                </div>

                {/* Sample Products Grid with Unsplash photos */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Featured Products in this Department:
                    </h3>
                    <button
                      onClick={() => onNavigate('products', cat.slug)}
                      className="text-xs font-bold text-emerald-800 hover:text-emerald-900 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Browse All {cat.name} ({categoryProducts.length})</span>
                      <span>→</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {categoryProducts.map(product => (
                      <div
                        key={product.id}
                        onClick={() => onSelectProduct(product)}
                        className="bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-emerald-500 rounded-2xl p-3.5 transition-all cursor-pointer group flex flex-col justify-between"
                      >
                        <div>
                          {/* Image container */}
                          <div className="aspect-4/3 w-full rounded-xl overflow-hidden bg-white mb-3 border border-slate-100">
                            <ProductVisual product={product} size="sm" className="h-32" />
                          </div>

                          <span className="text-[10px] font-bold text-emerald-800 uppercase block truncate">
                            {product.brand}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate group-hover:text-emerald-800">
                            {product.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Pack: <strong className="text-slate-700">{product.packSize}</strong>
                          </p>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between">
                          <span className="text-base font-extrabold text-slate-900 font-display tabular-nums">
                            ₹{product.price}
                          </span>
                          <span className="text-[11px] font-bold text-emerald-800 group-hover:underline">
                            Details →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
