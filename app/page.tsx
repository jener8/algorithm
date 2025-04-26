import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Paintbrush, ImageIcon, BookOpen } from "lucide-react"
import { getFeaturedArtworks } from "@/lib/db"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-900" />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center">
            <div className="text-white text-center max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Discover Art at Tate
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Explore our world-class collection of art
              </p>
              <Link
                href="/exhibitions"
                className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors inline-block"
              >
                View Exhibitions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Exhibitions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Exhibitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((exhibition) => (
              <div key={exhibition} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <div className="w-full h-full bg-gray-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Exhibition Title {exhibition}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <Link
                    href={`/exhibitions/${exhibition}`}
                    className="text-black font-medium hover:text-gray-600"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Galleries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Tate Britain', location: 'London' },
              { name: 'Tate Modern', location: 'London' },
              { name: 'Tate Liverpool', location: 'Liverpool' },
              { name: 'Tate St Ives', location: 'Cornwall' },
            ].map((gallery) => (
              <div key={gallery.name} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{gallery.name}</h3>
                <p className="text-gray-600 mb-4">{gallery.location}</p>
                <Link
                  href={`/visit/${gallery.name.toLowerCase().replace(' ', '-')}`}
                  className="text-black font-medium hover:text-gray-600"
                >
                  Plan your visit →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
