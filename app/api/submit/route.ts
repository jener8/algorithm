import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  console.log('API route called')
  try {
    let data: any = {}
    
    // Check if the request is form data or JSON
    const contentType = request.headers.get('content-type') || ''
    console.log('Content-Type:', contentType)
    
    if (contentType.includes('multipart/form-data')) {
        const formData = await request.formData()
        const imageFile = formData.get('image')
        let imageBuffer = null
      
        // Convert the image file to a Buffer for nodemailer
        if (imageFile && typeof imageFile.arrayBuffer === 'function') {
          const arrayBuffer = await imageFile.arrayBuffer()
          imageBuffer = Buffer.from(arrayBuffer)
        }
      
        data = {
          name: formData.get('name'),
          age: formData.get('age'),
          location: formData.get('location'),
          algorithmDescription: formData.get('algorithmDescription'),
          contact: formData.get('contact'),
          image: imageBuffer,
        }
      } else {
        data = await request.json()
      }
    console.log('Request data:', data)

    // Create a transporter with Gmail settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Prepare email content
    const emailContent = `
      New Algorithm Drawing Submission
      
      Name: ${data.name}
      Age: ${data.age}
      Location: ${data.location}
      Contact: ${data.contact}
      
      Algorithm Description:
      ${data.algorithmDescription}
    `

    console.log('Sending email...')
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'jennifersimonds@icloud.com',
      subject: 'Seeingyouralgorithm new image',
      text: emailContent,
      attachments: data.image ? [
        {
          filename: 'algorithm-drawing.jpg',
          content: data.image,
        },
      ] : [],
    })

    console.log('Email sent successfully')
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Detailed error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    )
  }
} 