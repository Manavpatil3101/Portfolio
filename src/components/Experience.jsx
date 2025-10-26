// components/Experience.jsx (Simplified Version)
const Experience = () => {
  const experiences = [
    {
      company: "Tata Steel WRM",
      role: "Intern",
      period: "Dec 2022 – Jan 2023",
      description: "Developed a Python desktop tool to calculate heat fluxes in wire rod mill operations. Created sqlite3 database and UI for salt-spray test entries.",
      tech: ["Python", "sqlite3", "Tkinter", "Data Analysis"],
      achievements: [
        "Built desktop application for heat flux calculations",
        "Designed and implemented SQLite database system",
        "Created user-friendly interface for test data entry"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
          data-aos="fade-up"
        >
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-gray-700 font-medium">{exp.company}</h4>
                </div>
                <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold inline-block w-fit">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {exp.description}
              </p>

              {/* Achievements (optional) */}
              {exp.achievements && (
                <ul className="mb-6 space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li 
                      key={achievementIndex}
                      className="flex items-start text-gray-600"
                    >
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {exp.tech.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium border border-accent/20"
                    data-aos="zoom-in"
                    data-aos-delay={techIndex * 50}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Growth message */}
        <div 
          className="text-center mt-12 p-6 bg-white rounded-2xl shadow-sm border border-gray-200"
          data-aos="fade-up"
        >
          <p className="text-gray-600 text-lg">
            🚀 Currently seeking new opportunities to grow and contribute to innovative projects
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience