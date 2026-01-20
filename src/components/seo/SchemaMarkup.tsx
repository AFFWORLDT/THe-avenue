"use client";

import React from 'react';

interface SchemaMarkupProps {
  type: 'organization' | 'realEstate' | 'property' | 'breadcrumb' | 'faq' | 'article';
  data: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const getSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "The Avenue Real Estate",
          "alternateName": "The Avenue",
          "url": "https://theavenue.ae",
          "logo": "https://theavenue.ae/images/avenue_logo.png",
          "description": "Dubai's premier luxury real estate destination, connecting discerning clients with exceptional properties.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1403, B2B Tower, Business Bay",
            "addressLocality": "Dubai",
            "addressCountry": "UAE"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971522816492",
            "contactType": "customer service",
            "email": "info@theavenue.ae"
          },
          "areaServed": {
            "@type": "City",
            "name": "Dubai",
            "containedInPlace": {
              "@type": "Country",
              "name": "United Arab Emirates"
            }
          },
          "serviceType": ["Real Estate Sales", "Property Management", "Investment Consulting"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Real Estate Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Property Buying"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Property Renting"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Property Selling"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Property Management"
                }
              }
            ]
          }
        };

      case 'realEstate':
        return {
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "name": data.name || "Luxury Properties in Dubai",
          "description": data.description || "Premium real estate properties in Dubai's most desirable locations",
          "url": data.url || "https://theavenue.ae",
          "image": data.image || "https://theavenue.ae/images/hero-bg.jpg",
          "provider": {
            "@type": "RealEstateAgent",
            "name": "The Avenue Real Estate"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "AED",
            "availability": "https://schema.org/InStock"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressCountry": "UAE"
          }
        };

      case 'property':
        return {
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "image": data.image,
          "provider": {
            "@type": "RealEstateAgent",
            "name": "The Avenue Real Estate"
          },
          "offers": {
            "@type": "Offer",
            "price": data.price,
            "priceCurrency": "AED",
            "availability": "https://schema.org/InStock"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": data.address,
            "addressLocality": "Dubai",
            "addressCountry": "UAE"
          },
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": data.size,
            "unitCode": "MTK"
          },
          "numberOfRooms": data.bedrooms,
          "numberOfBathroomsTotal": data.bathrooms
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Organization",
            "name": "The Avenue Real Estate"
          },
          "publisher": {
            "@type": "Organization",
            "name": "The Avenue Real Estate",
            "logo": {
              "@type": "ImageObject",
              "url": "https://theavenue.ae/images/avenue_logo.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified
        };

      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema(), null, 2)
      }}
    />
  );
}
