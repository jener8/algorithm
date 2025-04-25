import prisma from "./prisma"

export async function getAllArtworks() {
  return await prisma.artwork.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })
}

export async function getFeaturedArtworks() {
  return await prisma.artwork.findMany({
    where: {
      featured: true,
    },
    take: 3,
  })
}

export async function getArtworkById(id: string) {
  return await prisma.artwork.findUnique({
    where: {
      id,
    },
  })
}

export async function getRelatedArtworks(id: string, category: string) {
  return await prisma.artwork.findMany({
    where: {
      AND: [{ id: { not: id } }, { category }],
    },
    take: 4,
  })
}

export async function createArtwork(data: {
  title: string
  category: string
  description: string
  algorithmDescription: string
  creator: string
  imageUrl: string
  originalDrawing?: string
}) {
  return await prisma.artwork.create({
    data: {
      ...data,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
  })
}
