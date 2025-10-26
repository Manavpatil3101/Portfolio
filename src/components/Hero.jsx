import TextType from './TextType';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 abstract-shape"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{' '}
              <TextType
                text={['Manav Patil', 'a Full-Stack Web Developer']}
                as="span"
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={2000}
                loop={true}
                textColors={['#7F5AF0', '#FF6B6B']}
                showCursor={true}
                cursorCharacter="|"
                className="inline"
              />
              {' '}
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              I build scalable web applications using Django, DRF, React & Next.js.
              Let's connect and build something impactful.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-[#7F5AF0] transition-all duration-300 font-medium"
              >
                View Projects
              </button>

              <a
                href="/Manav_Patil.pdf"
                download="Manav_Patil.pdf"
                className="px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-[#7F5AF0] transition-all duration-300 font-medium text-center"
              >
                Download Resume
              </a>

            </div>
          </div>

          <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/Manav.png"
                  alt="Manav Patil"
                  className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero;
