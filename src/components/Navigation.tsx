'use client'

import { useState } from 'react'
import innovkaroLogo from '@/assets/innovkaro-logo.jpeg'
import innovkaroText from '@/assets/innovkaro-text.jpeg'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center ">
            <img 
              src={innovkaroText} 
              alt="InnovKaro Text" 
              className="h-12 object-contain"
            />
            {/* <img 
              src={innovkaroLogo} 
              alt="InnovKaro Logo" 
              className="h-14 w-14 object-contain"
            /> */}
          </div>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-black transition-colors">
              Home
            </a>
            <a href="/find-mentor" className="text-gray-600 hover:text-black transition-colors">
              Find Mentors
            </a>
            <a href="/ai-assessment" className="text-gray-600 hover:text-black transition-colors">
              AI Assessment
            </a>
            <a href="/profile-building" className="text-gray-600 hover:text-black transition-colors">
              Profile
            </a>
          </div> */}

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild className="text-black border-gray-300 hover:bg-gray-50">
              <a href="/auth/sign-up">Become a Mentor</a>
            </Button>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
              <a href="/auth/sign-in">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white text-black">
            <div className="flex flex-col space-y-2 px-4">
              <Button variant="outline" asChild className="text-black border-gray-300 hover:bg-gray-50">
                <a href="/auth/sign-up" onClick={toggleMenu}>Become a Mentor</a>
              </Button>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
                <a href="/auth/sign-in" onClick={toggleMenu}>Get Started</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}