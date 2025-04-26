import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/config"

export const runtime = "edge"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // Get title from query params
    const title = searchParams.get("title") || siteConfig.name

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage: "linear-gradient(to bottom right, #f0f0f0, #ffffff)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontStyle: "normal",
            color: "black",
            marginTop: 30,
            lineHeight: 1.2,
            whiteSpace: "pre-wrap",
            textAlign: "center",
            padding: "0 120px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontStyle: "normal",
            color: "#666",
            marginTop: 30,
          }}
        >
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.error(e)
    return new Response("Failed to generate OG image", { status: 500 })
  }
}
