import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, User, ArrowRight } from "lucide-react"
import { getPostBySlug, getRandomPosts, PostWithAuthor } from "@/lib/posts"
import { notFound } from "next/navigation"
import { Metadata } from 'next'
import Markdown from 'markdown-to-jsx'
import { ShareButtons } from "@/components/ShareButtons"
import Script from 'next/script'

export type ParamsType = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: ParamsType }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  // Use the environment variable for the base URL, falling back to the production domain
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://arsalanacademy.com';
  const postUrl = `${baseUrl}/blogs/${post.slug}`;
  const imageUrl = post.cover_image_url || `${baseUrl}/placeholder.svg`; // Use cover image or a default placeholder

  return {
    title: post.title,
    description: post.excerpt || undefined,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      url: postUrl,
      images: [
        {
          url: imageUrl,
          width: 1200, // Recommended OG image width
          height: 630, // Recommended OG image height
          alt: post.title,
        },
      ],
      type: 'article', // Specify content type as article
      publishedTime: post.published_at || undefined, // Add published time if available
      authors: post.instructors?.name ? [post.instructors.name] : ['Arsalan Academy'],
    },
    // Add Twitter card metadata for better previews on Twitter
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || '',
      images: [imageUrl],
      creator: '@ArsalanAcademy',
      site: '@ArsalanAcademy',
    },
  }
}

export default async function BlogPostPage({ params }: { params: ParamsType }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = await getPostBySlug(slug);
  let randomPosts: PostWithAuthor[] = []; // Initialize as empty array
  if (post) { // Only fetch random posts if current post exists
    randomPosts = await getRandomPosts(slug, 3);
  }

  if (!post) {
    notFound();
  }

  // For Schema.org structured data
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://arsalanacademy.com';
  const postUrl = `${baseUrl}/blogs/${post.slug}`;
  const imageUrl = post.cover_image_url || `${baseUrl}/placeholder.svg`;
  const authorName = post.instructors?.name || 'Arsalan Academy';
  const datePublished = post.published_at || new Date().toISOString();
  const dateModified = post.updated_at || post.published_at || new Date().toISOString();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || '',
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Arsalan Academy',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.png`,
      },
    },
    datePublished: datePublished,
    dateModified: dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  return (
    <>
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <section className="w-full py-6 border-b border-border/40">
          <div className="container px-4 md:px-6">
            <Link href="/blogs" className="inline-flex items-center text-[#27c6d9] hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </div>
        </section>

        <article className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <header className="mb-8 md:mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-base text-gray-700">
                <div className="flex items-center gap-3">
                  {post.instructors?.avatar_url ? (
                    <Image
                      src={post.instructors.avatar_url}
                      alt={post.instructors.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-[#27c6d9]/10 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-[#27c6d9]" />
                    </div>
                  )}
                  <span className="font-medium">{post.instructors?.name || 'Anonymous'}</span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#27c6d9]" />
                  <span>{post.published_at ? new Date(post.published_at).toLocaleDateString() : 'N/A'}</span>
                </div> */}
              </div>
            </header>

            {post.cover_image_url && (
              <div className="mb-8 md:mb-12">
                <Image
                  src={post.cover_image_url}
                  alt={post.title}
                  width={1000}
                  height={500}
                  className="w-full h-auto rounded-lg object-cover"
                  priority
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-a:text-[#27c6d9] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-ul:list-disc prose-ul:text-gray-600
              prose-ol:list-decimal prose-ol:text-gray-600
              prose-blockquote:text-gray-600 prose-blockquote:border-l-[#27c6d9]
              prose-code:text-gray-800 prose-code:bg-gray-100
              prose-pre:bg-gray-100 prose-pre:text-gray-800
              dark:prose-invert
              dark:prose-headings:text-gray-100
              dark:prose-p:text-gray-300
              dark:prose-strong:text-gray-100
              dark:prose-blockquote:text-gray-300
              dark:prose-code:text-gray-200 dark:prose-code:bg-gray-800
              dark:prose-pre:bg-gray-800 dark:prose-pre:text-gray-200">
              {post.content ? (
                <Markdown>{post.content}</Markdown>
              ) : (
                <div className="text-center mt-16">
                  <p className="text-xl text-[#27c6d9] mb-4">That&apos;s all for now!</p>
                  <p className="text-gray-700">No content available for this post.</p>
                </div>
              )}
            </div>

            <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-12">
                <span className="text-sm text-gray-700 dark:text-gray-400">Share this post:</span>
                <ShareButtons slug={slug} title={post.title} />
              </div>

              {/* Random Posts Section */}
              {Array.isArray(randomPosts) && randomPosts.length > 0 && (
                <section className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">You Might Also Like</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {randomPosts.map((randomPost) => (
                      <Link
                        key={randomPost.id}
                        href={`/blogs/${randomPost.slug}`}
                        className="group flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-xl dark:hover:border-[#27c6d9]/70 transition-all duration-300"
                      >
                        <div className="relative aspect-[2/1]">
                          <Image
                            src={randomPost.cover_image_url || "/placeholder.svg?height=250&width=500"}
                            alt={randomPost.title || "Blog post featured image"}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform group-hover:scale-105 duration-300"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                        </div>
                        <div className="flex-1 p-5 bg-white dark:bg-gray-800">
                          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-[#27c6d9] transition-colors duration-300 line-clamp-2">
                            {randomPost.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                            {randomPost.excerpt || "No excerpt provided."}
                          </p>
                          <span className="inline-flex items-center text-sm font-medium text-[#27c6d9] group-hover:underline mt-auto">
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </footer>
          </div>
        </article>
      </div>
    </>
  )
}
