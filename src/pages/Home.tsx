
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories, products, formatTZS } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Star, ArrowRight, Sparkles, Zap } from 'lucide-react';

const Home = () => {
  const { addToCart } = useCart();
  
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tanzanite-light via-background to-accent py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-tanzanite to-tanzanite-dark bg-clip-text text-transparent animate-fade-in">
                Welcome to Tanzanite Mall
              </h1>
              <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-infinity-gold animate-pulse" />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in delay-200">
              Discover infinite possibilities with our premium collection of computers, gadgets, gaming, and more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
              <Link to="/products">
                <Button size="lg" className="bg-gradient-to-r from-tanzanite to-tanzanite-dark hover:from-tanzanite-dark hover:to-tanzanite group">
                  <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button size="lg" variant="outline" className="hover:bg-tanzanite hover:text-white transition-all duration-300">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* 3D Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-tanzanite/20 rounded-full float-animation shadow-2xl"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-infinity-gold/20 rounded-full float-animation delay-1000 shadow-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary/10 rounded-full float-animation delay-500 shadow-xl"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-purple-400/20 rounded-full float-animation delay-700 shadow-lg"></div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of products across multiple categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={category.id} to={`/category/${category.id}`}>
                <Card className={`category-card card-3d h-64 cursor-pointer group animate-fade-in hover:shadow-2xl transition-all duration-500`} style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="relative h-full p-0 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90`}></div>
                    <div className="relative h-full flex flex-col items-center justify-center text-white p-6 text-center">
                      <div className="text-6xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90 mb-4">{category.description}</p>
                      <Button variant="secondary" size="sm" className="group-hover:scale-105 transition-transform shimmer">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    {/* 3D decoration elements */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/15 rounded-full animate-pulse delay-300"></div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Handpicked items just for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className={`group hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2`} style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground capitalize bg-muted px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {formatTZS(product.price)}
                      </span>
                      <Button 
                        size="sm" 
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                        className="bg-gradient-to-r from-tanzanite to-tanzanite-dark hover:from-tanzanite-dark hover:to-tanzanite hover:scale-105 transition-all duration-300"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline" className="hover:bg-tanzanite hover:text-white transition-all duration-300">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-tanzanite to-tanzanite-dark relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto text-white space-y-6">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="text-lg opacity-90">
              Get the latest updates on new products, exclusive offers, and tech insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
      </section>
    </div>
  );
};

export default Home;
