'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with logo and member button */}
        <div className="flex justify-between items-center h-16 border-b border-gray-200">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-black tracking-tight">
              Seeing The Algorithm
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <Link href="/submit" className="bg-black text-white px-6 py-2 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors">
              Send Your Picture
            </Link>
          </div>
        </div>

        {/* Main navigation */}
        <div className="hidden sm:flex sm:space-x-8 py-4">
          <Link href="/about" className="text-gray-900 hover:text-gray-500 text-sm font-medium tracking-wide">
            About Project
          </Link>
          <Link href="/art-artists" className="text-gray-900 hover:text-gray-500 text-sm font-medium tracking-wide">
            Art & Artists
          </Link>
          <Link href="/research" className="text-gray-900 hover:text-gray-500 text-sm font-medium tracking-wide">
            Further Research
          </Link>
          <Link href="/shop" className="text-gray-900 hover:text-gray-500 text-sm font-medium tracking-wide">
            Shop
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-500">
                About Project
              </Link>
              <Link href="/art-artists" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-500">
                Art & Artists
              </Link>
              <Link href="/research" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-500">
                Further Research
              </Link>
              <Link href="/shop" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-500">
                Shop
              </Link>
              <Link href="/submit" className="block px-3 py-2 text-base font-medium text-white bg-black rounded-md">
                Send Your Picture
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 