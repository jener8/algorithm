"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

interface Artwork {
  id: string
  title: string
  category: string
  description: string
  imageUrl: string
}

interface GalleryClientProps {
  initialArtworks: Artwork[]
  categories: string[]
}

export default function GalleryClient({ initialArtworks, categories }: GalleryClientProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Filter artworks based on search query and selected category
  const filteredArtworks = initialArtworks.filter((artwork) => {
    const matchesSearch =
      artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "all" || artwork.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search by title or description..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="w-full md:w-64 flex items-center gap-2">
          <Filter className="text-gray-400" />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredArtworks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
            <Link href={`/artwork/${artwork.id}`} key={artwork.id} className="group">
              <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                <div className="aspect-square relative">
                  <img
                    src={artwork.imageUrl || "/placeholder.svg"}
                    alt={artwork.title}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{artwork.title}</h3>
                  <p className="text-gray-600 text-sm">{artwork.category}</p>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{artwork.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No artworks found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("all")
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </>
  )
}
