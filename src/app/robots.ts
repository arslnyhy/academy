import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.yourwebsite.com'; // Fallback, ensure this is set

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Add disallow rules here if you have specific paths to block
        // e.g., disallow: '/admin/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
} 