import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Server, Network, Wrench, Calendar } from "lucide-react"
import { getPublishedPosts } from "@/lib/posts"

export default async function Home() {
  const posts = await getPublishedPosts()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                <div>Arsalan <span className="text-[#27c6d9]">Academy</span> for</div>
                <div>IT Practitioners</div>
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                We empower engineers and teams with the skills to build, deploy, and maintain modern IT infrastructure.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#27c6d9] text-[#27c6d9] hover:bg-[#27c6d9]/10">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/main.png?height=800&width=1200"
                alt="Network Automation"
                width={1200}
                height={800}
                className="rounded-lg object-cover border-8 border-[#27c6d9]/40 shadow-lg hover:border-[#27c6d9]/70 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide comprehensive Networking, Security, and Machine Learning training and solutions to help you thrive in the digital age.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-[#27c6d9]/10">
                <Server className="h-10 w-10 text-[#27c6d9]" />
              </div>
              <h3 className="text-xl font-bold">Technical Training</h3>
              <p className="text-gray-500 text-center">
                Technical training to help your team build, deploy, and maintain modern IT infrastructure.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-[#27c6d9]/10">
                <Network className="h-10 w-10 text-[#27c6d9]" />
              </div>
              <h3 className="text-xl font-bold">Product Training</h3>
              <p className="text-gray-500 text-center">
                Product training to help your users and community get the most out of your products.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-[#27c6d9]/10">
                <Wrench className="h-10 w-10 text-[#27c6d9]" />
              </div>
              <h3 className="text-xl font-bold">Solution Development</h3>
              <p className="text-gray-500 text-center">
                Solution development to help your internal teams and engineers maximize work efficiency.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
              <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-8 md:py-16 lg:py-20 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Schedule a Call</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Book a consultation to discuss how our services can help your operations.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Button asChild className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
                <Link href="https://calendly.com/arsalan-academy/" target="_blank">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Latest from Our Blog</h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest trends and insights in today&apos;s IT industry.
              </p>
            </div>
          </div>
          
          {/* Blog Posts */}
          {posts && posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {posts.slice(0, 3).map((post) => (
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
              <div className="flex justify-center mt-12">
                <Button asChild className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
                  <Link href="/blogs">View All Blog Posts <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center mt-12 p-12 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold text-[#27c6d9]">Coming Soon!</h3>
              <p className="text-gray-500 mt-4 text-center max-w-[600px]">
                We&apos;re working on exciting content to share with you. Check back soon for articles about Networking, Security, and AI.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
