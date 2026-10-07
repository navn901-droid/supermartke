import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES, Product } from '../data/products';
import { ProductVisual } from '../components/ProductVisual';

interface ProductsPageProps {
  onSelectProduct: (product: Product) => void;
  initialCategory?: string;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  initialCategory = 'all'
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'name'>('default');

  // Filter & Search logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.categorySlug !== selectedCategory) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(query);
        const matchBrand = item.brand.toLowerCase().includes(query);
        const matchCategory = item.category.toLowerCase().includes(query);
        const matchPack = item.packSize.toLowerCase().includes(query);
        const matchDescription = item.description.toLowerCase().includes(query);
        return matchName || matchBrand || matchCategory || matchPack || matchDescription;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const activeCategoryName = CATEGORIES.find(c => c.slug === selectedCategory)?.name || 'All Products';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Digital Catalogue
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 font-display mt-0.5">
              Supermarket Products
            </h1>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Browse available groceries, check current shelf prices, and verify item availability in our Racherla store.
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-2 rounded-lg border border-slate-200 self-start md:self-auto font-medium">
            Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> of {PRODUCTS.length} Sample Products
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="space-y-4">
        
        {/* Prominent Search Box */}
        <div className="relative max-w-2xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search groceries, brands and products (e.g. milk, shampoo, oil, rice, dal)..."
            className="w-full pl-11 pr-10 py-3.5 bg-white border-2 border-slate-200 rounded-xl text-sm focus:border-emerald-700 focus:outline-none focus:ring-3 focus:ring-emerald-700/10 placeholder-slate-400 shadow-2xs transition-all font-sans"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
            🔍
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full w-6 h-6 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          )}
        </div>

        {/* Quick Search Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs text-slate-600 pb-1">
          <span className="font-semibold text-slate-500 shrink-0">Popular:</span>
          {['Milk', 'Rice', 'Toor Dal', 'Fortune Oil', 'Shampoo', 'Biscuits', 'Atta', 'Coconut'].map((term) => (
            <button
              key={term}
              onClick={() => setSearchQuery(term)}
              className="px-2.5 py-1 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 rounded-md border border-slate-200 transition-colors whitespace-nowrap text-xs font-medium cursor-pointer"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Category Filters & Sort Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
          
          {/* Category Tabs with Photo Thumbnails */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px]">
                🛒
              </span>
              <span>All Items ({PRODUCTS.length})</span>
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  selectedCategory === cat.slug
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-200 shrink-0 border border-slate-300">
                  <img
                    src={cat.imageUrl}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>{cat.name} ({cat.itemCount})</span>
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
            <label htmlFor="sort-select" className="text-xs font-semibold text-slate-500">
              Sort by:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-emerald-700"
            >
              <option value="default">Featured / Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

        </div>

      </div>

      {/* Active Filter Tags */}
      {(selectedCategory !== 'all' || searchQuery) && (
        <div className="flex items-center gap-2 text-xs bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100 text-emerald-900">
          <span className="font-semibold">Active Filter:</span>
          {selectedCategory !== 'all' && (
            <span className="bg-white px-2 py-0.5 rounded border border-emerald-200 font-bold">
              {activeCategoryName}
            </span>
          )}
          {searchQuery && (
            <span className="bg-white px-2 py-0.5 rounded border border-emerald-200 font-bold">
              "{searchQuery}"
            </span>
          )}
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="ml-auto text-emerald-700 font-bold hover:underline"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-3">
          <span className="text-4xl">🔍</span>
          <h3 className="text-lg font-bold text-slate-900">No Products Found</h3>
          <p className="text-xs text-slate-500">
            We couldn't find any products matching your search term. Try searching for rice, oil, milk, biscuits, or shampoo.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-2 px-4 py-2 bg-emerald-800 text-white font-bold text-xs rounded-lg hover:bg-emerald-900 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-4 hover:border-emerald-600 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group relative"
            >
              <div>
                {/* Visual */}
                <div className="bg-slate-50/80 rounded-xl mb-3 flex items-center justify-center overflow-hidden border border-slate-100">
                  <ProductVisual product={product} size="md" />
                </div>

                {/* Offer badge if applicable */}
                {product.offerBadge && (
                  <div className="mb-2">
                    <span className="inline-block px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-red-600 text-white rounded">
                      {product.offerBadge}
                    </span>
                  </div>
                )}

                {/* Brand & Name */}
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                  {product.brand}
                </span>
                <h3 className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-emerald-800 transition-colors">
                  {product.name}
                </h3>
                
                {/* Pack Size */}
                <p className="text-xs text-slate-500 mt-1">
                  Pack Size: <span className="font-semibold text-slate-700">{product.packSize}</span>
                </p>

                {/* Price Display */}
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-slate-900 font-display tabular-nums">
                    ₹{product.price}
                  </span>
                  {product.regularPrice && (
                    <span className="text-xs text-slate-400 line-through tabular-nums">
                      ₹{product.regularPrice}
                    </span>
                  )}
                </div>

                {/* Availability Badge */}
                <div className="mt-2.5 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
                  <span>{product.availability} in Store</span>
                </div>
              </div>

              {/* View Details Button (No Add to Cart / No Checkout!) */}
              <button
                onClick={() => onSelectProduct(product)}
                className="mt-5 w-full py-2.5 bg-emerald-50 hover:bg-emerald-800 text-emerald-900 hover:text-white font-bold text-xs rounded-xl transition-all border border-emerald-200 hover:border-transparent flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span>View Details</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Demo Notice */}
      <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-center text-xs text-amber-900">
        Sample products and prices shown for demonstration. Final product list, prices and availability will be configured after approval.
      </div>

    </div>
  );
};
