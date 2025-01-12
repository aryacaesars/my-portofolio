'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactSection() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:aryacaesars@gmai.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`
  }

  return (
    <section id="contact" className="relative z-10 py-20 px-8 md:px-16 bg-black/40">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
    <div className="w-full md:w-1/2">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
    Get in Touch
    </h2>
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
    <div>
    <label htmlFor="email" className="block text-gray-300 mb-2">
    Your Email
    </label>
    <Input
    id="email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="bg-black/40 border-gray-800 focus:border-blue-500 text-white"
    placeholder="you@example.com"
    />
    </div>
    <div>
    <label htmlFor="message" className="block text-gray-300 mb-2">
    Message
    </label>
    <Textarea
    id="message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
    className="bg-black/40 border-gray-800 focus:border-blue-500 text-white"
    placeholder="Your message..."
    rows={5}
    />
    </div>
    <Button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
    >
    Send Message
    </Button>
    </form>
    </div>

    {/* Copywriting Section on the Right */}
    <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-16">
    <h3 className="text-2xl font-semibold text-white mb-4">Interested in Collaborating?</h3>
    <p className="text-gray-300 mb-6">
    If you're working on an exciting project and need a developer to bring your vision to life, let's connect!
    I'm always open to exploring new opportunities and collaborating on innovative web development projects.
    Reach out and let's discuss how we can create something great together.
    </p>
    <p className="text-gray-400">
    I’m passionate about coding, learning, and growing with others, and would love to be a part of your next big idea!
    </p>
    </div>
    </div>

    <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
    <p>© {new Date().getFullYear()} Arya Caesar. All rights reserved.</p>
    </div>
    </section>
  )
}
