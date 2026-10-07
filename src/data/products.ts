export interface Product {
  id: string;
  name: string;
  brand: string;
  packSize: string;
  price: number;
  regularPrice?: number;
  isOffer?: boolean;
  offerSavings?: number;
  offerPercent?: number;
  offerBadge?: string;
  availability: 'Available' | 'Low Stock' | 'In Stock';
  category: string;
  categorySlug: string;
  description: string;
  aisle: string;
  imageUrl: string;
  barcode?: string;
  colorScheme: {
    bg: string;
    accent: string;
    border: string;
  };
}

export interface CategoryInfo {
  id: string;
  name: string;
  slug: string;
  itemCount: number;
  description: string;
  bannerTagline: string;
  aisleNumber: string;
  popularBrands: string[];
  subcategories: string[];
  color: string;
  iconName: string;
  imageUrl: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'grocery-staples',
    name: 'Grocery & Staples',
    slug: 'grocery-staples',
    itemCount: 6,
    description: 'Fresh wheat atta, premium basmati rice, unpolished lentils, crystal sugar, pure cooking oils, and everyday iodised salts.',
    bannerTagline: 'Pure & Unadulterated Grains, Atta & Cooking Essentials',
    aisleNumber: 'Aisle 1 & 2',
    popularBrands: ['Aashirvaad', 'India Gate', 'Fortune', 'Tata Salt'],
    subcategories: ['Atta & Flours', 'Basmati & Daily Rice', 'Dals & Pulses', 'Edible Cooking Oils', 'Salt & Sugar'],
    color: '#166534',
    iconName: 'Wheat',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'dairy-daily-needs',
    name: 'Dairy & Daily Needs',
    slug: 'dairy-daily-needs',
    itemCount: 3,
    description: 'Chilled pasteurised milk, fresh set curd, pure table butter, and wholesome morning breakfast dairy essentials.',
    bannerTagline: 'Fresh Farm Dairy Delivered Chilled Daily by 6:30 AM',
    aisleNumber: 'Chiller Section 1',
    popularBrands: ['Heritage', 'Amul', 'Local Fresh'],
    subcategories: ['Standardized Milk', 'Creamy Thick Curd', 'Salted Table Butter', 'Breakfast Cheese'],
    color: '#0284C7',
    iconName: 'Milk',
    imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    slug: 'personal-care',
    itemCount: 4,
    description: 'Gentle family soaps, protein shampoos, cavity-fighting toothpastes, and 100% pure coconut hair oils.',
    bannerTagline: 'Daily Hygiene, Gentle Skincare & Trusted Family Wellness',
    aisleNumber: 'Aisle 3',
    popularBrands: ['Dove', 'Clinic Plus', 'Colgate', 'Parachute'],
    subcategories: ['Hair Shampoos', 'Bathing Beauty Soaps', 'Oral Dental Care', 'Hair & Body Oils'],
    color: '#7C3AED',
    iconName: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'home-care',
    name: 'Home Care',
    slug: 'home-care',
    itemCount: 3,
    description: 'Easy-wash detergent powders, concentrated lemon dishwash gels, germ-kill toilet cleaners, and surface sanitizers.',
    bannerTagline: 'Sparkling Clean Floors, Starch-Free Laundry & Kitchen Hygiene',
    aisleNumber: 'Aisle 4',
    popularBrands: ['Surf Excel', 'Vim', 'Harpic'],
    subcategories: ['Laundry Detergents', 'Dishwashing Gels', 'Toilet Cleaners', 'Floor Disinfectants'],
    color: '#059669',
    iconName: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1585670149967-b4f4da88cc9f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'snacks-beverages',
    name: 'Snacks & Beverages',
    slug: 'snacks-beverages',
    itemCount: 4,
    description: 'Crispy glucose biscuits, crunchy potato chips, premium leaf tea, and chilled sparkling cola drinks.',
    bannerTagline: 'Tea-Time Munchies, Festive Sweets & Chilled Refreshments',
    aisleNumber: 'Aisle 5',
    popularBrands: ['Parle-G', "Lay's", 'Tata Tea', 'Coca-Cola'],
    subcategories: ['Glucose & Cream Biscuits', 'Potato Chips & Namkeen', 'Aromatic Leaf Tea', 'Cold Soft Drinks'],
    color: '#D97706',
    iconName: 'Coffee',
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'fresh',
    name: 'Fresh (Fruits & Coconuts)',
    slug: 'fresh',
    itemCount: 2,
    description: 'Locally sourced fresh bananas and high-quality pooja coconuts for daily family breakfast and temple prayers. (Please note: We do not sell vegetables).',
    bannerTagline: 'Fresh Bananas & Pooja Coconuts • Note: No Vegetables in Store',
    aisleNumber: 'Front Entrance Bays',
    popularBrands: ['Daily Farm Direct', 'Local Growers'],
    subcategories: ['Farm Fresh Bananas', 'Traditional Pooja Coconuts'],
    color: '#15803D',
    iconName: 'Apple',
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'baby-care',
    name: 'Baby Care',
    slug: 'baby-care',
    itemCount: 2,
    description: 'Clinically proven mild baby talc, stretchable overnight diaper pants, and delicate infant essentials.',
    bannerTagline: 'Gentle Protection, Clinically Mild Care & Dry Comfort',
    aisleNumber: 'Aisle 6',
    popularBrands: ["Johnson's", 'Pampers'],
    subcategories: ['Gentle Baby Talc', 'All-Round Diaper Pants', 'Baby Wipes & Soap'],
    color: '#DB2777',
    iconName: 'Baby',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=85'
  }
];

export const PRODUCTS: Product[] = [
  // 1. GROCERY & STAPLES
  {
    id: 'prod-1',
    name: 'Aashirvaad Atta',
    brand: 'Aashirvaad',
    packSize: '5 kg',
    price: 320,
    availability: 'Available',
    category: 'Grocery & Staples',
    categorySlug: 'grocery-staples',
    description: '100% whole wheat flour crafted from selected heavy golden grains. Superior water absorption for softer and fluffy rotis all day.',
    aisle: 'Aisle 1 - Flour & Grains',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#FEF3C7',
      accent: '#B45309',
      border: '#FDE68A'
    }
  },
  {
    id: 'prod-2',
    name: 'India Gate Basmati Rice',
    brand: 'India Gate',
    packSize: '5 kg',
    price: 650,
    availability: 'Available',
    category: 'Grocery & Staples',
    categorySlug: 'grocery-staples',
    description: 'Aged long-grain basmati rice with distinctive pearly slender grains and rich aroma. Perfect for festive biryanis and daily pulao.',
    aisle: 'Aisle 1 - Premium Rice',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#EFF6FF',
      accent: '#1D4ED8',
      border: '#BFDBFE'
    }
  },
  {
    id: 'prod-3',
    name: 'Toor Dal',
    brand: 'Popular / Fresh Harvest',
    packSize: '1 kg',
    price: 165,
    regularPrice: 180,
    isOffer: true,
    offerSavings: 15,
    offerPercent: 8,
    offerBadge: 'Save ₹15',
    availability: 'Available',
    category: 'Grocery & Staples',
    categorySlug: 'grocery-staples',
    description: 'Naturally polished unadulterated split pigeon peas (arhar dal). Rich in protein and dietary fibre for authentic Andhra sambar and dal tadka.',
    aisle: 'Aisle 2 - Pulses & Lentils',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#FEF9C3',
      accent: '#A16207',
      border: '#FEF08A'
    }
  },
  {
    id: 'prod-4',
    name: 'Tata Salt',
    brand: 'Tata',
    packSize: '1 kg',
    price: 28,
    availability: 'Available',
    category: 'Grocery & Staples',
    categorySlug: 'grocery-staples',
    description: 'Vacuum-evaporated, iodised cooking salt ensuring mental development and pure taste in every Indian kitchen recipe.',
    aisle: 'Aisle 2 - Spices & Salt',
    imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#FFF7ED',
      accent: '#EA580C',
      border: '#FFEDD5'
    }
  },
  {
    id: 'prod-5',
    name: 'Fortune Sunflower Oil',
    brand: 'Fortune',
    packSize: '1 L',
    price: 135,
    regularPrice: 150,
    isOffer: true,
    offerSavings: 15,
    offerPercent: 10,
    offerBadge: '10% OFF',
    availability: 'Available',
    category: 'Grocery & Staples',
    categorySlug: 'grocery-staples',
    description: 'Refined sunflower cooking oil enriched with vitamins A & D. Light, clear texture that keeps food naturally tasty and heart-healthy.',
    aisle: 'Aisle 1 - Edible Oils',
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#FFFBEB',
      accent: '#D97706',
      border: '#FDE68A'
    }
  },
  {
    id: 'prod-6',
    name: 'Sugar',
    brand: 'Pure Sweet',
    packSize: '1 kg',
    price: 48,
    availability: 'Available',
    category: 'Grocery & Staples',
    categorySlug: 'grocery-staples',
    description: 'Refined crystal cane sugar with sparkling uniform sweetness. Dissolves cleanly in morning tea, coffee, and traditional Indian sweets.',
    aisle: 'Aisle 2 - Sugar & Jaggery',
    imageUrl: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#F8FAFC',
      accent: '#475569',
      border: '#E2E8F0'
    }
  },

  // 2. DAIRY & DAILY NEEDS
  {
    id: 'prod-7',
    name: 'Heritage Milk',
    brand: 'Heritage',
    packSize: '1 L',
    price: 60,
    availability: 'Available',
    category: 'Dairy & Daily Needs',
    categorySlug: 'dairy-daily-needs',
    description: 'Pasteurised, homogenised standardized milk delivered fresh every morning from trusted local dairy farms. Wholesome nutrition for the family.',
    aisle: 'Chiller 1 - Fresh Milk',
    imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#F0F9FF',
      accent: '#0284C7',
      border: '#BAE6FD'
    }
  },
  {
    id: 'prod-8',
    name: 'Fresh Curd',
    brand: 'Heritage / Dairy Craft',
    packSize: '500 g',
    price: 40,
    availability: 'Available',
    category: 'Dairy & Daily Needs',
    categorySlug: 'dairy-daily-needs',
    description: 'Thick, creamy set curd prepared from farm fresh milk with active beneficial probiotics. Ideal for cooling curd rice and raita.',
    aisle: 'Chiller 1 - Yogurt & Curd',
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#F8FAFC',
      accent: '#0369A1',
      border: '#E0F2FE'
    }
  },
  {
    id: 'prod-9',
    name: 'Amul Butter',
    brand: 'Amul',
    packSize: '100 g',
    price: 60,
    availability: 'Available',
    category: 'Dairy & Daily Needs',
    categorySlug: 'dairy-daily-needs',
    description: 'The iconic Utterly Butterly Delicious salted pasteurised butter. Melts deliciously on hot dosas, parathas, and breakfast toasts.',
    aisle: 'Chiller 2 - Butter & Cheese',
    imageUrl: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#FEFCE8',
      accent: '#CA8A04',
      border: '#FEF08A'
    }
  },

  // 3. PERSONAL CARE
  {
    id: 'prod-10',
    name: 'Clinic Plus Shampoo',
    brand: 'Clinic Plus',
    packSize: '180 ml',
    price: 129,
    regularPrice: 150,
    isOffer: true,
    offerSavings: 21,
    offerPercent: 14,
    offerBadge: 'Save ₹21',
    availability: 'Available',
    category: 'Personal Care',
    categorySlug: 'personal-care',
    description: 'Strong & Long Health shampoo enriched with milk protein and multivitamin complex that nourishes hair from root to tip.',
    aisle: 'Aisle 3 - Hair Care',
    imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#EFF6FF',
      accent: '#2563EB',
      border: '#BFDBFE'
    }
  },
  {
    id: 'prod-11',
    name: 'Dove Bath Soap',
    brand: 'Dove',
    packSize: '100 g',
    price: 65,
    availability: 'Available',
    category: 'Personal Care',
    categorySlug: 'personal-care',
    description: 'Classic White Beauty Bar with 1/4th moisturising cream. Gently cleanses while keeping skin soft, smooth, and radiant.',
    aisle: 'Aisle 3 - Soaps & Body Wash',
    imageUrl: 'https://images.unsplash.com/photo-1607006314144-8cb3b8026117?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#F8FAFC',
      accent: '#0284C7',
      border: '#E2E8F0'
    }
  },
  {
    id: 'prod-12',
    name: 'Colgate Toothpaste',
    brand: 'Colgate',
    packSize: '150 g',
    price: 120,
    availability: 'Available',
    category: 'Personal Care',
    categorySlug: 'personal-care',
    description: 'Strong Teeth dental cream with Amino Shakti and calcium booster formula for all-round cavity protection and fresh breath.',
    aisle: 'Aisle 3 - Oral Hygiene',
    imageUrl: 'https://images.unsplash.com/photo-1559591937-e1032b4bfac4?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#FEF2F2',
      accent: '#DC2626',
      border: '#FECACA'
    }
  },
  {
    id: 'prod-13',
    name: 'Parachute Coconut Oil',
    brand: 'Parachute',
    packSize: '200 ml',
    price: 99,
    regularPrice: 110,
    isOffer: true,
    offerSavings: 11,
    offerPercent: 10,
    offerBadge: 'Save ₹11',
    availability: 'Available',
    category: 'Personal Care',
    categorySlug: 'personal-care',
    description: '100% pure edible coconut oil made from sun-dried copras. Multi-stage filtration maintains natural coconut aroma and freshness.',
    aisle: 'Aisle 3 - Hair & Skin Oils',
    imageUrl: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#F0FDF4',
      accent: '#15803D',
      border: '#BBF7D0'
    }
  },

  // 4. HOME CARE
  {
    id: 'prod-14',
    name: 'Surf Excel',
    brand: 'Surf Excel',
    packSize: '1 kg',
    price: 150,
    availability: 'Available',
    category: 'Home Care',
    categorySlug: 'home-care',
    description: 'Easy Wash detergent powder with active clean technology. Removes tough collar and grease stains effortlessly in bucket wash.',
    aisle: 'Aisle 4 - Laundry & Detergents',
    imageUrl: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#ECFDF5',
      accent: '#059669',
      border: '#A7F3D0'
    }
  },
  {
    id: 'prod-15',
    name: 'Vim Dishwash Gel',
    brand: 'Vim',
    packSize: '500 ml',
    price: 110,
    availability: 'Available',
    category: 'Home Care',
    categorySlug: 'home-care',
    description: 'Concentrated lemon dishwash gel that cuts through stubborn burnt oil and ghee stains on steel, non-stick, and copper utensils.',
    aisle: 'Aisle 4 - Kitchen Hygiene',
    imageUrl: 'https://images.unsplash.com/photo-1585670149967-b4f4da88cc9f?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#FEF9C3',
      accent: '#65A30D',
      border: '#FDE047'
    }
  },
  {
    id: 'prod-16',
    name: 'Harpic Toilet Cleaner',
    brand: 'Harpic',
    packSize: '500 ml',
    price: 105,
    availability: 'Available',
    category: 'Home Care',
    categorySlug: 'home-care',
    description: 'Power Plus thick disinfectant liquid formula that kills 99.9% germs and removes yellow limescale stains for a sparkling clean toilet.',
    aisle: 'Aisle 4 - Bathroom Cleaners',
    imageUrl: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#EFF6FF',
      accent: '#1E40AF',
      border: '#DBEAFE'
    }
  },

  // 5. SNACKS & BEVERAGES
  {
    id: 'prod-17',
    name: 'Parle-G Biscuits',
    brand: 'Parle',
    packSize: '800 g',
    price: 70,
    availability: 'Available',
    category: 'Snacks & Beverages',
    categorySlug: 'snacks-beverages',
    description: "India's beloved glucose biscuit filled with wheat and milk energy. The perfect tea-time companion for kids and elders alike.",
    aisle: 'Aisle 5 - Biscuits & Cookies',
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#FEFCE8',
      accent: '#D97706',
      border: '#FDE68A'
    }
  },
  {
    id: 'prod-18',
    name: "Lay's Chips (Classic Salted)",
    brand: "Lay's",
    packSize: '50 g',
    price: 20,
    availability: 'Available',
    category: 'Snacks & Beverages',
    categorySlug: 'snacks-beverages',
    description: 'Crisp wafer-thin potato chips seasoned with fine salt. Crispy, flavorful snack for quick tea-time munching.',
    aisle: 'Aisle 5 - Namkeen & Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#FEF08A',
      accent: '#B45309',
      border: '#FDE047'
    }
  },
  {
    id: 'prod-19',
    name: 'Tata Tea Premium',
    brand: 'Tata Tea',
    packSize: '250 g',
    price: 130,
    availability: 'Available',
    category: 'Snacks & Beverages',
    categorySlug: 'snacks-beverages',
    description: 'Desh Ki Chai blend of fine tea grains and large leaves for a strong body and irresistible morning aroma.',
    aisle: 'Aisle 5 - Tea & Coffee',
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#F0FDF4',
      accent: '#166534',
      border: '#BBF7D0'
    }
  },
  {
    id: 'prod-20',
    name: 'Coca-Cola',
    brand: 'Coca-Cola',
    packSize: '750 ml',
    price: 45,
    availability: 'Available',
    category: 'Snacks & Beverages',
    categorySlug: 'snacks-beverages',
    description: 'Crisp, sparkling cola beverage served chilled. Refreshing partner for spicy meals, family gatherings, and hot afternoons.',
    aisle: 'Beverage Chiller 2',
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#FEF2F2',
      accent: '#DC2626',
      border: '#FECACA'
    }
  },

  // 6. FRESH PRODUCE
  {
    id: 'prod-21',
    name: 'Farm Fresh Bananas',
    brand: 'Local Orchards',
    packSize: '1 kg (approx. 6-8 pcs)',
    price: 50,
    availability: 'Available',
    category: 'Fresh',
    categorySlug: 'fresh',
    description: 'Locally grown sweet and naturally ripened bananas. Packed with instant potassium and daily dietary energy.',
    aisle: 'Entrance Fruit Bay',
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#FEF9C3',
      accent: '#CA8A04',
      border: '#FEF08A'
    }
  },
  {
    id: 'prod-22',
    name: 'Fresh Coconut',
    brand: 'Local Farm',
    packSize: '1 piece',
    price: 35,
    availability: 'Available',
    category: 'Fresh',
    categorySlug: 'fresh',
    description: 'Heavy water-filled pooja coconut with thick fresh kernel. Ideal for morning temple prayers, coconut chutney, and traditional cooking.',
    aisle: 'Entrance Pooja & Fresh Bay',
    imageUrl: 'https://images.unsplash.com/photo-1543862475-eb136770ae9b?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#FDF4FF',
      accent: '#78350F',
      border: '#E9D5FF'
    }
  },

  // 7. BABY CARE
  {
    id: 'prod-23',
    name: "Johnson's Baby Powder",
    brand: "Johnson's",
    packSize: '200 g',
    price: 180,
    availability: 'Available',
    category: 'Baby Care',
    categorySlug: 'baby-care',
    description: 'Clinically proven mild talcum powder with classic clean baby fragrance. Keeps delicate infant skin cool, dry, and soft.',
    aisle: 'Aisle 6 - Baby Wellness',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#FDF2F8',
      accent: '#DB2777',
      border: '#FBCFE8'
    }
  },
  {
    id: 'prod-24',
    name: 'Pampers Diaper Pants',
    brand: 'Pampers',
    packSize: 'Small Pack',
    price: 150,
    availability: 'Available',
    category: 'Baby Care',
    categorySlug: 'baby-care',
    description: 'Soft stretch waistband diaper pants with magic gel technology providing up to 12 hours of overnight dry comfort for baby.',
    aisle: 'Aisle 6 - Diapering',
    imageUrl: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=600&q=80',
    colorScheme: {
      bg: '#ECFEFF',
      accent: '#0891B2',
      border: '#A5F3FC'
    }
  }
];

export const STORE_PHOTOS = {
  storefront_night: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80',
  storefront_day: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
  interior_shelves: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=1200&q=80',
  interior_wide: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1200&q=80',
  aisle: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80',
  entrance: 'https://images.unsplash.com/photo-1580913428023-02c695666d61?auto=format&fit=crop&w=1200&q=80',
  checkout: 'https://images.unsplash.com/photo-1554415707-9e49fa74883c?auto=format&fit=crop&w=1200&q=80'
};

export interface SpecialOffer {
  id: string;
  title: string;
  badge: string;
  itemHeadline: string;
  regularPrice: number;
  offerPrice: number;
  savings: number;
  percentOff?: number;
  description: string;
  productId?: string;
  type: 'single' | 'combo' | 'bulk';
  validity: string;
}

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-1',
    title: 'Fortune Sunflower Oil',
    badge: '10% OFF',
    itemHeadline: 'Fortune Sunflower Oil (1 Litre)',
    regularPrice: 150,
    offerPrice: 135,
    savings: 15,
    percentOff: 10,
    description: 'Save ₹15 on your daily cooking oil. Enriched with vitamins A & D. Limited stock for this week only.',
    productId: 'prod-5',
    type: 'single',
    validity: 'Valid: 04 Oct – 10 Oct'
  },
  {
    id: 'offer-2',
    title: 'Toor Dal Special',
    badge: 'SAVE ₹15',
    itemHeadline: 'Premium Unpolished Toor Dal (1 kg)',
    regularPrice: 180,
    offerPrice: 165,
    savings: 15,
    percentOff: 8,
    description: 'High-protein staple pulse essential for family sambar and daily dal preparations. Fresh harvest stock.',
    productId: 'prod-3',
    type: 'single',
    validity: 'Valid: 04 Oct – 10 Oct'
  },
  {
    id: 'offer-3',
    title: 'Clinic Plus Shampoo',
    badge: 'SAVE ₹21',
    itemHeadline: 'Clinic Plus Strong & Long (180 ml)',
    regularPrice: 150,
    offerPrice: 129,
    savings: 21,
    percentOff: 14,
    description: 'Milk protein formula for healthy, strong family hair care at a special discounted retail price.',
    productId: 'prod-10',
    type: 'single',
    validity: 'Valid: 04 Oct – 10 Oct'
  },
  {
    id: 'offer-4',
    title: 'Parachute Coconut Oil',
    badge: 'SAVE ₹11',
    itemHeadline: 'Parachute 100% Pure Coconut Oil (200 ml)',
    regularPrice: 110,
    offerPrice: 99,
    savings: 11,
    percentOff: 10,
    description: 'Pure copra coconut oil for hair nourishment and puja needs at an exclusive under-₹100 deal price.',
    productId: 'prod-13',
    type: 'single',
    validity: 'Valid: 04 Oct – 10 Oct'
  },
  {
    id: 'offer-5',
    title: 'FAMILY GROCERY COMBO',
    badge: 'COMBO SAVINGS',
    itemHeadline: 'Basmati Rice (5kg) + Toor Dal (1kg) + Fortune Oil (1L)',
    regularPrice: 980,
    offerPrice: 899,
    savings: 81,
    percentOff: 8,
    description: 'Complete family staples bundle! Buy the monthly kitchen trio together and save ₹81 instantly at the billing counter.',
    type: 'combo',
    validity: 'Valid: 04 Oct – 10 Oct'
  },
  {
    id: 'offer-6',
    title: 'BUY MORE, SAVE MORE',
    badge: 'BULK VALUE',
    itemHeadline: 'Parle-G Glucose Biscuits (800g Value Pack)',
    regularPrice: 80,
    offerPrice: 70,
    savings: 10,
    description: 'Special tier offer: Buy 2 packs for ₹40 each or buy 4 family packs for just ₹70 total! Ideal for festive snacking.',
    productId: 'prod-17',
    type: 'bulk',
    validity: 'Valid: 04 Oct – 10 Oct'
  }
];

export const STORE_INFO = {
  name: 'BEST PRICE SUPERMARKET',
  tagline: 'SHOP MORE • SAVE MORE',
  address: {
    street: 'Main Bazaar Road, Near Bus Stand',
    town: 'Racherla',
    district: 'Prakasam District',
    state: 'Andhra Pradesh',
    pincode: '523368',
    full: 'Main Bazaar Road, Near Bus Stand, Racherla, Prakasam District, Andhra Pradesh - 523368'
  },
  phone: '+91 98765 43210',
  displayPhone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'contact@bestpricesupermarket-racherla.com',
  hours: [
    { days: 'Monday – Saturday', time: '7:00 AM – 10:00 PM' },
    { days: 'Sunday & Public Holidays', time: '7:00 AM – 10:30 PM' }
  ],
  features: [
    'Wide Clean Shopping Aisles',
    'Hand Baskets & Trolleys Available',
    'Quick Barcode Scanning Checkout',
    'UPI (PhonePe, GPay, Paytm) & Cash Accepted',
    'Fresh Dairy Received Daily by 6:30 AM',
    'Convenient Front Two-Wheeler Parking'
  ]
};
