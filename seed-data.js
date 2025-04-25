const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  try {
    // Create a test artwork
    const artwork = await prisma.artwork.create({
      data: {
        title: "Sample Algorithm Visualization",
        category: "Sorting Algorithms",
        description: "A visual representation of the quicksort algorithm showing the divide and conquer approach.",
        algorithmDescription: "Quicksort is a divide-and-conquer algorithm that selects a pivot element and partitions the array around it.",
        creator: "Test User",
        date: new Date().toLocaleDateString("en-US"),
        imageUrl: "/placeholder.svg",
        featured: true,
        originalDrawing: "/placeholder.svg"
      }
    })
    
    console.log('✅ Test data created successfully:', artwork)
  } catch (error) {
    console.error('❌ Error creating test data:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
