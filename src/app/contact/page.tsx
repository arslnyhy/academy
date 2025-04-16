"use client"

import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"

export default function ContactPage() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!);

  if (state.succeeded) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-gray-600">Your message has been sent successfully. We&apos;ll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Contact <span className="text-[#27c6d9]">Us</span>
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with our team to discuss your network automation needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
              <p className="text-gray-500">
                Send us a message and we&apos;ll get back to you as soon as possible.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#27c6d9] mt-0.5" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-500">email.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="mt-1 text-sm text-red-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    required
                    className="w-full min-h-[150px]"
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="mt-1 text-sm text-red-600"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-[#27c6d9] hover:bg-[#1ea8b9] text-black"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
