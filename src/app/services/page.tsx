import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Server, Network, Wrench } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Our <span className="text-[#27c6d9]">Services</span>
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive training programs and solutions on foundational and hot industry topics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {/* Service 1 */}
            <div id="technical-training" className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <Server className="h-6 w-6 text-[#27c6d9]" />
                  <h2 className="text-3xl font-bold tracking-tighter">Technical Training</h2>
                </div>
                <p className="text-gray-700">
                  Technical training to help you gain a deep understanding of both foundational and training technologies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Networking Fundamentals and Advanced Topics</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Security Fundamentals and Advanced Topics</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Machine learning and AI concepts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Python and scripting for automation</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/technical.png?height=400&width=600"
                  alt="Technical Training"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <hr className="my-12 border-gray-200" />

            {/* Service 2 */}
            <div id="product-training" className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center lg:order-last">
                <Image
                  src="/product.png?height=400&width=600"
                  alt="Product Training"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <Network className="h-6 w-6 text-[#27c6d9]" />
                  <h2 className="text-3xl font-bold tracking-tighter">Product Training</h2>
                </div>
                <p className="text-gray-700">
                  Comprehensive training programs and interactive workshops to help your users and customers master your products through hands-on learning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Custom course development and curriculum</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Interactive workshops and hands-on sessions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>User onboarding and certification programs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Training materials and documentation</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>

            <hr className="my-12 border-gray-200" />

            {/* Service 3 */}
            <div id="solution-development" className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <Wrench className="h-6 w-6 text-[#27c6d9]" />
                  <h2 className="text-3xl font-bold tracking-tighter">Solution Development</h2>
                </div>
                <p className="text-gray-700">
                  Custom development of automation tools, applications, and solutions to enhance your team&apos;s efficiency and streamline engineering workflows.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Custom automation tools and scripts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Internal workflow applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Integration and API development</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/solution.png?height=400&width=600"
                  alt="Solution Development"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
