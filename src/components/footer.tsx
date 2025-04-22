"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DiscordIcon } from "@/components/icons/discord"
import { useState, useEffect } from "react"

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white relative">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Arsalan Academy Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl font-bold">Arsalan Academy</span>
            </Link>
            <p className="text-gray-400 mb-4">Professional IT education and services for individuals and teams.</p>
            <div className="flex space-x-4">
              <Link href="https://discord.gg/TpD68vZa" className="text-gray-400 hover:text-[#27c6d9]" target="_blank">
                <DiscordIcon className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              {/* <Link href="#" className="text-gray-400 hover:text-[#27c6d9]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link> */}
              <Link href="https://www.linkedin.com/company/arsalanacademy" className="text-gray-400 hover:text-[#27c6d9]" target="_blank">
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
                <Link href="/services#technical-training" className="text-gray-400 hover:text-[#27c6d9]">
                  Technical Training
                </Link>
              </li>
              <li>
                <Link href="/services#product-training" className="text-gray-400 hover:text-[#27c6d9]">
                  Product Training
                </Link>
              </li>
              <li>
                <Link href="/services#solution-development" className="text-gray-400 hover:text-[#27c6d9]">
                  Solution Development
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#27c6d9]" />
                <span className="text-gray-400">email.com</span>
              </li>
            </ul>
            <div className="mt-6 space-y-3">
              <h4 className="font-semibold text-sm">Subscribe to Newsletter</h4>
              <form className="space-y-2">
                <Input
                  type="email"
                  placeholder="Coming soon!"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                <Button className="w-full bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-400">Stay updated with our latest news and updates.</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arsalan Academy. All rights reserved.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-[#27c6d9] hover:bg-[#1ea8b9] text-black p-3 rounded-full shadow-lg transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  )
}
