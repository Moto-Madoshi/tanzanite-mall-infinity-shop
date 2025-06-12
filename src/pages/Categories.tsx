
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/products';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Categories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-tanzanite to-tanzanite-dark bg-clip-text text-transparent mb-6">
            Shop by Category
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of products across multiple categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Link key={category.id} to={`/category/${category.id}`}>
              <Card className={`category-card card-3d h-80 cursor-pointer group animate-fade-in hover:shadow-2xl transition-all duration-300`} style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="relative h-full p-0 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90`}></div>
                  <div className="relative h-full flex flex-col items-center justify-center text-white p-6 text-center">
                    <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-3">{category.name}</h3>
                    <p className="text-sm opacity-90 mb-4 leading-relaxed">{category.description}</p>
                    <Badge variant="secondary" className="mb-4">
                      {category.productCount} Products
                    </Badge>
                    <Button variant="secondary" size="sm" className="group-hover:scale-105 transition-transform">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  {/* Floating decoration */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/15 rounded-full animate-pulse delay-500"></div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Trending Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <TrendingUp className="h-8 w-8 text-tanzanite mr-3" />
            <h2 className="text-3xl font-bold text-foreground">Trending Categories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-tanzanite-light to-white rounded-xl">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="text-xl font-semibold mb-2">Gaming</h3>
              <p className="text-muted-foreground text-sm">Most popular this month</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-white rounded-xl">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Gen Z</h3>
              <p className="text-muted-foreground text-sm">Trending among youth</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-white rounded-xl">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="text-xl font-semibold mb-2">Computers</h3>
              <p className="text-muted-foreground text-sm">Always in demand</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
