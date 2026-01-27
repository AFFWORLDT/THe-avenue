"use client";
import { getAllBuyProperties } from "@/src/api/buy";
import { PropertyCard } from "@/src/components/common/card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import React from "react";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function Property() {
  const [property, setProperty] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { t } = useLanguage();

  const fetchproperty = async () => {
    setLoading(true);
    const query = "sort_by=total_count&sort_order=desc&page=1&size=3";
    try {
      console.log("Starting to fetch buy properties...");
      const res = await getAllBuyProperties(query);
      console.log("Received buy properties data:", res);
      
      // Handle different response structures
      if (res?.properties && Array.isArray(res.properties) && res.properties.length > 0) {
        setProperty(res.properties);
        console.log("Set buy properties:", res.properties.length);
      } else if (Array.isArray(res) && res.length > 0) {
        setProperty(res);
        console.log("Set buy properties from array:", res.length);
      } else {
        console.warn("No buy properties found in response:", res);
        setProperty([]);
      }
    } catch (error) {
      console.error("Error fetching buy properties:", error);
      // Set empty array on error to prevent crashes
      setProperty([]);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchproperty();
  }, []);

  const handleFavorite = (item: any) => {
    console.log("Added to favorites:", item);
    // Add your favorite logic here
  };

  return (
    <div className="min-h-screen bg-[#F2EEE8] text-[#1A202C]">
      <main className="container mx-auto py-10 sm:py-12 px-4 sm:px-6 md:px-8">
        <section className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-black text-xs sm:text-sm font-light tracking-widest mb-2 uppercase">
            {t('property.title')}
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono mb-3 sm:mb-4 text-[#1A202C] tracking-wide">
            {t('property.headline')}
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base font-light text-gray-700 leading-relaxed">
            {t('property.description')}
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {property?.map((obj:any,i) => (
            <PropertyCard
              photos={obj?.photos?.[0] || "/images/building.jpg"}
              title={obj?.title || "Luxury Property"}
              location={
                (typeof obj?.location === 'object' 
                  ? (obj?.location?.community || obj?.location?.city || "Dubai, UAE")
                  : obj?.location) || "Dubai, UAE"
              }
              price={obj?.price || "2,500,000"}
              bedrooms={obj?.bedrooms || 2}
              bathrooms={obj?.bathrooms || 2}
              area={obj?.area || "1,200 sq ft"}
              propertyId={obj?.id?.toString() || "1"}
              key={i}
            />
          ))}
        </section>

        <div className="text-center">
         <Link href={"/buy"}>
           <Button className="bg-[#D4B88C] hover:bg-[#C2A77B] text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-light tracking-wider rounded-lg shadow-md uppercase">
            {t('property.viewAll')}
          </Button>
         </Link>
        </div>
      </main>
    </div>
  );
}
