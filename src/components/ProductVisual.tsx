import React, { useState } from 'react';
import { Product } from '../data/products';

interface ProductVisualProps {
  product: Product;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  preferPhoto?: boolean;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({ 
  product, 
  className = '', 
  size = 'md',
  preferPhoto = true 
}) => {
  const [imgError, setImgError] = useState(false);
  const heightClass = size === 'sm' ? 'h-36' : size === 'lg' ? 'h-64' : 'h-48';

  const renderVisual = () => {
    switch (product.id) {
      // 1. Aashirvaad Atta
      case 'prod-1':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FFFBEB" />
            {/* Bag outline */}
            <path d="M50 45 L150 45 L142 165 L58 165 Z" fill="#D97706" stroke="#92400E" strokeWidth="3" />
            <path d="M48 45 C48 38 152 38 152 45 L150 52 L50 52 Z" fill="#B45309" />
            {/* Sewn top thread */}
            <path d="M50 48 L150 48" stroke="#FEF3C7" strokeWidth="2" strokeDasharray="4 3" />
            {/* Yellow label center */}
            <rect x="62" y="65" width="76" height="75" rx="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
            {/* Brand text & Wheat stalks */}
            <circle cx="100" cy="85" r="14" fill="#B45309" />
            <path d="M96 82 L100 78 L104 82 L100 87 Z" fill="#FEF3C7" />
            <path d="M93 86 L100 82 L107 86 L100 91 Z" fill="#FEF3C7" />
            <text x="100" y="110" textAnchor="middle" fill="#78350F" fontSize="11" fontWeight="bold" fontFamily="sans-serif">AASHIRVAAD</text>
            <text x="100" y="122" textAnchor="middle" fill="#92400E" fontSize="9" fontWeight="600" fontFamily="sans-serif">SHUDH CHAKKI</text>
            <text x="100" y="132" textAnchor="middle" fill="#B45309" fontSize="8" fontWeight="bold" fontFamily="sans-serif">ATTA • 5 KG</text>
            {/* 100% Whole Wheat Badge */}
            <rect x="74" y="145" width="52" height="12" rx="4" fill="#15803D" />
            <text x="100" y="154" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">100% WHEAT</text>
          </svg>
        );

      // 2. India Gate Basmati Rice
      case 'prod-2':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#EFF6FF" />
            {/* Bag outline */}
            <path d="M55 42 L145 42 L138 168 L62 168 Z" fill="#1E3A8A" stroke="#172554" strokeWidth="3" />
            <path d="M52 42 C52 35 148 35 148 42 L145 50 L55 50 Z" fill="#1E40AF" />
            {/* Golden Header Band */}
            <rect x="56" y="52" width="88" height="20" fill="#D97706" />
            <text x="100" y="65" textAnchor="middle" fill="#FEF3C7" fontSize="8" fontWeight="bold">AGED BASMATI</text>
            {/* White royal crest plaque */}
            <rect x="66" y="78" width="68" height="66" rx="6" fill="#FFFFFF" stroke="#FBBF24" strokeWidth="1.5" />
            <path d="M92 90 L100 84 L108 90 L105 100 L95 100 Z" fill="#1E3A8A" />
            <text x="100" y="112" textAnchor="middle" fill="#1E3A8A" fontSize="9" fontWeight="bold">INDIA GATE</text>
            <text x="100" y="123" textAnchor="middle" fill="#D97706" fontSize="8" fontWeight="600">PREMIUM RICE</text>
            <text x="100" y="134" textAnchor="middle" fill="#475569" fontSize="7">LONG GRAIN 5 KG</text>
            {/* Rice grains pattern */}
            <ellipse cx="85" cy="155" rx="5" ry="1.5" fill="#FEF08A" transform="rotate(-30 85 155)" />
            <ellipse cx="100" cy="155" rx="6" ry="1.5" fill="#FEF08A" />
            <ellipse cx="115" cy="155" rx="5" ry="1.5" fill="#FEF08A" transform="rotate(30 115 155)" />
          </svg>
        );

      // 3. Toor Dal
      case 'prod-3':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FEF9C3" />
            {/* Clear grocery pouch with golden lentils visible */}
            <path d="M60 45 L140 45 L134 165 L66 165 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" />
            {/* Plastic seal header */}
            <rect x="58" y="38" width="84" height="14" rx="3" fill="#EAB308" />
            <circle cx="100" cy="45" r="3" fill="#FEF08A" />
            {/* Yellow Dal Lentils Pattern */}
            <g fill="#EAB308" opacity="0.8">
              <circle cx="80" cy="70" r="4" /><circle cx="95" cy="68" r="4.5" /><circle cx="112" cy="72" r="4" />
              <circle cx="75" cy="85" r="4" /><circle cx="90" cy="88" r="4.5" /><circle cx="108" cy="85" r="4.5" /><circle cx="122" cy="86" r="4" />
              <circle cx="82" cy="102" r="4.5" /><circle cx="100" cy="104" r="5" /><circle cx="118" cy="101" r="4.5" />
              <circle cx="74" cy="118" r="4" /><circle cx="92" cy="120" r="4.5" /><circle cx="110" cy="119" r="4" /><circle cx="125" cy="117" r="4" />
              <circle cx="85" cy="135" r="4.5" /><circle cx="102" cy="136" r="5" /><circle cx="116" cy="134" r="4.5" />
              <circle cx="76" cy="150" r="4" /><circle cx="95" cy="152" r="4.5" /><circle cx="112" cy="150" r="4" />
            </g>
            {/* Center Label Plaque */}
            <rect x="70" y="90" width="60" height="42" rx="6" fill="#FFFFFF" stroke="#854D0E" strokeWidth="1.5" />
            <text x="100" y="105" textAnchor="middle" fill="#854D0E" fontSize="10" fontWeight="bold">TOOR DAL</text>
            <text x="100" y="116" textAnchor="middle" fill="#A16207" fontSize="8" fontWeight="600">UNPOLISHED</text>
            <text x="100" y="125" textAnchor="middle" fill="#15803D" fontSize="7" fontWeight="bold">NET: 1 KG</text>
          </svg>
        );

      // 4. Tata Salt
      case 'prod-4':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FFF7ED" />
            {/* Pouch */}
            <path d="M58 45 L142 45 L136 165 L64 165 Z" fill="#EA580C" stroke="#C2410C" strokeWidth="2.5" />
            <path d="M58 45 L142 45 L140 60 L60 60 Z" fill="#9A3412" />
            {/* Diagonal White waves */}
            <path d="M59 90 Q100 80 141 95 L139 125 Q100 110 61 125 Z" fill="#FFFFFF" />
            {/* Blue Banner */}
            <rect x="68" y="94" width="64" height="24" rx="4" fill="#0284C7" />
            <text x="100" y="105" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" letterSpacing="0.05em">TATA</text>
            <text x="100" y="115" textAnchor="middle" fill="#FEF08A" fontSize="8" fontWeight="bold">SALT</text>
            <text x="100" y="145" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="600">DESH KA NAMAK</text>
            <text x="100" y="156" textAnchor="middle" fill="#FFEDD5" fontSize="7">IODISED • 1 KG</text>
          </svg>
        );

      // 5. Fortune Sunflower Oil
      case 'prod-5':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FFFBEB" />
            {/* Oil bottle cap & neck */}
            <rect x="91" y="28" width="18" height="12" rx="2" fill="#EAB308" stroke="#CA8A04" strokeWidth="1.5" />
            <path d="M88 40 L112 40 L110 55 L90 55 Z" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
            {/* Bottle body */}
            <path d="M72 65 C72 55 88 55 90 55 L110 55 C112 55 128 55 128 65 L124 165 C124 168 120 170 115 170 L85 170 C80 170 76 168 76 165 Z" fill="#FEF08A" stroke="#EAB308" strokeWidth="2.5" />
            {/* Golden Oil Fluid */}
            <path d="M78 80 L122 80 L120 162 L80 162 Z" fill="#FBBF24" opacity="0.8" />
            {/* Sunflower Label */}
            <rect x="76" y="90" width="48" height="52" rx="4" fill="#FFFFFF" stroke="#D97706" strokeWidth="1" />
            {/* Sunflower Graphic */}
            <circle cx="100" cy="103" r="4" fill="#78350F" />
            <circle cx="100" cy="95" r="2.5" fill="#F59E0B" />
            <circle cx="100" cy="111" r="2.5" fill="#F59E0B" />
            <circle cx="92" cy="103" r="2.5" fill="#F59E0B" />
            <circle cx="108" cy="103" r="2.5" fill="#F59E0B" />
            <text x="100" y="122" textAnchor="middle" fill="#B45309" fontSize="8" fontWeight="bold">FORTUNE</text>
            <text x="100" y="131" textAnchor="middle" fill="#D97706" fontSize="6.5" fontWeight="600">SUNFLOWER</text>
            <text x="100" y="138" textAnchor="middle" fill="#15803D" fontSize="6">1 LITRE</text>
          </svg>
        );

      // 6. Sugar
      case 'prod-6':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#F8FAFC" />
            {/* Clear packet with sugar crystals */}
            <path d="M60 48 L140 48 L134 165 L66 165 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2.5" />
            <rect x="58" y="40" width="84" height="14" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
            {/* Crystal sparkling dots */}
            <g fill="#93C5FD" opacity="0.6">
              <rect x="75" y="70" width="5" height="5" transform="rotate(45 75 70)" />
              <rect x="105" y="75" width="6" height="6" transform="rotate(45 105 75)" />
              <rect x="120" y="90" width="5" height="5" transform="rotate(45 120 90)" />
              <rect x="80" y="135" width="5" height="5" transform="rotate(45 80 135)" />
              <rect x="115" y="140" width="6" height="6" transform="rotate(45 115 140)" />
            </g>
            {/* Center label */}
            <rect x="72" y="92" width="56" height="38" rx="6" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
            <text x="100" y="108" textAnchor="middle" fill="#1E293B" fontSize="10" fontWeight="bold">SUGAR</text>
            <text x="100" y="119" textAnchor="middle" fill="#0284C7" fontSize="7.5" fontWeight="600">REFINED CANE</text>
            <text x="100" y="126" textAnchor="middle" fill="#64748B" fontSize="6.5">1 KG</text>
          </svg>
        );

      // 7. Heritage Milk
      case 'prod-7':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#F0F9FF" />
            {/* Fresh Milk Pouch */}
            <path d="M55 45 L145 45 C150 70 152 135 142 165 L58 165 C48 135 50 70 55 45 Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" />
            {/* Pouch Seams */}
            <rect x="53" y="42" width="94" height="6" fill="#0284C7" />
            <rect x="56" y="162" width="88" height="6" fill="#0284C7" />
            {/* Blue waves brand graphics */}
            <path d="M52 85 Q100 70 148 85 L146 115 Q100 130 54 115 Z" fill="#0284C7" />
            <text x="100" y="99" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" letterSpacing="0.05em">HERITAGE</text>
            <text x="100" y="110" textAnchor="middle" fill="#FEF08A" fontSize="7.5" fontWeight="bold">STANDARDISED MILK</text>
            <circle cx="100" cy="135" r="10" fill="#E0F2FE" />
            <text x="100" y="139" textAnchor="middle" fill="#0369A1" fontSize="9" fontWeight="bold">1 L</text>
            <text x="100" y="153" textAnchor="middle" fill="#0284C7" fontSize="7" fontWeight="600">PASTEURISED</text>
          </svg>
        );

      // 8. Fresh Curd
      case 'prod-8':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#F8FAFC" />
            {/* Curd tub or pouch */}
            <ellipse cx="100" cy="65" rx="42" ry="12" fill="#E2E8F0" stroke="#0284C7" strokeWidth="2" />
            <path d="M58 65 L68 150 C68 158 132 158 132 150 L142 65 Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
            <ellipse cx="100" cy="148" rx="32" ry="8" fill="#F1F5F9" />
            {/* Green and blue label */}
            <rect x="70" y="85" width="60" height="42" rx="4" fill="#0284C7" />
            <text x="100" y="100" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">FRESH CURD</text>
            <text x="100" y="112" textAnchor="middle" fill="#BAE6FD" fontSize="8" fontWeight="600">CREAMY & TASTY</text>
            <text x="100" y="122" textAnchor="middle" fill="#FEF08A" fontSize="7.5" fontWeight="bold">500 g</text>
          </svg>
        );

      // 9. Amul Butter
      case 'prod-9':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FEFCE8" />
            {/* Amul carton box */}
            <rect x="52" y="60" width="96" height="80" rx="6" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2.5" />
            <path d="M52 60 L70 45 L166 45 L148 60 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
            <path d="M148 60 L166 45 L166 125 L148 140 Z" fill="#EAB308" stroke="#CA8A04" strokeWidth="2" />
            {/* Red iconic Amul banner */}
            <rect x="58" y="70" width="84" height="24" rx="3" fill="#DC2626" />
            <text x="100" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="serif">Amul</text>
            <text x="100" y="106" textAnchor="middle" fill="#854D0E" fontSize="9" fontWeight="bold">PASTEURISED BUTTER</text>
            <text x="100" y="118" textAnchor="middle" fill="#B45309" fontSize="7.5" fontWeight="600">utterly butterly delicious</text>
            <text x="100" y="132" textAnchor="middle" fill="#15803D" fontSize="8" fontWeight="bold">100 g</text>
          </svg>
        );

      // 10. Clinic Plus Shampoo
      case 'prod-10':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#EFF6FF" />
            {/* Bottle cap */}
            <rect x="90" y="28" width="20" height="14" rx="3" fill="#1D4ED8" />
            {/* Sleek Blue teardrop bottle */}
            <path d="M92 42 L108 42 C120 55 132 85 130 160 C130 168 120 172 100 172 C80 172 70 168 70 160 C68 85 80 55 92 42 Z" fill="#2563EB" stroke="#1E40AF" strokeWidth="2.5" />
            {/* White glossy reflection curve */}
            <path d="M78 65 Q74 110 76 155" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            {/* Label plaque */}
            <rect x="78" y="80" width="44" height="60" rx="6" fill="#FFFFFF" />
            {/* Clinic Plus Cross */}
            <path d="M100 88 L100 98 M95 93 L105 93" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
            <text x="100" y="109" textAnchor="middle" fill="#1E3A8A" fontSize="7" fontWeight="bold">CLINIC PLUS</text>
            <text x="100" y="118" textAnchor="middle" fill="#2563EB" fontSize="6" fontWeight="bold">STRONG & LONG</text>
            <text x="100" y="126" textAnchor="middle" fill="#64748B" fontSize="5.5">Milk Protein</text>
            <text x="100" y="135" textAnchor="middle" fill="#DC2626" fontSize="6.5" fontWeight="bold">180 ml</text>
          </svg>
        );

      // 11. Dove Bath Soap
      case 'prod-11':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#F8FAFC" />
            {/* Soap Box */}
            <rect x="52" y="55" width="96" height="90" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2.5" />
            {/* Golden Dove silhouette */}
            <path d="M108 80 C108 76 102 74 97 76 C94 77 91 80 87 79 C85 78 86 82 89 83 C94 85 99 87 103 85 C107 83 108 82 108 80 Z" fill="#D97706" />
            <text x="100" y="102" textAnchor="middle" fill="#0284C7" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Dove</text>
            <text x="100" y="116" textAnchor="middle" fill="#64748B" fontSize="8" fontWeight="600">beauty bathing bar</text>
            {/* 1/4 Moisturising cream badge */}
            <circle cx="100" cy="130" r="8" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1" />
            <text x="100" y="133" textAnchor="middle" fill="#0284C7" fontSize="6" fontWeight="bold">1/4</text>
            <text x="100" y="142" textAnchor="middle" fill="#475569" fontSize="6">100 g</text>
          </svg>
        );

      // 12. Colgate Toothpaste
      case 'prod-12':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FEF2F2" />
            {/* Colgate carton lying diagonally/horizontally */}
            <g transform="rotate(-15 100 100)">
              <rect x="30" y="75" width="140" height="50" rx="5" fill="#DC2626" stroke="#991B1B" strokeWidth="2.5" />
              {/* White curve swoop */}
              <path d="M30 110 Q90 90 170 115 L170 125 L30 125 Z" fill="#FFFFFF" />
              <text x="95" y="100" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontStyle="italic" letterSpacing="0.05em">Colgate</text>
              <text x="95" y="112" textAnchor="middle" fill="#DC2626" fontSize="7" fontWeight="bold">STRONG TEETH</text>
              <rect x="145" y="80" width="20" height="12" rx="2" fill="#FBBF24" />
              <text x="155" y="88" textAnchor="middle" fill="#78350F" fontSize="6" fontWeight="bold">150g</text>
            </g>
          </svg>
        );

      // 13. Parachute Coconut Oil
      case 'prod-13':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#F0FDF4" />
            {/* Royal Blue Bottle with Flip Top */}
            <rect x="91" y="28" width="18" height="12" rx="2" fill="#1D4ED8" stroke="#1E40AF" strokeWidth="1.5" />
            <path d="M88 40 L112 40 L118 60 L82 60 Z" fill="#1E40AF" />
            <path d="M80 60 C80 60 70 75 70 145 C70 162 78 170 100 170 C122 170 130 162 130 145 C130 75 120 60 120 60 Z" fill="#1D4ED8" stroke="#1E3A8A" strokeWidth="2.5" />
            {/* Green Palm tree & Coconut logo */}
            <circle cx="100" cy="98" r="18" fill="#2563EB" stroke="#60A5FA" strokeWidth="1.5" />
            <path d="M100 95 L95 106 M100 95 L105 106 M96 98 L104 98" stroke="#FDE047" strokeWidth="1.5" />
            <text x="100" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">Parachute</text>
            <text x="100" y="136" textAnchor="middle" fill="#93C5FD" fontSize="7" fontWeight="bold">100% PURE</text>
            <text x="100" y="145" textAnchor="middle" fill="#FDE047" fontSize="6.5">COCONUT OIL</text>
            <text x="100" y="157" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">200 ml</text>
          </svg>
        );

      // 14. Surf Excel
      case 'prod-14':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#ECFDF5" />
            {/* Detergent pouch bag */}
            <path d="M52 45 L148 45 L140 168 L60 168 Z" fill="#047857" stroke="#065F46" strokeWidth="3" />
            {/* Colorful stain splash */}
            <path d="M100 65 L108 55 L118 68 L130 62 L124 75 L135 85 L120 88 L122 102 L110 95 L100 108 L95 95 L80 100 L85 88 L72 82 L84 72 L76 62 L90 68 Z" fill="#F97316" />
            <path d="M100 70 L105 62 L112 72 L120 68 L116 78 L124 85 L112 88 L114 98 L105 92 L98 102 L94 92 L84 96 L88 86 L78 82 L86 74 L80 66 L92 70 Z" fill="#EAB308" />
            {/* Brand text */}
            <rect x="62" y="98" width="76" height="34" rx="4" fill="#FFFFFF" stroke="#047857" strokeWidth="1.5" />
            <text x="100" y="112" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold">surf</text>
            <text x="100" y="125" textAnchor="middle" fill="#EA580C" fontSize="10" fontWeight="bold">excel</text>
            <text x="100" y="148" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">EASY WASH • 1 KG</text>
          </svg>
        );

      // 15. Vim Dishwash
      case 'prod-15':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FEF9C3" />
            {/* Green Dishwash bottle with pull cap */}
            <rect x="92" y="26" width="16" height="12" rx="2" fill="#EAB308" />
            <path d="M86 38 L114 38 L112 55 L88 55 Z" fill="#65A30D" />
            <path d="M80 55 C70 70 70 145 74 165 C74 170 82 172 100 172 C118 172 126 170 126 165 C130 145 130 70 120 55 Z" fill="#65A30D" stroke="#4D7C0F" strokeWidth="2.5" />
            {/* Yellow lemon slice graphic & Vim brand */}
            <circle cx="100" cy="100" r="20" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
            <text x="100" y="98" textAnchor="middle" fill="#15803D" fontSize="13" fontWeight="bold">Vim</text>
            <text x="100" y="108" textAnchor="middle" fill="#854D0E" fontSize="7" fontWeight="bold">GEL</text>
            <text x="100" y="132" textAnchor="middle" fill="#FEF08A" fontSize="8" fontWeight="bold">LEMON POWER</text>
            <text x="100" y="145" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="600">500 ml</text>
          </svg>
        );

      // 16. Harpic Toilet Cleaner
      case 'prod-16':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#EFF6FF" />
            {/* Bent neck bottle */}
            <path d="M102 24 L114 28 L110 38 L98 34 Z" fill="#DC2626" />
            <path d="M98 34 L110 38 C115 48 118 58 114 68 L86 68 C80 55 85 42 98 34 Z" fill="#1E40AF" />
            {/* Blue bottle body */}
            <path d="M80 68 L120 68 C126 80 128 150 122 168 C120 172 110 174 100 174 C90 174 80 172 78 168 C72 150 74 80 80 68 Z" fill="#1E40AF" stroke="#172554" strokeWidth="2.5" />
            {/* Red & Yellow Target / Brand label */}
            <rect x="80" y="88" width="40" height="50" rx="4" fill="#DC2626" stroke="#FEF08A" strokeWidth="1" />
            <text x="100" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">HARPIC</text>
            <text x="100" y="115" textAnchor="middle" fill="#FEF08A" fontSize="7" fontWeight="bold">POWER PLUS</text>
            <text x="100" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="6">10X MAX</text>
            <text x="100" y="152" textAnchor="middle" fill="#BAE6FD" fontSize="7.5" fontWeight="bold">500 ml</text>
          </svg>
        );

      // 17. Parle-G Biscuits
      case 'prod-17':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FEFCE8" />
            {/* Iconic Yellow wrapper */}
            <rect x="42" y="60" width="116" height="80" rx="6" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
            {/* Red & White striping */}
            <rect x="42" y="70" width="116" height="12" fill="#FFFFFF" />
            <rect x="42" y="82" width="116" height="4" fill="#DC2626" />
            {/* Biscuit representation */}
            <rect x="52" y="94" width="38" height="34" rx="3" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
            <text x="71" y="115" textAnchor="middle" fill="#FEF3C7" fontSize="10" fontWeight="bold">G</text>
            {/* Parle-G brand */}
            <text x="118" y="110" textAnchor="middle" fill="#DC2626" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Parle-G</text>
            <text x="118" y="122" textAnchor="middle" fill="#78350F" fontSize="7.5" fontWeight="bold">GLUCOSE BISCUITS</text>
            <text x="118" y="132" textAnchor="middle" fill="#15803D" fontSize="8" fontWeight="bold">800 g PACK</text>
          </svg>
        );

      // 18. Lay's Chips
      case 'prod-18':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FEF08A" />
            {/* Yellow Pillow Pouch */}
            <path d="M50 48 C50 40 150 40 150 48 L142 165 C142 172 58 172 58 165 Z" fill="#FACC15" stroke="#D97706" strokeWidth="2.5" />
            {/* Zig-zag crimp top and bottom */}
            <path d="M50 48 L150 48" stroke="#CA8A04" strokeWidth="3" strokeDasharray="3 2" />
            <path d="M58 165 L142 165" stroke="#CA8A04" strokeWidth="3" strokeDasharray="3 2" />
            {/* Iconic Red & Yellow Lay's Banner */}
            <circle cx="100" cy="100" r="26" fill="#EAB308" stroke="#CA8A04" strokeWidth="1.5" />
            <path d="M68 94 Q100 85 132 94 L130 108 Q100 118 70 108 Z" fill="#DC2626" />
            <text x="100" y="105" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontStyle="italic">Lay's</text>
            <text x="100" y="135" textAnchor="middle" fill="#78350F" fontSize="8" fontWeight="bold">CLASSIC SALTED</text>
            <text x="100" y="148" textAnchor="middle" fill="#1E3A8A" fontSize="7.5" fontWeight="bold">50 g • ₹20</text>
          </svg>
        );

      // 19. Tata Tea
      case 'prod-19':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#F0FDF4" />
            {/* Green tea carton box */}
            <rect x="52" y="48" width="96" height="115" rx="6" fill="#15803D" stroke="#14532D" strokeWidth="2.5" />
            {/* Golden Header */}
            <rect x="56" y="52" width="88" height="26" rx="3" fill="#D97706" />
            <text x="100" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="bold" letterSpacing="0.05em">TATA TEA</text>
            <text x="100" y="74" textAnchor="middle" fill="#FEF08A" fontSize="7" fontWeight="bold">PREMIUM</text>
            {/* Tea leaves graphic */}
            <path d="M100 95 C90 85 80 105 100 115 C120 105 110 85 100 95 Z" fill="#4ADE80" stroke="#166534" strokeWidth="1" />
            <path d="M100 95 L100 115" stroke="#166534" strokeWidth="1" />
            <text x="100" y="132" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="bold">DESH KI CHAI</text>
            <text x="100" y="145" textAnchor="middle" fill="#BBF7D0" fontSize="7.5">LEAF TEA • 250 g</text>
          </svg>
        );

      // 20. Coca-Cola
      case 'prod-20':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FEF2F2" />
            {/* Red cap */}
            <rect x="92" y="24" width="16" height="12" rx="2" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
            {/* Contoured bottle */}
            <path d="M88 36 L112 36 L108 55 C118 68 126 85 120 115 C116 130 122 155 122 168 C122 172 115 174 100 174 C85 174 78 172 78 168 C78 155 84 130 80 115 C74 85 82 68 92 55 Z" fill="#1C1917" stroke="#000000" strokeWidth="2.5" />
            {/* Red Label */}
            <rect x="76" y="90" width="48" height="34" rx="4" fill="#DC2626" />
            <text x="100" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontStyle="italic" fontFamily="serif">Coca-Cola</text>
            <text x="100" y="117" textAnchor="middle" fill="#FEF2F2" fontSize="6.5" fontWeight="bold">ORIGINAL TASTE</text>
            <text x="100" y="145" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="bold">750 ml</text>
          </svg>
        );

      // 21. Fresh Bananas
      case 'prod-21':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FEF9C3" />
            {/* Natural bunch of yellow fresh bananas */}
            <g transform="translate(10, 10)">
              {/* Green stalk */}
              <path d="M90 40 C95 35 105 35 110 40 L106 55 L94 55 Z" fill="#15803D" stroke="#166534" strokeWidth="1.5" />
              {/* Banana 1 */}
              <path d="M96 52 C70 70 50 110 70 145 C75 140 85 115 102 75 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
              {/* Banana 2 (center) */}
              <path d="M100 52 C90 80 85 125 105 152 C115 145 120 110 106 70 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
              {/* Banana 3 (right) */}
              <path d="M104 52 C115 75 130 110 120 145 C128 135 132 100 108 65 Z" fill="#EAB308" stroke="#CA8A04" strokeWidth="2" />
              {/* Brown tips */}
              <circle cx="68" cy="144" r="3" fill="#78350F" />
              <circle cx="104" cy="151" r="3" fill="#78350F" />
              <circle cx="120" cy="144" r="3" fill="#78350F" />
            </g>
            <rect x="68" y="152" width="64" height="20" rx="4" fill="#FFFFFF" stroke="#CA8A04" strokeWidth="1" />
            <text x="100" y="165" textAnchor="middle" fill="#854D0E" fontSize="8" fontWeight="bold">FARM FRESH • 1 KG</text>
          </svg>
        );

      // 22. Fresh Coconut
      case 'prod-22':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FDF4FF" />
            {/* Coconut with fibrous shell and green tuft */}
            <circle cx="100" cy="100" r="48" fill="#78350F" stroke="#451A03" strokeWidth="3" />
            {/* Texture fibres */}
            <path d="M85 65 Q80 100 90 135" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
            <path d="M100 60 Q105 100 98 142" stroke="#92400E" strokeWidth="2" strokeLinecap="round" />
            <path d="M115 65 Q120 100 110 135" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
            {/* 3 Coconut Eyes */}
            <circle cx="92" cy="85" r="4" fill="#292524" />
            <circle cx="108" cy="85" r="4" fill="#292524" />
            <circle cx="100" cy="95" r="3.5" fill="#292524" />
            {/* Green Pooja Leaf topper */}
            <path d="M96 52 C90 40 85 30 75 32 C82 42 90 48 96 52 Z" fill="#15803D" />
            <path d="M104 52 C110 40 115 30 125 32 C118 42 110 48 104 52 Z" fill="#15803D" />
            <rect x="65" y="154" width="70" height="20" rx="4" fill="#FFFFFF" stroke="#78350F" strokeWidth="1" />
            <text x="100" y="167" textAnchor="middle" fill="#78350F" fontSize="8" fontWeight="bold">POOJA COCONUT • 1 PC</text>
          </svg>
        );

      // 23. Johnson's Baby Powder
      case 'prod-23':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FDF2F8" />
            {/* White baby powder can */}
            <rect x="88" y="28" width="24" height="14" rx="4" fill="#F43F5E" />
            <path d="M84 42 L116 42 C125 55 128 75 128 155 C128 164 120 168 100 168 C80 168 72 164 72 155 C72 75 75 55 84 42 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2.5" />
            {/* Pink ribbon design */}
            <path d="M72 85 Q100 75 128 85 L128 95 Q100 85 72 95 Z" fill="#FDA4AF" />
            <text x="100" y="112" textAnchor="middle" fill="#BE123C" fontSize="10" fontWeight="bold" fontFamily="serif">Johnson's</text>
            <text x="100" y="122" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="bold">baby powder</text>
            <text x="100" y="132" textAnchor="middle" fill="#0284C7" fontSize="6.5">Clinically Proven Mild</text>
            <text x="100" y="148" textAnchor="middle" fill="#E11D48" fontSize="8" fontWeight="bold">200 g</text>
          </svg>
        );

      // 24. Pampers
      case 'prod-24':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#ECFEFF" />
            {/* Pampers Teal Pouch with handles */}
            <path d="M52 48 L148 48 L142 165 L58 165 Z" fill="#0891B2" stroke="#0E7490" strokeWidth="3" />
            {/* Handle holes */}
            <ellipse cx="100" cy="42" rx="18" ry="6" fill="#A5F3FC" stroke="#0891B2" strokeWidth="2" />
            {/* Yellow heart shape / Pampers yellow circle */}
            <circle cx="100" cy="90" r="24" fill="#FACC15" />
            <text x="100" y="96" textAnchor="middle" fill="#0E7490" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Pampers</text>
            <text x="100" y="122" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">ALL ROUND PROTECTION</text>
            <text x="100" y="134" textAnchor="middle" fill="#FEF08A" fontSize="7.5" fontWeight="bold">PANTS • SMALL PACK</text>
            <rect x="75" y="144" width="50" height="14" rx="4" fill="#FFFFFF" />
            <text x="100" y="154" textAnchor="middle" fill="#0891B2" fontSize="7.5" fontWeight="bold">12H DRY</text>
          </svg>
        );

      default:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 rounded-xl p-4 text-slate-500">
            <span className="text-2xl mb-1">🛒</span>
            <span className="text-xs font-semibold text-center">{product.name}</span>
          </div>
        );
    }
  };

  if (preferPhoto && !imgError && product.imageUrl) {
    return (
      <div className={`relative w-full ${heightClass} rounded-xl overflow-hidden bg-slate-100 group/img ${className}`}>
        <img 
          src={product.imageUrl} 
          alt={`${product.name} - ${product.brand}`} 
          referrerPolicy="no-referrer" 
          loading="lazy"
          onError={() => setImgError(true)} 
          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
        />
        {/* Subtle pack size overlay */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
          <span className="px-2 py-0.5 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[10px] font-bold">
            {product.brand}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-emerald-800/90 backdrop-blur-xs text-emerald-100 text-[10px] font-semibold">
            {product.packSize}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center p-3 rounded-xl transition-transform duration-200 group-hover:scale-102 ${heightClass} ${className}`}>
      {renderVisual()}
    </div>
  );
};
