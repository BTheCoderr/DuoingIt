'use client';

import { useState } from 'react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-white">
      {/* Navigation */}
      <nav className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/images/Douing it logo(1).png"
              alt="DouingIt Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="px-4 space-y-2">
              <a href="#services" className="block py-2 text-gray-700 hover:text-green-600">Services</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-green-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Logo Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
        <img
          src="/images/Douing it logo(1).png"
          alt="DouingIt Logo"
          className="h-48 w-auto mx-auto"
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-1 lg:order-1">
            <div className="relative">
              <img
                src="/images/Seedling in the sun (1).png"
                alt="Green sprout growing from soil"
                className="w-full h-80 sm:h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Right side - Text */}
          <div className="order-2 lg:order-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              You and your family's <span className="text-green-600">LEGACY</span> is Powerful!
            </h1>
            
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              Your legacy carries a wisdom and strength that needs nurturing. We offer simple, guided pathways to preserve traditions, tell family stories, and build stronger inter-generational bonds that last. Together at DOUing It we inspire, guide and teach YOU and your next generation how to elevate, honor and preserve your cultural heritage - as you build connections that last for generations.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm sm:text-base">Community</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm sm:text-base">Workshops</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm sm:text-base">Virtual Travel</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm sm:text-base">Legacy Mapping</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm sm:text-base">Genealogical Tools</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm sm:text-base">Legacy Coaching</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm sm:text-base">and so much more!</span>
              </div>
            </div>

            <button 
              className="w-full sm:w-auto text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              style={{ backgroundColor: '#FF7B31' }}
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSck6ID-pJ456WgZUFJlCI-fa41fKS92nlLgsl0bPGqYBVVhcQ/viewform', '_blank')}
            >
              Inquire Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
