"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Shield, Users, Calculator, FileText, Award, Clock } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { useLanguage } from '@/src/contexts/LanguageContext';

export default function MortgageFinanceConsultancyPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Competitive Interest Rates",
      description: "Secure the best mortgage financing for your property purchase with our Mortgage Finance Consultancy partners. They negotiate with lenders on your behalf to secure competitive interest rates and favorable terms."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Investment Optimization",
      description: "Strategic financial planning and mortgage structuring to maximize your property investment returns and minimize your overall financial burden."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and financial protection strategies to ensure secure and sustainable mortgage financing solutions."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Advocacy",
      description: "Our consultants advocate for your best interests throughout the mortgage process, ensuring you get the most favorable terms and conditions."
    }
  ];

  const services = [
    "Mortgage Pre-approval",
    "Interest Rate Negotiation",
    "Loan Structuring & Optimization",
    "Documentation Assistance",
    "Financial Planning & Analysis",
    "Bank Relationship Management",
    "Refinancing Solutions",
    "Investment Property Financing"
  ];

  const benefits = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Best Rates",
      description: "Competitive interest rates"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Easy Process",
      description: "Streamlined documentation"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Support",
      description: "Professional guidance"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Approval",
      description: "Quick processing times"
    }
  ];

  const banks = [
    "Emirates NBD",
    "ADCB",
    "Dubai Islamic Bank",
    "First Abu Dhabi Bank",
    "Commercial Bank of Dubai",
    "Mashreq Bank"
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
                <DollarSign className="h-5 w-5 text-[#dbbb90]" />
                <span className="text-sm font-medium text-[#dbbb90] uppercase tracking-wider">Financial Excellence</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 sm:mb-8 text-gray-900 font-serif tracking-wide leading-tight">
                <span className="block">MORTGAGE FINANCE</span>
                <span className="block bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent font-normal">CONSULTANCY</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
                Secure the best mortgage financing for your property purchase with our Mortgage Finance Consultancy partners. They negotiate with lenders on your behalf to secure competitive interest rates and favorable terms and advocate for your best interests throughout the process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-light tracking-wider rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                  Get Pre-approved
                </Button>
                <Button variant="outline" className="border-2 border-[#dbbb90] text-[#dbbb90] hover:bg-[#dbbb90] hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-light tracking-wider rounded-xl transition-all duration-300">
                  Calculate Mortgage
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
                <span className="block bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">Mortgage Service</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Expert mortgage solutions tailored to your financial goals and property investment needs
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

      {/* Services Section */}
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
                Our <span className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Comprehensive mortgage and financing solutions for all your property needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#dbbb90]/30 transform hover:-translate-y-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] rounded-full"></div>
                      <span className="text-gray-800 font-medium text-base sm:text-lg group-hover:text-[#dbbb90] transition-colors duration-300">{service}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Partner Banks */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 font-serif">
                Partner <span className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">Banks</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {banks.map((bank, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#dbbb90]/30 transform hover:-translate-y-1">
                      <div className="flex items-center justify-center">
                        <span className="text-gray-800 font-medium text-xs sm:text-sm group-hover:text-[#dbbb90] transition-colors duration-300">{bank}</span>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 font-serif">
                Our <span className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">Advantages</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                What makes us the preferred choice for mortgage financing in Dubai
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
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#dbbb90]/30 transform hover:-translate-y-2">
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
              Ready to Secure Your
              <span className="block">Perfect Mortgage?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 font-light max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              Let our mortgage finance consultants help you secure the best financing terms for your property purchase with competitive rates and favorable conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button className="bg-white text-[#dbbb90] hover:bg-gray-50 px-8 py-4 text-lg font-medium tracking-wider rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                Get Pre-approved
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#dbbb90] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium tracking-wider rounded-xl transition-all duration-300">
                Calculate Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
