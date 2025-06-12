
import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { products, formatTZS } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Star, Search, Sparkles, Zap, Camera } from 'lucide-react';

const GenZ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const { addToCart } = useCart();

  const genZProducts = useMemo(() => {
    let filtered = products.filter(product => product.category === 'genz');
    
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-16 w-16 text-pink-600 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
              Gen Z
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the trendiest items for the youth! From RGB gaming gear to aesthetic room decorations, 
            find everything that speaks to the Gen Z vibe and digital lifestyle.
          </p>
        </div>

        {/* Category Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-gray-800">
            <Zap className="h-12 w-12 text-pink-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">RGB Everything</h3>
            <p className="text-sm text-muted-foreground">LED lights, gaming peripherals with RGB</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-gray-800">
            <Camera className="h-12 w-12 text-pink-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Content Creation</h3>
            <p className="text-sm text-muted-foreground">Instant cameras, phone accessories</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-gray-800">
            <Sparkles className="h-12 w-12 text-pink-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Aesthetic Vibes</h3>
            <p className="text-sm text-muted-foreground">Trendy designs, holographic effects</p>
          </Card>
        </div>

        {/* Filters */}
        <div className="bg-background rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Gen Z products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {genZProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 border-0">
                      Gen Z
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {product.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="mr-2 text-xs border-pink-200 text-pink-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {formatTZS(product.price)}
                    </span>
                    <Button 
                      onClick={() => addToCart(product)}
                      className="bg-gradient-to-r from-pink-600 via-purple-600 to-purple-800 hover:from-pink-700 hover:via-purple-700 hover:to-purple-900 hover:scale-105 transition-all duration-300"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                  
                  {!product.inStock && (
                    <Badge variant="destructive" className="w-full mt-3 justify-center">
                      Out of Stock
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {genZProducts.length === 0 && (
          <div className="text-center py-12">
            <Sparkles className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Gen Z products found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenZ;
