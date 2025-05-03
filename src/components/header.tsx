"use client"

import Link from "next/link"
// import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Github } from "lucide-react"
import { LucideProps } from "lucide-react"

// Custom Discord icon component since it's not available in lucide-react
const DiscordIcon = (props: LucideProps) => (
  <svg viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/></svg>
)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="flex-shrink-0">
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
        <nav className="hidden md:flex gap-6 justify-center flex-1">
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
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-4">
            <Link href="https://github.com/orgs/arsalan-academy/repositories" className="text-gray-600 hover:text-[#27c6d9] transition-colors" target="_blank" title="Visit GitHub repositories">
              <Github className="h-5 w-5" />
              <span className="sr-only">Visit GitHub repositories</span>
            </Link>
            <Link href="https://discord.gg/5mApWhSE" className="text-gray-600 hover:text-[#27c6d9] transition-colors" target="_blank" title="Join Discord community">
              <DiscordIcon className="h-5 w-5" />
              <span className="sr-only">Join Discord community</span>
            </Link>
          </div>
          <Button asChild className="bg-[#27c6d9] hover:bg-[#1ea8b9] text-black">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        <button className="md:hidden ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
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
              href="https://calendly.com/arsalan-academy/"
              target="_blank"
              className="text-sm font-medium text-black hover:text-[#27c6d9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Meeting
            </Link>
            <div className="flex gap-4 mt-2">
              <Link
                href="https://github.com/orgs/arsalan-academy/repositories"
                target="_blank"
                className="text-gray-600 hover:text-[#27c6d9] transition-colors"
                onClick={() => setIsMenuOpen(false)}
                title="Visit Arsalan Academy GitHub repositories"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">Visit Arsalan Academy GitHub repositories</span>
              </Link>
              <Link
                href="https://discord.gg/5mApWhSE"
                target="_blank"
                className="text-gray-600 hover:text-[#27c6d9] transition-colors"
                onClick={() => setIsMenuOpen(false)}
                title="Join Arsalan Academy Discord community"
              >
                <DiscordIcon className="h-5 w-5" />
                <span className="sr-only">Join Arsalan Academy Discord community</span>
              </Link>
            </div>
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
