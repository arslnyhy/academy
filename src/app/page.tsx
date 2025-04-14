import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Server, Network, Wrench } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Arsalan <span className="text-[#27c6d9]">Academy</span> for Network Automation
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                We empower engineers and companies with the skills to build, deploy, and maintain automated network infrastructure.
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
                src="/placeholder.svg?height=400&width=600"
                alt="Network Automation"
                width={600}
                height={400}
                className="rounded-lg object-cover"
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
                We provide comprehensive network automation training and solutions to help your business thrive in the digital age.
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
                Technical training to help your team build, deploy, and maintain automated network infrastructure.
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Get in Touch</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss how our services can benefit your business.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#27c6d9] text-[#27c6d9] hover:bg-[#27c6d9]/10">
                <Link href="/about">Learn More</Link>
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
                Stay updated with the latest trends and insights in network automation.
              </p>
            </div>
          </div>
          
          {/* Coming Soon Message */}
          <div className="flex flex-col items-center justify-center mt-12 p-12 border border-gray-200 rounded-lg">
            <h3 className="text-2xl font-bold text-[#27c6d9]">Coming Soon!</h3>
            <p className="text-gray-500 mt-4 text-center max-w-[600px]">
              We're working on exciting content to share with you. Check back soon for articles about network automation, best practices, and industry insights.
            </p>
          </div>

          {/* Template for future blog posts (preserved for future use) */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Blog Post 1"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">The Future of Network Automation</h3>
                <p className="text-gray-500 mt-2">
                  Explore the emerging trends and technologies shaping the future of network automation.
                </p>
                <div className="mt-4">
                  <Link
                    href="/blogs/future-of-network-automation"
                    className="text-[#27c6d9] hover:underline inline-flex items-center"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
              <Link href="/blogs">View All Blog Posts <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  )
}
