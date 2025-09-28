import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";

const sitemapLinks = [
  { href: "/buy", label: "Buy" },
  { href: "/offPlans", label: "Off-Plan" },
  { href: "/rent", label: "Rent" },
  { href: "/communities", label: "Communities" },
  { href: "/whyDubai", label: "Why Dubai" },
  { href: "/service", label: "Services" },
  { href: "/contactUs", label: "Contact Us" },
];

export default function Footer() {
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
                    Stay Connected with
                    <span className="block text-[#dbbb90] font-normal">Luxury</span>
                  </h3>
                  <p className="text-white/85 text-lg font-light leading-relaxed font-serif max-w-2xl">
                    Receive our exceptional real estate listings and exclusive market insights delivered straight to your inbox.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[400px]">
                  <label htmlFor="email-subscribe" className="sr-only">
                    Email address for newsletter subscription
                  </label>
                  <Input
                    id="email-subscribe"
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-grow bg-white/8 text-white border-[#dbbb90]/40 placeholder:text-white/50 focus-visible:ring-offset-0 focus-visible:ring-[#dbbb90]/50 focus:border-[#dbbb90] rounded-xl h-12 backdrop-blur-sm font-serif text-base px-6 transition-all duration-300 hover:bg-white/12"
                  />
                  <Button className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] text-white font-light tracking-widest py-3 px-6 transition-all duration-300 uppercase h-12 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-serif text-base min-w-[140px] border border-[#dbbb90]/20">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Sitemap */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-light tracking-widest mb-6 font-serif text-[#dbbb90] relative">
                Sitemap
                <div className="absolute -bottom-1 left-0 w-8 h-px bg-gradient-to-r from-[#dbbb90] to-transparent"></div>
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
              <h4 className="text-xl font-light tracking-widest mb-6 font-serif text-[#dbbb90] relative">
                Contact
                <div className="absolute -bottom-1 left-0 w-8 h-px bg-gradient-to-r from-[#dbbb90] to-transparent"></div>
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
              <h4 className="text-xl font-light tracking-widest mb-6 font-serif text-[#dbbb90] relative">
                Follow Us
                <div className="absolute -bottom-1 left-0 w-8 h-px bg-gradient-to-r from-[#dbbb90] to-transparent"></div>
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/theavenuerealestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/8 hover:bg-[#dbbb90]/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 hover:border-[#dbbb90]/30"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-[#dbbb90] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/theavenuerealestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/8 hover:bg-[#dbbb90]/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 hover:border-[#dbbb90]/30"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-[#dbbb90] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781H7.721c-.49 0-.928.438-.928.928v8.449c0 .49.438.928.928.928h8.558c.49 0 .928-.438.928-.928V8.135c0-.49-.438-.928-.928-.928z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/the-avenue-real-estate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/8 hover:bg-[#dbbb90]/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 hover:border-[#dbbb90]/30"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-[#dbbb90] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@theavenuerealestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/8 hover:bg-[#dbbb90]/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 hover:border-[#dbbb90]/30"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-[#dbbb90] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/971507705315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/8 hover:bg-[#dbbb90]/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 hover:border-[#dbbb90]/30"
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
              <h4 className="text-xl font-light tracking-widest mb-6 font-serif text-[#dbbb90] relative">
                About Us
                <div className="absolute -bottom-1 left-0 w-8 h-px bg-gradient-to-r from-[#dbbb90] to-transparent"></div>
              </h4>
              <div className="space-y-4 text-white/75 font-light leading-relaxed">
                <p className="font-serif text-lg leading-relaxed">
                  Dubai's premier luxury real estate destination, connecting discerning clients with exceptional properties.
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
                    <p className="font-serif font-medium text-white text-lg">The Avenue</p>
                    <p className="text-base text-white/60 font-serif">Real Estate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 mb-8">
              <a href="/privacy-policy" className="hover:text-[#dbbb90] transition-all duration-300 font-serif font-light tracking-widest relative group
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[1px] after:w-0 after:bg-[#dbbb90]
                             after:transition-all after:duration-300 hover:after:w-full">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="hover:text-[#dbbb90] transition-all duration-300 font-serif font-light tracking-widest relative group
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[1px] after:w-0 after:bg-[#dbbb90]
                             after:transition-all after:duration-300 hover:after:w-full">
                Terms & Conditions
              </a>
              <a href="/cookie-policy" className="hover:text-[#dbbb90] transition-all duration-300 font-serif font-light tracking-widest relative group
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[1px] after:w-0 after:bg-[#dbbb90]
                             after:transition-all after:duration-300 hover:after:w-full">
                Cookie Policy
              </a>
              <a href="/disclaimer" className="hover:text-[#dbbb90] transition-all duration-300 font-serif font-light tracking-widest relative group
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[1px] after:w-0 after:bg-[#dbbb90]
                             after:transition-all after:duration-300 hover:after:w-full">
                Disclaimer
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
              <div className="text-white/60 text-sm font-serif font-light tracking-widest">
                Crafted with luxury in mind
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
