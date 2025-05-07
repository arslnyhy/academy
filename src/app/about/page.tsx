import Image from "next/image"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Arsalan Academy',
  description: 'Learn about our mission, vision, and the team behind Arsalan Academy.',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About Arsalan Academy',
    description: 'We are a team of IT education and training experts dedicated to helping individuals and teams optimize their operations.',
    url: '/about',
    images: [
      {
        url: '/about.png',
        width: 600,
        height: 600,
        alt: 'About Arsalan Academy',
      },
    ],
  }
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                About <span className="text-[#27c6d9]">Arsalan Academy</span>
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are a team of IT education and training experts dedicated to helping individuals and teams optimize their
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
              Founded by Arsalan Yahyazadeh, our IT education and training academy is dedicated to bridging 
              the gap between complex technologies and practical implementation. We specialize in Networking, 
              Security, and Machine Learning, providing hands-on training that transforms theoretical knowledge 
              into real-world expertise.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
              We understand that education is not just about learning—it&apos;s about transformation. Our approach 
              combines theoretical foundations with practical applications, enabling professionals to adapt to 
              rapidly evolving technologies while building robust, scalable solutions.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we continue to evolve our curriculum and teaching methodologies, staying at the forefront 
                of technological advancements to provide our students with cutting-edge knowledge and practical 
                skills that drive their career growth and success.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/about.png?height=600&width=600"
                alt="Arsalan Academy team working together on IT solutions"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section Template (preserved for future use) */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
              <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the experts behind our network automation solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Team Member 1"
                width={300}
                height={300}
                className="rounded-full w-40 h-40 object-cover"
              />
              <h3 className="text-xl font-bold">John Smith</h3>
              <p className="text-[#27c6d9] font-medium">CEO & Founder</p>
              <p className="text-gray-700 text-center">Network engineering expert with over 15 years of experience.</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Team Member 2"
                width={300}
                height={300}
                className="rounded-full w-40 h-40 object-cover"
              />
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-[#27c6d9] font-medium">CTO</p>
              <p className="text-gray-700 text-center">
                Automation specialist with a background in software development.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Team Member 3"
                width={300}
                height={300}
                className="rounded-full w-40 h-40 object-cover"
              />
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-[#27c6d9] font-medium">Lead Engineer</p>
              <p className="text-gray-700 text-center">Expert in network security and infrastructure automation.</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Team Member 4"
                width={300}
                height={300}
                className="rounded-full w-40 h-40 object-cover"
              />
              <h3 className="text-xl font-bold">Emily Rodriguez</h3>
              <p className="text-[#27c6d9] font-medium">Client Success Manager</p>
              <p className="text-gray-700 text-center">
                Dedicated to ensuring our clients achieve their automation goals.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
