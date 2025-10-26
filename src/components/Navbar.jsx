'use client' // Safe for Next.js; ignored by Vite or CRA

import { useState, useEffect, useRef } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const buttonRef = useRef(null)

  // Detect scroll for navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Close menu if user clicks outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!open) return
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    window.addEventListener('mousedown', handleClick)
    return () => window.removeEventListener('mousedown', handleClick)
  }, [open])

  // Lock page scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            className="font-bold text-xl text-primary cursor-pointer select-none"
            onClick={() => scrollToSection('Home')}
          >
            Manav Patil
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
                data-aos="fade-down"
                data-aos-delay={index * 100}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          {/* <div className="md:hidden flex items-center">
            <button
              ref={buttonRef}
              onClick={() => setOpen(!open)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {/* <div
        id="mobile-menu"
        ref={panelRef}
        className={`md:hidden fixed top-16 left-0 right-0 bg-white text-gray-700 shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out z-[9998]
          ${open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0 pointer-events-none'}`}
      >
        <div className="px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div> */}
    </nav>
  )
}
