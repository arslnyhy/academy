import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin, User } from "lucide-react"
import { getPostBySlug } from "@/lib/posts"
import { notFound } from "next/navigation"
import { Metadata } from 'next'
// import { format } from 'date-fns'
import Markdown from 'markdown-to-jsx'

export type ParamsType = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: ParamsType }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }
  
  return {
    title: post.title,
    description: post.excerpt || undefined,
  }
}

export default async function BlogPostPage({ params }: { params: ParamsType }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
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
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-base text-gray-500">
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
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#27c6d9]" />
                <span>{post.published_at ? new Date(post.published_at).toLocaleDateString() : 'N/A'}</span>
              </div>
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
              <p className="text-gray-500">No content available for this post.</p>
            )}
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Share this post:</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="border-[#27c6d9] hover:bg-[#27c6d9]/10">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-[#27c6d9] hover:bg-[#27c6d9]/10">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-[#27c6d9] hover:bg-[#27c6d9]/10">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-[#27c6d9] hover:bg-[#27c6d9]/10">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  )
}
