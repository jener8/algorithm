"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Upload, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { submitArtwork } from "./actions"
import { useRouter } from 'next/navigation'

export default function SubmitPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    algorithmDescription: '',
    contact: '',
    image: null as File | null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('age', formData.age)
      formDataToSend.append('location', formData.location)
      formDataToSend.append('algorithmDescription', formData.algorithmDescription)
      formDataToSend.append('contact', formData.contact)
      if (formData.image) {
        formDataToSend.append('image', formData.image)
      }

      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        router.push('/thank-you')
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] })
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold">
            AlgoArt Research
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/gallery" className="font-medium">
              Gallery
            </Link>
            <Link href="/about" className="font-medium">
              About
            </Link>
            <Link href="/submit">
              <Button>Submit Artwork</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Submit Your Algorithm Drawing</h1>
          <p className="text-gray-600 mb-8">
            Share your visualization of an algorithm and we'll transform it into AI-generated art for our research
            project.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                id="location"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="algorithmDescription" className="block text-sm font-medium text-gray-700">
                What does your algorithm drawing represent? *
              </label>
              <textarea
                id="algorithmDescription"
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                value={formData.algorithmDescription}
                onChange={(e) => setFormData({ ...formData, algorithmDescription: e.target.value })}
                placeholder="Please describe what your algorithm drawing represents..."
              />
              <p className="mt-1 text-sm text-gray-500">* This field is required</p>
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                Contact Information (Email or Phone) *
              </label>
              <input
                type="text"
                id="contact"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                placeholder="Enter your email or phone number"
              />
              <p className="mt-1 text-sm text-gray-500">* This field is required</p>
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Upload Your Drawing *
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    required
                    className="sr-only"
                    onChange={handleImageChange}
                  />
                  <label
                    htmlFor="image"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-black hover:text-gray-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black"
                  >
                    <span>Upload a file</span>
                  </label>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              {formData.image && (
                <p className="mt-2 text-sm text-gray-500">
                  Selected file: {formData.image.name}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Drawing'}
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="border-t py-8 bg-gray-50">
        <div className="container text-center text-gray-600">
          <p>© {new Date().getFullYear()} AlgoArt Research Project. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/about" className="text-sm hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
