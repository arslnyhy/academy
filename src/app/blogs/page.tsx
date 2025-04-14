import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"

export default function BlogsPage() {
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
                Stay updated with the latest trends and insights in network automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Post 1 */}
            <div className="group flex flex-col border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=500"
                  alt="The Future of Network Automation"
                  width={500}
                  height={250}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-[#27c6d9]" />
                    <span>August 24, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-[#27c6d9]" />
                    <span>John Smith</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">The Future of Network Automation</h3>
                <p className="text-gray-500 mb-4">
                  Explore the emerging trends and technologies shaping the future of network automation, from AI-driven
                  networks to intent-based networking.
                </p>
                <Link
                  href="/blogs/future-of-network-automation"
                  className="inline-flex items-center text-[#27c6d9] hover:underline mt-auto"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="group flex flex-col border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=500"
                  alt="Implementing SD-WAN: Best Practices"
                  width={500}
                  height={250}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-[#27c6d9]" />
                    <span>July 15, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-[#27c6d9]" />
                    <span>Sarah Johnson</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Implementing SD-WAN: Best Practices</h3>
                <p className="text-gray-500 mb-4">
                  Learn the best practices for implementing SD-WAN in your organization, from planning to deployment and
                  management.
                </p>
                <Link
                  href="/blogs/implementing-sd-wan"
                  className="inline-flex items-center text-[#27c6d9] hover:underline mt-auto"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="group flex flex-col border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=500"
                  alt="Network Security Automation"
                  width={500}
                  height={250}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-[#27c6d9]" />
                    <span>June 30, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-[#27c6d9]" />
                    <span>Michael Chen</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Network Security Automation</h3>
                <p className="text-gray-500 mb-4">
                  Discover how automation can enhance your network security posture and protect your organization from
                  evolving threats.
                </p>
                <Link
                  href="/blogs/network-security-automation"
                  className="inline-flex items-center text-[#27c6d9] hover:underline mt-auto"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="group flex flex-col border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=500"
                  alt="Automating Network Compliance"
                  width={500}
                  height={250}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-[#27c6d9]" />
                    <span>May 18, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-[#27c6d9]" />
                    <span>Emily Rodriguez</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Automating Network Compliance</h3>
                <p className="text-gray-500 mb-4">
                  Learn how to automate compliance monitoring and reporting to ensure your network meets regulatory
                  requirements.
                </p>
                <Link
                  href="/blogs/automating-network-compliance"
                  className="inline-flex items-center text-[#27c6d9] hover:underline mt-auto"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="group flex flex-col border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=500"
                  alt="Network Automation Tools Comparison"
                  width={500}
                  height={250}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-[#27c6d9]" />
                    <span>April 10, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-[#27c6d9]" />
                    <span>John Smith</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Network Automation Tools Comparison</h3>
                <p className="text-gray-500 mb-4">
                  A comprehensive comparison of popular network automation tools to help you choose the right solution
                  for your needs.
                </p>
                <Link
                  href="/blogs/network-automation-tools-comparison"
                  className="inline-flex items-center text-[#27c6d9] hover:underline mt-auto"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="group flex flex-col border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=500"
                  alt="Getting Started with Network Automation"
                  width={500}
                  height={250}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-[#27c6d9]" />
                    <span>March 5, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-[#27c6d9]" />
                    <span>Sarah Johnson</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Getting Started with Network Automation</h3>
                <p className="text-gray-500 mb-4">
                  A beginner's guide to network automation, covering the basics, benefits, and first steps to get
                  started.
                </p>
                <Link
                  href="/blogs/getting-started-with-network-automation"
                  className="inline-flex items-center text-[#27c6d9] hover:underline mt-auto"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="icon" className="w-8 h-8 p-0">
                <span className="sr-only">Previous</span>
                <ArrowRight className="h-4 w-4 rotate-180" />
              </Button>
              <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-[#27c6d9] text-black border-[#27c6d9]">
                1
              </Button>
              <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                2
              </Button>
              <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                3
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8 p-0">
                <span className="sr-only">Next</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
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
      </section>
    </div>
  )
}
