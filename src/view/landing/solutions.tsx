"use client";

import { User, Building, Download, MapPin } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

function Solutions() {
  const { t } = useLanguage();
  const solutions = [
    {
      icon: <User className="h-6 w-6 text-[#dbbb90]" />,
      title: t('solutions.connect.title'),
      description: t('solutions.connect.description'),
    },
    {
      icon: <Building className="h-6 w-6 text-[#dbbb90]" />,
      title: t('solutions.list.title'),
      description: t('solutions.list.description'),
    },
    {
      icon: <Download className="h-6 w-6 text-[#dbbb90]" />,
      title: t('solutions.download.title'),
      description: t('solutions.download.description'),
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#dbbb90]" />,
      title: t('solutions.explore.title'),
      description: t('solutions.explore.description'),
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Clean Header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight font-serif tracking-tight">
              <span className="block mb-1">{t('solutions.headline.part1')}</span>
              <span className="block mb-1">{t('solutions.headline.part2')}</span>
              <span className="block text-[#dbbb90] font-normal">
                {t('solutions.headline.part3')}
              </span>
            </h2>
            
            {/* Simple Separator */}
            <div className="mt-8 flex items-center justify-center">
              <div className="w-16 h-px bg-[#dbbb90]/40"></div>
              <div className="w-1 h-1 bg-[#dbbb90] rounded-full mx-2"></div>
              <div className="w-16 h-px bg-[#dbbb90]/40"></div>
            </div>
          </div>

          {/* Compact Solutions Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#dbbb90]/30 transition-all duration-300 cursor-pointer"
              >
                {/* Icon Container */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-lg flex items-center justify-center group-hover:bg-[#dbbb90]/20 transition-all duration-300">
                    <div className="transform group-hover:scale-105 transition-transform duration-300">
                      {solution.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-medium text-lg leading-tight mb-3 group-hover:text-[#dbbb90] transition-colors duration-300">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
