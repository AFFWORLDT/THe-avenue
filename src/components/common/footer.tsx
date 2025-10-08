"use client";

import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import { useLanguage } from "@/src/contexts/LanguageContext";

const getSitemapLinks = (t: (key: string) => string) => [
  { href: "/buy", label: t('navigation.buy') },
  { href: "/buying-properties", label: t('services.buyingProperties') },
  { href: "/rent", label: t('navigation.rent') },
  { href: "/renting-properties", label: t('services.rentingProperties') },
  { href: "/selling-properties", label: t('services.sellingProperties') },
  { href: "/offPlans", label: t('navigation.projects') },
  { href: "/property-management", label: t('services.propertyManagement') },
  { href: "/commercial-properties", label: t('services.commercialProperties') },
  { href: "/mortgage-finance-consultancy", label: t('services.mortgageFinanceConsultancy') },
  { href: "/communities", label: t('navigation.areas') },
  { href: "/whyDubai", label: "Why Dubai" },
  { href: "/useful-links", label: t('services.usefulLinks') },
  { href: "/service", label: t('navigation.services') },
  { href: "/contactUs", label: t('navigation.more') },
];

export default function Footer() {
  const { t } = useLanguage();
  const sitemapLinks = getSitemapLinks(t);
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white overflow-hidden">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dbbb90' fill-opacity='0.15'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      {/* Luxury Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#dbbb90]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#dbbb90]/20 to-transparent"></div>
      
      <div className="relative z-10 py-12 px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Newsletter Section */}
          <div className="mb-12">
            <div className="relative bg-gradient-to-r from-[#dbbb90]/10 via-[#C2A17B]/8 to-[#dbbb90]/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-[#dbbb90]/20 shadow-xl">
              {/* Premium Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#dbbb90]/15 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-[#C2A17B]/15 to-transparent rounded-full blur-lg"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-light tracking-widest leading-relaxed text-white font-serif mb-2">
                    {t('footer.newsletter.title')}
                    <span className="block text-[#dbbb90] font-normal">{t('footer.newsletter.subtitle')}</span>
                  </h3>
                  <p className="text-white/85 text-lg font-light leading-relaxed font-serif max-w-2xl">
                    {t('footer.newsletter.description')}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[400px]">
                  <label htmlFor="email-subscribe" className="sr-only">
                    Email address for newsletter subscription
                  </label>
                  <Input
                    id="email-subscribe"
                    type="email"
                    placeholder={t('footer.newsletter.placeholder')}
                    className="flex-grow bg-white/8 text-white border-[#dbbb90]/40 placeholder:text-white/50 focus-visible:ring-offset-0 focus-visible:ring-[#dbbb90]/50 focus:border-[#dbbb90] rounded-xl h-12 backdrop-blur-sm font-serif text-base px-6 transition-all duration-300 hover:bg-white/12"
                  />
                  <Button className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] text-white font-light tracking-widest py-3 px-6 transition-all duration-300 uppercase h-12 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-serif text-base min-w-[140px] border border-[#dbbb90]/20">
                    {t('footer.newsletter.button')}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {/* Sitemap */}
            <div className="lg:col-span-1">
              <h4 className="text-lg sm:text-xl font-light tracking-widest mb-4 sm:mb-6 font-serif text-[#dbbb90] relative">
                {t('footer.sitemap')}
                <div className="absolute -bottom-1 left-0 w-6 sm:w-8 h-px bg-gradient-to-r from-[#dbbb90] to-transparent"></div>
              </h4>
              <ul className="space-y-3">
                {sitemapLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="relative inline-block text-white/75 hover:text-white transition-all duration-300 font-light group
                                 after:content-[''] after:absolute after:left-0 after:bottom-0
                                 after:h-[1px] after:w-0 after:bg-[#dbbb90]
                                 after:transition-all after:duration-300 hover:after:w-full font-serif text-base
                                 hover:translate-x-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-1">
              <h4 className="text-lg sm:text-xl font-light tracking-widest mb-4 sm:mb-6 font-serif text-[#dbbb90] relative">
                {t('footer.contact')}
                <div className="absolute -bottom-1 left-0 w-6 sm:w-8 h-px bg-gradient-to-r from-[#dbbb90] to-transparent"></div>
              </h4>
              <address className="not-italic space-y-4 text-white/75 font-light leading-relaxed">
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-[#dbbb90]/15 rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-[#dbbb90]/25 transition-colors duration-300">
                    <svg className="w-3 h-3 text-[#dbbb90]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-serif text-base">1403, B2B Tower, Business Bay</p>
                    <p className="font-serif text-base">Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-6 h-6 bg-[#dbbb90]/15 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#dbbb90]/25 transition-colors duration-300">
                    <svg className="w-3 h-3 text-[#dbbb90]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <a
                    href="tel:+971507705315"
                    className="relative inline-block hover:text-white transition-all duration-300 font-serif text-base
                               after:content-[''] after:absolute after:left-0 after:bottom-0
                               after:h-[1px] after:w-0 after:bg-[#dbbb90]
                               after:transition-all after:duration-300 hover:after:w-full"
                  >
                    +971 50 770 5315
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-6 h-6 bg-[#dbbb90]/15 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#dbbb90]/25 transition-colors duration-300">
                    <svg className="w-3 h-3 text-[#dbbb90]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:info@theavenue.ae"
                    className="relative inline-block hover:text-white transition-all duration-300 font-serif text-base
                               after:content-[''] after:absolute after:left-0 after:bottom-0
                               after:h-[1px] after:w-0 after:bg-[#dbbb90]
                               after:transition-all after:duration-300 hover:after:w-full"
                  >
                    info@theavenue.ae
                  </a>
                </div>
              </address>
            </div>

            {/* Social Media */}
            <div className="lg:col-span-1">
              <h4 className="text-lg sm:text-xl font-light tracking-widest mb-4 sm:mb-6 font-serif text-[#dbbb90] relative">
                {t('footer.followUs')}
                <div className="absolute -bottom-1 left-0 w-6 sm:w-8 h-px bg-gradient-to-r from-[#dbbb90] to-transparent"></div>
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/theavenurealestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/8 hover:bg-[#dbbb90]/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 hover:border-[#dbbb90]/30 luxury-hover"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-[#dbbb90] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/TheAvenue Real"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/8 hover:bg-[#dbbb90]/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 hover:border-[#dbbb90]/30 luxury-hover"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-[#dbbb90] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Gmail */}
                <a
                  href="mailto:realestatetheavenue@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/8 hover:bg-[#dbbb90]/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 hover:border-[#dbbb90]/30 luxury-hover"
                  aria-label="Gmail"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-[#dbbb90] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                </a>

                {/* Pinterest */}
                <a
                  href="https://www.pinterest.com/TheAvenueRE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/8 hover:bg-[#dbbb90]/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 hover:border-[#dbbb90]/30 luxury-hover"
                  aria-label="Pinterest"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-[#dbbb90] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>

                {/* Quora */}
                <a
                  href="https://www.quora.com/profile/The-Avenue-Real-Estate-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/8 hover:bg-[#dbbb90]/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 hover:border-[#dbbb90]/30 luxury-hover"
                  aria-label="Quora"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-[#dbbb90] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.737 18.646h-3.464c.683-1.508 1.738-2.962 2.836-4.245l-1.137-.841c-1.102 1.298-2.355 2.956-3.124 4.575-.409-.016-.738-.016-1.076-.016-4.085 0-6.772-3.071-6.772-7.123 0-4.067 2.687-7.123 6.772-7.123s6.772 3.056 6.772 7.123c0 2.128-.85 4.067-2.23 5.387l1.423 1.262zm-5.573-9.031c0 1.307 1.042 2.347 2.349 2.347 1.307 0 2.349-1.04 2.349-2.347 0-1.307-1.042-2.349-2.349-2.349-1.307 0-2.349 1.042-2.349 2.349z"/>
                  </svg>
                </a>

                {/* Snapchat */}
                <a
                  href="https://www.snapchat.com/add/theavenuereales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/8 hover:bg-[#dbbb90]/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 hover:border-[#dbbb90]/30 luxury-hover"
                  aria-label="Snapchat"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-[#dbbb90] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741a.36.36 0 0 1 .085.345c-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378 0 0-.6 2.281-.747 2.848-.269 1.045-1.004 2.352-1.498 3.146C9.66 23.651 10.843 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@theavenuerealesta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/8 hover:bg-[#dbbb90]/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 hover:border-[#dbbb90]/30 luxury-hover"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-[#dbbb90] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/971507705315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/8 hover:bg-[#dbbb90]/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 hover:border-[#dbbb90]/30 luxury-hover"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-[#dbbb90] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Company Info */}
            <div className="lg:col-span-1">
              <h4 className="text-lg sm:text-xl font-light tracking-widest mb-4 sm:mb-6 font-serif text-[#dbbb90] relative">
                {t('footer.aboutUs')}
                <div className="absolute -bottom-1 left-0 w-6 sm:w-8 h-px bg-gradient-to-r from-[#dbbb90] to-transparent"></div>
              </h4>
              <div className="space-y-4 text-white/75 font-light leading-relaxed">
                <p className="font-serif text-lg leading-relaxed">
                  {t('footer.description')}
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-[#dbbb90]/30 flex items-center justify-center bg-white/8 backdrop-blur-sm">
                    <Image
                      src="/images/logo.png"
                      alt="The Avenue Real Estate Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-serif font-medium text-white text-lg">{t('footer.companyName')}</p>
                    <p className="text-base text-white/60 font-serif">{t('footer.companySlogan')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-white/60 mb-6 sm:mb-8">
              <a href="/privacy-policy" className="hover:text-[#dbbb90] transition-all duration-300 font-serif font-light tracking-widest relative group
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[1px] after:w-0 after:bg-[#dbbb90]
                             after:transition-all after:duration-300 hover:after:w-full">
                {t('legal.privacyPolicy')}
              </a>
              <a href="/terms-conditions" className="hover:text-[#dbbb90] transition-all duration-300 font-serif font-light tracking-widest relative group
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[1px] after:w-0 after:bg-[#dbbb90]
                             after:transition-all after:duration-300 hover:after:w-full">
                {t('legal.termsConditions')}
              </a>
              <a href="/cookie-policy" className="hover:text-[#dbbb90] transition-all duration-300 font-serif font-light tracking-widest relative group
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[1px] after:w-0 after:bg-[#dbbb90]
                             after:transition-all after:duration-300 hover:after:w-full">
                {t('legal.cookiePolicy')}
              </a>
              <a href="/disclaimer" className="hover:text-[#dbbb90] transition-all duration-300 font-serif font-light tracking-widest relative group
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[1px] after:w-0 after:bg-[#dbbb90]
                             after:transition-all after:duration-300 hover:after:w-full">
                {t('legal.disclaimer')}
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 pb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-[#dbbb90]/30 flex items-center justify-center bg-white/8 backdrop-blur-sm">
                  <Image
                    src="/images/logo.png"
                    alt="The Avenue Real Estate Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="font-serif font-light text-white/75 tracking-widest text-base">
                  &copy; 2025 The Avenue Real Estate. All Rights Reserved.
                </p>
              </div>
              <div className="text-[#D4AF37] text-sm font-serif font-medium tracking-widest luxury-text-shadow">
                {t('footer.tagline')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
