"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Settings,
  Home,
  DollarSign,
  Scale,
  Bed,
  Wrench,
  Users,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { Icon } from "@iconify/react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/src/components/ui/hover-card";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOverlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayOpen]);

  const navLinks = [
    { href: "/buy", label: "Buy" },
    { href: "/rent", label: "Rent" },
    { href: "/offPlans", label: "Projects" },
    { href: "/team", label: "Teams" },
    { href: "/communities", label: "Areas" },
    { href: "/service", label: "Services" },
    { href: "/blog", label: "Blogs" },
    { href: "/contactUs", label: "More" },
  ];
  const services = [
    {
      icon: <Settings className="h-4 w-4 text-gray-500" />,
      name: "Property Management"
    },
    {
      icon: <Home className="h-4 w-4 text-gray-500" />,
      name: "List Your Property"
    },
    {
      icon: <DollarSign className="h-4 w-4 text-gray-500" />,
      name: "Mortgages"
    },
    {
      icon: <Scale className="h-4 w-4 text-gray-500" />,
      name: "Conveyancing"
    },
    {
      icon: <Bed className="h-4 w-4 text-gray-500" />,
      name: "Short Term Rentals"
    },
    {
      icon: <Wrench className="h-4 w-4 text-gray-500" />,
      name: "Property Snagging"
    },
    {
      icon: <Users className="h-4 w-4 text-gray-500" />,
      name: "Partner Program"
    },
    
  ];

  const headerLink = [
    { href: "/buy", label: "Buy" },
    { href: "/rent", label: "Rent" },
    { href: "/offPlans", label: "Projects" },
    { href: "/team", label: "Teams" },
    { href: "/communities", label: "Areas" },
    { href: "/service", label: "Services", hasDropdown: true },
    { href: "/blog", label: "Blogs" },
    { href: "/contactUs", label: "More" },
  ];
  useEffect(() => {
    if (!isOverlayOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      // Don't close if clicking inside the mobile overlay
      if (target.closest('[data-mobile-overlay]')) {
        return;
      }
      setIsOverlayOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOverlayOpen]);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "luxury-glass shadow-2xl border-b-2 border-[#D4AF37]/20" : "luxury-glass-gold"
      }`}
    >
      {/* Ultra-Luxury Background Effects */}
      <div className="absolute inset-0 luxury-bg-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 luxury-bg-gold animate-luxuryShimmer"></div>
      
      <nav
        className={cn(
          "container mx-auto flex items-center justify-between px-4 md:px-6 relative z-10",
          isScrolled ? "h-20" : "h-24"
        )}
      >
        {/* Ultra-Luxury Logo */}
        <div className="flex items-center">
          <Link href={"/"} className="luxury-hover group">
            <div className="relative">
              {/* Luxury Glow Effect */}
              <div className="absolute inset-0 luxury-bg-gold rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
              <Image
                src="/images/logo.png"
                alt="The Avenue Real Estate Logo"
                width={220}
                height={80}
                className="object-contain w-52 h-16 sm:w-56 sm:h-18 md:w-60 md:h-20 lg:w-64 lg:h-22 xl:w-72 xl:h-24 transition-all duration-500 hover:scale-110 luxury-text-shadow relative z-10"
              />
              {/* Luxury Decorative Elements */}
              <div className="absolute -top-1 -right-1 w-3 h-3 luxury-bg-gold rounded-full opacity-0 group-hover:opacity-100 animate-luxurySparkle transition-opacity duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 luxury-bg-bronze rounded-full opacity-0 group-hover:opacity-100 animate-luxuryPulse transition-opacity duration-300"></div>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-12">
          {headerLink.map((link, i) => {
            if (link.hasDropdown) {
              return (
                <HoverCard key={i} openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative pb-2 transition-all duration-500 font-serif text-[16px] font-medium tracking-[0.15em] luxury-hover group",
                        isScrolled && pathname === "/" ? "text-gray-900 hover:text-[#D4AF37]" : "text-gray-800 hover:text-[#D4AF37]",
                        "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0",
                        "after:luxury-bg-gold after:transition-all after:duration-500 hover:after:w-full after:animate-luxuryShimmer",
                        pathname === link.href && "after:w-full text-[#D4AF37] luxury-text-shadow"
                      )}
                    >
                      <span className="relative z-10">{link.label}</span>
                      {/* Luxury Glow Effect */}
                      <div className="absolute inset-0 luxury-bg-gold rounded-md opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm"></div>
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[500px] p-0" sideOffset={10}>
                    <div className="luxury-glass-gold rounded-2xl shadow-2xl border-2 border-[#D4AF37]/20 overflow-hidden">
                      {/* Ultra-Luxury Header */}
                      <div className="p-6 border-b border-[#D4AF37]/20 luxury-bg">
                        <h3 className="luxury-text-static text-lg font-semibold tracking-[0.1em]">Our Luxury Services</h3>
                        <div className="w-12 h-0.5 luxury-bg-gold mt-2 animate-luxuryShimmer"></div>
                      </div>
                      
                      {/* Services Grid */}
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-3">
                          {/* Left Column */}
                          <div className="space-y-2">
                            {services.slice(0, 5).map((service, index) => (
                              <Link
                                key={index}
                                href={
                                  service.name === "List Your Property" ? "/list-your-property" :
                                  service.name === "Property Management" ? "/property-management" :
                                  service.name === "Mortgages" ? "/mortgages" :
                                  service.name === "Conveyancing" ? "/conveyancing" :
                                  service.name === "Short Term Rentals" ? "/short-term-rental" :
                                  "/service"
                                }
                                className="flex items-center space-x-3 p-3 rounded-xl hover:luxury-bg-gold/10 transition-all duration-300 cursor-pointer group luxury-hover border border-transparent hover:border-[#D4AF37]/20"
                              >
                                <div className="flex-shrink-0 transition-colors duration-200 group-hover:text-blue-600">
                                  {service.icon}
                                </div>
                                <span className="text-blue-900 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>

                          {/* Right Column */}
                          <div className="space-y-2">
                            {services.slice(5, 10).map((service, index) => (
                              <Link
                                key={index + 5}
                                href={
                                  service.name === "List Your Property" ? "/list-your-property" :
                                  service.name === "Property Management" ? "/property-management" :
                                  service.name === "Mortgages" ? "/mortgages" :
                                  service.name === "Conveyancing" ? "/conveyancing" :
                                  service.name === "Short-Term Rental" ? "/short-term-rental" :
                                  "/service"
                                }
                                className="flex items-center space-x-3 p-3 rounded-xl hover:luxury-bg-gold/10 transition-all duration-300 cursor-pointer group luxury-hover border border-transparent hover:border-[#D4AF37]/20"
                              >
                                <div className="flex-shrink-0 transition-colors duration-200 group-hover:text-blue-600">
                                  {service.icon}
                                </div>
                                <span className="text-blue-900 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              );
            }
            
            return (
            <Link
              key={i}
              href={link.href}
              className={cn(
                  "relative pb-2 transition-all duration-500 font-serif text-[16px] font-medium tracking-[0.15em] luxury-hover group",
                  isScrolled && pathname === "/" ? "text-gray-900 hover:text-[#D4AF37]" : "text-gray-800 hover:text-[#D4AF37]",
                "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0",
                "after:luxury-bg-gold after:transition-all after:duration-500 hover:after:w-full after:animate-luxuryShimmer",
                pathname === link.href && "after:w-full text-[#D4AF37] luxury-text-shadow"
              )}
            >
              <span className="relative z-10">{link.label}</span>
              {/* Luxury Glow Effect */}
              <div className="absolute inset-0 luxury-bg-gold rounded-md opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm"></div>
            </Link>
            );
          })}
        </div>

        {/* Right Side - Mobile Menu Only */}
        <div className="flex items-center">
          {/* Ultra-Luxury Mobile Menu Button */}
          <div
            className={cn(
              "lg:hidden cursor-pointer transition-all duration-500 luxury-hover group p-2 rounded-xl",
              isScrolled ? "text-[#D4AF37] hover:text-[#B8941F]" : "text-[#D4AF37] hover:text-[#B8941F]"
            )}
            onClick={() => setIsOverlayOpen(true)}
          >
            <div className="relative">
              <Menu className="h-7 w-7 transition-all duration-300 group-hover:scale-110" />
              {/* Luxury Glow Effect */}
              <div className="absolute inset-0 luxury-bg-gold rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Ultra-Luxury Mobile Overlay */}
      <div
        data-mobile-overlay
        className={`fixed top-0 bottom-0 right-0 w-full md:w-1/3 luxury-bg text-gray-900 z-[100] transform transition-transform duration-500 ease-in-out shadow-2xl ${
          isOverlayOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Luxury Background Effects */}
        <div className="absolute inset-0 luxury-bg-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-2 luxury-bg-gold animate-luxuryShimmer"></div>
        
        <div className="flex items-center justify-between p-6 border-b-2 border-[#D4AF37]/20 relative z-10">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="The Avenue Real Estate Logo"
              width={160}
              height={50}
              className="object-contain w-40 h-12"
            />
            <h2 className="text-lg font-semibold luxury-text-static tracking-[0.1em]">Menu</h2>
          </div>
          <button
          onClick={() => setIsOverlayOpen(false)}
            className="text-[#D4AF37] hover:text-[#B8941F] luxury-hover p-2 rounded-xl transition-all duration-300"
        >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-6 relative z-10">
          {navLinks.map((link, i) => {
            if (link.href === "/service") {
              return (
                <div key={i} className="space-y-3">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={cn(
                      "flex items-center justify-between w-full text-left text-gray-700 hover:text-[#D4AF37] transition-all duration-300 py-3 px-4 rounded-xl luxury-hover font-serif tracking-[0.1em]",
                      pathname === link.href && "text-[#D4AF37] font-medium luxury-text-shadow"
                    )}
                  >
                    <span className="text-lg">{link.label}</span>
                    <ChevronDown className={cn(
                      "h-5 w-5 transition-transform duration-300 text-[#D4AF37]",
                      isServicesOpen && "rotate-180"
                    )} />
                  </button>
                  
                  {/* Services Dropdown */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                      {services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={
                            service.name === "List Your Property" ? "/list-your-property" :
                            service.name === "Property Management" ? "/property-management" :
                            "/service"
                          }
                          onClick={() => setIsOverlayOpen(false)}
                          className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
                        >
                          <div className="flex-shrink-0 transition-colors duration-200 group-hover:text-blue-600">
                            {service.icon}
                          </div>
                          <span className="text-blue-900 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            
            return (
            <Link
              key={i}
              href={link.href}
              className={cn(
                  "text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2",
                  pathname === link.href && "text-gray-900 font-medium"
              )}
                onClick={() => setIsOverlayOpen(false)}
            >
              {link.label}
            </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
