"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, Home, Bed, Bath, Car, Ruler, TrendingUp, Star, Search } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import SchemaMarkup from '@/src/components/seo/SchemaMarkup';
import LeadCaptureForm from '@/src/components/common/LeadCaptureForm';

export default function KeywordPropertyPage() {
  const params = useParams();
  const keyword = params.keyword as string;

  // Transform keyword to readable format
  const formatKeyword = (keyword: string) => {
    return keyword
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const formattedKeyword = formatKeyword(keyword);

  // Mock property data based on keyword
  const getPropertyData = (keyword: string) => {
    const locationMap: { [key: string]: any } = {
      'dubai-marina': {
        name: 'Luxury Apartments in Dubai Marina',
        description: 'Discover premium apartments in Dubai Marina with stunning waterfront views and world-class amenities.',
        properties: [
          { name: 'Marina Heights', price: '2.5M AED', beds: 2, baths: 2, size: '1200 sqft', type: 'Apartment' },
          { name: 'Marina Promenade', price: '3.2M AED', beds: 3, baths: 3, size: '1800 sqft', type: 'Apartment' },
          { name: 'Marina Walk', price: '4.1M AED', beds: 3, baths: 3, size: '2100 sqft', type: 'Apartment' }
        ]
      },
      'downtown-dubai': {
        name: 'Exclusive Properties in Downtown Dubai',
        description: 'Experience luxury living in Downtown Dubai with iconic landmarks and premium lifestyle amenities.',
        properties: [
          { name: 'Burj Residences', price: '8.5M AED', beds: 3, baths: 4, size: '2500 sqft', type: 'Penthouse' },
          { name: 'Dubai Mall Residences', price: '6.2M AED', beds: 2, baths: 3, size: '1800 sqft', type: 'Apartment' },
          { name: 'Burj Plaza', price: '5.8M AED', beds: 2, baths: 2, size: '1600 sqft', type: 'Apartment' }
        ]
      },
      'palm-jumeirah': {
        name: 'Luxury Villas on Palm Jumeirah',
        description: 'Own a piece of paradise with exclusive villas on the world-famous Palm Jumeirah.',
        properties: [
          { name: 'Palm Villa A', price: '25M AED', beds: 6, baths: 7, size: '8500 sqft', type: 'Villa' },
          { name: 'Palm Villa B', price: '18M AED', beds: 5, baths: 6, size: '6800 sqft', type: 'Villa' },
          { name: 'Palm Villa C', price: '22M AED', beds: 6, baths: 7, size: '7200 sqft', type: 'Villa' }
        ]
      },
      'business-bay': {
        name: 'Modern Apartments in Business Bay',
        description: 'Contemporary living in the heart of Dubai\'s business district with premium amenities.',
        properties: [
          { name: 'Bay Square', price: '2.8M AED', beds: 2, baths: 2, size: '1400 sqft', type: 'Apartment' },
          { name: 'Business Bay Towers', price: '3.5M AED', beds: 3, baths: 3, size: '1900 sqft', type: 'Apartment' },
          { name: 'Bay Central', price: '2.2M AED', beds: 1, baths: 2, size: '1100 sqft', type: 'Apartment' }
        ]
      }
    };

    return locationMap[keyword] || {
      name: `${formattedKeyword} Properties`,
      description: `Discover premium properties in ${formattedKeyword} with exceptional amenities and prime locations.`,
      properties: [
        { name: 'Premium Residence A', price: '3.5M AED', beds: 2, baths: 2, size: '1500 sqft', type: 'Apartment' },
        { name: 'Luxury Residence B', price: '4.2M AED', beds: 3, baths: 3, size: '1800 sqft', type: 'Apartment' },
        { name: 'Exclusive Residence C', price: '5.8M AED', beds: 3, baths: 4, size: '2200 sqft', type: 'Apartment' }
      ]
    };
  };

  const propertyData = getPropertyData(keyword);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Schema Markup */}
      <SchemaMarkup 
        type="realEstate" 
        data={{
          name: propertyData.name,
          description: propertyData.description,
          url: `https://theavenue.ae/properties/${keyword}`,
          image: '/images/hero-bg.jpg'
        }} 
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#dbbb90] to-[#C2A17B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dbbb90' fill-opacity='0.2'%3E%3Cpath d='M60 60c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30zm30 0c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-sm font-medium text-white uppercase tracking-wider">Premium Location</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 sm:mb-8 text-white font-serif tracking-wide leading-tight">
                <span className="block">{formattedKeyword}</span>
                <span className="block text-white/90">Properties</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
                {propertyData.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button className="bg-white text-[#dbbb90] hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-light tracking-wider btn-unified shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                  View Properties
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#dbbb90] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-light tracking-wider btn-unified transition-all duration-300 w-full sm:w-auto">
                  Schedule Viewing
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 font-serif">
                Featured
                <span className="block bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">{formattedKeyword}</span>
                <span className="block">Properties</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Discover our handpicked selection of premium properties in {formattedKeyword}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {propertyData.properties.map((property, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <Card className="card-unified bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#dbbb90]/30 transform hover:-translate-y-2 overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-[#dbbb90]/20 to-[#C2A17B]/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Home className="h-16 w-16 text-[#dbbb90]" />
                      </div>
                      <div className="absolute top-4 right-4 bg-[#dbbb90] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {property.type}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#dbbb90] transition-colors duration-300">
                        {property.name}
                      </h3>
                      <p className="text-2xl font-bold text-[#dbbb90] mb-4">
                        {property.price}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Bed className="h-4 w-4 text-[#dbbb90]" />
                          <span>{property.beds} Bedrooms</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Bath className="h-4 w-4 text-[#dbbb90]" />
                          <span>{property.baths} Bathrooms</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Ruler className="h-4 w-4 text-[#dbbb90]" />
                          <span>{property.size}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Car className="h-4 w-4 text-[#dbbb90]" />
                          <span>2 Parking</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-[#dbbb90] hover:bg-[#C2A17B] text-white btn-unified">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <LeadCaptureForm
                variant="default"
                title={`Find Your Perfect Property in ${formattedKeyword}`}
                subtitle="Get personalized recommendations and expert guidance for your property search"
                showRecaptcha={true}
                onSuccess={(data) => {
                  console.log(`${keyword} properties lead captured:`, data);
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}