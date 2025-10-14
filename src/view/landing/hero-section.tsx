"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MapPin, Home, Bed, Search } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import { BackgroundImageSlider } from "@/src/components/ui/background-image-slider";

export default function HeroSection() {
  const { t } = useLanguage();
  const router = useRouter();
  
  // Search form state
  const [searchForm, setSearchForm] = useState({
    listingType: "",
    location: "",
    propertyType: "",
    bedrooms: ""
  });

  // Current project state for dynamic display
  const [currentProject, setCurrentProject] = useState<any>(null);

  // Handle project change from background slider
  const handleProjectChange = useCallback((project: any) => {
    setCurrentProject(project);
  }, []);

  // Handle search form submission
  const handleSearch = () => {
    const { listingType, location, propertyType, bedrooms } = searchForm;
    
    // Build query parameters
    const params = new URLSearchParams();
    
    if (listingType) {
      if (listingType === 'buy') {
        router.push('/buy');
        return;
      } else if (listingType === 'rent') {
        router.push('/rent');
        return;
      } else if (listingType === 'projects') {
        router.push('/offPlans');
        return;
      }
    }
    
    // If no specific listing type, go to buy page with filters
    if (location && location !== 'any') params.append('location', location);
    if (propertyType && propertyType !== 'any') params.append('type', propertyType);
    if (bedrooms && bedrooms !== 'any') params.append('bedrooms', bedrooms);
    
    const queryString = params.toString();
    router.push(`/buy${queryString ? `?${queryString}` : ''}`);
  };

  // Handle form field changes
  const handleFieldChange = (field: string, value: string) => {
    setSearchForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section 
      className="relative min-h-screen w-full flex items-center justify-center text-center luxury-bg overflow-hidden"
    >
      {/* Ultra-Luxury Background Effects */}
      <div className="absolute inset-0 luxury-bg-pattern opacity-20"></div>
      
      {/* Luxury Animated Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 luxury-bg-radial rounded-full animate-luxuryFloat opacity-30 blur-xl"></div>
      <div className="absolute top-20 right-20 w-24 h-24 luxury-bg-gold rounded-full animate-luxuryBreathe opacity-20 blur-lg"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 luxury-bg-bronze rounded-full animate-luxuryPulse opacity-25 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 luxury-bg-radial rounded-full animate-luxuryFloat opacity-20 blur-2xl"></div>

      {/* Dynamic Project Images Background */}
      <BackgroundImageSlider className="z-0" onProjectChange={handleProjectChange} />

      {/* Ultra-Luxury Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent z-16" />
      
      {/* Luxury Cinematic Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/50 z-17" />

      {/* Modern Search Form - Responsive Positioning */}
      <div className="absolute top-20 sm:top-28 md:top-32 lg:top-36 xl:top-40 left-1/2 transform -translate-x-1/2 z-30 px-4 sm:px-6 lg:px-8 container w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
        >
          <div className="w-full">
            {/* Property Type Selection - Responsive */}
            <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
              <div className="flex bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20 overflow-x-auto">
                <button
                  onClick={() => handleFieldChange('listingType', 'buy')}
                  className={`px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 rounded-md text-xs sm:text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                    searchForm.listingType === 'buy'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  Buy
                </button>
                <button
                  onClick={() => handleFieldChange('listingType', 'rent')}
                  className={`px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 rounded-md text-xs sm:text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                    searchForm.listingType === 'rent'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  Rent
                </button>
                <button
                  onClick={() => handleFieldChange('listingType', 'projects')}
                  className={`px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 rounded-md text-xs sm:text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                    searchForm.listingType === 'projects'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  Off-plan
                </button>
              </div>
            </div>

            {/* Main Search Container - Responsive */}
            <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-end">
                {/* Location Search */}
                <div className="flex-1 w-full">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Area, development..."
                      value={searchForm.location}
                      onChange={(e) => handleFieldChange('location', e.target.value)}
                      className="pl-10 h-10 sm:h-12 md:h-14 text-sm sm:text-base text-gray-900 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="w-full sm:w-auto">
                  <Button
                    onClick={handleSearch}
                    className="w-full sm:w-36 md:w-40 lg:w-48 h-10 sm:h-12 md:h-14 text-sm sm:text-base bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white hover:from-[#B8860B] hover:to-[#D4AF37] border border-[#D4AF37] shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">1,080 results</span>
                    <span className="sm:hidden">Search</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ultra-Luxury Hero Title - Responsive Center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white text-center max-w-7xl w-full px-4 mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Separator above project title */}
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent mx-auto mb-4 sm:mb-6"></div>
          
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light mb-2 sm:mb-3 md:mb-4 text-white font-serif tracking-tight leading-tight">
            <span className="drop-shadow-lg bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
              {currentProject ? currentProject.name : t('hero.title')}
            </span>
            <br />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl bg-gradient-to-r from-[#D4AF37]/80 via-white to-[#D4AF37]/80 bg-clip-text text-transparent">
              {currentProject ? currentProject.location.community : t('hero.subtitle')}
            </span>
          </h1>
          
          <motion.p 
            className="text-xs sm:text-sm md:text-base lg:text-lg uppercase max-w-3xl mx-auto leading-tight tracking-tight font-serif drop-shadow-md px-2 bg-gradient-to-r from-[#D4AF37]/70 via-white/90 to-[#D4AF37]/70 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {currentProject ? 
              `${currentProject.newParam.bedroomMin}-${currentProject.newParam.bedroomMax} Bedroom ${currentProject.developer.name} Development` : 
              t('hero.description')
            }
          </motion.p>
          
          {/* Separator below project description */}
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent mx-auto mt-4 sm:mt-6"></div>

          {/* Dynamic Project CTA Button */}
          {currentProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6 sm:mt-8"
            >
              <Button 
                onClick={() => router.push(`/offPlans/details/${currentProject.id}`)}
                className="bg-gradient-to-r from-[#D4AF37]/20 via-white/10 to-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/40 text-white hover:from-[#D4AF37]/30 hover:via-white/20 hover:to-[#D4AF37]/30 hover:border-[#D4AF37]/60 font-semibold tracking-[0.1em] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-3 sm:px-4 md:px-5 py-2 sm:py-3 text-xs sm:text-sm rounded-lg"
              >
                <span className="hidden sm:inline">View Project Details</span>
                <span className="sm:hidden">View Details</span>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

    </section>
  );
}
