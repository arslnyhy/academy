import Link from "next/link"
import { Network, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Network className="h-6 w-6 text-[#27c6d9]" />
              <span className="text-xl font-bold">Arsalan Academy</span>
            </Link>
            <p className="text-gray-400 mb-4">Professional network automation solutions for modern enterprises.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#27c6d9]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#27c6d9]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#27c6d9]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#27c6d9]">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#27c6d9]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#27c6d9]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#27c6d9]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-400 hover:text-[#27c6d9]">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#27c6d9]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#infrastructure" className="text-gray-400 hover:text-[#27c6d9]">
                  Infrastructure Automation
                </Link>
              </li>
              <li>
                <Link href="/services#orchestration" className="text-gray-400 hover:text-[#27c6d9]">
                  Network Orchestration
                </Link>
              </li>
              <li>
                <Link href="/services#security" className="text-gray-400 hover:text-[#27c6d9]">
                  Security Automation
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="text-gray-400 hover:text-[#27c6d9]">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link href="/services#training" className="text-gray-400 hover:text-[#27c6d9]">
                  Training & Workshops
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#27c6d9] mt-0.5" />
                <span className="text-gray-400">123 Network Street, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#27c6d9]" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#27c6d9]" />
                <span className="text-gray-400">info@netautomate.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arsalan Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
