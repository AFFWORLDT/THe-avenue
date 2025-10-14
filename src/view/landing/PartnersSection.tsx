"use client";

import React from 'react'
import { useLanguage } from '@/src/contexts/LanguageContext';

function PartnersSection() {
  const { t } = useLanguage();
  const partners = [
    {
      name: "AMAC",
      logo: (
        <div className="text-gray-800 font-light text-lg tracking-wider font-serif">DAMAC</div>
      )
    },
    {
      name: "EMAAR",
      logo: (
        <div className="text-gray-800 font-light text-lg tracking-wider font-serif">EMAAR</div>
      )
    },
    {
      name: "MERAAS",
      logo: (
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 border border-gray-800 flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-800"></div>
          </div>
          <span className="text-gray-800 font-light text-lg tracking-wider font-serif">MERAAS</span>
        </div>
      )
    },
    {
      name: "SOBHA REALTY",
      logo: (
        <div className="flex flex-col items-center">
          <span className="text-gray-800 font-light text-lg tracking-wider font-serif">SOBHA</span>
          <span className="text-gray-800 font-light text-sm tracking-wider font-serif">REALTY</span>
        </div>
      )
    },
    {
      name: "NAKHEEL ",
      logo: (
        <div className="text-gray-800 font-light text-lg tracking-wider font-serif">NAKHEEL</div>
      )
      
    },
    {
      name: "DAMAC",
      logo: (
        <div className="text-gray-800 font-light text-lg tracking-wider font-serif"> </div>
      )
    }
  ]

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex max-w-6xl mx-auto items-center justify-between">
          {/* Header */}
          <div className="flex-shrink-0">
            <h2 className="text-gray-600 text-sm font-light tracking-widest font-serif leading-relaxed mb-4">
              {t('partners.title')}
            </h2>
          </div>

          {/* Partners Logos */}
          <div className="flex-1 w-full overflow-hidden relative">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center space-x-6 lg:space-x-8 xl:space-x-12 min-w-max">
                {partners.map((partner, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    {partner.logo}
                  </div>
                ))}
              </div>
              {/* Second set of logos for seamless loop */}
              <div className="flex items-center space-x-6 lg:space-x-8 xl:space-x-12 min-w-max">
                {partners.map((partner, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    {partner.logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="md:hidden max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-gray-600 text-xs sm:text-sm font-light tracking-widest font-serif leading-relaxed mb-20">
              {t('partners.title')}
            </h2>
          </div>

          {/* Partners Logos - Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 py-3 sm:py-4 px-2"
              >
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default PartnersSection