import React from 'react';
import { generateMetaKeywords } from '@/utils/seoUtils';

interface SEOMetaTagsProps {
  title: string;
  description: string;
  primaryKeywords: string[];
  region?: string;
  service?: string;
  canonicalUrl?: string;
  imageUrl?: string;
}

export const SEOMetaTags: React.FC<SEOMetaTagsProps> = ({
  title,
  description,
  primaryKeywords,
  region,
  service,
  canonicalUrl,
  imageUrl = '/og-image.jpg'
}) => {
  const keywords = generateMetaKeywords(primaryKeywords, region, service);
  const fullTitle = `${title} | Your Agency Name`;
  
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </>
  );
};

export default SEOMetaTags;
