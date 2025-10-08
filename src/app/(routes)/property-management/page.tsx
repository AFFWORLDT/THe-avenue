"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Shield, TrendingUp, Users, Clock, DollarSign, Home, Award } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { useLanguage } from '@/src/contexts/LanguageContext';

export default function PropertyManagementPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Complete Property Care",
      description: "Comprehensive maintenance and management services to ensure your property remains in pristine condition and maintains its value."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Maximize Investment Returns",
      description: "Strategic rental management and optimization to maximize your property's income potential and long-term investment value."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Management",
      description: "Comprehensive insurance coverage and risk assessment to protect your investment and ensure peace of mind."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Tenant Management",
      description: "Professional tenant screening, onboarding, and relationship management to ensure quality occupancy and reduce vacancy periods."
    }
  ];

  const services = [
    "Property Maintenance & Repairs",
    "Rent Collection & Financial Management",
    "Tenant Screening & Onboarding",
    "24/7 Emergency Response",
    "Property Inspections & Reporting",
    "Marketing & Tenant Acquisition",
    "Legal Compliance & Documentation",
    "Insurance & Risk Management"
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Higher Returns",
      description: "Optimized rental income"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Premium Service",
      description: "White-glove management"
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Peace of Mind",
      description: "Stress-free ownership"
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
                <Settings className="h-5 w-5 text-[#dbbb90]" />
                <span className="text-sm font-medium text-[#dbbb90] uppercase tracking-wider">Premium Management</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 sm:mb-8 text-gray-900 font-serif tracking-wide leading-tight">
                <span className="block">PROPERTY</span>
                <span className="block bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent font-normal">MANAGEMENT</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
                Take the stress out of property management and maximize your investment potential. Our comprehensive property management services ensure your rental properties are well-maintained, profitable, and hassle-free.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-light tracking-wider rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                  Get Started Today
                </Button>
                <Button variant="outline" className="border-2 border-[#dbbb90] text-[#dbbb90] hover:bg-[#dbbb90] hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-light tracking-wider rounded-xl transition-all duration-300">
                  Contact us today
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 font-serif">
                Why Choose Our
                <span className="block bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">Management Service</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Experience professional property management that maximizes your returns and minimizes your stress
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
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#dbbb90]/30 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4 font-serif">{feature.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-base sm:text-lg">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 font-serif">
                Our <span className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">Advantages</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                What makes us the preferred choice for property management in Dubai
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#dbbb90]/30 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-2 sm:mb-3 font-serif">{benefit.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                Complete <span className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Comprehensive property management solutions tailored to your needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#dbbb90]/30 transform hover:-translate-y-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] rounded-full"></div>
                      <span className="text-gray-800 font-medium text-base sm:text-lg group-hover:text-[#dbbb90] transition-colors duration-300">{service}</span>
                    </div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 font-serif">
              Ready to Maximize Your
              <span className="block">Property Investment?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 font-light max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              Let our expert property management team take care of your investment while you enjoy the returns. Contact us today to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button className="bg-white text-[#dbbb90] hover:bg-gray-50 px-8 py-4 text-lg font-medium tracking-wider rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                Get Started Today
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#dbbb90] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium tracking-wider rounded-xl transition-all duration-300">
                Contact Us Today
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}