const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  try {
    console.log('Testing database connection...')
    const result = await prisma.$queryRaw`SELECT 1+1 as result`
    console.log('✅ Connected to database successfully!')
    console.log(result)
  } catch (error) {
    console.error('❌ Failed to connect to database:')
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
