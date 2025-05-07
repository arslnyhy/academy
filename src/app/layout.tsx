import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Arsalan Academy",
  description: "Professional IT training and solutions",
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon.png',
        sizes: '16x16',
        type: 'image/png'
      }
    ],
    apple: {
      url: '/favicon.png',
      sizes: '180x180',
      type: 'image/png'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light"> */}
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
