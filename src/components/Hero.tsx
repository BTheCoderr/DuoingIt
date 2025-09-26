'use client';

import { useState } from 'react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Navigation */}
      <nav className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-yellow-400 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-yellow-400 rounded-full"></div>
              </div>
            </div>
            <span className="text-2xl font-bold text-green-600">DouingIt</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
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
              <a href="#about" className="block py-2 text-gray-700 hover:text-green-600">About</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-green-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Green sprout growing from soil"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Right side - Text */}
          <div className="order-1 lg:order-2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              You and your family's <span className="text-green-600">LEGACY</span> is Powerful!
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Your legacy carries a wisdom and strength that needs nurturing. We offer simple, guided pathways to preserve traditions, tell family stories, and build stronger inter-generational bonds that last. Together at DOUing It we inspire, guide and teach YOU and your next generation how to elevate, honor and preserve your cultural heritage - as you build connections that last for generations.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Community</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Workshops</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Virtual Travel</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Legacy Mapping</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Genealogical Tools</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Legacy Coaching</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">and so much more!</span>
              </div>
            </div>

            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg">
              Inquire Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
