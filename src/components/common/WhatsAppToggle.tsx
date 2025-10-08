"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/src/contexts/LanguageContext';

export default function WhatsAppToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  const phoneNumber = '+971507705315';
  const whatsappMessage = 'Hello! I would like to know more about your luxury properties in Dubai.';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  // Show the button after a delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && currentScrollY > 300) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactOptions = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'WhatsApp',
      action: () => window.open(whatsappUrl, '_blank'),
      color: 'bg-green-500 hover:bg-green-600',
      description: '+971 50 770 5315'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: t('team.call'),
      action: () => window.open(`tel:${phoneNumber}`, '_self'),
      color: 'bg-blue-500 hover:bg-blue-600',
      description: '+971 50 770 5315'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: t('team.email'),
      action: () => window.open('mailto:info@theavenue.ae', '_self'),
      color: 'bg-purple-500 hover:bg-purple-600',
      description: 'info@theavenue.ae'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      action: () => window.open('https://maps.google.com/?q=1403,B2B+Tower,Business+Bay,Dubai,UAE', '_blank'),
      color: 'bg-red-500 hover:bg-red-600',
      description: 'Business Bay, Dubai'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-20 right-0 mb-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-72 backdrop-blur-md bg-white/95">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">The Avenue Real Estate</h3>
                    <p className="text-xs text-green-500 font-medium">Online now</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="h-3 w-3 text-gray-600" />
                </button>
              </div>

              {/* Contact Options */}
              <div className="space-y-2">
                {contactOptions.map((option, index) => (
                  <motion.button
                    key={option.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={option.action}
                    className={`w-full ${option.color} text-white rounded-xl p-3 flex items-center space-x-3 transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
                  >
                    <div className="flex-shrink-0">
                      {option.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium text-sm">{option.label}</p>
                      <p className="text-xs opacity-90">{option.description}</p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Quick Message */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-600 mb-2 font-medium">Quick Message:</p>
                <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 leading-relaxed">
                  "Hello! I'm interested in your luxury properties in Dubai. Could you please provide more information?"
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600'
        } flex items-center justify-center group`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Animation */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-green-400"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}

        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
            {t('team.whatsapp')} Support
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
          </div>
        </div>
      </motion.button>

      {/* Floating Particles */}
      {!isOpen && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full"
              style={{
                right: `${20 + i * 15}px`,
                top: `${15 + i * 10}px`,
              }}
              animate={{
                y: [-2, -8, -2],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
