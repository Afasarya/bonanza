// Footer.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#E59D00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Bonanza Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="ml-2 text-white text-xl font-bold font-gudea">BONANZA</span>
            </Link>
            <p className="text-white/90 font-gudea">
              Leading manufacturer and exporter of organic coconut products and coffee beans from Indonesia.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/90 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white/90 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white/90 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-white/90 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold font-gudea mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/90 hover:text-white transition-colors font-gudea">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/90 hover:text-white transition-colors font-gudea">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/90 hover:text-white transition-colors font-gudea">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-white transition-colors font-gudea">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-bold font-gudea mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/90 hover:text-white transition-colors font-gudea">
                  Organic Coconut Sugar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 hover:text-white transition-colors font-gudea">
                  Green Coffee Beans
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 hover:text-white transition-colors font-gudea">
                  Coconut Fiber
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 hover:text-white transition-colors font-gudea">
                  Coconut Charcoal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold font-gudea mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-white flex-shrink-0 mt-1" size={20} />
                <span className="text-white/90 font-gudea">
                  123 Business Street, Jakarta, Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-white" size={20} />
                <span className="text-white/90 font-gudea">+62 123 4567 890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-white" size={20} />
                <span className="text-white/90 font-gudea">contact@bonanza.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-white/90 font-gudea">
            © {new Date().getFullYear()} Bonanza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}