import keywords from '@/seo/keywords.json';

type Region = 'international' | 'india' | 'services' | 'hybrid';

/**
 * Get keywords by category and subcategory
 */
export const getKeywords = (category: keyof typeof keywords, subcategory?: string): string[] => {
  if (subcategory && category in keywords) {
    const cat = keywords[category as keyof typeof keywords] as Record<string, string[]>;
    return subcategory in cat ? cat[subcategory] : [];
  }
  return [];
};

/**
 * Get all hybrid keywords with their locations
 */
export const getHybridKeywords = (): Array<{ base: string; locations: string[] }> => {
  return keywords.hybrid as Array<{ base: string; locations: string[] }>;
};

/**
 * Generate meta keywords for a specific page
 */
export const generateMetaKeywords = (primaryKeywords: string[], region?: string, service?: string): string => {
  let allKeywords = [...primaryKeywords];
  
  // Add region-specific keywords if region is provided
  if (region) {
    if (region in keywords.international) {
      allKeywords = [...allKeywords, ...getKeywords('international', region)];
    }
    if (region in keywords.india) {
      allKeywords = [...allKeywords, ...getKeywords('india', region)];
    }
  }
  
  // Add service-specific keywords if service is provided
  if (service && service in keywords.services) {
    allKeywords = [...allKeywords, ...getKeywords('services', service)];
  }
  
  // Add some hybrid variations
  if (region) {
    const hybrid = getHybridKeywords()
      .filter(h => h.locations.includes(region))
      .map(h => `${h.base} ${region}`);
    allKeywords = [...allKeywords, ...hybrid];
  }
  
  // Remove duplicates and join with commas
  return [...new Set(allKeywords)].join(', ');
};

/**
 * Get a random set of keywords for dynamic content
 */
export const getRandomKeywords = (count: number = 5): string[] => {
  const allKeywords: string[] = [];
  
  // Flatten all keywords
  Object.values(keywords).forEach(category => {
    if (Array.isArray(category)) {
      category.forEach(item => {
        if (typeof item === 'string') {
          allKeywords.push(item);
        } else if (item && typeof item === 'object' && 'base' in item && 'locations' in item) {
          item.locations.forEach(loc => {
            allKeywords.push(`${item.base} ${loc}`);
          });
        }
      });
    } else if (typeof category === 'object') {
      Object.values(category).forEach(subcategory => {
        if (Array.isArray(subcategory)) {
          allKeywords.push(...subcategory);
        }
      });
    }
  });
  
  // Shuffle and return requested number of keywords
  return allKeywords
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.min(count, allKeywords.length));
};
