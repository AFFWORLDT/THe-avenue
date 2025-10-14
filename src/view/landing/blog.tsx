"use client"
import { BlogCard } from "@/src/components/common/card"
import { Button } from "@/src/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/src/contexts/LanguageContext"

const blogPosts = [
  {
    imageSrc: "/images/blog1.webp",
    date: "Jul 16, 2025",
    title: "Why Your Home Should Feel as Good as It Looks: The Psychology of Luxury Living",
    description: "Have you ever stepped into a space that looked stunning... yet somehow felt wrong?...",
    href: "/blog/details/why-your-home-should-feel-as-good-as-it-looks",
  },
  {
    imageSrc: "/images/blog2.webp",
    date: "Dec 24, 2024",
    title: "Why Buying Property in Dubai is Better than Renting",
    description: "Dubai's real estate market continues to be one of the most dynamic and sought-after...",
    href: "/blog/details/why-your-home-should-feel-as-good-as-it-looks",
  },
  {
    imageSrc: "/images/building.jpg",
    date: "Jan 8, 2024",
    title: "Why Invest in Dubai's Real Estate? A Look into the Future",
    description: "Introduction in the heart of the Middle East, Dubai shines as a beacon of progress...",
    href: "/blog/details/why-your-home-should-feel-as-good-as-it-looks",
  },
]

export function InsightsInspiration() {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm sm:text-base md:text-lg text-[#dbbb90] uppercase font-extralight tracking-wider mb-2">{t('blog.title')}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-gray-800 mb-3 sm:mb-4">
            {t('blog.headline')}
          </h2>
          <p className="text-xs sm:text-sm font-extralight text-gray-600 max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed tracking-wide">
            {t('blog.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
       <Link href={"/blog"} passHref>
        <Button className="w-40 sm:w-48 h-10 sm:h-11 bg-[#dbbb90] hover:bg-[#C2A17B] text-white font-extralight tracking-wider py-2 px-4 rounded-lg transition-colors uppercase text-sm sm:text-base">
       {t('blog.viewAll')}
          </Button>
       </Link>
        </motion.div>
      </div>
    </section>
  )
}
