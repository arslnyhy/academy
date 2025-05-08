import { MetadataRoute } from 'next';
import { getPublishedPosts, PostWithAuthor } from '@/lib/posts'; // Assuming getPublishedPosts returns PostWithAuthor

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://arsalanacademy.com'; // Use a more appropriate default domain

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Homepage might change more frequently
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily', // Blog index page changes when new posts are added
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
  let blogPostRoutes: MetadataRoute.Sitemap = [];
  try {
  const posts = await getPublishedPosts();
    blogPostRoutes = posts.map((post: PostWithAuthor) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: post.updated_at ? new Date(post.updated_at) : 
                   (post.published_at ? new Date(post.published_at) : new Date()),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
    // Continue with empty blog post routes if there's an error
  }

  return [
    ...staticRoutes,
    ...blogPostRoutes,
  ];
} 