import { MetadataRoute } from 'next';
import { getPublishedPosts, PostWithAuthor } from '@/lib/posts'; // Assuming getPublishedPosts returns PostWithAuthor

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.yourwebsite.com'; // Fallback, ensure this is set in your .env

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Dynamic blog posts
  const posts = await getPublishedPosts();
  const blogPostRoutes: MetadataRoute.Sitemap = posts.map((post: PostWithAuthor) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.updated_at ? new Date(post.updated_at) : new Date(), // Use post's updated_at or current date
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [
    ...staticRoutes,
    ...blogPostRoutes,
  ];
} 