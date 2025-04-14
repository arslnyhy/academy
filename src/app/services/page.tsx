import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Server, Network, Shield, Users, BookOpen } from "lucide-react"

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
                Comprehensive network automation solutions tailored to your business needs.
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
            <div id="infrastructure" className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <Server className="h-6 w-6 text-[#27c6d9]" />
                  <h2 className="text-3xl font-bold tracking-tighter">Infrastructure Automation</h2>
                </div>
                <p className="text-gray-500">
                  Automate the deployment, configuration, and management of your network infrastructure to reduce manual
                  errors and increase operational efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Network device provisioning and configuration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Infrastructure as Code (IaC) implementation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Automated testing and validation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Configuration management and version control</span>
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
                  src="/placeholder.svg?height=400&width=600"
                  alt="Infrastructure Automation"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Service 2 */}
            <div id="orchestration" className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center lg:order-last">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Network Orchestration"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <Network className="h-6 w-6 text-[#27c6d9]" />
                  <h2 className="text-3xl font-bold tracking-tighter">Network Orchestration</h2>
                </div>
                <p className="text-gray-500">
                  Streamline complex network operations with our advanced orchestration solutions that coordinate
                  multiple automation tasks across your network.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>End-to-end service orchestration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Multi-vendor network management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Workflow automation and scheduling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Intent-based networking implementation</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div id="security" className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-[#27c6d9]" />
                  <h2 className="text-3xl font-bold tracking-tighter">Security Automation</h2>
                </div>
                <p className="text-gray-500">
                  Enhance your network security with automated threat detection, response, and compliance monitoring
                  solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Automated security policy enforcement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Threat detection and response automation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Compliance monitoring and reporting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Security incident response automation</span>
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
                  src="/placeholder.svg?height=400&width=600"
                  alt="Security Automation"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Service 4 */}
            <div id="consulting" className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center lg:order-last">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Consulting Services"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <Users className="h-6 w-6 text-[#27c6d9]" />
                  <h2 className="text-3xl font-bold tracking-tighter">Consulting Services</h2>
                </div>
                <p className="text-gray-500">
                  Our expert consultants work with you to assess your current network infrastructure and develop a
                  tailored automation strategy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Network assessment and audit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Automation strategy development</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Technology selection and implementation planning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>ROI analysis and business case development</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div id="training" className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-[#27c6d9]" />
                  <h2 className="text-3xl font-bold tracking-tighter">Training & Workshops</h2>
                </div>
                <p className="text-gray-500">
                  Empower your team with the knowledge and skills they need to implement and maintain network automation
                  solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Customized training programs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Hands-on workshops</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Certification preparation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-[#27c6d9]/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#27c6d9]"></div>
                    </div>
                    <span>Knowledge transfer and documentation</span>
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
                  src="/placeholder.svg?height=400&width=600"
                  alt="Training & Workshops"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Transform Your Network Operations?</h2>
              <p className="text-gray-300">
                Contact us today to discuss how our network automation solutions can benefit your business.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Contact Us"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
