import Image from "next/image"
import { Users, Award, Clock, BookOpen } from "lucide-react"

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
                We are a team of network automation experts dedicated to helping businesses optimize their network
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-gray-500">
                Founded in 2015, Arsalan Academy began with a simple mission: to help professionals master network
                automation and transform their careers. What started as a small team of network engineers has grown into
                a leading training and consultancy firm specializing in network automation solutions.
              </p>
              <p className="text-gray-500">
                Over the years, we have helped hundreds of organizations across various industries streamline their
                network operations, reduce costs, and improve efficiency through innovative automation solutions.
              </p>
              <p className="text-gray-500">
                Today, we continue to push the boundaries of what's possible in network automation, staying at the
                forefront of emerging technologies and best practices to deliver exceptional value to our clients.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                These core principles guide everything we do at NetAutomate.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-[#27c6d9]/10">
                <Award className="h-10 w-10 text-[#27c6d9]" />
              </div>
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-gray-500 text-center">
                We strive for excellence in everything we do, from the solutions we develop to the service we provide.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-[#27c6d9]/10">
                <Users className="h-10 w-10 text-[#27c6d9]" />
              </div>
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-gray-500 text-center">
                We believe in the power of collaboration, both within our team and with our clients.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-[#27c6d9]/10">
                <BookOpen className="h-10 w-10 text-[#27c6d9]" />
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-gray-500 text-center">
                We continuously explore new technologies and approaches to deliver innovative solutions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-[#27c6d9]/10">
                <Clock className="h-10 w-10 text-[#27c6d9]" />
              </div>
              <h3 className="text-xl font-bold">Reliability</h3>
              <p className="text-gray-500 text-center">
                We deliver on our promises and ensure our solutions are reliable and dependable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
              <p className="text-gray-500 text-center">Network engineering expert with over 15 years of experience.</p>
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
              <p className="text-gray-500 text-center">
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
              <p className="text-gray-500 text-center">Expert in network security and infrastructure automation.</p>
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
              <p className="text-gray-500 text-center">
                Dedicated to ensuring our clients achieve their automation goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
