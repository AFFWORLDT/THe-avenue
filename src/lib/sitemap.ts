// Auto-generated sitemap for SEO optimization

export const generateSitemap = () => {
  const baseUrl = 'https://theavenue.ae';
  const currentDate = new Date().toISOString();

  const staticPages = [
    {
      url: '',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: '/buy',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: '/rent',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: '/offPlans',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: '/communities',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: '/team',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: '/service',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: '/blog',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: '/contactUs',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    // New service pages
    {
      url: '/buying-properties',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: '/renting-properties',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: '/selling-properties',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: '/property-management',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: '/commercial-properties',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: '/mortgage-finance-consultancy',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: '/useful-links',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    }
  ];

  // Dynamic property pages (would be generated from your database)
  const propertyPages = [
    // Example property pages - these would be dynamically generated
    {
      url: '/properties/dubai-marina-apartments',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7
    },
    {
      url: '/properties/downtown-dubai-penthouses',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7
    },
    {
      url: '/properties/palm-jumeirah-villas',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7
    }
  ];

  // Keyword-based pages for SEO
  const keywordPages = [
    {
      url: '/properties/dubai-marina',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: '/properties/downtown-dubai',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: '/properties/palm-jumeirah',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: '/properties/business-bay',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: '/properties/jumeirah-lake-towers',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: '/properties/dubai-hills-estate',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: '/buy-apartments-dubai',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: '/rent-villas-dubai',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: '/luxury-penthouses-dubai',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: '/investment-properties-dubai',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    }
  ];

  return [...staticPages, ...propertyPages, ...keywordPages].map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency as 'daily' | 'weekly' | 'monthly' | 'yearly',
    priority: page.priority
  }));
};

// SEO keywords for content generation
export const seoKeywords = {
  locations: [
    'Dubai Marina',
    'Downtown Dubai',
    'Palm Jumeirah',
    'Business Bay',
    'Jumeirah Lake Towers',
    'Dubai Hills Estate',
    'DIFC',
    'Dubai Sports City',
    'Dubai Silicon Oasis',
    'Jumeirah Village Circle'
  ],
  propertyTypes: [
    'Apartments',
    'Villas',
    'Penthouses',
    'Townhouses',
    'Off-Plan Properties',
    'Commercial Properties',
    'Office Spaces',
    'Retail Units'
  ],
  services: [
    'Property Buying',
    'Property Renting',
    'Property Selling',
    'Property Management',
    'Investment Consulting',
    'Mortgage Services',
    'Legal Services'
  ],
  modifiers: [
    'Luxury',
    'Premium',
    'Exclusive',
    'Investment',
    'Modern',
    'Contemporary',
    'Furnished',
    'Unfurnished',
    'Waterfront',
    'City View'
  ]
};

// Generate keyword combinations for SEO
export const generateKeywordCombinations = (): string[] => {
  const combinations: string[] = [];
  
  seoKeywords.locations.forEach(location => {
    seoKeywords.propertyTypes.forEach(type => {
      seoKeywords.modifiers.forEach(modifier => {
        combinations.push(`${modifier} ${type} ${location}`);
        combinations.push(`${type} ${location} ${modifier}`);
      });
    });
  });

  return combinations;
};
