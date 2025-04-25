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

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    algorithmDescription: "",
  })
  const [drawingFile, setDrawingFile] = useState<File | null>(null)
  const [drawingPreview, setDrawingPreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setDrawingFile(file)

      // Create preview
      const reader = new FileReader()
      reader.onload = (event) => {
        setDrawingPreview(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create FormData object
    const formDataObj = new FormData()
    formDataObj.append("title", formData.title)
    formDataObj.append("category", formData.category)
    formDataObj.append("description", formData.description)
    formDataObj.append("algorithmDescription", formData.algorithmDescription)

    // In a real application, you would append the file here
    // if (drawingFile) {
    //   formDataObj.append('drawing', drawingFile)
    // }

    // Submit the form data
    const result = await submitArtwork(formDataObj)

    if (result.success) {
      setIsSubmitted(true)
    } else {
      // Handle error
      alert("Failed to submit artwork. Please try again.")
    }

    setIsSubmitting(false)
  }

  if (isSubmitted) {
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

        <main className="flex-1 container py-16 flex items-center justify-center">
          <Card className="w-full max-w-md text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Submission Received!</CardTitle>
              <CardDescription>Thank you for contributing to our research project.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-600">
                Your algorithm drawing has been submitted successfully. Our team will review it and transform it into AI
                art.
              </p>
              <p className="text-gray-600">
                You will receive a notification when your artwork is published in the gallery.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
              <Link href="/">
                <Button variant="outline">Return Home</Button>
              </Link>
              <Link href="/gallery">
                <Button>View Gallery</Button>
              </Link>
            </CardFooter>
          </Card>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title of Your Artwork</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="e.g., Binary Tree Visualization"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Algorithm Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => handleSelectChange("category", value)}
                    required
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Sorting Algorithms">Sorting Algorithms</SelectItem>
                      <SelectItem value="Data Structures">Data Structures</SelectItem>
                      <SelectItem value="Graph Algorithms">Graph Algorithms</SelectItem>
                      <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                      <SelectItem value="Quantum Algorithms">Quantum Algorithms</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Label htmlFor="description">Your Description</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            Explain your drawing and how it represents the algorithm in your mind.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe how you visualize this algorithm..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Label htmlFor="algorithmDescription">About the Algorithm</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Briefly explain what the algorithm does and how it works.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Textarea
                    id="algorithmDescription"
                    name="algorithmDescription"
                    placeholder="Briefly explain what this algorithm does..."
                    value={formData.algorithmDescription}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="drawing">Upload Your Drawing</Label>
                  <div className="mt-1.5">
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                      onClick={() => document.getElementById("drawing")?.click()}
                    >
                      {drawingPreview ? (
                        <div className="relative w-full">
                          <img
                            src={drawingPreview || "/placeholder.svg"}
                            alt="Drawing preview"
                            className="mx-auto max-h-64 object-contain mb-4"
                          />
                          <p className="text-sm text-gray-500 text-center">Click to change image</p>
                        </div>
                      ) : (
                        <>
                          <Upload className="h-10 w-10 text-gray-400 mb-2" />
                          <p className="text-sm font-medium text-gray-700">Click to upload or drag and drop</p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG or GIF (max. 5MB)</p>
                        </>
                      )}
                      <input
                        id="drawing"
                        name="drawing"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="sr-only"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Card className="bg-gray-50 border-gray-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Draw your algorithm in any style you prefer - abstract, literal, or symbolic.
                      </li>
                      <li className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Include a detailed description to help us understand your visualization.
                      </li>
                      <li className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Your submission will be reviewed before being transformed into AI art.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                {isSubmitting ? "Submitting..." : "Submit Drawing"}
              </Button>
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
