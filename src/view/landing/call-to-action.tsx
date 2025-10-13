"use client";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/src/contexts/LanguageContext";
import LeadCaptureForm from "@/src/components/common/leadCaptureForm";

export function CallToAction() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-[#F8F5EF]">
      <div className="absolute bottom-0 inset-x-0 w-full h-64 sm:h-80 md:h-96 opacity-40">
        <Image
          src="/images/dubai-skyline-30.svg" 
          alt="Dubai Skyline"
          fill
          className="object-bottom"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <p className="text-xs sm:text-sm uppercase text-[#1A1A1A]/70 font-extralight tracking-wider mb-2">
            {t('callToAction.subtitle')}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-custom mb-3 sm:mb-4 tracking-wide text-[#1A1A1A]">
            {t('callToAction.title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-extralight max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed text-[#333]">
            {t('callToAction.description')}
          </p>
        </motion.div>

        {/* Lead Capture Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl sm:max-w-4xl mx-auto"
        >
          <LeadCaptureForm
            variant="cta"
            title="Get Your Free Property Consultation"
            subtitle="Speak with our expert agents and discover your perfect property today"
            showRecaptcha={true}
            onSuccess={(data) => {
              console.log('Lead captured:', data);
              // Here you would typically send the data to your CRM or backend
            }}
          />
        </motion.div>

        {/* Alternative CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mb-3 sm:mb-4">Or connect with us directly</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href={"/contactUs"}>
              <Button className="w-40 sm:w-48 h-10 sm:h-11 bg-[#dbbb90] hover:bg-[#C2A17B] text-white font-extralight tracking-wider py-2 px-4 btn-unified transition-colors uppercase text-sm sm:text-base">
                {t('callToAction.button')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
