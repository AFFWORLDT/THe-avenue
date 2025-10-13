"use client";

import { useLanguage } from "@/src/contexts/LanguageContext";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { 
  TrendingUp, 
  Globe, 
  Lightbulb, 
  Home, 
  Building, 
  MapPin,
  Shield,
  Star,
  Users,
  Briefcase,
  Plane,
  Car,
  Clock,
  CheckCircle,
  Target,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WhyAbuDhabiPage() {
  const { t } = useLanguage();

  const economicHighlights = [
    "Over 12x GDP growth in the past four decades",
    "Diversified economy with expanding sectors",
    "Home to ADIA and Mubadala sovereign wealth funds",
    "Supported by Abu Dhabi Vision 2030"
  ];

  const connectivityFeatures = [
    "33% of the world reachable within 4 hours",
    "80% within 8 hours",
    "Five international airports",
    "Advanced seaports and logistics networks"
  ];

  const innovationDrivers = [
    "Hub71: Over 300 startups supported",
    "USD 1.6 billion+ raised collectively",
    "Strong government support for R&D",
    "Focused investment in AI, green energy, and fintech"
  ];

  const realEstateAdvantages = [
    "6–8% annual rental yields",
    "Consistent capital appreciation",
    "High-end residential and commercial developments",
    "One of the world's safest cities"
  ];

  const businessAdvantages = [
    "0% personal income tax",
    "Competitive corporate tax rates",
    "100% foreign ownership in free zones",
    "Transparent regulations and investor protection"
  ];

  const yasIslandAttractions = [
    "Ferrari World Abu Dhabi",
    "Warner Bros. World",
    "Yas Waterworld",
    "Yas Marina Circuit (Formula 1)",
    "SeaWorld Abu Dhabi",
    "Yas Mall and Yas Bay Waterfront",
    "Disneyland Abu Dhabi (Upcoming)"
  ];

  const yasIslandBenefits = [
    "6–8% annual rental yields",
    "15%+ capital appreciation",
    "USD 2 billion+ infrastructure investment",
    "Premium apartments, villas, and waterfront residences"
  ];

  const connectivityData = [
    { destination: "Abu Dhabi International Airport", time: "10 minutes" },
    { destination: "Downtown Abu Dhabi", time: "30 minutes" },
    { destination: "Dubai", time: "50 minutes" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-br from-[#dbbb90] to-[#C2A17B] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 font-serif leading-tight">
              WHY INVEST IN ABU DHABI
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
              The Capital of Innovation, Stability & Global Growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#dbbb90] hover:bg-gray-100 font-semibold px-8 py-3"
              >
                Explore Investment Opportunities
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#dbbb90] font-semibold px-8 py-3 bg-transparent"
              >
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 font-serif">
              A Destination of Economic Excellence
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Abu Dhabi stands as the capital of the United Arab Emirates and one of the most prosperous and forward-looking economies in the world. A destination that combines economic strength, global connectivity, innovation, and a premium quality of life — making it a prime choice for investors seeking sustainable, long-term returns.
            </p>
          </div>
        </div>
      </section>

      {/* Economic Powerhouse Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <TrendingUp className="h-12 w-12 text-[#dbbb90] mr-4" />
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 font-serif">
                  Economic Powerhouse
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Highlights</h3>
                <div className="space-y-4">
                  {economicHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#dbbb90] mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#dbbb90] mb-2">USD 1.7T+</div>
                  <p className="text-gray-600 mb-6">Assets managed by sovereign wealth funds</p>
                  <div className="text-3xl font-bold text-[#dbbb90] mb-2">12x</div>
                  <p className="text-gray-600">GDP growth in past four decades</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#dbbb90]/10 p-8 rounded-xl">
              <div className="flex items-start">
                <Lightbulb className="h-8 w-8 text-[#dbbb90] mr-4 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Investor Insight</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Abu Dhabi's economy is resilient, government-backed, and globally trusted — offering unmatched economic security and growth potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Location Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Globe className="h-12 w-12 text-[#dbbb90] mr-4" />
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 font-serif">
                  Strategic Location & Global Connectivity
                </h2>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Abu Dhabi sits at the crossroads of major global markets, connecting East and West through world-class infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {connectivityFeatures.map((feature, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-[#dbbb90] mb-2">
                      {index === 0 ? "33%" : index === 1 ? "80%" : index === 2 ? "5" : "∞"}
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start">
                <Shield className="h-8 w-8 text-[#dbbb90] mr-4 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Investor Insight</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A stable and secure gateway for international businesses and investors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Zap className="h-12 w-12 text-[#dbbb90] mr-4" />
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 font-serif">
                  Innovation & Knowledge Economy
                </h2>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Abu Dhabi is a leader in digital transformation, research, and technology investment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Growth Drivers</h3>
                <div className="space-y-4">
                  {innovationDrivers.map((driver, index) => (
                    <div key={index} className="flex items-start">
                      <Target className="h-6 w-6 text-[#dbbb90] mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{driver}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#dbbb90] mb-2">300+</div>
                  <p className="text-gray-600">Startups supported by Hub71</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#dbbb90] mb-2">USD 1.6B+</div>
                  <p className="text-gray-600">Collectively raised by startups</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#dbbb90]/10 p-8 rounded-xl">
              <div className="flex items-start">
                <Lightbulb className="h-8 w-8 text-[#dbbb90] mr-4 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Investor Insight</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Innovation is the cornerstone of Abu Dhabi's future — creating opportunities for technology-driven growth and sustainable value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Home className="h-12 w-12 text-[#dbbb90] mr-4" />
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 font-serif">
                  Real Estate & Lifestyle Excellence
                </h2>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Abu Dhabi offers premium real estate investments supported by high rental yields and luxury lifestyle appeal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {realEstateAdvantages.map((advantage, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-[#dbbb90] mb-2">
                      {index === 0 ? "6-8%" : index === 1 ? "∞" : index === 2 ? "★" : "🛡️"}
                    </div>
                    <p className="text-gray-700 text-sm">{advantage}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start">
                <Star className="h-8 w-8 text-[#dbbb90] mr-4 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Investor Insight</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Abu Dhabi real estate combines stability, luxury, and profitability — making it a long-term wealth preservation asset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Environment Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Briefcase className="h-12 w-12 text-[#dbbb90] mr-4" />
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 font-serif">
                  Business-Friendly Environment
                </h2>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Abu Dhabi ensures a supportive regulatory and fiscal environment for international investors.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Advantages</h3>
                <div className="space-y-4">
                  {businessAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#dbbb90] mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{advantage}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#dbbb90] mb-2">0%</div>
                  <p className="text-gray-600">Personal income tax</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#dbbb90] mb-2">100%</div>
                  <p className="text-gray-600">Foreign ownership in free zones</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#dbbb90]/10 p-8 rounded-xl">
              <div className="flex items-start">
                <Shield className="h-8 w-8 text-[#dbbb90] mr-4 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Investor Insight</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Abu Dhabi ranks among the world's most secure and business-friendly investment destinations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yas Island Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#dbbb90]/10 to-[#C2A17B]/10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 font-serif">
                WHY INVEST IN YAS ISLAND, ABU DHABI
              </h2>
              <p className="text-xl text-gray-700 font-light">
                The Capital's Flagship Destination for Luxury, Lifestyle, and Investment Growth
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">World-Class Attractions</h3>
                <div className="space-y-3">
                  {yasIslandAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-center">
                      <Star className="h-5 w-5 text-[#dbbb90] mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{attraction}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Landmark</h4>
                <p className="text-gray-700 leading-relaxed">
                  Disneyland Abu Dhabi – the first Disney resort in the Middle East, set to redefine tourism and family entertainment.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Real Estate Market Strength</h3>
                <div className="space-y-4">
                  {yasIslandBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <TrendingUp className="h-6 w-6 text-[#dbbb90] mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#dbbb90] mb-2">6-8%</div>
                  <p className="text-gray-600">Annual rental yields</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#dbbb90] mb-2">15%+</div>
                  <p className="text-gray-600">Capital appreciation</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Strategic Connectivity</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {connectivityData.map((item, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#dbbb90] mb-2">{item.time}</div>
                    <p className="text-gray-700 text-sm">{item.destination}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#dbbb90]/10 p-8 rounded-xl">
              <div className="flex items-start">
                <Lightbulb className="h-8 w-8 text-[#dbbb90] mr-4 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Investor Insight</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Yas Island combines financial freedom, ownership security, and sustainable government-backed growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-light mb-8 font-serif">
              The Future of Investment
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Abu Dhabi and Yas Island together represent the convergence of economic power, global access, lifestyle excellence, and secure investment growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Summary</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Stable macroeconomic foundation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Strong infrastructure and innovation ecosystem
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    World-class lifestyle and hospitality offering
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    High-yielding real estate opportunities
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Call to Action</h3>
                <p className="text-lg font-light mb-4">
                  Invest in Abu Dhabi. Own a part of the future.
                </p>
                <p className="text-sm opacity-90">
                  Where opportunity meets stability and innovation becomes legacy.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#dbbb90] hover:bg-gray-100 font-semibold px-8 py-3"
              >
                Start Your Investment Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#dbbb90] font-semibold px-8 py-3 bg-transparent"
              >
                Download Investment Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
