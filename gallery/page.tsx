import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getAllArtworks } from "@/lib/db"
import GalleryClient from "./gallery-client"

export default async function GalleryPage() {
  const artworks = await getAllArtworks()

  // Extract unique categories for the filter dropdown
  const categories = ["all", ...new Set(artworks.map((artwork) => artwork.category))]

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
        <h1 className="text-3xl font-bold mb-8">Artwork Gallery</h1>

        <GalleryClient initialArtworks={artworks} categories={categories} />
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
