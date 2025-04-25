import Link from "next/link"
import { siteConfig } from "@/lib/config"

export function SiteFooter() {
  return (
    <footer className="border-t py-8 bg-gray-50">
      <div className="container text-center text-gray-600">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-sm mt-1">
          <a href={siteConfig.url} className="hover:underline">
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </a>
        </p>
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
  )
}
