import MagnetLines from './MagnetLines';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Full-Stack Developer with practical experience in Django, React.js and RESTful API integration.
              Proficient in Python, JavaScript, and SQL, with a strong focus on building responsive UIs,
              admin dashboards, and features like event booking and quizzes.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I enjoy turning ideas into scalable, real-world applications using clean, efficient code.
            </p>

            {/* Contact Info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-wrap gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <img
                    src="/Icons/location.png"
                    alt="Location"
                    className="w-5 h-5 object-contain"
                  />
                  <span>Palghar, Maharashtra</span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src="/Icons/email.png"
                    alt="Email"
                    className="w-5 h-5 object-contain"
                  />
                  <span>manavpatil3101@gmail.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src="/Icons/phone.png"
                    alt="Phone"
                    className="w-5 h-5 object-contain"
                  />
                  <span>+91 70589 37559</span>
                </div>
              </div>
            </div>
          </div>

          {/* Animation / Visual */}
          <div data-aos="fade-left" className="relative hidden lg:block">
            <MagnetLines
              rows={9}
              columns={9}
              containerSize="60vmin"
              lineColor="tomato"
              lineWidth="0.8vmin"
              lineHeight="4vmin"
              baseAngle={0}
              style={{ margin: '2rem auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
