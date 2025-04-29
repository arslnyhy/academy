"use client"

import Link from "next/link"
// import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="flex-shrink-0 mr-auto">
          <Link href="/" className="flex items-center gap-2">
            {/* <Image
              src="/logo.png"
              alt="Arsalan Academy Logo"
              width={32}
              height={32}
              className="h-auto rounded-full"
            /> */}
            <span className="text-xl font-bold">Arsalan Academy</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors">
            Home
          </Link>
          <Link href="/blogs" className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors">
            Blogs
          </Link>
          <Link href="/services" className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors">
            About
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors flex items-center gap-1"
            >
              Contact
              <ChevronDown className="h-4 w-4" />
            </button>
            {isContactOpen && (
              <div className="absolute top-full mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Link
                    href="/contact"
                    className="block px-4 py-2 text-sm text-black hover:text-[#27c6d9] transition-colors"
                    onClick={() => setIsContactOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="https://calendly.com/arsalan-academy/"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-black hover:text-[#27c6d9] transition-colors"
                    onClick={() => setIsContactOpen(false)}
                  >
                    Book a Meeting
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="hidden md:flex flex-shrink-0 ml-auto">
          <Button asChild className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden p-4 border-t">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="https://calendly.com"
              target="_blank"
              className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Meeting
            </Link>
            <Button asChild className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black w-full mt-2">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
