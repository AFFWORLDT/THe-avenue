"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getAllDevelopers, Developer } from "@/src/api/developers";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Skeleton } from "@/src/components/ui/skeleton";
import Header from "@/src/components/common/header";
import Footer from "@/src/components/common/footer";

const DeveloperCard = ({ developer }: { developer: Developer }) => {
  return (
    <Card className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 rounded-2xl hover:shadow-2xl hover:border-[#dbbb90]/40 hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden">
      {/* Logo - Full Width */}
      <div className="w-full h-64 relative overflow-hidden">
        <Image
          src={developer.logoUrl}
          alt={developer.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/placeholder-logo.png";
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          {/* Name */}
          <h3 className="text-gray-900 font-semibold text-xl leading-tight group-hover:text-[#dbbb90] transition-colors duration-300 mb-2">
            {developer.name}
          </h3>
          
          {/* Subtle decoration */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#dbbb90] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </CardContent>
    </Card>
  );
};

const DeveloperCardSkeleton = () => {
  return (
    <Card className="bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 rounded-2xl overflow-hidden">
      <Skeleton className="w-full h-64" />
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <Skeleton className="h-6 w-32 mb-2" />
          <Skeleton className="h-0.5 w-12" />
        </div>
      </CardContent>
    </Card>
  );
};

export default function DevelopersPage() {
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalDevelopers, setTotalDevelopers] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const { t } = useLanguage();

  const fetchDevelopers = async (pageNum: number = 1, append: boolean = false) => {
    try {
      setLoading(true);
      const response = await getAllDevelopers(pageNum, 24);
      
      if (append) {
        setDevelopers(prev => [...prev, ...response.developers]);
      } else {
        setDevelopers(response.developers);
      }
      
      setTotalDevelopers(response.totalDevelopers);
      setHasMore(response.developers.length === 24);
    } catch (error) {
      console.error("Error fetching developers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevelopers(1, false);
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchDevelopers(nextPage, true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="container mx-auto py-16 sm:py-20 px-4 sm:px-6 md:px-8">
        {/* Header */}
        <section className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#dbbb90] to-transparent mx-auto mb-6"></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight font-serif tracking-tight mb-6">
              Dubai Developers
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#dbbb90] to-transparent mx-auto"></div>
          </div>
          
          <p className="max-w-4xl mx-auto text-lg sm:text-xl font-light text-gray-700 leading-relaxed mb-8">
            Explore properties from Dubai's most trusted and renowned developers. 
            From luxury residential towers to commercial developments, discover projects that define the city's skyline.
          </p>
          
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50">
            <span className="text-sm font-medium text-gray-600">
              Showing <span className="text-[#dbbb90] font-semibold">{developers.length}</span> of <span className="text-[#dbbb90] font-semibold">{totalDevelopers}</span> developers
            </span>
          </div>
        </section>

        {/* Developers Grid - 4 per screen */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {developers.map((developer) => (
            <DeveloperCard key={developer.id} developer={developer} />
          ))}
          
          {/* Loading Skeletons */}
          {loading && Array.from({ length: 8 }).map((_, index) => (
            <DeveloperCardSkeleton key={`skeleton-${index}`} />
          ))}
        </section>

        {/* Load More Button */}
        {hasMore && !loading && (
          <div className="text-center">
            <Button
              onClick={loadMore}
              className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#dbbb90] text-white px-12 py-4 text-lg font-light tracking-wider rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 uppercase transform hover:scale-105"
            >
              Load More Developers
            </Button>
          </div>
        )}

        {/* No More Results */}
        {!hasMore && developers.length > 0 && (
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50">
              <span className="text-sm font-medium text-gray-500">
                All developers loaded
              </span>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
