"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Network, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Network className="h-6 w-6 text-[#27c6d9]" />
          <span className="text-xl font-bold">Arsalan Academy</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors">
            Services
          </Link>
          <Link href="/blogs" className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors">
            Blogs
          </Link>
          <Link href="/contact" className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex">
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
              href="/about"
              className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/blogs"
              className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
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
