"use server"

import { createArtwork } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function submitArtwork(formData: FormData) {
  try {
    // In a real application, you would handle file uploads here
    // For now, we'll use a placeholder image
    const imageUrl = "/placeholder.svg?height=600&width=600"
    const originalDrawing = "/placeholder.svg?height=600&width=600"

    await createArtwork({
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      algorithmDescription: formData.get("algorithmDescription") as string,
      creator: "Anonymous User", // In a real app, you'd get this from authentication
      imageUrl,
      originalDrawing,
    })

    // Revalidate the gallery and homepage paths
    revalidatePath("/gallery")
    revalidatePath("/")

    return { success: true }
  } catch (error) {
    console.error("Error submitting artwork:", error)
    return { success: false, error: "Failed to submit artwork" }
  }
}
