// Navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X, Search } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'id', name: 'Indonesia' },
  { code: 'ar', name: 'العربية' },
  { code: 'ko', name: 'Korean' },
  { code: 'zh', name: 'Chinese' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png" // Make sure to add your logo image in the public folder
                alt="Bonanza Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-[#EBB540] text-2xl font-bold font-gudea">BONANZA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#EBB540] transition-colors font-gudea">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-[#EBB540] transition-colors font-gudea">About Us</Link>
            <Link href="/products" className="text-gray-700 hover:text-[#EBB540] transition-colors font-gudea">Products</Link>
            <Link href="/news" className="text-gray-700 hover:text-[#EBB540] transition-colors font-gudea">News</Link>
            <Link href="/find-us" className="text-gray-700 hover:text-[#EBB540] transition-colors font-gudea">Find Us</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#EBB540] transition-colors font-gudea">Contact Us</Link>
            
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center text-gray-700 hover:text-[#EBB540] transition-colors font-gudea"
              >
                Language <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <a
                        key={lang.code}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EBB540] hover:text-white font-gudea"
                      >
                        {lang.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-[#EBB540] transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-[#EBB540]"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#EBB540]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-md p-4">
            <div className="max-w-3xl mx-auto">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBB540] focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block text-gray-700 hover:text-[#EBB540] py-2 font-gudea">Home</Link>
              <Link href="/about" className="block text-gray-700 hover:text-[#EBB540] py-2 font-gudea">About Us</Link>
              <Link href="/products" className="block text-gray-700 hover:text-[#EBB540] py-2 font-gudea">Products</Link>
              <Link href="/news" className="block text-gray-700 hover:text-[#EBB540] py-2 font-gudea">News</Link>
              <Link href="/find-us" className="block text-gray-700 hover:text-[#EBB540] py-2 font-gudea">Find Us</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-[#EBB540] py-2 font-gudea">Contact Us</Link>
              
              {/* Mobile Language Selector */}
              <div className="relative py-2">
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center text-gray-700 hover:text-[#EBB540] font-gudea"
                >
                  Language <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isLangOpen && (
                  <div className="mt-2 space-y-1">
                    {languages.map((lang) => (
                      <a
                        key={lang.code}
                        href="#"
                        className="block pl-4 py-2 text-sm text-gray-700 hover:text-[#EBB540] font-gudea"
                      >
                        {lang.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}