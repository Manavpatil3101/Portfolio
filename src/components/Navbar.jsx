// components/Navbar.jsx
import { useState, useEffect, useCallback } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

  // Throttled scroll handler
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          updateActiveSection()
          ticking = false
        })
        ticking = true
      }
    }

    // Set initial active section
    updateActiveSection()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update active section based on scroll position
  const updateActiveSection = useCallback(() => {
    const sections = navItems.map(item => item.toLowerCase())
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop
        const offsetBottom = offsetTop + element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section)
          break
        }
      }
    }
  }, [navItems])

  const scrollToSection = useCallback((sectionName) => {
    const sectionId = sectionName.toLowerCase()
    
    try {
      const element = document.getElementById(sectionId)
      if (element) {
        // Calculate offset for fixed navbar
        const navbarHeight = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      } else {
        console.warn(`Section with id '${sectionId}' not found`)
        // Fallback: scroll to top if section not found
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    } catch (error) {
      console.error('Error scrolling to section:', error)
    }
    
    setIsOpen(false)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="font-bold text-xl text-gray-800 cursor-pointer hover:text-accent transition-colors"
            onClick={() => scrollToSection('Home')}
            data-aos="fade-right"
          >
            Manav Patil
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => {
              const sectionId = item.toLowerCase()
              const isActive = activeSection === sectionId
              
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`transition-all duration-300 font-medium relative ${
                    isActive 
                      ? 'text-accent font-semibold' 
                      : 'text-gray-600 hover:text-accent'
                  }`}
                  data-aos="fade-down"
                  data-aos-delay={index * 100}
                >
                  {item}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform translate-y-2"></span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-accent transition-colors p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item, index) => {
              const sectionId = item.toLowerCase()
              const isActive = activeSection === sectionId
              
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left transition-all duration-300 py-3 px-4 rounded-lg font-medium ${
                    isActive
                      ? 'text-accent bg-accent/10 border-l-4 border-accent'
                      : 'text-gray-600 hover:text-accent hover:bg-gray-50'
                  }`}
                  style={{
                    animationDelay: isOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar