"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Users, TrendingUp, Shield, Target, Briefcase, Award } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { useLanguage } from '@/src/contexts/LanguageContext';

export default function CommercialPropertiesPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Prime Commercial Spaces",
      description: "Access to Dubai's most prestigious commercial properties including offices, retail spaces, and industrial facilities in prime business districts."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Tenant Representation",
      description: "If you are a business owner seeking commercial space for lease, we provide tenant representation services. We act on your behalf to find the ideal property that meets your specific requirements and negotiate favorable lease terms."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Investment Opportunities",
      description: "Strategic commercial property investments with comprehensive market analysis and ROI projections to maximize your business returns."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Legal & Compliance",
      description: "Complete legal support and regulatory compliance assistance to ensure smooth commercial property transactions and operations."
    }
  ];

  const propertyTypes = [
    "Office Spaces",
    "Retail Units",
    "Industrial Facilities",
    "Warehouses",
    "Showrooms",
    "Medical Centers"
  ];

  const locations = [
    "Business Bay",
    "DIFC",
    "Dubai Marina",
    "JLT",
    "Downtown Dubai",
    "DWC"
  ];

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strategic Locations",
      description: "Prime business districts"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Business Growth",
      description: "Support business expansion"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Guidance",
      description: "Professional consultation"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Market Knowledge",
      description: "Deep local insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Luxury Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dbbb90' fill-opacity='0.2'%3E%3Cpath d='M60 60c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30zm30 0c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#dbbb90]/5 via-transparent to-[#C2A17B]/5"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-[#dbbb90]/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-[#dbbb90]/20">
                <Building2 className="h-5 w-5 text-[#dbbb90]" />
                <span className="text-sm font-medium text-[#dbbb90] uppercase tracking-wider">Commercial Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-gray-900 font-serif tracking-wide leading-tight">
                <span className="block">COMMERCIAL</span>
                <span className="block bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent font-normal">PROPERTIES</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
                If you are a business owner seeking commercial space for lease, we provide tenant representation services. We act on your behalf to find the ideal property that meets your specific requirements and negotiate favorable lease terms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] text-white px-8 py-4 text-lg font-light tracking-wider rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Find Commercial Space
                </Button>
                <Button variant="outline" className="border-2 border-[#dbbb90] text-[#dbbb90] hover:bg-[#dbbb90] hover:text-white px-8 py-4 text-lg font-light tracking-wider rounded-xl transition-all duration-300">
                  Get Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-serif">
                Why Choose Our
                <span className="block bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">Commercial Service</span>
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Expert commercial real estate solutions for businesses of all sizes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#dbbb90]/30 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-4 font-serif">{feature.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-serif">
                Property <span className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">Types</span>
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Comprehensive commercial property solutions for every business need
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {propertyTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#dbbb90]/30 transform hover:-translate-y-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] rounded-full"></div>
                      <span className="text-gray-800 font-medium text-lg group-hover:text-[#dbbb90] transition-colors duration-300">{type}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Locations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 font-serif">
                Prime <span className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">Locations</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#dbbb90]/30 transform hover:-translate-y-1">
                      <div className="flex items-center justify-center space-x-2">
                        <MapPin className="h-4 w-4 text-[#dbbb90]" />
                        <span className="text-gray-800 font-medium text-sm group-hover:text-[#dbbb90] transition-colors duration-300">{location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-serif">
                Our <span className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">Advantages</span>
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                What makes us the preferred choice for commercial real estate in Dubai
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#dbbb90]/30 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-light text-gray-900 mb-3 font-serif">{benefit.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-serif">
              Ready to Find Your
              <span className="block">Perfect Commercial Space?</span>
            </h2>
            <p className="text-xl text-white/90 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
              Let our commercial real estate experts help you find the ideal property that meets your business requirements and growth objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-white text-[#dbbb90] hover:bg-gray-50 px-8 py-4 text-lg font-medium tracking-wider rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Start Your Search
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#dbbb90] px-8 py-4 text-lg font-medium tracking-wider rounded-xl transition-all duration-300">
                Get Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
