"use client"

import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Linkedin, LinkIcon } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { useState } from "react"

interface ShareButtonsProps {
  title: string
  path: string
}

export function ShareButtons({ title, path }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  // Ensure we're using the full URL with the correct protocol
  const url = `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(`${title} | ${siteConfig.name}`)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, "_blank")}
      >
        <Twitter className="h-4 w-4" />
        <span className="sr-only md:not-sr-only md:inline-block">Twitter</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "_blank")}
      >
        <Facebook className="h-4 w-4" />
        <span className="sr-only md:not-sr-only md:inline-block">Facebook</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={() =>
          window.open(
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
            "_blank",
          )
        }
      >
        <Linkedin className="h-4 w-4" />
        <span className="sr-only md:not-sr-only md:inline-block">LinkedIn</span>
      </Button>
      <Button variant="outline" size="sm" className="gap-2" onClick={copyToClipboard}>
        <LinkIcon className="h-4 w-4" />
        <span className="sr-only md:not-sr-only md:inline-block">{copied ? "Copied!" : "Copy Link"}</span>
      </Button>
    </div>
  )
}
