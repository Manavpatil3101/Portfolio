// App.jsx
import { useEffect } from 'react'
import AOS from 'aos'
// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })

    // Mobile scroll fix
    const enableMobileScroll = () => {
      document.documentElement.style.overflow = 'auto'
      document.body.style.overflow = 'auto'
      document.body.style.height = 'auto'
      document.body.style.position = 'relative'
      document.body.style.webkitOverflowScrolling = 'touch'
    }

    enableMobileScroll()
    window.addEventListener('load', enableMobileScroll)
    
    return () => {
      window.removeEventListener('load', enableMobileScroll)
    }


  }, [])

  return (
    <div className="min-h-screen h-auto bg-slate-50 font-inter">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}

export default App