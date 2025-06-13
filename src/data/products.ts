export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: 'computers',
    name: 'Computers',
    description: 'Laptops, desktops, and accessories',
    icon: '💻',
    gradient: 'from-blue-500 to-blue-700',
    productCount: 45
  },
  {
    id: 'gadgets',
    name: 'Gadgets',
    description: 'Smart devices and tech accessories',
    icon: '📱',
    gradient: 'from-purple-500 to-purple-700',
    productCount: 32
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Consoles, games, and accessories',
    icon: '🎮',
    gradient: 'from-green-500 to-green-700',
    productCount: 28
  },
  {
    id: 'drinks',
    name: 'Drinks',
    description: 'Energy drinks and beverages',
    icon: '🥤',
    gradient: 'from-orange-500 to-orange-700',
    productCount: 15
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'TVs, audio, and home electronics',
    icon: '📺',
    gradient: 'from-red-500 to-red-700',
    productCount: 38
  },
  {
    id: 'genz',
    name: 'Gen Z',
    description: 'Trendy items for the youth',
    icon: '✨',
    gradient: 'from-pink-500 to-purple-700',
    productCount: 25
  }
];

export const products: Product[] = [
  // Computers
  {
    id: '1',
    name: 'MacBook Pro 16"',
    price: 4500000,
    description: 'Latest MacBook Pro with M3 chip, 16GB RAM, 512GB SSD',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    category: 'computers',
    rating: 4.8,
    inStock: true,
    tags: ['apple', 'laptop', 'professional']
  },
  {
    id: '2',
    name: 'Dell XPS 13',
    price: 2800000,
    description: 'Ultra-portable laptop with Intel i7, 16GB RAM, 1TB SSD',
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500',
    category: 'computers',
    rating: 4.6,
    inStock: true,
    tags: ['dell', 'laptop', 'portable']
  },
  {
    id: '3',
    name: 'Gaming Desktop PC',
    price: 3200000,
    description: 'High-performance gaming PC with RTX 4070, AMD Ryzen 7',
    image: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=500',
    category: 'computers',
    rating: 4.9,
    inStock: true,
    tags: ['gaming', 'desktop', 'rtx']
  },

  // Gadgets
  {
    id: '4',
    name: 'iPhone 15 Pro',
    price: 2200000,
    description: 'Latest iPhone with titanium design and advanced camera system',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
    category: 'gadgets',
    rating: 4.7,
    inStock: true,
    tags: ['iphone', 'smartphone', 'apple']
  },
  {
    id: '5',
    name: 'Samsung Galaxy S24',
    price: 1800000,
    description: 'Premium Android phone with AI features and excellent camera',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
    category: 'gadgets',
    rating: 4.5,
    inStock: true,
    tags: ['samsung', 'android', 'smartphone']
  },
  {
    id: '6',
    name: 'AirPods Pro',
    price: 450000,
    description: 'Wireless earbuds with active noise cancellation',
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500',
    category: 'gadgets',
    rating: 4.4,
    inStock: true,
    tags: ['airpods', 'wireless', 'audio']
  },

  // Gaming
  {
    id: '7',
    name: 'PlayStation 5',
    price: 1200000,
    description: 'Next-gen gaming console with ultra-fast SSD and ray tracing',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500',
    category: 'gaming',
    rating: 4.9,
    inStock: false,
    tags: ['playstation', 'console', 'gaming']
  },
  {
    id: '8',
    name: 'Xbox Series X',
    price: 1100000,
    description: 'Powerful gaming console with 4K gaming capabilities',
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=500',
    category: 'gaming',
    rating: 4.8,
    inStock: true,
    tags: ['xbox', 'console', 'gaming']
  },
  {
    id: '9',
    name: 'Gaming Headset',
    price: 180000,
    description: 'Professional gaming headset with 7.1 surround sound',
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=500',
    category: 'gaming',
    rating: 4.3,
    inStock: true,
    tags: ['headset', 'gaming', 'audio']
  },

  // Drinks
  {
    id: '10',
    name: 'Red Bull Energy Drink',
    price: 3500,
    description: 'Premium energy drink for boost and focus',
    image: 'https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=500',
    category: 'drinks',
    rating: 4.2,
    inStock: true,
    tags: ['energy', 'drink', 'boost']
  },
  {
    id: '11',
    name: 'Coca Cola 500ml',
    price: 2500,
    description: 'Classic refreshing cola drink',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500',
    category: 'drinks',
    rating: 4.0,
    inStock: true,
    tags: ['cola', 'drink', 'refreshing']
  },

  // Electronics
  {
    id: '12',
    name: '65" 4K Smart TV',
    price: 1800000,
    description: 'Ultra HD Smart TV with HDR and streaming apps',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500',
    category: 'electronics',
    rating: 4.6,
    inStock: true,
    tags: ['tv', '4k', 'smart']
  },
  {
    id: '13',
    name: 'Bluetooth Speaker',
    price: 85000,
    description: 'Portable wireless speaker with deep bass',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    category: 'electronics',
    rating: 4.4,
    inStock: true,
    tags: ['speaker', 'bluetooth', 'portable']
  },

  // Gen Z Category
  {
    id: '14',
    name: 'RGB Gaming Keyboard',
    price: 120000,
    description: 'Mechanical gaming keyboard with customizable RGB lighting',
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500',
    category: 'genz',
    rating: 4.7,
    inStock: true,
    tags: ['rgb', 'gaming', 'keyboard', 'mechanical']
  },
  {
    id: '15',
    name: 'LED Strip Lights',
    price: 45000,
    description: 'Smart LED strip lights for room decoration',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    category: 'genz',
    rating: 4.5,
    inStock: true,
    tags: ['led', 'lights', 'decoration', 'smart']
  },
  {
    id: '16',
    name: 'Wireless Gaming Mouse',
    price: 75000,
    description: 'High-precision wireless gaming mouse with RGB',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
    category: 'genz',
    rating: 4.6,
    inStock: true,
    tags: ['gaming', 'mouse', 'wireless', 'rgb']
  },
  {
    id: '17',
    name: 'PopSocket Phone Grip',
    price: 15000,
    description: 'Trendy phone grip with holographic design',
    image: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=500',
    category: 'genz',
    rating: 4.2,
    inStock: true,
    tags: ['phone', 'grip', 'trendy', 'holographic']
  },
  {
    id: '18',
    name: 'Instant Camera',
    price: 280000,
    description: 'Retro instant camera for creative photography',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500',
    category: 'genz',
    rating: 4.4,
    inStock: true,
    tags: ['camera', 'instant', 'retro', 'photography']
  }
];

// Currency formatter for Tanzanian Shillings
export const formatTZS = (amount: number): string => {
  return new Intl.NumberFormat('sw-TZ', {
    style: 'currency',
    currency: 'TZS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

// VAT calculation
export const calculateVAT = (amount: number, vatRate: number = 0.18): number => {
  return amount * vatRate;
};

export const calculateTotalWithVAT = (amount: number, vatRate: number = 0.18): number => {
  return amount + calculateVAT(amount, vatRate);
};
