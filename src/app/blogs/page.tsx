import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
// import { Input } from "@/components/ui/input"
import { getPublishedPosts } from "@/lib/posts"

export default async function BlogsPage() {
  const posts = await getPublishedPosts()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Our <span className="text-[#27c6d9]">Blog</span>
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest trends and insights in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          {posts && posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <div key={post.id} className="group flex flex-col border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={post.cover_image_url || "/placeholder.svg?height=250&width=500"}
                      alt={post.title}
                      width={500}
                      height={250}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#27c6d9]" />
                        <span>{post.published_at ? new Date(post.published_at).toLocaleDateString() : 'Date N/A'}</span>
                      </div>
                      {/* <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-[#27c6d9]" />
                        <span>{post.instructors?.name || 'Anonymous'}</span>
                      </div> */}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-500 mb-4">
                      {post.excerpt || "No excerpt provided."}
                    </p>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center text-[#27c6d9] hover:underline mt-auto"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <h2 className="text-2xl font-bold text-[#27c6d9] mb-4">No Blog Posts Yet</h2>
              <p className="text-gray-500 max-w-[600px] mb-8 mx-auto">
                Check back soon for our latest articles and updates.
              </p>
            </div>
          )}

          {/* Pagination Template (preserved for future use) */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button
              variant="outline"
              className="border-[#27c6d9] text-[#27c6d9] hover:bg-[#27c6d9]/10"
              disabled
            >
              Previous
            </Button>
            <div className="flex gap-1">
              <Button
                variant="outline"
                className="border-[#27c6d9] bg-[#27c6d9] text-white hover:bg-[#27c6d9]/90"
              >
                1
              </Button>
              <Button
                variant="outline"
                className="border-[#27c6d9] text-[#27c6d9] hover:bg-[#27c6d9]/10"
              >
                2
              </Button>
              <Button
                variant="outline"
                className="border-[#27c6d9] text-[#27c6d9] hover:bg-[#27c6d9]/10"
              >
                3
              </Button>
            </div>
            <Button
              variant="outline"
              className="border-[#27c6d9] text-[#27c6d9] hover:bg-[#27c6d9]/10"
            >
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section Template (preserved for future use) */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Subscribe to Our Newsletter</h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest trends and insights in network automation.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                <Button className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">Subscribe</Button>
              </form>
              <p className="text-xs text-gray-400">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
