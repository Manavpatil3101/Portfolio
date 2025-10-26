const Projects = () => {
  const projects = [
    {
      title: "Insider by Zomato (Clone)",
      description: "Event booking platform with admin dashboard, RESTful API integration, and user authentication.",
      tech: ["Django REST Framework", "SQL", "Tailwind"],
      link: "https://insider-7f1s.onrender.com",
      gradient: "from-blue-500 to-cyan-500",
      image: "/projects/insider.png"
    },
    {
      title: "Puneri Paltan Clone Website",
      description: "Sports team website with dynamic API data, SEO-friendly pages, gallery, and ticket booking UI.",
      tech: ["Next.js", "Bootstrap", "Dynamic API"],
      link: "https://puneri-paltan-clone.vercel.app",
      gradient: "from-purple-500 to-pink-500",
      image: "/projects/puneri_paltan.png"
    },
    {
      title: "Interactive Quiz Platform",
      description: "Category-based quizzes with live scoring, 3D visuals, and responsive UI using modern web technologies.",
      tech: ["Next.js", "React Hooks", "Spline 3D", "Bootstrap"],
      link: "https://quiz-quest-trycatch.vercel.app",
      gradient: "from-green-500 to-teal-500",
      image: "/projects/Quiz_Quest.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4" data-aos="fade-up">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Here are some of my recent projects that showcase my skills in full-stack development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Project Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-center">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium`}
                >
                  View Live
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
