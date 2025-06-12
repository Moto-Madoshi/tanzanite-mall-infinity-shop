
import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  // Computers
  {
    id: 'comp-1',
    name: 'MacBook Pro 16"',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'computers',
    description: 'Powerful laptop with M2 chip, perfect for professional work.',
    rating: 4.9,
    inStock: true
  },
  {
    id: 'comp-2',
    name: 'Gaming Desktop PC',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'computers',
    description: 'High-performance gaming PC with RTX 4080 and Intel i7.',
    rating: 4.8,
    inStock: true
  },
  {
    id: 'comp-3',
    name: 'Dell XPS 13',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'computers',
    description: 'Ultra-portable laptop with stunning display.',
    rating: 4.7,
    inStock: true
  },

  // Gadgets
  {
    id: 'gadget-1',
    name: 'Smart Watch Pro',
    price: 399,
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'gadgets',
    description: 'Advanced fitness tracking and smart notifications.',
    rating: 4.6,
    inStock: true
  },
  {
    id: 'gadget-2',
    name: 'Wireless Earbuds',
    price: 199,
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'gadgets',
    description: 'Premium sound quality with noise cancellation.',
    rating: 4.5,
    inStock: true
  },
  {
    id: 'gadget-3',
    name: 'Smart Home Hub',
    price: 129,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'gadgets',
    description: 'Control all your smart devices from one place.',
    rating: 4.4,
    inStock: true
  },

  // Gaming
  {
    id: 'game-1',
    name: 'PlayStation 5',
    price: 499,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'gaming',
    description: 'Next-gen gaming console with ultra-fast loading.',
    rating: 4.9,
    inStock: true
  },
  {
    id: 'game-2',
    name: 'Xbox Series X',
    price: 499,
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'gaming',
    description: 'Powerful gaming with 4K graphics and quick resume.',
    rating: 4.8,
    inStock: true
  },
  {
    id: 'game-3',
    name: 'Gaming Headset',
    price: 149,
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'gaming',
    description: 'Immersive 7.1 surround sound for gaming.',
    rating: 4.6,
    inStock: true
  },

  // Drinks
  {
    id: 'drink-1',
    name: 'Premium Coffee Beans',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'drinks',
    description: 'Organic single-origin coffee beans from Tanzania.',
    rating: 4.7,
    inStock: true
  },
  {
    id: 'drink-2',
    name: 'Energy Drink Pack',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1553558935-84af7e1119c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'drinks',
    description: 'Natural energy drinks with vitamins and minerals.',
    rating: 4.3,
    inStock: true
  },
  {
    id: 'drink-3',
    name: 'Herbal Tea Collection',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1594631661960-350bc53c8dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'drinks',
    description: 'Assorted herbal teas for relaxation and wellness.',
    rating: 4.5,
    inStock: true
  },

  // Electronics
  {
    id: 'elec-1',
    name: 'Smartphone Pro',
    price: 999,
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'electronics',
    description: 'Latest smartphone with advanced camera system.',
    rating: 4.8,
    inStock: true
  },
  {
    id: 'elec-2',
    name: '4K Smart TV',
    price: 799,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'electronics',
    description: 'Ultra HD smart TV with streaming capabilities.',
    rating: 4.6,
    inStock: true
  },
  {
    id: 'elec-3',
    name: 'Wireless Speaker',
    price: 199,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'electronics',
    description: 'Portable speaker with 360-degree sound.',
    rating: 4.4,
    inStock: true
  }
];

export const categories = [
  {
    id: 'computers',
    name: 'Computers',
    description: 'Laptops, Desktops & Accessories',
    icon: '💻',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 'gadgets',
    name: 'Gadgets',
    description: 'Smart Devices & Tech',
    icon: '📱',
    gradient: 'from-green-500 to-blue-500'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Consoles, Games & Accessories',
    icon: '🎮',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'drinks',
    name: 'Drinks',
    description: 'Coffee, Tea & Beverages',
    icon: '☕',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Phones, TVs & Audio',
    icon: '📺',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Clothing & Accessories',
    icon: '👕',
    gradient: 'from-pink-500 to-rose-500'
  }
];
