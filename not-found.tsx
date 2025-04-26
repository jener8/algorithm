import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 container py-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link href="/">
          <Button className="gap-2">
            <Home className="h-4 w-4" />
            Return Home
          </Button>
        </Link>
      </main>

      <SiteFooter />
    </div>
  )
}
