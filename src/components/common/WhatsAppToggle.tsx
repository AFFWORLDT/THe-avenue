"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/src/contexts/LanguageContext';

export default function WhatsAppToggle() {
  const { t } = useLanguage();

  const phoneNumber = '+971507705315';
  const whatsappMessage = 'Hello! I would like to know more about your luxury properties in Dubai.';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Direct WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
        onClick={handleWhatsAppClick}
        className="relative w-16 h-16 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 flex items-center justify-center group border-2 border-white"
      >
        <MessageCircle className="h-6 w-6 text-white" />

        {/* Constant Pulse Animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-400"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
            Chat with us on WhatsApp
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
          </div>
        </div>
      </motion.button>
    </div>
  );
}
