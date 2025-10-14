"use client";

import { getAllProperties } from "@/src/api/offPlans";
import PropertyCard from "@/src/components/common/property-card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function Feature() {
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();
  const fetchproperty = async () => {
    setLoading(true);
    const query = "sort_by=total_count&sort_order=desc&page=1&size=4";
    try {
      const res = await getAllProperties(query);
      setProperty(res?.projects);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchproperty();
  }, []);

  return (
    <div className="flex flex-col items-center py-12 sm:py-16 px-4 sm:px-6 md:px-8 container mx-auto">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <p className="text-xs sm:text-sm uppercase tracking-wider mb-2 text-primary">
          {t('featured.title')}
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono font-thin text-[#1A202C] leading-tight mb-3 sm:mb-4">
          {t('featured.headline')}
        </h1>
        <p className="text-sm sm:text-[15px] text-gray-600 mx-auto max-w-2xl">
          {t('featured.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-6xl">
        {property?.map((property: any, i) => (
          <PropertyCard data={property} key={i} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center my-8 sm:my-10 md:my-11">
        <Link href={"/offPlans"}>
         <Button className="w-40 sm:w-48 h-10 sm:h-11 bg-[#dbbb90] hover:bg-[#C2A17B] text-white font-semibold py-2 px-4 rounded-lg transition-colors uppercase text-sm sm:text-base">
          {t('featured.viewAll')}
        </Button>
        </Link>
      </div>
    </div>
  );
}
