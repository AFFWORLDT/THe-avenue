"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building, Banknote, Users, FileText, Globe } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { useLanguage } from '@/src/contexts/LanguageContext';

export default function UsefulLinksPage() {
  const { t } = useLanguage();

  const governmentInstitutions = [
    {
      name: "Dubai Land Department",
      description: "Official government entity for real estate registration and transactions",
      url: "https://www.dubailand.gov.ae",
      icon: <Building className="h-6 w-6" />
    },
    {
      name: "Dubai Municipality",
      description: "Municipal services and urban planning information",
      url: "https://www.dm.gov.ae",
      icon: <Building className="h-6 w-6" />
    },
    {
      name: "Dubai Real Estate Association",
      description: "Professional association for real estate practitioners",
      url: "https://www.dreab.ae",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const financialInstitutions = [
    {
      name: "Emirates NBD",
      description: "Leading UAE bank offering mortgage and banking services",
      url: "https://www.emiratesnbd.com",
      icon: <Banknote className="h-6 w-6" />
    },
    {
      name: "ADCB",
      description: "Abu Dhabi Commercial Bank - comprehensive banking solutions",
      url: "https://www.adcb.com",
      icon: <Banknote className="h-6 w-6" />
    },
    {
      name: "Dubai Islamic Bank",
      description: "Sharia-compliant banking and financial services",
      url: "https://www.dib.ae",
      icon: <Banknote className="h-6 w-6" />
    },
    {
      name: "First Abu Dhabi Bank",
      description: "UAE's largest bank with extensive mortgage products",
      url: "https://www.bankfab.com",
      icon: <Banknote className="h-6 w-6" />
    },
    {
      name: "Commercial Bank of Dubai",
      description: "Full-service commercial and retail banking",
      url: "https://www.cbd.ae",
      icon: <Banknote className="h-6 w-6" />
    }
  ];

  const usefulResources = [
    {
      name: "Dubai Property Market Reports",
      description: "Latest market insights and property trends",
      url: "#",
      icon: <FileText className="h-6 w-6" />
    },
    {
      name: "Property Investment Calculator",
      description: "Calculate ROI and investment potential",
      url: "#",
      icon: <FileText className="h-6 w-6" />
    },
    {
      name: "Mortgage Calculator",
      description: "Estimate monthly payments and affordability",
      url: "#",
      icon: <FileText className="h-6 w-6" />
    },
    {
      name: "Dubai Property Laws",
      description: "Understanding real estate regulations",
      url: "#",
      icon: <FileText className="h-6 w-6" />
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
                <Globe className="h-5 w-5 text-[#dbbb90]" />
                <span className="text-sm font-medium text-[#dbbb90] uppercase tracking-wider">Resource Center</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-gray-900 font-serif tracking-wide leading-tight">
                <span className="block">USEFUL</span>
                <span className="block bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent font-normal">LINKS</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
                Discover our curated collection of useful links and navigate the world of real estate with ease!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Government Institutions Section */}
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
                GOVERNMENT <span className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">INSTITUTIONS</span>
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Essential government resources for real estate transactions and regulations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {governmentInstitutions.map((institution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#dbbb90]/30 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {institution.icon}
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-4 font-serif">{institution.name}</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-lg mb-6">{institution.description}</p>
                    <a
                      href={institution.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-[#dbbb90] hover:text-[#C2A17B] font-medium transition-colors duration-300 group"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Institutions Section */}
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
                FINANCIAL <span className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">INSTITUTIONS</span>
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Leading banks and financial institutions for mortgage and banking services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {financialInstitutions.map((institution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#dbbb90]/30 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {institution.icon}
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-4 font-serif">{institution.name}</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-lg mb-6">{institution.description}</p>
                    <a
                      href={institution.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-[#dbbb90] hover:text-[#C2A17B] font-medium transition-colors duration-300 group"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Useful Resources Section */}
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
                USEFUL <span className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] bg-clip-text text-transparent">RESOURCES</span>
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Tools and resources to help you make informed real estate decisions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {usefulResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#dbbb90]/30 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {resource.icon}
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-4 font-serif">{resource.name}</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-lg mb-6">{resource.description}</p>
                    <a
                      href={resource.url}
                      className="inline-flex items-center space-x-2 text-[#dbbb90] hover:text-[#C2A17B] font-medium transition-colors duration-300 group"
                    >
                      <span>Access Resource</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
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
              GET A FREE CONSULTANT NOW
            </h2>
            <p className="text-xl text-white/90 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
              Need personalized assistance with your real estate journey? Our expert consultants are here to help you navigate Dubai's property market with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-white/50 transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-white/50 transition-colors duration-300"
              />
              <Button className="bg-white text-[#dbbb90] hover:bg-gray-50 px-8 py-4 text-lg font-medium tracking-wider rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
