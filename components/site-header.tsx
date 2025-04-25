import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold">
          {siteConfig.name}
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
  )
}
