import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Paintbrush, ImageIcon, BookOpen } from "lucide-react"
import { getFeaturedArtworks } from "@/lib/db"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
}

export default async function Home() {
  const featuredArtworks = await getFeaturedArtworks()

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-20 bg-gray-50">
          <div className="container flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Algorithms as Art</h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-10">
              A research project exploring the intersection of human algorithm visualization and artificial intelligence
              art generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/gallery">
                <Button size="lg" className="gap-2">
                  <ImageIcon className="h-5 w-5" />
                  Explore Gallery
                </Button>
              </Link>
              <Link href="/submit">
                <Button size="lg" variant="outline" className="gap-2">
                  <Paintbrush className="h-5 w-5" />
                  Submit Your Drawing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 container">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Artworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtworks.length > 0 ? (
              featuredArtworks.map((artwork) => (
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
                      <p className="text-gray-600 text-sm mt-1">{artwork.category}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-500">No featured artworks yet. Check back soon!</p>
              </div>
            )}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/gallery">
              <Button variant="outline" className="gap-2">
                View All Artworks
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-10 text-center">About the Project</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Paintbrush className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Draw Your Algorithm</h3>
                <p className="text-gray-600">
                  Participants visualize their understanding of algorithms through hand-drawn sketches.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Transformation</h3>
                <p className="text-gray-600">
                  We transform these drawings into AI-generated artwork, creating a unique visual interpretation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Research Insights</h3>
                <p className="text-gray-600">
                  The project explores how people conceptualize algorithms and how AI interprets human visualization.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/about">
                <Button variant="outline" className="gap-2">
                  Learn More About the Research
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
