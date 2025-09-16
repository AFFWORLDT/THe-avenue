import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";

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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-10 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  gap-8">
        {/* Newsletter Section */}
        <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 w-full bg-gradient-to-r from-[#dbbb90]/10 to-[#C2A17B]/10 p-6 rounded-2xl border border-[#dbbb90]/20">
          <h3 className="text-xl font-light tracking-wide leading-relaxed w-full md:flex-none md:w-[40%] text-white font-serif">
            Receive our exceptional real estate listings delivered straight to
            your inbox.
          </h3>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full md:flex-1">
            <label htmlFor="email-subscribe" className="sr-only">
              Email address for newsletter subscription
            </label>
            <Input
              id="email-subscribe"
              type="email"
              placeholder="Enter your email address"
              className="flex-grow bg-white/10 text-white border-[#dbbb90]/50 placeholder:text-white/60 focus-visible:ring-offset-0 focus-visible:ring-[#dbbb90] focus:border-[#dbbb90] rounded-lg md:w-1/2 w-full h-12 backdrop-blur-sm"
            />
            <Button className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] text-white font-medium tracking-wider py-3 px-6 transition-all duration-300 uppercase h-12 rounded-lg md:w-1/3 w-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-serif">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="text-lg  mb-4 font-serif">Sitemap</h4>
          <ul className="space-y-2 text-sm font-serif">
            {sitemapLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="relative inline-block hover:text-gray-300 transition-colors
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[2px] after:w-0 after:bg-[#dbbb90]
                             after:transition-all after:duration-300 hover:after:w-full font-serif"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="font-serif">
          <h4 className="text-lg  mb-4 font-serif">Contact</h4>
          <address className="not-italic space-y-2 text-sm font-serif leading-relaxed">
            <p>1403, B2B Tower, Business Bay</p>
            <p>Dubai, UAE</p>
            <p>
              <span className="font-serif">P</span>{" "}
              <a
                href="tel:+971507705315"
                className="relative inline-block hover:text-gray-300 transition-colors
                           after:content-[''] after:absolute after:left-0 after:bottom-0
                           after:h-[2px] after:w-0 after:bg-[#dbbb90]
                           after:transition-all after:duration-300 hover:after:w-full font-serif"
              >
                +971 50 770 5315
              </a>
            </p>
            <p>
              <span className="font-sans">E</span>{" "}
              <a
                href="mailto:info@theavenue.ae"
                className="relative inline-block hover:text-gray-300 transition-colors
                           after:content-[''] after:absolute after:left-0 after:bottom-0
                           after:h-[2px] after:w-0 after:bg-[#dbbb90]
                           after:transition-all after:duration-300 hover:after:w-full font-serif"
              >
                info@theavenue.ae
              </a>
            </p>
          </address>
        </div>

        {/* Social Media */}
        <div className="font-serif">
          <h4 className="text-lg mb-4 font-serif">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/theavenuerealestate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#dbbb90] transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/theavenuerealestate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#dbbb90] transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781H7.721c-.49 0-.928.438-.928.928v8.449c0 .49.438.928.928.928h8.558c.49 0 .928-.438.928-.928V8.135c0-.49-.438-.928-.928-.928z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/the-avenue-real-estate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#dbbb90] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@theavenuerealestate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#dbbb90] transition-colors duration-300"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/971507705315"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#dbbb90] transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Legal Links */}
      <div className="container mx-auto border-t border-white/20 mt-8 pt-8">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 mb-4">
          <a href="/privacy-policy" className="hover:text-white transition-colors font-serif">
            Privacy Policy
          </a>
          <a href="/terms-conditions" className="hover:text-white transition-colors font-serif">
            Terms & Conditions
          </a>
          <a href="/cookie-policy" className="hover:text-white transition-colors font-serif">
            Cookie Policy
          </a>
          <a href="/disclaimer" className="hover:text-white transition-colors font-serif">
            Disclaimer
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto border-t border-white/20 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
        <p className="font-serif">
          &copy; {"2025 The Avenue Real Estate. All Rights Reserved."}
        </p>
      </div>
    </footer>
  );
}
