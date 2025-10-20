"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/src/contexts/LanguageContext';
import { getAllDevelopers, Developer } from '@/src/api/developers';

function PartnersSection() {
  const { t } = useLanguage();
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        setLoading(true);
        const response = await getAllDevelopers(1, 12); // Get first 12 developers
        setDevelopers(response.developers);
      } catch (error) {
        console.error('Error fetching developers:', error);
        // Fallback to hardcoded partners if API fails
        setDevelopers([
          { id: 1, name: "EMAAR", logoUrl: "/images/placeholder-logo.png", documents: [] },
          { id: 2, name: "DAMAC", logoUrl: "/images/placeholder-logo.png", documents: [] },
          { id: 3, name: "NAKHEEL", logoUrl: "/images/placeholder-logo.png", documents: [] },
          { id: 4, name: "SOBHA", logoUrl: "/images/placeholder-logo.png", documents: [] },
          { id: 5, name: "MERAAS", logoUrl: "/images/placeholder-logo.png", documents: [] },
          { id: 6, name: "DUBAI PROPERTIES", logoUrl: "/images/placeholder-logo.png", documents: [] }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchDevelopers();
  }, []);

  // Fallback partners for loading state or if API fails
  const fallbackPartners = [
    { id: 1, name: "EMAAR", logoUrl: "/images/placeholder-logo.png", documents: [] },
    { id: 2, name: "DAMAC", logoUrl: "/images/placeholder-logo.png", documents: [] },
    { id: 3, name: "NAKHEEL", logoUrl: "/images/placeholder-logo.png", documents: [] },
    { id: 4, name: "SOBHA", logoUrl: "/images/placeholder-logo.png", documents: [] },
    { id: 5, name: "MERAAS", logoUrl: "/images/placeholder-logo.png", documents: [] },
    { id: 6, name: "DUBAI PROPERTIES", logoUrl: "/images/placeholder-logo.png", documents: [] }
  ];

  const partnersToShow = developers.length > 0 ? developers : fallbackPartners;

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
                {partnersToShow.map((developer, index) => (
                  <div
                    key={`first-${developer.id}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-24 h-12 relative">
                      <Image
                        src={developer.logoUrl}
                        alt={developer.name}
                        fill
                        className="object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/placeholder-logo.png";
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* Second set of logos for seamless loop */}
              <div className="flex items-center space-x-6 lg:space-x-8 xl:space-x-12 min-w-max">
                {partnersToShow.map((developer, index) => (
                  <div
                    key={`second-${developer.id}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-24 h-12 relative">
                      <Image
                        src={developer.logoUrl}
                        alt={developer.name}
                        fill
                        className="object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/placeholder-logo.png";
                        }}
                      />
                    </div>
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
            {partnersToShow.map((developer, index) => (
              <div
                key={developer.id}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 py-3 sm:py-4 px-2"
              >
                <div className="w-20 h-10 sm:w-24 sm:h-12 relative">
                  <Image
                    src={developer.logoUrl}
                    alt={developer.name}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/placeholder-logo.png";
                    }}
                  />
                </div>
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