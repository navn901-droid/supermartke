import React, { useState } from 'react';
import { STORE_INFO } from '../data/products';
import { PageId } from '../components/Navbar';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  prefilledProduct?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  prefilledProduct = ''
}) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [enquiryType, setEnquiryType] = useState('Product Availability');
  const [productName, setProductName] = useState(prefilledProduct);
  const [message, setMessage] = useState('');
  
  // Submission & feedback states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Form validation
    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!mobileNumber.trim() || mobileNumber.replace(/\D/g, '').length < 10) {
      setFormError('Please provide a valid 10-digit mobile or WhatsApp number.');
      return;
    }
    if (!message.trim()) {
      setFormError('Please enter your enquiry message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleResetForm = () => {
    setFullName('');
    setMobileNumber('');
    setEmail('');
    setEnquiryType('Product Availability');
    setProductName('');
    setMessage('');
    setSubmitted(false);
    setFormError('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
          Customer Support & Helpdesk
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 font-display mt-0.5">
          Contact Best Price Supermarket
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
          Need to confirm if a specific grocery brand is in stock? Want to check current prices or bulk festive discounts? Reach out directly to our friendly store team in Racherla.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Fast Action Cards (Call, WhatsApp, Location, Hours) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Channels */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-display">
              Direct Contact Options
            </h3>

            {/* Call */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 block">Phone Support:</span>
                <span className="text-base font-bold text-slate-900">{STORE_INFO.displayPhone}</span>
              </div>
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl transition-colors shadow-2xs whitespace-nowrap"
              >
                📞 Call Now
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-emerald-900 block">WhatsApp Chat:</span>
                <span className="text-xs text-emerald-800 font-medium">Quick stock reply on mobile</span>
              </div>
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Hello Best Price Supermarket Racherla! I would like to enquire about products.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-colors shadow-2xs whitespace-nowrap"
              >
                💬 WhatsApp Us
              </a>
            </div>

            {/* Physical Store Location */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <span className="text-xs font-semibold text-slate-500 block">Store Address:</span>
              <p className="text-xs font-bold text-slate-900">
                {STORE_INFO.name}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {STORE_INFO.address.full}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('store')}
                  className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1"
                >
                  <span>📍 View Location & Directions on Map</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Working Timings */}
            <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 space-y-1 text-xs text-amber-950">
              <span className="font-bold block text-amber-900">⏰ Opening Hours:</span>
              <p>Monday – Saturday: 7:00 AM – 10:00 PM</p>
              <p>Sunday & Holidays: 7:00 AM – 10:30 PM</p>
              <p className="text-[11px] text-amber-800 italic pt-1">Open all 365 days a year</p>
            </div>

          </div>

          {/* WordPress System Explanation for Client */}
          <div className="bg-slate-100 rounded-3xl border border-slate-200 p-6 text-xs text-slate-600 space-y-2">
            <span className="font-bold text-slate-900 text-sm block">
              💡 Prototype Implementation Note
            </span>
            <p className="leading-relaxed">
              In this client demo, form submissions generate instantaneous browser confirmation. In the final WordPress website, this customer enquiry form connects directly to the supermarket owner's email, automatic WhatsApp alerts, and WordPress admin dashboard for easy management.
            </p>
          </div>

        </div>

        {/* Right Column: Customer Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
            
            {/* Form Header */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Enquiry Form
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 font-display mt-0.5">
                Have a Question?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Can't find what you're looking for? Send us an enquiry and our team will get back to you promptly.
              </p>
            </div>

            {/* Friendly Submission Success Dialog / Banner */}
            {submitted ? (
              <div className="p-6 bg-emerald-50 border-2 border-emerald-500 rounded-2xl text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto shadow-md">
                  ✓
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-emerald-950 font-display">
                    Thank you! Your enquiry has been received.
                  </h3>
                  <p className="text-sm text-emerald-800">
                    The Best Price Supermarket team will contact you shortly on <strong>{mobileNumber}</strong>.
                  </p>
                </div>
                <div className="p-3 bg-white/80 rounded-xl border border-emerald-200 text-xs text-emerald-900 text-left space-y-1">
                  <p><strong>Enquiry Summary:</strong></p>
                  <p>Type: {enquiryType} {productName ? `• Product: ${productName}` : ''}</p>
                  <p className="text-slate-600 italic">"{message}"</p>
                </div>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={handleResetForm}
                    className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                  <button
                    onClick={() => onNavigate('products')}
                    className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs rounded-xl transition-colors"
                  >
                    Return to Catalogue
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {formError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-bold rounded-lg flex items-center gap-2">
                    <span>⚠️</span>
                    <span>{formError}</span>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Reddy, Lakshmi Devi"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/10 placeholder-slate-400"
                  />
                </div>

                {/* Mobile / WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="mobileNumber" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Mobile / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="mobileNumber"
                      type="tel"
                      required
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="e.g. 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/10 placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/10 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Enquiry Type & Product Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="enquiryType" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Enquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:border-emerald-700 focus:outline-none font-medium text-slate-800"
                    >
                      <option value="Product Availability">Product Availability</option>
                      <option value="Product Price">Product Price</option>
                      <option value="Today's Offers">Today's Offers & Deals</option>
                      <option value="General Enquiry">General Store Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="productName" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Product Name <span className="text-slate-400 font-normal">(If applicable)</span>
                    </label>
                    <input
                      id="productName"
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      placeholder="e.g. Aashirvaad Atta, Heritage Milk"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/10 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you would like to ask, e.g. 'Do you have 5kg basmati rice bags in stock today?' or 'Is the Fortune oil offer still available?'"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/10 placeholder-slate-400 resize-y"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <span>→</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center">
                  *Your phone number is confidential and used solely to reply to your store query.
                </p>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
