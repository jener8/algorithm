'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function TestEmailPage() {
  const [isSending, setIsSending] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const testEmail = async () => {
    console.log('Starting email test...')
    setIsSending(true)
    setResult(null)

    try {
      console.log('Sending request to /api/submit...')
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test User',
          age: '25',
          location: 'Test Location',
          algorithmDescription: 'This is a test email',
          contact: 'test@example.com',
        }),
      })

      console.log('Response received:', response.status)
      const data = await response.json()
      console.log('Response data:', data)

      if (response.ok) {
        setResult('Email sent successfully!')
      } else {
        setResult(`Error: ${data.error || 'Failed to send email'}`)
      }
    } catch (error) {
      console.error('Error in testEmail:', error)
      setResult(`Error: ${error instanceof Error ? error.message : 'Failed to send email'}`)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Test Email Functionality</h1>
          
          <Button
            onClick={testEmail}
            disabled={isSending}
            className="w-full"
          >
            {isSending ? 'Sending...' : 'Send Test Email'}
          </Button>

          {result && (
            <div className={`mt-4 p-4 rounded-md ${result.includes('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 