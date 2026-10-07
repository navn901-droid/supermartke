import React from 'react';
import { Product, STORE_INFO } from '../data/products';
import { ProductVisual } from './ProductVisual';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (productName: string) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
  onEnquire
}) => {
  const [visualMode, setVisualMode] = React.useState<'photo' | 'pack'>('photo');

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Best Price Supermarket Racherla! I would like to check the current availability and price of "${product.name} (${product.packSize})".`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              {product.category}
            </span>
            <span className="text-xs text-slate-500">·</span>
            <span className="text-xs text-slate-500 font-medium">📍 {product.aisle}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 transition-colors"
            aria-label="Close details"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Visual Showcase with Mode Toggle */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col items-center justify-center">
            {/* Toggle buttons */}
            <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-lg mb-3 self-end text-xs font-semibold">
              <button
                onClick={() => setVisualMode('photo')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  visualMode === 'photo' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                📷 Real Photo
              </button>
              <button
                onClick={() => setVisualMode('pack')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  visualMode === 'pack' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🏷️ Pack Label
              </button>
            </div>

            <div className="w-full max-w-[260px] flex items-center justify-center">
              <ProductVisual product={product} size="lg" preferPhoto={visualMode === 'photo'} />
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
              <span>Net: <strong className="text-slate-700">{product.packSize}</strong></span>
              <span>·</span>
              <span>Brand: <strong className="text-slate-700">{product.brand}</strong></span>
            </div>
          </div>

          {/* Details & Pricing */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                {product.brand}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display mt-0.5">
                {product.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Pack Size: <span className="font-semibold text-slate-700">{product.packSize}</span>
              </p>
            </div>

            {/* Price Box */}
            <div className="p-3.5 bg-emerald-50/70 border border-emerald-100 rounded-xl flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-emerald-900 font-display tabular-nums">
                ₹{product.price}
              </span>
              {product.regularPrice && (
                <>
                  <span className="text-sm text-slate-400 line-through tabular-nums">
                    ₹{product.regularPrice}
                  </span>
                  <span className="px-2 py-0.5 text-xs font-bold bg-red-600 text-white rounded">
                    Save ₹{product.regularPrice - product.price}
                  </span>
                </>
              )}
            </div>

            {/* Availability indicator */}
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="text-sm font-semibold text-emerald-800">
                {product.availability} in Store
              </span>
              <span className="text-xs text-slate-400">· Ready on shelf</span>
            </div>

            {/* Product Description */}
            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Store Location Info */}
            <div className="bg-amber-50/80 border border-amber-200/80 p-3 rounded-lg text-xs text-amber-900 space-y-1">
              <p className="font-semibold flex items-center gap-1.5">
                <span>📍 Store Shelf Location:</span>
                <span className="text-emerald-900 underline font-bold">{product.aisle}</span>
              </p>
              <p className="text-[11px] text-amber-800">
                Visit Best Price Supermarket in Racherla to purchase or contact our staff to confirm instant stock.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-slate-500 text-center sm:text-left">
            *Demo prices shown. Confirm final price at store checkout.
          </p>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onEnquire(product.name);
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold text-emerald-900 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50 transition-colors whitespace-nowrap"
            >
              📝 Send Store Enquiry
            </button>
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors whitespace-nowrap shadow-xs"
            >
              <span>💬 WhatsApp Enquiry</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
