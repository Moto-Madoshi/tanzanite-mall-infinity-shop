
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We prioritize our customers satisfaction above everything else'
    },
    {
      icon: Award,
      title: 'Quality Products',
      description: 'Only the finest products make it to our shelves'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers across Tanzania and beyond'
    },
    {
      icon: Heart,
      title: 'Community Love',
      description: 'Supporting local communities and sustainable practices'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-tanzanite to-tanzanite-dark bg-clip-text text-transparent mb-6">
            About Tanzanite Mall
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover infinite possibilities with Tanzania's premier online shopping destination
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in the heart of Tanzania, Tanzanite Mall was born from a vision to bring 
              world-class shopping experiences to every Tanzanian. Just like the precious tanzanite 
              gemstone found only in our beautiful country, we believe in offering something truly unique.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our infinity symbol represents the endless possibilities we offer - from cutting-edge 
              technology to everyday essentials, from gaming gear to refreshing beverages. We're more 
              than just a marketplace; we're your gateway to infinite choices.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-tanzanite-light to-tanzanite rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">💎</div>
                <h3 className="text-2xl font-bold">Tanzanite Mall</h3>
                <p className="opacity-90">Since 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-tanzanite to-tanzanite-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Meet Our Team</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our passionate team works tirelessly to bring you the best shopping experience possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <Card key={member} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-tanzanite to-tanzanite-dark rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Team Member {member}</h3>
                  <p className="text-muted-foreground">Department Head</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
