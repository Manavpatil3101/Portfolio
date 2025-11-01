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

    document.body.style.overflowY = "auto"
  document.documentElement.style.overflowY = "auto"

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      disableMutationObserver: true,
      // disable: window.innerWidth < 1024, 
    })


  }, [])

  return (
    <div className="bg-slate-50 font-inter">
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