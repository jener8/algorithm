import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Tag, User, Calendar } from "lucide-react"
import { notFound } from "next/navigation"
import { getArtworkById, getRelatedArtworks } from "@/lib/db"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ShareButtons } from "@/components/share-buttons"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

interface ArtworkPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ArtworkPageProps): Promise<Metadata> {
  const artwork = await getArtworkById(params.id)

  if (!artwork) {
    return {
      title: "Artwork Not Found",
    }
  }

  return {
    title: artwork.title,
    description: artwork.description,
    openGraph: {
      title: artwork.title,
      description: artwork.description,
      type: "article",
      url: `${siteConfig.url}/artwork/${artwork.id}`,
      images: [
        {
          url: artwork.imageUrl,
          width: 1200,
          height: 630,
          alt: artwork.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: artwork.title,
      description: artwork.description,
      images: [artwork.imageUrl],
    },
  }
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const artwork = await getArtworkById(params.id)

  if (!artwork) {
    notFound()
  }

  const relatedArtworks = await getRelatedArtworks(artwork.id, artwork.category)

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 container py-8">
        <div className="mb-6">
          <Link href="/gallery">
            <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all">
              <ArrowLeft className="h-4 w-4" />
              Back to Gallery
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden border">
            <img
              src={artwork.imageUrl || "/placeholder.svg"}
              alt={artwork.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{artwork.title}</h1>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-600">
                <Tag className="h-4 w-4" />
                <span>{artwork.category}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User className="h-4 w-4" />
                <span>{artwork.creator}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>{artwork.date}</span>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Share This Artwork</h2>
              <ShareButtons title={artwork.title} path={`/artwork/${artwork.id}`} />
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Creator's Description</h2>
              <p className="text-gray-700 whitespace-pre-line">{artwork.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">About the Algorithm</h2>
              <p className="text-gray-700 mb-4">{artwork.algorithmDescription}</p>
            </div>

            {artwork.originalDrawing && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-3">Original Drawing</h2>
                <div className="rounded-lg overflow-hidden border">
                  <img
                    src={artwork.originalDrawing || "/placeholder.svg"}
                    alt={`Original drawing of ${artwork.title}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {relatedArtworks.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">More Artworks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedArtworks.map((artwork) => (
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
                      <h3 className="font-semibold">{artwork.title}</h3>
                      <p className="text-gray-600 text-sm">{artwork.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
