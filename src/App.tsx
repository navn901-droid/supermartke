/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { OffersPage } from './pages/OffersPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { OurStorePage } from './pages/OurStorePage';
import { ContactPage } from './pages/ContactPage';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { Product } from './data/products';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [prefilledEnquiryProduct, setPrefilledEnquiryProduct] = useState<string>('');

  const handleNavigate = (page: PageId, categoryFilter?: string) => {
    if (categoryFilter) {
      setSelectedCategoryFilter(categoryFilter);
    } else if (page === 'products' && !categoryFilter) {
      setSelectedCategoryFilter('all');
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleEnquireFromProduct = (productName: string) => {
    setPrefilledEnquiryProduct(productName);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-emerald-200 selection:text-emerald-900 font-sans">
      
      {/* Sticky Navigation Bar */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        selectedCategory={selectedCategoryFilter}
      />

      {/* Main Page Content Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onSelectProduct={handleSelectProduct} 
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage 
            key={selectedCategoryFilter}
            initialCategory={selectedCategoryFilter}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage === 'categories' && (
          <CategoriesPage 
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage === 'offers' && (
          <OffersPage 
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage === 'about' && (
          <AboutUsPage 
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'store' && (
          <OurStorePage />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={handleNavigate}
            prefilledProduct={prefilledEnquiryProduct}
          />
        )}
      </main>

      {/* Product Details Modal Dialog */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={handleCloseModal}
        onEnquire={handleEnquireFromProduct}
      />

      {/* Global Comprehensive Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
